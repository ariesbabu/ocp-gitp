#!/bin/bash

set -euo pipefail
IFS=$'\n\t'

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
#### kubectl ###
################

# Install kubectl
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
#### kubectx ####
################

# Install kubectx
echo "Installing kubectx..."
curl -Lo /usr/local/bin/kubectl "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x /usr/local/bin/kubectl
check_error "Failed to download kubectl"

# Set permissions for kubectx
chmod +x /usr/local/bin/kubectl
check_error "Failed to set permissions for kubectl"

# Verify kubectx installation
if ! command -v kubectl &> /dev/null; then
    echo "Error: kubectl installation verification failed"
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

echo "Installation and configuration of Docker, kubectl, kubectx, and kubens completed successfully!"