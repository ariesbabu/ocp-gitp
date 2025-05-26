#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
OS=linux

#################################
#### kubectl bash-completion ####
#################################
sudo yum install -y bash-completion
echo 'source /usr/share/bash-completion/bash_completion' >>~/.bashrc
echo 'source <(kubectl completion bash)' >>~/.bashrc


#################
#### kubectx ####
#################
sudo curl -Lo /usr/local/bin/kubectx https://github.com/ahmetb/kubectx/releases/latest/download/kubectx
sudo chmod +x /usr/local/bin/kubectx


################
#### kubens ####
################
sudo curl -Lo /usr/local/bin/kubens https://github.com/ahmetb/kubectx/releases/latest/download/kubens
sudo chmod +x /usr/local/bin/kubens


################
#### docker ####
################
# # Add Docker's official GPG key:
# sudo apt-get update
# sudo apt-get install ca-certificates curl
# sudo install -m 0755 -d /etc/apt/keyrings
# sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
# sudo chmod a+r /etc/apt/keyrings/docker.asc

# # Add the repository to Apt sources:
# echo \
#   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
#   $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
#   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# sudo apt-get update

# # Install Docker
# sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin


#!/bin/bash

################
#### docker ####
################

# Exit on any error
set -e

# Function to check if a command was successful
check_error() {
    if [ $? -ne 0 ]; then
        echo "Error: $1"
        exit 1
    fi
}

# Check if script is run with sudo
if [ "$(id -u)" -ne 0 ]; then
    echo "Error: This script must be run as root (use sudo)"
    exit 1
fi

# Check if apt-get is available
if ! command -v apt-get &> /dev/null; then
    echo "Error: apt-get not found. This script requires an Ubuntu-based system."
    exit 1
fi

# Update package index
echo "Updating package index..."
sudo apt-get update
check_error "Failed to update package index"

# Install prerequisite packages
echo "Installing prerequisite packages..."
sudo apt-get install -y ca-certificates curl
check_error "Failed to install prerequisite packages"

# Create keyrings directory
echo "Creating /etc/apt/keyrings directory..."
sudo install -m 0755 -d /etc/apt/keyrings
check_error "Failed to create /etc/apt/keyrings directory"

# Download Docker's GPG key
echo "Downloading Docker's GPG key..."
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
check_error "Failed to download Docker's GPG key"

# Verify GPG key was downloaded
if [ ! -f /etc/apt/keyrings/docker.asc ]; then
    echo "Error: Docker GPG key file not found at /etc/apt/keyrings/docker.asc"
    exit 1
fi

# Set permissions for GPG key
echo "Setting permissions for GPG key..."
sudo chmod a+r /etc/apt/keyrings/docker.asc
check_error "Failed to set permissions for GPG key"

# Add Docker repository to Apt sources
echo "Adding Docker repository to Apt sources..."
if ! echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null; then
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
sudo apt-get update
check_error "Failed to update package index with Docker repository"

# Install Docker packages
echo "Installing Docker packages..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
check_error "Failed to install Docker packages"

# Verify Docker installation
if ! command -v docker &> /dev/null; then
    echo "Error: Docker installation verification failed"
    exit 1
fi

# Add ubuntu user to docker group
echo "Adding user 'ubuntu' to docker group..."
sudo usermod -aG docker ubuntu
check_error "Failed to add user 'ubuntu' to docker group"

# Verify user was added to docker group
if ! groups ubuntu | grep -q docker; then
    echo "Error: User 'ubuntu' was not added to docker group"
    exit 1
fi

echo "Docker installation and user configuration completed successfully!"