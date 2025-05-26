#!/bin/bash

set -euo pipefail
IFS=$'\n\t'

################
#### Docker ####
################

# Install prerequisite packages
echo "Installing prerequisite packages..."
apt-get install -y ca-certificates curl
check_error "Failed to install prerequisite packages"

# Create keyrings directory
echo "Creating /etc/apt/keyrings directory..."
install -m 0755 -d /etc/apt/keyrings
check_error "Failed to create /etc/apt/keyrings directory"

# Download Docker's GPG key
echo "Downloading Docker's GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
check_error "Failed to download Docker's GPG key"

# Verify GPG key was downloaded
if [ ! -f /etc/apt/keyrings/docker.asc ]; then
    echo "Error: Docker GPG key file not found at /etc/apt/keyrings/docker.asc"
    exit 1
fi

# Set permissions for GPG key
echo "Setting permissions for GPG key..."
chmod a+r /etc/apt/keyrings/docker.asc
check_error "Failed to set permissions for GPG key"

# Add Docker repository to Apt sources
echo "Adding Docker repository to Apt sources..."
if ! echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null; then
    echo "Error: Failed to add Docker repository to Apt sources"
    exit 1
fi

# Verify repository file was created
if [ ! -f /etc/apt/sources.list.d/docker.list ]; then
    echo "Error: Docker repository file not found at /etc/apt/sources.list.d/docker.list"
    exit 1
fi

# Update package index with new repository
echo "Updating package index with Docker repository..."
apt-get update
check_error "Failed to update package index with Docker repository"

# Install Docker packages
echo "Installing Docker packages..."
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
check_error "Failed to install Docker packages"

# Verify Docker installation
if ! command -v docker &> /dev/null; then
    echo "Error: Docker installation verification failed"
    exit 1
fi

# Check if usermod is available
if ! command -v usermod &> /dev/null; then
    echo "Error: usermod command not found"
    exit 1
fi

# Check if docker group exists
if ! getent group docker &> /dev/null; then
    echo "Error: docker group does not exist. Ensure Docker is installed."
    exit 1
fi

# Check if ubuntu user exists
if ! id -u ubuntu &> /dev/null; then
    echo "Error: User 'ubuntu' does not exist"
    exit 1
fi

# Add ubuntu user to docker group
echo "Adding user 'ubuntu' to docker group..."
usermod -aG docker ubuntu
check_error "Failed to add user 'ubuntu' to docker group"

# Verify user was added to docker group
if ! groups ubuntu | grep -q docker; then
    echo "Error: User 'ubuntu' was not added to docker group"
    exit 1
fi

#############################
#### kubectl Completion ####
#############################

# Install bash-completion
echo "Installing bash-completion..."
apt-get install -y bash-completion
check_error "Failed to install bash-completion"

# Configure kubectl bash completion
echo "Configuring kubectl bash completion..."
if ! echo 'source /usr/share/bash-completion/bash_completion' >>/home/ubuntu/.bashrc; then
    echo "Error: Failed to add bash-completion to .bashrc"
    exit 1
fi

if ! echo 'source <(kubectl completion bash)' >>/home/ubuntu/.bashrc; then
    echo "Error: Failed to add kubectl completion to .bashrc"
    exit 1
fi

# Verify .bashrc exists and is writable
if [ ! -f /home/ubuntu/.bashrc ]; then
    echo "Error: /home/ubuntu/.bashrc not found"
    exit 1
fi

################
#### kubectx ####
################

# Install kubectx
echo "Installing kubectx..."
curl -Lo /usr/local/bin/kubectx https://github.com/ahmetb/kubectx/releases/latest/download/kubectx
check_error "Failed to download kubectx"

# Set permissions for kubectx
chmod +x /usr/local/bin/kubectx
check_error "Failed to set permissions for kubectx"

# Verify kubectx installation
if ! command -v kubectx &> /dev/null; then
    echo "Error: kubectx installation verification failed"
    exit 1
fi

################
#### kubens ####
################

# Install kubens
echo "Installing kubens..."
curl -Lo /usr/local/bin/kubens https://github.com/ahmetb/kubectx/releases/latest/download/kubens
check_error "Failed to download kubens"

# Set permissions for kubens
chmod +x /usr/local/bin/kubens
check_error "Failed to set permissions for kubens"

# Verify kubens installation
if ! command -v kubens &> /dev/null; then
    echo "Error: kubens installation verification failed"
    exit 1
fi

#####################
#### code-server ####
#####################

# Define the base directory based on the current user
BASE_DIR="$HOME"

# Define file paths, content, ownership, and permissions
declare -A files=(
  ["$BASE_DIR/.config/code-server/config.yaml"]='
bind-addr: 0.0.0.0:443  # Only bind to localhost
auth: password
password: _password  # Replace with a strong password
cert: true
'
  ["$BASE_DIR/.local/share/code-server/User/settings.json"]='
{
    "security.workspace.trust.enabled": true,  # Enable workspace trust
    "workbench.panel.defaultLocation": "bottom",
    "workbench.colorTheme": "Default Dark Modern",
    "workbench.startupEditor": "none",
    "telemetry.enableTelemetry": false,
    "editor.formatOnSave": true,
    "json.format.enable": true,
    "[yaml]": {
      "editor.formatOnSave": false
    },
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

# Install code-server
echo "Installing code-server..."
if ! curl -fsSL https://code-server.dev/install.sh | sh; then
    echo "Error: Failed to install code-server"
    exit 1
fi

# Verify code-server installation
if ! command -v code-server &> /dev/null; then
    echo "Error: code-server installation verification failed"
    exit 1
fi

# Enable and start code-server service
echo "Enabling and starting code-server service..."
systemctl enable --now code-server@ubuntu
check_error "Failed to enable and start code-server service"

# Allow code-server to bind to port 443
echo "Setting capabilities for code-server to bind to port 443..."
setcap cap_net_bind_service=+ep /usr/lib/code-server/lib/node
check_error "Failed to set capabilities for code-server"

# Restart code-server service
echo "Restarting code-server service..."
systemctl restart code-server@ubuntu
check_error "Failed to restart code-server service"

echo "Installation and configuration of Docker, kubectl, kubectx, kubens, and code-server completed successfully!"