"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[654],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=s(t),y=a,m=c["".concat(l,".").concat(y)]||c[y]||u[y]||i;return t?r.createElement(m,o(o({ref:n},g),{},{components:t})):r.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const i={sidebar_position:5,title:"Deploy Provisioning VM"},o=void 0,p={unversionedId:"ocp_ntnx_hci/prov_vm",id:"ocp_ntnx_hci/prov_vm",title:"Deploy Provisioning VM",description:"Configure Provisioning VM Blueprint",source:"@site/docs/ocp_ntnx_hci/prov_vm.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/prov_vm",permalink:"/ocp_ntnx_hci/prov_vm",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_ntnx_hci/prov_vm.mdx",tags:[],version:"current",lastUpdatedBy:"Lakshmi Balaramane",lastUpdatedAt:1727171815,formattedLastUpdatedAt:"Sep 24, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Deploy Provisioning VM"},sidebar:"tutorialSidebar",previous:{title:"Architecture and Initial Setup",permalink:"/ocp_ntnx_hci/import_bp"},next:{title:"Deploy OCP Infrastructure",permalink:"/ocp_ntnx_hci/ocp_vms"}},l={},s=[{value:"Configure Provisioning VM Blueprint",id:"configure-provisioning-vm-blueprint",level:2},{value:"Launch Provisioning VM Blueprint",id:"launch-provisioning-vm-blueprint",level:2}],g={toc:s},c="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(c,(0,r.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"configure-provisioning-vm-blueprint"},"Configure Provisioning VM Blueprint"),(0,a.yg)("p",null,"Before you proceed with the creating the Provisioning VM, you will need a SSH key pair"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Instructions to create SSH key pair"),(0,a.yg)("div",null,(0,a.yg)("body",null,(0,a.yg)("p",null,"Logon to your UserXX-LinuxToolsVM"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Username"),": root")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Password"),": nutanix default ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa -b 2048 -f ~/.ssh/ocp   # << accept all default answers\nls -l ~/.ssh/\n## Output here\n~/.ssh/ocp.pub  \n~/.ssh/ocp      # << use this private key in the blueprints\n"))))),(0,a.yg)("p",null,"Now lets configure and deploy Provisioning VM:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In ",(0,a.yg)("strong",{parentName:"p"},"Prism Central")," > ",(0,a.yg)("strong",{parentName:"p"},"Services")," > ",(0,a.yg)("strong",{parentName:"p"},"Calm"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Blueprints")),(0,a.yg)("admonition",{parentName:"li",type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Make sure that you only edit the blueprints you uploaded with your intials. There could be other users using the same HPOC cluster and working on similar blueprints."))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select your Provisioning VM ",(0,a.yg)("inlineCode",{parentName:"p"},"ocpuserXX_OCP_Prov_VM")," blueprint"))),(0,a.yg)("p",null,"We need to configure network and credentials for the blueprint so it can be deployed in your HPOC/SPOC."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Select the Provisioning_VM service")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Under Cluster, select your assigned HPOC cluster (E.g. PHX-POCXXX)")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In the Provisioning_VM service's VM properties, Choose ",(0,a.yg)("strong",{parentName:"p"},"Primary")," as the NIC 1"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{src:t(3229).A,width:"1304",height:"780"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Save"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Credentials")," (next to ",(0,a.yg)("strong",{parentName:"p"},"Save"),")")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on CRED and ",(0,a.yg)("strong",{parentName:"p"},"Edit"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Copy and paste the private key (",(0,a.yg)("inlineCode",{parentName:"p"},"~/.ssh/ocp"),") that created earlier here ")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Save"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Back")," to return to the blueprints main window")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"You will notice a few warnings for KUBEADMIN and KUBECONFIG\nvariables. These can be ignored as they will be auto-generated."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{src:t(4193).A,width:"1309",height:"471"})))),(0,a.yg)("h2",{id:"launch-provisioning-vm-blueprint"},"Launch Provisioning VM Blueprint"),(0,a.yg)("p",null,"Now it is time to launch the provisioning VM blueprint."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Launch")," button")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Give the application a name ",(0,a.yg)("strong",{parentName:"p"},"ocpuserXX_Prov_VM")," (E.g ocpuser01_Prov_VM)"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{src:t(6597).A,width:"596",height:"876"}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Click on ",(0,a.yg)("strong",{parentName:"p"},"Deploy"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Go to Audit and monitor the deployment tasks. There will be detailed\nlogging for all tasks")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"This should take about 10-15 minutes")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Once deployed the Calm application will be in a running state"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{src:t(200).A,width:"1267",height:"669"})),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Curious about what is happening inside the provisioning VM?"),(0,a.yg)("div",null,(0,a.yg)("body",null,(0,a.yg)("p",{parentName:"li"},"You are able to ssh into the provisioning\nVM using the NCM/Calm ",(0,a.yg)("strong",{parentName:"p"},"Application")," page  > ",(0,a.yg)("strong",{parentName:"p"},"Services")," > ",(0,a.yg)("strong",{parentName:"p"},"Open Terminal")),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{src:t(8711).A,width:"1270",height:"337"})),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-zsh"},"[core@Openshift-provisioning-0-211225-210356 ~]$ ls -lRh openshift/\nopenshift/:\ntotal 1.6G\n-rw-rw-r--. 1 core   core   7.3M Dec 26 05:11 coreos-installer\n-rwxr-xr-x. 2 core   core   118M Nov  4 19:41 kubectl\n-rwxr-xr-x. 2 core   core   118M Nov  4 19:41 oc\n-rwxr-xr-x. 1 core   core   369M Nov 22 17:12 openshift-install\n-rw-r--r--. 1 core   core    954 Nov  4 19:41 README.md\n-rw-rw-r--. 1 core   core   988M Dec 26 05:12 rhcos-live.x86_64.iso ## << this is RHCOS ISO\ndrwxrwxr-x. 2 apache apache  105 Dec 26 05:12 web\n\nopenshift/web:\ntotal 144M\n-rw-rw-r--. 1 apache apache 7.3M Dec 26 05:12 coreos-installer \n-rw-rw-r--. 1 apache apache  48M Dec 26 05:11 openshift-client-linux.tar.gz ## << this is OCP Client\n-rw-rw-r--. 1 apache apache  89M Dec 26 05:11 openshift-install-linux.tar.gz ## << this is OCP Server\n"))))))),(0,a.yg)("p",null,"Now we have the provisioning VM up and running. This section of the lab is done."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(165).A,width:"1906",height:"856"})),(0,a.yg)("p",null,"We will proceed to deploy a OCP cluster in the next section of the lab."))}u.isMDXComponent=!0},3229:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ocp_bp_save-845bee825c5dc17294985ddbb884d21b.png"},4193:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ocp_bp_warnings-47e28dbe7df413ca12bf50f44dec4422.png"},165:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ocp_lab_status_1-643e6342b17a5a02be0f106304ee51e5.png"},200:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ocp_prov_vm_audit-8234bd413a925e56c79c8e51037da461.png"},6597:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ocp_prov_vm_bp_launch-91c5f66a61dbd6ddc7947d311db9a894.png"},8711:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ocp_prov_vm_ssh-44be582cf7b117d28d0e61210042f6f8.png"}}]);