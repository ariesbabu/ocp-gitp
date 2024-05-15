"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[5201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,d=u["".concat(p,".").concat(k)]||u[k]||c[k]||o;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Linux Tools VM",sidebar_position:1},l=void 0,i={unversionedId:"toolsvms/linux_tools_vm",id:"toolsvms/linux_tools_vm",title:"Linux Tools VM",description:"Overview",source:"@site/docs/toolsvms/linux_tools_vm.mdx",sourceDirName:"toolsvms",slug:"/toolsvms/linux_tools_vm",permalink:"/toolsvms/linux_tools_vm",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/toolsvms/linux_tools_vm.mdx",tags:[],version:"current",lastUpdatedBy:"LB",sidebarPosition:1,frontMatter:{title:"Linux Tools VM",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Day 0 and Day 1 Operations",permalink:"/ocp_ntnx_hci/ocp_scale_out_in"},next:{title:"Windows Tools VM",permalink:"/toolsvms/windows_tools_vm"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Deploying Linux Tools VM",id:"deploying-linux-tools-vm",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This CentOS VM image will be staged with packages used to support multiple lab exercises."),(0,r.kt)("p",null,"Deploy this VM on your assigned cluster if directed to do so as part of ",(0,r.kt)("strong",{parentName:"p"},"Lab Setup"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only deploy the VM once with your ",(0,r.kt)("em",{parentName:"p"},"Initials")," in the VM name, it does not need to be cleaned up as part of any lab completion.")),(0,r.kt)("h2",{id:"deploying-linux-tools-vm"},"Deploying Linux Tools VM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > select ",(0,r.kt)("strong",{parentName:"p"},"Menu")," > ",(0,r.kt)("strong",{parentName:"p"},"Compute and Storage > VMs"),", and click ",(0,r.kt)("strong",{parentName:"p"},"Create VM"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the following fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - ",(0,r.kt)("em",{parentName:"li"},"Initials"),"-Linux-ToolsVM"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," - (Optional) Description for your VM."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of VMs")," - 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU(s)")," - 4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of Cores per CPU")," - 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memory")," - 4 GiB"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Disks")," select ",(0,r.kt)("strong",{parentName:"p"},"Attach Disk")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type")," - DISK"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operation")," - Clone from Image"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image")," - Linux_ToolsVM.qcow2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capacity")," - leave at default size"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bus Type")," - leave at default SCSI Setting"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Networks")," select ",(0,r.kt)("strong",{parentName:"p"},"Attach to Subnet")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VLAN Name")," - Primary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Connection State")," - Connected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assignment Type")," - Assign with DHCP"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," at the bottom")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Management")," section"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Categories")," - leave blank")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Timezone")," - leave at default UTC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Guest Customization")," - "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Script Type")," - Cloud-init (Linux)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configuration Method")," - Custom Script "),(0,r.kt)("p",{parentName:"li"},"You will need to create ssh key-pair to use in the cloud-init yaml content (script)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Do you need to create a SSH key pair?"),"You can use any online ssh key generator if you are using Windows. Execute the following commands in you are in a Linux / Mac environment to generate a private key.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -b 2048 -C "Created for Linux Tools VM"\n\n# follow prompts \n# do not specify passphrase\n# once completed run the following command\n\ncat id_rsa.pub\n\n# copy the contents of the id_rsa.pub file to your cloudinit yaml file\n')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Paste the following script in the script window once you have access to your ssh key-pair."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Remember to change to your hostname"',title:'"Remember',to:!0,change:!0,your:!0,'hostname"':!0},"#cloud-config\n\n# Set the hostname\nhostname: DockerVm\n\n# Create a new user\nusers:\n  - default\n  - name: nutanix\n    groups: wheel, users\n    ssh_authorized_keys:\n    # Paste the generated public key here\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDGD8G3rihOrlVjdiayQy/.............\n    # You can also use the salter 1N or 6N format using OPENSSL (openssl passwd -1 -salt SaltSalt \"yourplaintextpassword\")\n    # Paste the generated password here\n    passwd: $1$SaltSalt$aOsqVFP2QULyFo5JYkOYB/\n    shell: /bin/bash\n    lock-passwd: false\n    ssh_pwauth: True                 \n\n# Enable password authentication for root\nssh_pwauth: True\n\n# Run package upgrade\npackage_upgrade: true\n\n# Install the following packages - add extra that you would need\npackages:\n- git\n- bind-utils\n- nmap\n- curl\n- wget \n- vim\n- python3\n- python3-pip\n- yum-utils\n\n# Run additional commands\nruncmd:\n  - 'sleep 10'\n  - 'echo \"nutanix ALL=(ALL) NOPASSWD: ALL\" >> /etc/sudoers'\n  - 'yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo'\n  - 'yum install -y docker-ce docker-ce-cli containerd.io'\n  - 'systemctl enable docker'\n  - 'systemctl start docker'\n  - 'curl -L \"https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose'\n  - 'chmod +x /usr/local/bin/docker-compose'\n  - 'groupadd docker'\n  - 'usermod -aG docker nutanix'\n  - 'echo \"%docker ALL=(ALL) NOPASSWD: ALL\" >> /etc/sudoers'\n")))))))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create VM")," at the bottom")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Menu")," > ",(0,r.kt)("strong",{parentName:"p"},"Compute and Storage")," > ",(0,r.kt)("strong",{parentName:"p"},"VMs"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-Linux-ToolsVM")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Actions")," drop-down menu, choose ",(0,r.kt)("strong",{parentName:"p"},"Power On")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It may take up to 10 minutes for the VM to be ready."),(0,r.kt)("p",{parentName:"admonition"},"You can watch the console of the VM from Prism Central to make sure all the clouinit script has finished running."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the VM via SSH or Console session, using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i <your_private_key> -l nutanix <IP of LinuxToolsVM>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example command"',title:'"Example','command"':!0},"ssh -i id_rsa -l nutanix 10.54.63.96\n")))))}u.isMDXComponent=!0}}]);