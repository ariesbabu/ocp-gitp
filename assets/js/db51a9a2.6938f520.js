"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9044],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(6540),r=t(53);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(8168),r=t(6540),i=t(53),o=t(3104),l=t(6347),s=t(7485),p=t(1682),c=t(9466);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,p.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[s,p]=d({queryString:t,groupId:a}),[u,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=s??u;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),y(e)}),[p,y,i]),tabValues:i}}var f=t(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=p[t].value;a!==l&&(u(n),s(a))},g=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:m},o,{className:(0,i.A)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===n})}),t??n)})))}function N(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=y(e);return r.createElement("div",{className:(0,i.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(N,(0,a.A)({},e,n)))}function v(e){const n=(0,f.A)();return r.createElement(w,(0,a.A)({key:String(n)},e))}},8977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(8168),r=(t(6540),t(5680));t(1470),t(9365);const i={title:"Create Configuration Manifests",lastupdate:"git",lastupdateauthor:"git"},o=void 0,l={unversionedId:"ocp_ipi_install/ocp_ipi_config_file",id:"ocp_ipi_install/ocp_ipi_config_file",title:"Create Configuration Manifests",description:"Creating IPI Installation Config File",source:"@site/docs/ocp_ipi_install/ocp_ipi_config_file.mdx",sourceDirName:"ocp_ipi_install",slug:"/ocp_ipi_install/ocp_ipi_config_file",permalink:"/ocp_ipi_install/ocp_ipi_config_file",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_ipi_install/ocp_ipi_config_file.mdx",tags:[],version:"current",lastUpdatedBy:"LB",frontMatter:{title:"Create Configuration Manifests",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Pre-requisites",permalink:"/ocp_ipi_install/ocp_ipi_pre_reqs"},next:{title:"Deploy",permalink:"/ocp_ipi_install/ocp_ipi_install_cleanup"}},s={},p=[{value:"Creating IPI Installation Config File",id:"creating-ipi-installation-config-file",level:2},{value:"Preparing Provisioning VM",id:"preparing-provisioning-vm",level:3},{value:"Creating the Installation Manifests (files)",id:"creating-the-installation-manifests-files",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"creating-ipi-installation-config-file"},"Creating IPI Installation Config File"),(0,r.yg)("p",null,"In this section we will create our installation configuration files which will be then used in the next section to deploy an OCP cluster."),(0,r.yg)("h3",{id:"preparing-provisioning-vm"},"Preparing Provisioning VM"),(0,r.yg)("p",null,"We will use your UserXX-LinuxToolsVM as a provisioning VM to deploy OCP."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Logon to your UserXX-LinuxToolsVM ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the Root CA's public certificate to the local certiface repository"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz\nsudo cp rootCA.pem /etc/pki/ca-trust/source/anchors/\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Update the local CA trust repository with the new one your created"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo update-ca-trust\n")),(0,r.yg)("p",{parentName:"li"},"Now your UserXX-LinuxToolsVM will be able to trust SSL connections to Prism Central and will ",(0,r.yg)("inlineCode",{parentName:"p"},"openshift-install")," binary")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a local ssh key which we will then use to access all the OCP cluster nodes/vms"),(0,r.yg)("admonition",{parentName:"li",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Use existing ssh key pair that you may have access to if required.\nThis ssh key pair can be used to logon to OCP nodes(vms) for troubleshooting purposes.")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa -b 2048\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Execution example - accept default values and no passphrase"',title:'"Execution',example:!0,"-":!0,accept:!0,default:!0,values:!0,and:!0,no:!0,'passphrase"':!0},"Generating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): \n/root/.ssh/id_rsa already exists.\nOverwrite (y/n)? y\nEnter passphrase (empty for no passphrase):  \nEnter same passphrase again: \nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:1gjz5zWw+aS7hiEje/pDGY2N5Y5anh6JEQYVf9GRmgs root@centos\nThe key's randomart image is:\n+---[RSA 2048]----+\n|  ..o.  ...o     |\n|   . .  ..o      |\n|    o +B.o.      |\n|   . .E=*o +     |\n|    .  *S.= +    |\n|    .oBo+o = .   |\n|    .Bo+ oo .    |\n|    o =.. ..     |\n|    .=o. .o.     |\n+----[SHA256]-----+\n")))),(0,r.yg)("h3",{id:"creating-the-installation-manifests-files"},"Creating the Installation Manifests (files)"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In your UserXX-LinuxToolsVM ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change to you working directory that we created before (if not there already)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the create install config command"),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Copy the pull_secret value from Red Hat Console or the ",(0,r.yg)("inlineCode",{parentName:"p"},"pull_secret.json")," file into your clipboard as you will need to input in the interactive command execution")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openshift-install create install-config \n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Execution example - use up and down arrow keys to choose options"',title:'"Execution',example:!0,"-":!0,use:!0,up:!0,and:!0,down:!0,arrow:!0,keys:!0,to:!0,choose:!0,'options"':!0},"# openshift-install create install-config \n? SSH Public Key /root/.ssh/id_rsa.pub\n? Platform nutanix\n? Prism Central pc.ntnxlab.local                   # << Your Prism Central FQDN address\n? Port 9440\n? Username admin\n? Password [? for help] **********                 # << Your Prism Central password entered as plain text\nINFO Connecting to Prism Central pc.ntnxlab.local \n? Prism Element PHX-SPOC018-4                      # << Choose your Prism Element cluster\nINFO Defaulting to only available network: Primary \n? Virtual IP Address for API 10.0.0.1              # << Type the IP you reserved for API\n? Virtual IP Address for Ingress 10.0.0.2          # << Type the IP you reserved for Ingress\n? Base Domain ntnxlab.local                        # << Type the name of your base domain \n? Cluster Name xyz                                 # << Type the name of your sub domain or OCP cluster's name\n? Pull Secret [? for help] ************************************************\nINFO Install-Config created in: .\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Now we have to prepare the install-config.yaml file by adding the following details:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Your self hosted Root CA's certificate"),(0,r.yg)("li",{parentName:"ul"},"Number of replcas for worker nodes (3 workers to 2 worker)"),(0,r.yg)("li",{parentName:"ul"},"Machine network details (your HPOC's subnet)")))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the details:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"vim install-config.yaml\n# if vim is not present, install using #yum install -y vim\n")),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Toggle me for a file editing tip"),(0,r.yg)("div",null,(0,r.yg)("body",null,(0,r.yg)("admonition",{parentName:"li",title:"Editing instructions",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Inside vim, move the cursor the to beigging on the line ",(0,r.yg)("inlineCode",{parentName:"li"},"-----BEGIN CERTIFICATE-----")),(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"crtl")," + ",(0,r.yg)("inlineCode",{parentName:"li"},"v")," keyboard combination to enter visual block mode "),(0,r.yg)("li",{parentName:"ul"},"Select the lines until ",(0,r.yg)("inlineCode",{parentName:"li"},"-----END CERTIFICATE-----")),(0,r.yg)("li",{parentName:"ul"},"Press ",(0,r.yg)("inlineCode",{parentName:"li"},"I")," (capital I using Shift key)"),(0,r.yg)("li",{parentName:"ul"},"Type in 4 spaces"),(0,r.yg)("li",{parentName:"ul"},"Press ",(0,r.yg)("inlineCode",{parentName:"li"},"esc")," key"),(0,r.yg)("li",{parentName:"ul"},"Type ",(0,r.yg)("inlineCode",{parentName:"li"},"wq!"))))))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yml",metastring:'{1,2,3,35} title="Sample install-config.yaml file - Edit the highlighted parts"',"{1,2,3,35}":!0,title:'"Sample',"install-config.yaml":!0,file:!0,"-":!0,Edit:!0,the:!0,highlighted:!0,'parts"':!0},'additionalTrustBundlePolicy: Always                                 # Change the value to Always\nadditionalTrustBundle: |                                            # Add this key\n    -----BEGIN CERTIFICATE-----                                     # Copy rootCA.pem contents here\n    MIIEJzCCAw+gAwIBAgIUfW+2AkjS2Ha3i4RWsXbPRO5jIe0wDQYJKoZIhvcNAQEL\n    BQAwgaIxCzAJBgNVBAYTAkpQMRAwDgYDVQQIDAdLYXNoaXdhMRAwDgYDVQQHDAdL\n    YXNoaXdhMRAwDgYDVQQKDAdudXRhbml4MQ8wDQYDVQQLDAZyb290Y2ExHTAbBgNV\n    <  snipped >\n    Z9ryNVFHsR4OwkHMwnArzyF194hre2SFzGAt/GOV0gM4s+XvQHnYdij7Js1zLhwM\n    r/QDXtb4Amt1Cdc7otyuXrWHwQZQ4gWgGKE30mJVsdbYMOS2LKswpFHrcyhJ/JWz\n    fY9uz5gEGT1lwOo=\n    -----END CERTIFICATE-----\napiVersion: v1\nbaseDomain: ntnxlab.local\ncompute:\n- architecture: amd64\n  hyperthreading: Enabled\n  name: worker\n  platform: {}\n  replicas: 3\ncontrolPlane:\n  architecture: amd64\n  hyperthreading: Enabled\n  name: master\n  platform: {}\n  replicas: 3\ncredentialsMode: Manual\nmetadata:\n  creationTimestamp: null\n  name:  ocpuser01\nnetworking:\n  clusterNetwork:\n  - cidr: 10.128.0.0/14         \n    hostPrefix: 23\n  machineNetwork:\n  - cidr: 10.38.11.0/26                                             # Change to the Nutanix clusters CIDR\n  networkType: OVNKubernetes\n  serviceNetwork:\n  - 172.30.0.0/16\nplatform:\n  nutanix:\n    apiVIPs:\n    - 10.38.11.30\n    ingressVIPs:\n    - 10.38.11.31\n    prismCentral:\n      endpoint:\n        address: pc.ntnxlab.local\n        port: 9440\n      password: techX2024!\n      username: admin\n    prismElements:\n    - endpoint:\n        address: 10.38.11.7\n        port: 9440\n      uuid: 000622c5-9387-880f-2a27-ac1f6b1894ce\n    subnetUUIDs:\n    - af91396f-ec79-4306-a398-b896565aa075\npublish: External\npullSecret: \'{"auths":{"cloud.openshift.com":{"auth":"b3BlbnNoxxxxxxx......}}}\'\nsshKey: |\n  ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAxxxx....\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Make a copy of the install-config.yaml for troubleshooting reference"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cp install-config.yaml install-config-bkup.yaml\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Now we can create all the other manifests required for OCP cluster installation"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openshift-install create manifests\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"openshift-install create manifests\nINFO Consuming Install Config from target directory \nINFO Manifests created in: manifests and openshift\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Since we will be using CSI provisioned with Nutanix HCI storage later in the lab, we need to ",(0,r.yg)("strong",{parentName:"p"},"enable iSCSI daemon")," on all the worker nodes (optional for Master nodes) using ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/post_installation_configuration/machine-configuration-tasks.html#machine-config-operator_post-install-machine-configuration-tasks"},"Machine Configuration Operator")," (MCO)."),(0,r.yg)("admonition",{parentName:"li",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"iSCSI daemon is usually in a disabled state while deploying OCP clusters. It is up to the customers to decide when and where to enable these daemons. "),(0,r.yg)("p",{parentName:"admonition"},"In our lab, we have decided to enable it now, so we can use Nutanix CSI to provide storage to applications. "),(0,r.yg)("p",{parentName:"admonition"},"Enabling iSCSI daemon at this stage prevents any reboot requirements after the cluster is deployed and serving workloads. ")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create MCO config to start iSCSI daemon for worker nodes"',title:'"Create',MCO:!0,config:!0,to:!0,start:!0,iSCSI:!0,daemon:!0,for:!0,worker:!0,'nodes"':!0},"cat << EOF > manifests/99-worker-custom-enable-iscsid.yaml\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: worker\n  name: 99-worker-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n    systemd:\n      units:\n      - enabled: true\n        name: iscsid.service\nEOF\n")),(0,r.yg)("p",{parentName:"li"},"The following step is optional. Customer wouldn't usually run workloads on master nodes. But the following would be the way to prepare master nodes to access PV/PVC for their workloads."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Optional - create MCO config to start iSCSI daemon for master nodes"',title:'"Optional',"-":!0,create:!0,MCO:!0,config:!0,to:!0,start:!0,iSCSI:!0,daemon:!0,for:!0,master:!0,'nodes"':!0},"cat << EOF > manifests/99-master-custom-enable-iscsid.yaml\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: master\n  name: 99-master-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n    systemd:\n      units:\n      - enabled: true\n        name: iscsid.service\nEOF\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the contents of ",(0,r.yg)("inlineCode",{parentName:"p"},"manifests")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"openshift")," directories to make sure all the files are present (including iSCSI daemon MCO config. files)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ls -l openshift manifests\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm the contents of the ",(0,r.yg)("inlineCode",{parentName:"p"},"manifests/cluster-proxy-01-config.yaml")," file"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cat manifests/cluster-proxy-01-config.yaml\n")),(0,r.yg)("p",{parentName:"li"},"We will now move on to the IPI deployment part."))))}m.isMDXComponent=!0}}]);