"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[6918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Create Additional OCP Clusters using NCM"},i="Creating Additional OCP Clusters using NCM",p={unversionedId:"optional_labs/ocp_vms_2",id:"optional_labs/ocp_vms_2",title:"Create Additional OCP Clusters using NCM",description:"If you are doing this section of the lab using a Single Node HPOC (SPOC) there will not be enough resources to deploy a second OCP cluster. Please delete the first OCP cluster from Calm > Actions > Delete before proceeding with this lab.",source:"@site/docs/optional_labs/ocp_vms_2.mdx",sourceDirName:"optional_labs",slug:"/optional_labs/ocp_vms_2",permalink:"/optional_labs/ocp_vms_2",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/optional_labs/ocp_vms_2.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682989642,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Create Additional OCP Clusters using NCM"},sidebar:"tutorialSidebar",previous:{title:"Backup and Restore Applications",permalink:"/workloads_on_ocp/ocp_k10_backup_restore"},next:{title:"Deploying IDP for OCP",permalink:"/optional_labs/ocp_idp"}},l={},s=[{value:"Deploy OCP Cluster",id:"deploy-ocp-cluster",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-additional-ocp-clusters-using-ncm"},"Creating Additional OCP Clusters using NCM"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are doing this section of the lab using a Single Node HPOC (SPOC) there will not be enough resources to deploy a second OCP cluster. Please delete the first OCP cluster from Calm > Actions > Delete before proceeding with this lab.")),(0,r.kt)("p",null,"There will instances where you will want to deploy a second OCP cluster in the same/different environment using the blueprints you have worked with so far."),(0,r.kt)("p",null,"We are able to achieve this by executing the ",(0,r.kt)("strong",{parentName:"p"},"Deploy OCP")," action once again from the Provisioning VM."),(0,r.kt)("h2",{id:"deploy-ocp-cluster"},"Deploy OCP Cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Services")," > ",(0,r.kt)("strong",{parentName:"p"},"Calm"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Applications"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your Provisioning VM ",(0,r.kt)("inlineCode",{parentName:"p"},"Initials_PROV_VM")," application"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6107).Z,width:"1267",height:"381"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Manage")," tab")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the play button next to ",(0,r.kt)("strong",{parentName:"p"},"Deploy OCP")," action"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(899).Z,width:"1217",height:"496"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill only the following details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of Workers")," - 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP_PULL_SECRET")," - download/copy pull secret this from your\nRed Hat Portal\n",(0,r.kt)("a",{parentName:"li",href:"https://console.redhat.com/openshift/install/pull-secret"},"Login"),"\n(you will need Red Hat Portal Access)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP_SUBDOMAIN")," - Initials2 (e.g. ",(0,r.kt)("strong",{parentName:"li"},"xyz2"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP_MACHINE_NETWORK")," - provide your Primary network address\nfor your HPOC/SPOC (e.g. 10.38.2.64/26 ) - check in your cluster\nreservation email/webpage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP_BP")," - XYZ_OCP_Master_Worker")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure that the ",(0,r.kt)("strong",{parentName:"p"},"OCP_SUBDOMAIN")," name is be unique for each OCP cluster you deploy with this blueprint. A DNS zone is created based on this subdomain name."),(0,r.kt)("p",{parentName:"admonition"},"You can observe this in DNS in your AutoAD VM for other deployed clusters."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:a(7838).Z,width:"747",height:"482"}))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7557).Z,width:"542",height:"717"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Run"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Audit")," of your tab to check the stautus of the launched\n",(0,r.kt)("strong",{parentName:"p"},"Deploy OCP")," action"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5278).Z,width:"1324",height:"732"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If this action launch is succesful, you will see another application\n",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz2")," in the ",(0,r.kt)("strong",{parentName:"p"},"Calm")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Applications")," in a\n",(0,r.kt)("strong",{parentName:"p"},"Provisioning")," state"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(306).Z,width:"1327",height:"425"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz2")," application and go to ",(0,r.kt)("strong",{parentName:"p"},"Audit")," tab"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(473).Z,width:"1324",height:"811"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Observe the VM create, package and other Calm actions")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This should take about 20-25 minutes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once deployed the Calm application ",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz2")," will be in a\nrunning state"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1615).Z,width:"1369",height:"517"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to DNS in your AutoAD VM to check for the ",(0,r.kt)("strong",{parentName:"p"},"xyz2")," subdomain for your ",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz2")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9980).Z,width:"762",height:"377"})),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If other users are using your cluster you will see other subdomains in your DNS server")))),(0,r.kt)("p",null,"You are able to access the ",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz2")," cluster administation page by following the process here ",(0,r.kt)("inlineCode",{parentName:"p"},"ocp_cluster_login"),'{.interpreted-text\nrole="ref"}.'))}m.isMDXComponent=!0},306:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_app_provisioning-56bd416bf9ad5319c2ad2054a128a90e.png"},473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_deploy_audit_2-9713c3e79e8208d22cfdb53947b094db.png"},7557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_deploy_task_runtime_variables_2-a15b8c62cf4ebe5a6e40a8c2879b9004.png"},899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_deployocp_action-0e85448c8c7952ff9042b64959c53f87.png"},1615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_prov_vm_audit_success_2-aee78fdcfd831615b69d3ab238226a3e.png"},5278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_provvm_deploy_audit-7544a90d5d6ea0c5326fba73b41383cf.png"},7838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_xyz1_cluster_dns-258301ae59efcfa96780e3483be71494.png"},9980:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_xyz2_cluster_dns-d0cd639a840dd91453f51528688c333e.png"},6107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prov_vm_app-c6109a35ca57e82374a02e6d68c8652d.png"}}]);