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


#############
#### k9s ####
#############
curl -sS https://webinstall.dev/k9s | bash
rm -fR ~/Downloads ~/.local/bin/webi


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