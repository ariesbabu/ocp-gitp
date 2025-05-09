#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'


#####################
#### code-server ####
#####################

# Define the base directory based on the current user
BASE_DIR="$HOME"

# Define file paths, content, ownership, and permissions
declare -A files=(
  ["$BASE_DIR/.config/code-server/config.yaml"]='
bind-addr: 127.0.0.1:8080  # Only bind to localhost
auth: password
password: your-strong-password-here  # Replace with a strong password
cert: true
'
  ["$BASE_DIR/.local/share/code-server/User/settings.json"]='
{
    "security.workspace.trust.enabled": true,  # Enable workspace trust
    "workbench.panel.defaultLocation": "bottom",
    "workbench.colorTheme": "Default Dark Modern",
    "workbench.startupEditor": "none",
    "telemetry.enableTelemetry": false,
    "update.mode": "none"
}
'
  ["$BASE_DIR/.local/share/code-server/workspace.code-workspace"]='
{
    "folders": [
        {
            "path": "'"$BASE_DIR"'"
        }
    ],
    "settings": {
        "security.workspace.trust.untrustedFiles": "prompt",  # Prompt for untrusted files
        "security.workspace.trust.enabled": true
    }
}
'
  ["$BASE_DIR/.local/share/code-server/coder.json"]='
{
    "query": {
        "folder": "'"$BASE_DIR"'"
    },
    "lastVisited": {
        "url": "'"$BASE_DIR"'/.local/share/code-server/User/workspace.code-workspace",
        "workspace": true
    }
}
'
)

# Set ownership and permissions
OWNER="$USER:$USER"
PERMISSIONS="0600"  # More restrictive permissions

# Create directories and write files
for path in "${!files[@]}"; do
  # Create directory if it doesn't exist
  mkdir -p "$(dirname "$path")"

  # Write content to the file
  echo "${files[$path]}" > "$path"

  # Set ownership and permissions
  chown "$OWNER" "$path"
  chmod "$PERMISSIONS" "$path"

  echo "File $path created and configured."
done

echo "All files have been successfully created and configured."

# Install code-server
curl -fsSL https://code-server.dev/install.sh | sh

# Set up for using with a reverse proxy (recommended)
sudo systemctl enable --now code-server@$USER

# If you want to use a reverse proxy (like nginx) to handle HTTPS, you can
# remove this line. If you want code-server to bind directly to port 443,
# this line is needed.
sudo setcap cap_net_bind_service=+ep /usr/lib/code-server/lib/node

sudo systemctl restart code-server@$USER

# For added security, consider setting up a firewall rule:
# sudo ufw allow from trusted-ip-address to any port 8080 proto tcp