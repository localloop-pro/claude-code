# Deploy behind `sslip.io`

This project already supports configurable `HOST` and `PORT`. The recommended setup for a VPS is:

- Run the Node app on `127.0.0.1:3000`
- Put Caddy in front on ports `80` and `443`
- Use a valid `sslip.io` hostname with hyphens instead of underscores

For the hostname you asked about, use:

```text
clade-w0w0og.167.86.79.151.sslip.io
```

## 1. Copy the app to the server

Example target directory:

```bash
sudo mkdir -p /var/www/claude-code
sudo chown "$USER":"$USER" /var/www/claude-code
```

Then copy this repository there.

After the files are in place:

```bash
sudo chown -R www-data:www-data /var/www/claude-code
```

## 2. Install runtime packages

This app expects Node `22.x`.

On Ubuntu or Debian, install Caddy and make sure Node 22 is installed system-wide so `node` is available to `systemd`:

```bash
sudo apt update
sudo apt install -y caddy
```

Then confirm the server already has Node 22:

```bash
node --version
which node
```

`node --version` should report a `22.x` release. If it does not, install Node 22 using your distro's system-wide package method before enabling the service.

## 3. Install the systemd service

Fast path from the repo root on the server:

```bash
sudo bash scripts/install-server.sh
```

Or do it manually:

Copy the service file from [deploy/systemd/claude-code-marketplace.service](/Users/user/claude-code/deploy/systemd/claude-code-marketplace.service):

```bash
sudo cp deploy/systemd/claude-code-marketplace.service /etc/systemd/system/claude-code-marketplace.service
sudo systemctl daemon-reload
sudo systemctl enable --now claude-code-marketplace
sudo systemctl status claude-code-marketplace
```

The service runs the app on `127.0.0.1:3000`.

## 4. Install the Caddy site config

If you used `scripts/install-server.sh`, this is already done. Otherwise copy the config from [deploy/caddy/Caddyfile](/Users/user/claude-code/deploy/caddy/Caddyfile):

```bash
sudo cp deploy/caddy/Caddyfile /etc/caddy/Caddyfile
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo systemctl reload caddy
sudo systemctl status caddy
```

Caddy will serve:

```text
http://clade-w0w0og.167.86.79.151.sslip.io
https://clade-w0w0og.167.86.79.151.sslip.io
```

## 5. Open the firewall

If `ufw` is enabled:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw status
```

If your VPS provider also has a cloud firewall or security group, allow inbound TCP `80` and `443` there too.

## 6. Test locally on the server

Use [scripts/smoke-test.sh](/Users/user/claude-code/scripts/smoke-test.sh):

```bash
bash scripts/smoke-test.sh
curl -I http://clade-w0w0og.167.86.79.151.sslip.io
curl -I https://clade-w0w0og.167.86.79.151.sslip.io
```

## 7. If it fails

Check the two services first:

```bash
sudo journalctl -u claude-code-marketplace -n 100 --no-pager
sudo journalctl -u caddy -n 100 --no-pager
```

Check whether anything is listening:

```bash
sudo ss -tulpn | grep -E ':80|:443|:3000'
```
