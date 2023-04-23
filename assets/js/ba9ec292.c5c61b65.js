"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[7405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=i,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4,title:"Deploy OCP Infrastructure"},o="OCP: Deploy OCP Infrastructure",p={unversionedId:"ocp_ntnx_hci/ocp_vms",id:"ocp_ntnx_hci/ocp_vms",title:"Deploy OCP Infrastructure",description:"In this section we will deploy a OCP cluster using Nutanix Calm.",source:"@site/docs/ocp_ntnx_hci/ocp_vms.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_vms",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_vms",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ntnx_hci/ocp_vms.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682253271,formattedLastUpdatedAt:"Apr 23, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Deploy OCP Infrastructure"},sidebar:"tutorialSidebar",previous:{title:"Deploy Provisioning VM",permalink:"/ocp-gitp/ocp_ntnx_hci/prov_vm"},next:{title:"Day 0 and Day 1 Operations",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_scale_out_in"}},l={},s=[{value:"Configuring OCP VM Blueprint",id:"configuring-ocp-vm-blueprint",level:2},{value:"Deploying OCP Cluster",id:"deploying-ocp-cluster",level:2},{value:"Day 0: Getting OCP Cluster Login Details",id:"day-0-getting-ocp-cluster-login-details",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ocp-deploy-ocp-infrastructure"},"OCP: Deploy OCP Infrastructure"),(0,i.kt)("p",null,"In this section we will deploy a OCP cluster using Nutanix Calm."),(0,i.kt)("p",null,"As discussed in the previous section about the Calm blueprints,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Blueprint 1 (XYZ_OCP_Prov_VM) - provisions a OCP provisioning VM with Calm action to deploy OCP"),(0,i.kt)("li",{parentName:"ol"},"Blueprint 2 (XYZ_OCP_Master_Worker) - is called by a Calm action in ",(0,i.kt)("inlineCode",{parentName:"li"},"Blueprint 1")," with all the necessary information that ",(0,i.kt)("inlineCode",{parentName:"li"},"Blueprint 2")," needs to run")),(0,i.kt)("p",null,"Since we sucessfully setup OCP provisioning VM, we have to do the following to proceed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure OCP VM Blueprint for environment information"),(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deploy OCP")," action in Blueprint 1 to deploy OCP cluster")),(0,i.kt)("h2",{id:"configuring-ocp-vm-blueprint"},"Configuring OCP VM Blueprint"),(0,i.kt)("p",null,"In this section we will configure the environemnt for the OCP VM blueprint to run. This will include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Credentials (SSH Private Key) for the services"),(0,i.kt)("li",{parentName:"ul"},"Confirming OCP DNS endpoint for the services"),(0,i.kt)("li",{parentName:"ul"},"NICs are auto selected during execution")),(0,i.kt)("admonition",{title:"Are Calm endpoints setup?",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Calm automatically assigns endpoint to Calm Actions as endpoint is created in your previous labs Calm endpoint section. It is important to confirm end points for actions in the lab.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,i.kt)("strong",{parentName:"p"},"Services")," > ",(0,i.kt)("strong",{parentName:"p"},"Calm"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Blueprints")),(0,i.kt)("p",{parentName:"li"},"We need to configure network and credentials for the blueprint so it can be deployed in your HPOC/SPOC.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select your Provisioning VM ",(0,i.kt)("inlineCode",{parentName:"p"},"XYZ_OCP_Master_Worker")," blueprint")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," (next to Save)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the same ",(0,i.kt)("strong",{parentName:"p"},"Private Key")," that you generated from the previous section and paste the generated primary key in the bluprints credential called ",(0,i.kt)("strong",{parentName:"p"},"CRED")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8768).Z,width:"1264",height:"576"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Save"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Back")," to return to the blueprints main window")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will notice a few warnings for KUBEADMIN and KUBECONFIG\nvariables. These can be ignored as they will be auto-generated."))),(0,i.kt)("p",null,"Now we will check if OCP DNS endpoints are configured for the services."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the blueprint's main window, expand the application and services pane")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Worker")," service and select the ",(0,i.kt)("strong",{parentName:"p"},"Create DNS Entry"),"\naction"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(825).Z,width:"1279",height:"1075"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm that the endpoint is the ",(0,i.kt)("strong",{parentName:"p"},"OCP DNS Integration")," that you\npreviously configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),'{.interpreted-text role="ref"}\nsection')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the ",(0,i.kt)("strong",{parentName:"p"},"OCP DNS Integration")," for ",(0,i.kt)("strong",{parentName:"p"},"Delete DNS Entry")," task")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm the ",(0,i.kt)("strong",{parentName:"p"},"OCP DNS Integration")," endpoints for ",(0,i.kt)("strong",{parentName:"p"},"Create DNS Entry")," and ",(0,i.kt)("strong",{parentName:"p"},"Delete DNS Entry")," for the following services:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bootstrap"),(0,i.kt)("li",{parentName:"ul"},"Master"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the endpoint is not assigned properly, correct the condition")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the blueprint and confirm there are no validation errors\n(warnings about KUBECONFIG (runtime variable) can be ignored)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(2686).Z,width:"1268",height:"350"})))),(0,i.kt)("h2",{id:"deploying-ocp-cluster"},"Deploying OCP Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,i.kt)("strong",{parentName:"p"},"Services")," > ",(0,i.kt)("strong",{parentName:"p"},"Calm"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Applications"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select your Provisioning VM ",(0,i.kt)("em",{parentName:"p"},"Initials"),"_PROV_VM application"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(2600).Z,width:"1267",height:"381"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Manage")," tab")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("strong",{parentName:"p"},"play")," button next to ",(0,i.kt)("strong",{parentName:"p"},"Deploy OCP")," action"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9535).Z,width:"1305",height:"466"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This will open up ",(0,i.kt)("strong",{parentName:"p"},"Run Action: Deploy OCP")," window for user inputs")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill only the following details:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Number of Workers")," - 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OCP_PULL_SECRET")," - download/copy pull secret this from your Red Hat Portal ",(0,i.kt)("a",{parentName:"li",href:"https://console.redhat.com/openshift/install/pull-secret"},"Login")," (you will need Red Hat Portal Access)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OCP_SUBDOMAIN")," - Initials1 (e.g. ",(0,i.kt)("strong",{parentName:"li"},"xyz1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OCP_MACHINE_NETWORK")," - provide your Primary network address for your HPOC/SPOC (e.g. 10.38.2.64/26 ) - check in your cluster reservation email/webpage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OCP_BP")," - name of the OCP_Master_Worker ",(0,i.kt)("inlineCode",{parentName:"li"},"blueprint2")," that you\nuploaded (e.g. XYZ_OCP_Master_Worker)")),(0,i.kt)("admonition",{parentName:"li",title:"Check your subdomain/ocp cluster name?",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that the ",(0,i.kt)("strong",{parentName:"p"},"OCP_SUBDOMAIN")," name is be unique for each OCP cluster you deploy with this blueprint. A DNS zone is created based on this subdomain name."),(0,i.kt)("p",{parentName:"admonition"},"You can observe this in DNS in your AutoAD VM for other deployed clusters."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{src:n(9172).Z,width:"747",height:"482"}))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(2153).Z,width:"539",height:"717"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Run"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Audit")," tab to check the stautus of the launched ",(0,i.kt)("strong",{parentName:"p"},"Deploy OCP")," action"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(7945).Z,width:"1271",height:"648"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If this action launch is succesful, you will see another application\n",(0,i.kt)("strong",{parentName:"p"},"Openshift xyz1")," in the ",(0,i.kt)("strong",{parentName:"p"},"Calm")," > ",(0,i.kt)("strong",{parentName:"p"},"Applications")," in a ",(0,i.kt)("strong",{parentName:"p"},"Provisioning")," state (this might take up to 5 minutes to show up in the Web UI)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(652).Z,width:"1316",height:"429"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Openshift xyz1")," application and go to ",(0,i.kt)("strong",{parentName:"p"},"Audit")," tab")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Observe the VM create, package install and other Calm actions")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This should take about 30-35 minutes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Meanwhile you can notice that Prism Central\\'s event will be getting\nquite busy. This is a result of VMs, storage, etc,. getting\nprovisioned by Calm using REST calls to Prism Cental")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once deployed the Calm application ",(0,i.kt)("strong",{parentName:"p"},"Openshift ocp1 XYZ")," will be in\na running state"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8462).Z,width:"1315",height:"659"})))),(0,i.kt)("p",null,"Now that your OCP cluster has been deployed, in the ",(0,i.kt)("strong",{parentName:"p"},"Services")," tab, lets explore the VMs (Services in Calm) and their corresponding functions."),(0,i.kt)("p",null,"Click on each VM (Service) will display IP addresses and ",(0,i.kt)("strong",{parentName:"p"},"Open Terminal")," options. We will be using the private key to ssh into these VMs (if required)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(722).Z,width:"1342",height:"488"})),(0,i.kt)("p",null,"We have completed this section of the lab where our OCP cluster is sucessfully deployed."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5369).Z,width:"984",height:"480"})),(0,i.kt)("h2",{id:"day-0-getting-ocp-cluster-login-details"},"Day 0: Getting OCP Cluster Login Details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},"Calm")," > ",(0,i.kt)("strong",{parentName:"p"},"Applications"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Openshift xyz1")," application and go to ",(0,i.kt)("strong",{parentName:"p"},"Audit")," tab")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the end of the audit trail and look for ",(0,i.kt)("strong",{parentName:"p"},"OS_Status_Check\nStart")," task and expand")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"OS_Status_Check - Show Login Information")," sub task and\nclick to maximize the output window"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(3891).Z,width:"503",height:"476"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make a note of the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Console URL"),(0,i.kt)("li",{parentName:"ul"},"Credentials: Username / password")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(894).Z,width:"991",height:"186"})),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The password and URL will be different for your OCP cluster."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Note this down as you will need these credentials to logon to the OCP cluster managment console"))),(0,i.kt)("p",null,"We will proceed to test Day 1 operations (Scale out and Scale in) in the next section of the lab."))}m.isMDXComponent=!0},652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_app_provisioning-f87a5edc22e575cc19754849c32e5a5f.png"},8768:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_bp_save_cred-1d49bfab61fe494880e49b5282b09da5.png"},2686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_bp_save_validation-8614db9c7ffa2121ff5901efcd8e70c9.png"},894:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_console_cred-058d9018594401748730c960a2f90adc.png"},7945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_deploy_audit-ab80e6d22696453e6251eb50967626b6.png"},2153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_deploy_task_runtime_variables-fb374f7d46a52fa23ab4afb731a441b6.png"},722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_deployed_vms-46c10c5c638ae488ac85d19e8676fe1a.png"},9535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_deployocp_action-a8d2863be4a3851f23d610bb2c27a10e.png"},3891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_os_status_check-90318d5629e2da973b5b046e787d9371.png"},8462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_prov_vm_audit-c7f5c7198693f064cd6855a842d7893e.png"},825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_service_ep_confirm-340df0629b4d3c6f1f4dd39aa0f6aae8.png"},5369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_vm_complete-9626616d2c5677e42c7a5199ee78cae9.png"},9172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ocp_xyz1_cluster_dns-258301ae59efcfa96780e3483be71494.png"},2600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prov_vm_app-c6109a35ca57e82374a02e6d68c8652d.png"}}]);