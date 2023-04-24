"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[5040],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:d,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[v,C]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=N[d];null!=e&&e!==v&&k.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==v&&(w(t),C(n),null!=d&&y(d,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>O.push(e),onKeyDown:P,onClick:x},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},7820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={title:"Deploying IDP for OCP"},s="Deploying IDP for OCP",p={unversionedId:"optional_labs/ocp_idp",id:"optional_labs/ocp_idp",title:"Deploying IDP for OCP",description:"In this lab we will deploy a IDP connection to your OCP cluster to provide Authentication and Authorization.",source:"@site/docs/optional_labs/ocp_idp.mdx",sourceDirName:"optional_labs",slug:"/optional_labs/ocp_idp",permalink:"/optional_labs/ocp_idp",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/optional_labs/ocp_idp.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682296383,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{title:"Deploying IDP for OCP"},sidebar:"tutorialSidebar",previous:{title:"Create Additional OCP Clusters using NCM",permalink:"/optional_labs/ocp_vms_2"},next:{title:"Design",permalink:"/ocp_topology/"}},u={},c=[{value:"Setup IDP",id:"setup-idp",level:2},{value:"Verifying Authentication and Authorisation",id:"verifying-authentication-and-authorisation",level:2},{value:"Cluster Admin",id:"cluster-admin",level:3},{value:"Cluster Operator",id:"cluster-operator",level:3},{value:"Challenge",id:"challenge",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-idp-for-ocp"},"Deploying IDP for OCP"),(0,r.kt)("p",null,"In this lab we will deploy a IDP connection to your OCP cluster to provide Authentication and Authorization."),(0,r.kt)("p",null,"We will use the AutoAD Active Directory VM as the IDP as it is already installed in your HPOC/SPOC cluster."),(0,r.kt)("h2",{id:"setup-idp"},"Setup IDP"),(0,r.kt)("p",null,"This setup can also be done using the OCP Cluster Manger GUI. But in this section we will use commands."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Depending on you access to ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file or kubeadmin password, logon to the OCP cluster"),(0,r.kt)(l.Z,{groupId:"Login Method",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kubeconfig file",label:"kubeconfig",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Export your kubeconfig file to env"',title:'"Export',your:!0,kubeconfig:!0,file:!0,to:!0,'env"':!0},"export KUBECONFIG=/root/xyz/auth/kubeconfig\n"))),(0,r.kt)(o.Z,{value:"kubeadmin credentials",label:"kubeadmin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Make sure to use your password"',title:'"Make',sure:!0,to:!0,use:!0,your:!0,'password"':!0},"oc login -u kubeadmin -p xxxxx-xxxxx-xxxxx-xxxxx\n"))),(0,r.kt)(o.Z,{value:"NCM",label:"NCM",mdxType:"TabItem"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Calm go to your ",(0,r.kt)("strong",{parentName:"p"},"Applications")," > ",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz1")," application")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Services"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Open Terminal")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5e3).Z,width:"1326",height:"335"})),(0,r.kt)("p",{parentName:"li"},"The terminal will open in a new browser tab"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=~/openshift/auth/kubeconfig\n"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following commands in sequence"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a kubernetes secret for AutoAD administrator password\noc create secret generic ldap-secret --from-literal=bindPassword='nutanix/4u' -n openshift-config\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup the OAuth provider"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | oc apply -f -\napiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: ntnxlab.local \n    mappingMethod: claim \n    type: LDAP\n    ldap:\n      attributes:\n        id: \n        - sAMAccountName\n        email: []\n        name: \n        - displayName\n        preferredUsername: \n        - sAMAccountName\n      bindDN: administrator@ntnxlab.local \n      bindPassword: \n        name: ldap-secret\n      insecure: true\n      url: ldap://dc.ntnxlab.local/CN=Users,DC=ntnxlab,DC=local?sAMAccountName\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the LDAP sync config file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo """kind: LDAPSyncConfig\napiVersion: v1\nurl: ldap://dc.ntnxlab.local:389\nbindDN: administrator@ntnxlab.local \nbindPassword: "nutanix/4u"\ninsecure: true\ngroupUIDNameMapping:\n  CN=SSP Admins,CN=Users,DC=ntnxlab,DC=local: OCP_SSP_Admins\n  CN=SSP Operators,CN=Users,DC=ntnxlab,DC=local: OCP_Cluster_Operators\naugmentedActiveDirectory:\n  groupsQuery:\n    baseDN: CN=users,DC=ntnxlab,DC=local\n    scope: sub\n    derefAliases: never\n    pageSize: 0\n  groupUIDAttribute: dn\n  groupNameAttributes: [ cn ]\n  usersQuery:\n    baseDN: cn=users,dc=ntnxlab,dc=local\n    scope: sub\n    derefAliases: never\n    filter: (objectclass=person)\n    pageSize: 0\n  userNameAttributes: [ sAMAccountName ] \n  groupMembershipAttributes: [ memberOf ]""" > ldapsync.yaml\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup the LDAP sync"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm groups sync --sync-config=ldapsync.yaml --confirm\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create rolebinding using the following commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-cluster-role-to-group cluster-admin OCP_SSP_Admins\noc adm policy add-cluster-role-to-group console-operator OCP_Cluster_Operators\n")))),(0,r.kt)("p",null,"If you logout of the OCP cluster manager Web UI. You will be able to see\ntwo authentication mechanisms(instead of just 1 before):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Local")," - kubeadmin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ntnxlab")," - ntnxlab.local")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5138).Z,width:"1053",height:"295"})),(0,r.kt)("h2",{id:"verifying-authentication-and-authorisation"},"Verifying Authentication and Authorisation"),(0,r.kt)("p",null,"Now that we have setup connectivity for OCP to Active Directory as ID provider, we can now check which user (authentication) is allowed to perform what action (authorization)."),(0,r.kt)("h3",{id:"cluster-admin"},"Cluster Admin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the OCP Web UI login page, select ",(0,r.kt)("strong",{parentName:"li"},"ntnxlab.local")),(0,r.kt)("li",{parentName:"ol"},"Enter the following credentials",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - adminuser01"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - nutanix/4u"))),(0,r.kt)("li",{parentName:"ol"},"Observe what management capabilites are available for adminuser01"),(0,r.kt)("li",{parentName:"ol"},"Take a screenshot of the login page and add it to you validation\nscreenshot bundle")),(0,r.kt)("h3",{id:"cluster-operator"},"Cluster Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the OCP Web UI login page, select ",(0,r.kt)("strong",{parentName:"li"},"ntnxlab.local")),(0,r.kt)("li",{parentName:"ol"},"Enter the following credentials",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - operator01"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - nutanix/4u"))),(0,r.kt)("li",{parentName:"ol"},"Observe what management capabilites are available for operator01")),(0,r.kt)("p",null,"You have sucessfully configured authentication and authorisation for OCP with Active Directory as IDP."),(0,r.kt)("h2",{id:"challenge"},"Challenge"),(0,r.kt)("p",null,"Assign the following groups to be able to access OCP."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"AD User Group"),(0,r.kt)("th",{parentName:"tr",align:null},"OCP Role"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Admins"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster-admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSP Operators"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster-operator")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will need to modify the config file in step 7 (ldapsync.yaml) to include these. Identify the format of specifying this and add on configuration per line.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will have run the following command in step 9 to add a admin policy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-cluster-role-to-group <cluster role> <group name>\n"))))),(0,r.kt)("p",null,"You have successfully completed integrating Active Directory with OCP Cluster for Authentication and Authorisation."))}d.isMDXComponent=!0},5138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_after_idp-df7341f16a71f8e216a0f8a5be5520c3.png"},5e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_lbdns_terminal-d3f4e8c9d40b6c5fbaa1c269f6f7e482.png"}}]);