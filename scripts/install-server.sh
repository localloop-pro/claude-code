#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
APP_DIR="/var/www/claude-code"
SERVICE_NAME="claude-code-marketplace"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"
CADDY_FILE="/etc/caddy/Caddyfile"

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run this script as root: sudo bash scripts/install-server.sh"
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node is not installed. Install a system-wide Node 22 runtime first."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [[ "${NODE_MAJOR}" != "22" ]]; then
  echo "Expected Node 22.x but found $(node --version)."
  echo "Install a system-wide Node 22 runtime first."
  exit 1
fi

if ! command -v caddy >/dev/null 2>&1; then
  echo "Caddy is not installed. Install it first, then rerun this script."
  exit 1
fi

mkdir -p "${APP_DIR}"
if [[ "${REPO_DIR}" != "${APP_DIR}" ]]; then
  cp -R "${REPO_DIR}/." "${APP_DIR}/"
fi
chown -R www-data:www-data "${APP_DIR}"

cp "${REPO_DIR}/deploy/systemd/claude-code-marketplace.service" "${SERVICE_FILE}"
systemctl daemon-reload
systemctl enable --now "${SERVICE_NAME}"

cp "${REPO_DIR}/deploy/caddy/Caddyfile" "${CADDY_FILE}"
caddy fmt --overwrite "${CADDY_FILE}"
systemctl enable --now caddy
systemctl reload caddy

if command -v ufw >/dev/null 2>&1; then
  ufw allow 80/tcp
  ufw allow 443/tcp
fi

echo
echo "Service status:"
systemctl --no-pager --full status "${SERVICE_NAME}" || true
echo
echo "Caddy status:"
systemctl --no-pager --full status caddy || true
echo
echo "Smoke test:"
bash "${APP_DIR}/scripts/smoke-test.sh"
