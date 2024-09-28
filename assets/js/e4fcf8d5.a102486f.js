"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[554],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,u=c["".concat(p,".").concat(m)]||c[m]||y[m]||i;return a?r.createElement(u,l(l({ref:t},g),{},{components:a})):r.createElement(u,l({ref:t},g))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(8168),n=(a(6540),a(5680));const i={title:"OCP Serverless",lastupdate:"git",lastupdateauthor:"git"},l="OCP Serverless and CICD",o={unversionedId:"ocp_serverless/ocp_serverless",id:"ocp_serverless/ocp_serverless",title:"OCP Serverless",description:"In this lab we will delve into the world of Serverless and CICD with OCP.",source:"@site/docs/ocp_serverless/ocp_serverless.md",sourceDirName:"ocp_serverless",slug:"/ocp_serverless/",permalink:"/ocp_serverless/",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_serverless/ocp_serverless.md",tags:[],version:"current",lastUpdatedBy:"LB",frontMatter:{title:"OCP Serverless",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"OCP and Nutanix NDB",permalink:"/ocp_ndb/"},next:{title:"OCP CICD",permalink:"/ocp_serverless/extend_pipeline"}},p={},s=[{value:"Serverless",id:"serverless",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"High Level steps",id:"high-level-steps",level:2},{value:"Install Red Hat OpenShift Pipelines operator",id:"install-red-hat-openshift-pipelines-operator",level:2},{value:"Create Projects and Access",id:"create-projects-and-access",level:2},{value:"Deploying Application",id:"deploying-application",level:2}],g={toc:s},c="wrapper";function y(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,r.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"ocp-serverless-and-cicd"},"OCP Serverless and CICD"),(0,n.yg)("p",null,"In this lab we will delve into the world of Serverless and CICD with OCP. "),(0,n.yg)("p",null,"We will also see how Nutanix offers solutions that will facilitate serverless offerings with OCP."),(0,n.yg)("p",null,"Nutanix offers:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"HCI Compute and Storage",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Objects as Container Registry location",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"This is where all the newly developed containers images are stored"))),(0,n.yg)("li",{parentName:"ul"},"OCP nodes runs as virtual machines on Nutanix ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Virtual machines needs volumes as storage"),(0,n.yg)("li",{parentName:"ul"},"Virtual machines need compute and networking"),(0,n.yg)("li",{parentName:"ul"},"Virtual machines can be deployed and destroyed with easy to use Nutanix APIs facilitating serverless ")))))),(0,n.yg)("h2",{id:"serverless"},"Serverless"),(0,n.yg)("p",null,"Serverless concepts bridges the gap between developers and infrastructure. A developer should be able to test and deploy applications with tight integration to infrastructure. Serverless concepts allow the following (not limited to):"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Once a developer is aware of infrastructure resources and capacity planning, they should be able to deploy applications without in-depth knowledge of the infrastructure. Infrastructure should be available as a service for developers to consume"),(0,n.yg)("li",{parentName:"ul"},"Use infrastructure only when there is a requirement to do so to control spending. If there is no demand for applications, the used infrastructure should be zero or be in a stand-by state to become ready ")),(0,n.yg)("p",null,"In this lab, we will be deploy this OCP lab and exposing it internally as application to check whether a developer is able to deploy applications from their source code. "),(0,n.yg)("p",null,"In essence, the lab instruction website is a NodeJS application called ",(0,n.yg)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),". "),(0,n.yg)("p",null,"OCP has Integrated Source to Image ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/openshift/source-to-image"},"S2I")," capabilities natively and we will use this to demonstrate serverless functionality. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"OCP S2I implementation decides on the best deployment strategy (dockerfile, pre-built container images, etc) without the developer having to worry about this "),(0,n.yg)("li",{parentName:"ul"},"OCP will take care of the deployment part in the OCP (kubernetes)"),(0,n.yg)("li",{parentName:"ul"},"OCP will also create a route/ingress where the end-users can access the application")),(0,n.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.yg)("p",null,"This lab requires that the OpenShift has access to a container registry to store the application container."),(0,n.yg)("p",null,"Pipeline generator uses the internal registry ",(0,n.yg)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc:5000")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"build")," step by default "),(0,n.yg)("p",null,"Make sure to have the internal or external registry configured. Steps to configure internal registry are documented ",(0,n.yg)("a",{parentName:"p",href:"/optional_labs/ocp_image_registry"},"here")),(0,n.yg)("h2",{id:"high-level-steps"},"High Level steps"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Install Red Hat OpenShift Pipelines operator from OperatorHub"),(0,n.yg)("li",{parentName:"ol"},"Use OCP's Import from Git functionality to get source code"),(0,n.yg)("li",{parentName:"ol"},"Build a container "),(0,n.yg)("li",{parentName:"ol"},"Upload to OCP image registry"),(0,n.yg)("li",{parentName:"ol"},"Deploy application to OCP cluster"),(0,n.yg)("li",{parentName:"ol"},"Expose the application and access")),(0,n.yg)("h2",{id:"install-red-hat-openshift-pipelines-operator"},"Install Red Hat OpenShift Pipelines operator"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Browse to you OCP cluster's web UI"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.ocpuserXX.ntnxlab.local/\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Login as kubeadmin or a IDP user")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Search for ",(0,n.yg)("inlineCode",{parentName:"p"},"pipelines")," keyword")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select ",(0,n.yg)("inlineCode",{parentName:"p"},"Red Hat OpenShift Pipelines"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click ",(0,n.yg)("strong",{parentName:"p"},"Install")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(3322).A,width:"706",height:"432"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select latest release")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click ",(0,n.yg)("strong",{parentName:"p"},"Install"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Monitor the installation to make sure it is installed without errors"))),(0,n.yg)("h2",{id:"create-projects-and-access"},"Create Projects and Access"),(0,n.yg)("p",null,"Logon to your OC command line to create projects (namespaces) and necessary access for services accounts. "),(0,n.yg)("p",null,"Projects/namespaces are treated like different deployment environment (dev and stage). "),(0,n.yg)("p",null,"In the bare-metal and virtual machine world, one would create different servers for these deployments. However, we will simulate this by creating different projects/namespaces in OCP cluster."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Logon to UserXX-LinuxToolsVM and connect to OCP cluster"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIGKUBECONFIG=/path/to/kubeconfig\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create our dev and stage projects "),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"oc create ns dev\noc create ns stage\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Grant edit role to ServiceAccount group for these projects(namespaces)"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-group edit system:serviceaccounts -n dev\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-group edit system:serviceaccounts -n stage\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-user system:image-puller system:serviceaccounts:stage -n dev\n")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-role-to-user system:deployer system:serviceaccounts:dev -n stage\n")))),(0,n.yg)("h2",{id:"deploying-application"},"Deploying Application"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Switch to Developer view"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(836).A,width:"792",height:"215"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on ",(0,n.yg)("strong",{parentName:"p"},"+Add")," just under Developer")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Make sure you are under ",(0,n.yg)("inlineCode",{parentName:"p"},"dev")," project "),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(9223).A,width:"798",height:"553"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on ",(0,n.yg)("strong",{parentName:"p"},"Import from Git"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Copy and paste the following url"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-url"},"https://github.com/ariesbabu/ocp-gitp.git\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on ",(0,n.yg)("strong",{parentName:"p"},"Edit Import Strategy"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Choose the following options"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Import strategy")," - Buider Image"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Buider Image")," - NodeJS"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Buider Image version")," - ",(0,n.yg)("inlineCode",{parentName:"li"},"latest")," (ok for testing - not great for production)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Build Option")," - Choose ",(0,n.yg)("strong",{parentName:"li"},"Pipelines")," from drop down menu"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Target port")," - ",(0,n.yg)("inlineCode",{parentName:"li"},"3000")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Create a route")," - leave checked"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Path")," - ",(0,n.yg)("inlineCode",{parentName:"li"},"/ocp-gitp/ ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Secure route")," - unchecked ")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(4671).A,width:"1429",height:"663"})),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(6893).A,width:"841",height:"714"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on ",(0,n.yg)("strong",{parentName:"p"},"Create")," button at the end after confirming the options above")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"On the left hand side pane, click on ",(0,n.yg)("strong",{parentName:"p"},"Pipelines"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on ",(0,n.yg)("strong",{parentName:"p"},"Last run")," pipeline run (PLR) corresponding to your ",(0,n.yg)("strong",{parentName:"p"},"ocp-gitp-git")," pipeline you created"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(4798).A,width:"1302",height:"316"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can see which step of the pipeline you are at"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(1218).A,width:"754",height:"397"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on the ",(0,n.yg)("strong",{parentName:"p"},"Logs")," tab to see detailed logs at any point of the pipeline"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(5467).A,width:"668",height:"365"})),(0,n.yg)("p",{parentName:"li"},"Since our pipeline has successfully rolled out our NodeJS application (our documentation website), let us check out if we are able to access it")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on ",(0,n.yg)("strong",{parentName:"p"},"Topology")," option, and click on the URL on your application as shown here, this is a route created by the pipeline for application access"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(2164).A,width:"811",height:"342"})),(0,n.yg)("p",{parentName:"li"},"The application should open in a new browser tab"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(1130).A,width:"1442",height:"713"})),(0,n.yg)("admonition",{parentName:"li",type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Note that the documentation site NodeJS application is now hosted on your OCP cluster"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-url"},"http://ocp-gitp-git-dev.apps.user02.ntnxlab.local/ocp-gitp/\n")),(0,n.yg)("p",{parentName:"admonition"},"Where:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ocp-gitp-git")," - is your application name"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"dev")," - is your namespace/project name"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ocpuser02")," - is your OCP cluster"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ntnxlab.local")," - is your domain"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"/ocp-gitp/")," - is your basePath url"))))),(0,n.yg)("p",null,"You can note that OCP has combined both serverless and CICD functionality into one single workflow."))}y.isMDXComponent=!0},9223:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/add_gitrepo-ec2cca8a53cbc1731873cafb1705297c.png"},4671:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dev_option1-f4ba3e6901548c899c0f15419ebff228.png"},6893:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dev_option3-00be6395a5556bf7efde11053a4aa214.png"},836:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dev_view-f2842c0e51aa355bc9e3989ce4a39260.png"},1130:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/gitp_hosted_on_ocp-0a777f1bccde93d1d57ecb6bb3e5f0f4.png"},3322:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/install_pipeline_operator-b613afc090ca23cbc2dcfc17f7d1c2d7.png"},4798:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/lr_plr-a980b9fcee4babe99a084a479e9be70e.png"},1218:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/plr_details-e08afb28a20c996139e40f4073e0f02b.png"},5467:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/plr_logs-44ce60f7ac8f671d947e65d46777463b.png"},2164:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/plr_topology_app_access-c02661344004ba2ec94a59c87bc0e34d.png"}}]);