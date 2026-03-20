#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${1:-http://127.0.0.1:3000}"

echo "Checking ${BASE_URL}/health"
curl --fail --silent --show-error "${BASE_URL}/health"
echo
echo "Checking ${BASE_URL}/"
curl --fail --silent --show-error --head "${BASE_URL}/"
echo
echo "Checking ${BASE_URL}/api-docs/"
curl --fail --silent --show-error --head "${BASE_URL}/api-docs/"
