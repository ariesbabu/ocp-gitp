"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[4713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5,title:"Deploy Provisioning VM"},o=void 0,p={unversionedId:"ocp_ntnx_hci/prov_vm",id:"ocp_ntnx_hci/prov_vm",title:"Deploy Provisioning VM",description:"Configure Provisioning VM Blueprint",source:"@site/docs/ocp_ntnx_hci/prov_vm.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/prov_vm",permalink:"/ocp_ntnx_hci/prov_vm",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_ntnx_hci/prov_vm.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1688539516,formattedLastUpdatedAt:"Jul 5, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Deploy Provisioning VM"},sidebar:"tutorialSidebar",previous:{title:"Architecture and Initial Setup",permalink:"/ocp_ntnx_hci/import_bp"},next:{title:"Deploy OCP Infrastructure",permalink:"/ocp_ntnx_hci/ocp_vms"}},l={},s=[{value:"Configure Provisioning VM Blueprint",id:"configure-provisioning-vm-blueprint",level:2},{value:"Launch Provisioning VM Blueprint",id:"launch-provisioning-vm-blueprint",level:2}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configure-provisioning-vm-blueprint"},"Configure Provisioning VM Blueprint"),(0,a.kt)("p",null,"Before you proceed with the creating the Provisioning VM, you will need a SSH key pair"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Instructions to create SSH key pair"),(0,a.kt)("div",null,(0,a.kt)("body",null,(0,a.kt)("p",null,"Logon to your UserXX-LinuxToolsVM"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Username"),": root")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Password"),": nutanix default ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa -b 2048 -f ~/.ssh/ocp   # << accept all default answers\nls -l ~/.ssh/\n## Output here\n~/.ssh/ocp.pub  \n~/.ssh/ocp      # << use this private key in the blueprints\n"))))),(0,a.kt)("p",null,"Now lets configure and deploy Provisioning VM:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,a.kt)("strong",{parentName:"p"},"Services")," > ",(0,a.kt)("strong",{parentName:"p"},"Calm"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Blueprints")),(0,a.kt)("admonition",{parentName:"li",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that you only edit the blueprints you uploaded with your intials. There could be other users using the same HPOC cluster and working on similar blueprints."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your Provisioning VM ",(0,a.kt)("inlineCode",{parentName:"p"},"ocpuserXX_OCP_Prov_VM")," blueprint"))),(0,a.kt)("p",null,"We need to configure network and credentials for the blueprint so it can be deployed in your HPOC/SPOC."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Provisioning_VM service")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under Cluster, select your assigned HPOC cluster (E.g. PHX-POCXXX)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Provisioning_VM service's VM properties, Choose ",(0,a.kt)("strong",{parentName:"p"},"Primary")," as the NIC 1"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(987).Z,width:"1304",height:"780"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Save"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Credentials")," (next to ",(0,a.kt)("strong",{parentName:"p"},"Save"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on CRED and ",(0,a.kt)("strong",{parentName:"p"},"Edit"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy and paste the private key (",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/ocp"),") that created earlier here ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Save"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Back")," to return to the blueprints main window")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will notice a few warnings for KUBEADMIN and KUBECONFIG\nvariables. These can be ignored as they will be auto-generated."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(6826).Z,width:"1309",height:"471"})))),(0,a.kt)("h2",{id:"launch-provisioning-vm-blueprint"},"Launch Provisioning VM Blueprint"),(0,a.kt)("p",null,"Now it is time to launch the provisioning VM blueprint."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Launch")," button")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Give the application a name ",(0,a.kt)("strong",{parentName:"p"},"ocpuserXX_Prov_VM")," (E.g ocpuser01_Prov_VM)"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(5995).Z,width:"596",height:"876"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Deploy"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Audit and monitor the deployment tasks. There will be detailed\nlogging for all tasks")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This should take about 10-15 minutes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once deployed the Calm application will be in a running state"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(4242).Z,width:"1267",height:"669"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Curious about what is happening inside the provisioning VM?"),(0,a.kt)("div",null,(0,a.kt)("body",null,(0,a.kt)("p",{parentName:"li"},"You are able to ssh into the provisioning\nVM using the NCM/Calm ",(0,a.kt)("strong",{parentName:"p"},"Application")," page  > ",(0,a.kt)("strong",{parentName:"p"},"Services")," > ",(0,a.kt)("strong",{parentName:"p"},"Open Terminal")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(2018).Z,width:"1270",height:"337"})),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},"[core@Openshift-provisioning-0-211225-210356 ~]$ ls -lRh openshift/\nopenshift/:\ntotal 1.6G\n-rw-rw-r--. 1 core   core   7.3M Dec 26 05:11 coreos-installer\n-rwxr-xr-x. 2 core   core   118M Nov  4 19:41 kubectl\n-rwxr-xr-x. 2 core   core   118M Nov  4 19:41 oc\n-rwxr-xr-x. 1 core   core   369M Nov 22 17:12 openshift-install\n-rw-r--r--. 1 core   core    954 Nov  4 19:41 README.md\n-rw-rw-r--. 1 core   core   988M Dec 26 05:12 rhcos-live.x86_64.iso ## << this is RHCOS ISO\ndrwxrwxr-x. 2 apache apache  105 Dec 26 05:12 web\n\nopenshift/web:\ntotal 144M\n-rw-rw-r--. 1 apache apache 7.3M Dec 26 05:12 coreos-installer \n-rw-rw-r--. 1 apache apache  48M Dec 26 05:11 openshift-client-linux.tar.gz ## << this is OCP Client\n-rw-rw-r--. 1 apache apache  89M Dec 26 05:11 openshift-install-linux.tar.gz ## << this is OCP Server\n"))))))),(0,a.kt)("p",null,"Now we have the provisioning VM up and running. This section of the lab is done."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5220).Z,width:"1906",height:"856"})),(0,a.kt)("p",null,"We will proceed to deploy a OCP cluster in the next section of the lab."))}u.isMDXComponent=!0},987:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp_bp_save-845bee825c5dc17294985ddbb884d21b.png"},6826:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp_bp_warnings-47e28dbe7df413ca12bf50f44dec4422.png"},5220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp_lab_status_1-643e6342b17a5a02be0f106304ee51e5.png"},4242:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp_prov_vm_audit-8234bd413a925e56c79c8e51037da461.png"},5995:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp_prov_vm_bp_launch-91c5f66a61dbd6ddc7947d311db9a894.png"},2018:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ocp_prov_vm_ssh-44be582cf7b117d28d0e61210042f6f8.png"}}]);