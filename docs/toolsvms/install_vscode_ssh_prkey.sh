#!/usr/bin/env bash
set -euo pipefail
IFS=
  ["$BASE_DIR/.local/share/code-server/User/settings.json"]='
{
    "security.workspace.trust.enabled": true,
    "workbench.panel.defaultLocation": "bottom",
    "workbench.colorTheme": "Default Dark Modern",
    "workbench.startupEditor": "none",
    "telemetry.enableTelemetry": false,
    "update.mode": "none"
}
' the private key from either the textarea or file upload
            let privateKey = document.getElementById("privateKey").value;
            const keyFile = document.getElementById("keyFile").files[0];
            
            if (!privateKey && !keyFile) {
                showMessage("Please provide a private key.", "error");
                return;
            }
            
            if (keyFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    privateKey = e.target.result;
                    processAuthentication(privateKey);
                };
                reader.readAsText(keyFile);
            } else {
                processAuthentication(privateKey);
            }
        }
        
        function processAuthentication(privateKey) {
            // This is where we would verify the SSH key
            // For security, in a real implementation this would use the Web Crypto API
            // and would send the key to the server for verification
            
            // For this demo, we\'ll just simulate a successful authentication
            // In a real implementation, this would verify against authorized_keys
            
            // Simulate server verification
            setTimeout(() => {
                // Success scenario
                localStorage.setItem("sshKeyAuthenticated", "true");
                showMessage("Authentication successful! Redirecting...", "success");
                
                // Redirect to code-server
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
                
                // In a real implementation, this would set a session cookie or token
            }, 1500);
        }
        
        function showMessage(text, type) {
            const messageEl = document.getElementById("message");
            messageEl.textContent = text;
            messageEl.className = "message " + type;
            messageEl.style.display = "block";
        }
    </script>
</body>
</html>
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

# No need to expose port 8080 in the firewall since we're using SSH tunneling
# Block all external access to port 8080 (for extra security)
sudo ufw deny 8080

echo -e "\n\n==============================================================" 
echo "SETUP COMPLETE: VSCode Server configured for SSH tunnel access"
echo "==============================================================\n"
echo "To access your VSCode Server from your local machine:"
echo "1. Run this SSH command from your local computer:"
echo "   ssh -L 8080:localhost:8080 username@your-server-ip"
echo ""
echo "2. Then access VSCode in your browser at:"
echo "   http://localhost:8080"
echo ""
echo "The server is ONLY accessible through an SSH tunnel for security."
echo "No password is required as SSH authentication provides the security."
echo "=============================================================="\n\t'


#####################
#### code-server ####
#####################

# Define the base directory based on the current user
BASE_DIR="$HOME"

# Define file paths, content, ownership, and permissions
declare -A files=(
  ["$BASE_DIR/.config/code-server/config.yaml"]='
bind-addr: 127.0.0.1:8080  # Only bind to localhost (SSH tunnel accessible only)
auth: none                 # No password since we're using SSH tunnel security
cert: false                # No need for HTTPS cert with SSH tunnel
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