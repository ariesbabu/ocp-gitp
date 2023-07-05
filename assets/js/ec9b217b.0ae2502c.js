"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[6593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),s=a(6550),p=a(1980),i=a(7392),c=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[p,i]=k({queryString:a,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=p??u;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,o]),tabValues:o}}var f=a(2389);const h="tabList__CuJ",N="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:s,selectValue:p,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=i[a].value;r!==s&&(u(t),p(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",N,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},7416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={title:"Deploying Workload"},p="Deploying Workload",i={unversionedId:"workloads_on_ocp/ocp_wordpress_deploy",id:"workloads_on_ocp/ocp_wordpress_deploy",title:"Deploying Workload",description:"In this section we will deploy a simple Wordpress application with MYSQL as the backend database store.",source:"@site/docs/workloads_on_ocp/ocp_wordpress_deploy.mdx",sourceDirName:"workloads_on_ocp",slug:"/workloads_on_ocp/ocp_wordpress_deploy",permalink:"/ocp-gitp/workloads_on_ocp/ocp_wordpress_deploy",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/workloads_on_ocp/ocp_wordpress_deploy.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1685929362,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{title:"Deploying Workload"},sidebar:"tutorialSidebar",previous:{title:"Deploying Backup Application",permalink:"/ocp-gitp/workloads_on_ocp/ocp_k10"},next:{title:"Backup and Restore Applications",permalink:"/ocp-gitp/workloads_on_ocp/ocp_k10_backup_restore"}},c={},u=[{value:"Deploying Wordpress App",id:"deploying-wordpress-app",level:2},{value:"Exposing Wordpress to the World",id:"exposing-wordpress-to-the-world",level:2}],d={toc:u};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploying-workload"},"Deploying Workload"),(0,n.kt)("p",null,"In this section we will deploy a simple Wordpress application with MYSQL as the backend database store."),(0,n.kt)("p",null,"We will test backup and recovery of this application in next section."),(0,n.kt)("h2",{id:"deploying-wordpress-app"},"Deploying Wordpress App"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In your ",(0,n.kt)("strong",{parentName:"p"},"LinuxToolsVM")," or your ",(0,n.kt)("strong",{parentName:"p"},"LB_DNS VM")," console,")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new directory for your wordpress application and configuration files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir wordpress \ncd wordpress\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure default is the current namespace"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc config set-context --current --namespace=default\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download wordpress and mysql config yaml files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/ocp_wordpress_deploy/mysql_deployment.yaml\ncurl -LO https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/ocp_wordpress_deploy/wordpress_deployment.yaml \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We need to grant ",(0,n.kt)("inlineCode",{parentName:"p"},"anyuid")," security context constraint to the service account"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-scc-to-user anyuid -z default\n")),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Take care with granting ",(0,n.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/admin_guide/manage_scc.html"},"Security Contenxt Constraints")," in production environments. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the ",(0,n.kt)("inlineCode",{parentName:"p"},"nutanix-volume "),"is the default storage class"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc get sc\n")),(0,n.kt)("p",{parentName:"li"},"If it is not default, run the following command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch storageclass nutanix-volumes -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create kustomization file to specify mysql password","]"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5}","{5}":!0},"cat << EOF > kustomization.yaml\nsecretGenerator:\n- name: mysql-pass\n  literals:\n  - password=XXXXXXX # change to your preferred MYSQL password\nresources:\n  - mysql_deployment.yaml\n  - wordpress_deployment.yaml\nEOF\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the kustomization.yaml to change your MYSQL password to a preferred password"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vi kustomization.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Apply all your configuration files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc apply -k ./\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Monitor pods until they are running"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -w\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Sample output for the command above\n\nNAME                                   READY   STATUS    RESTARTS   AGE\npod/wordpress-9c5b954c6-vdp4r          1/1     Running   0          3m11s\npod/wordpress-mysql-77756785c8-vgtvb   1/1     Running   0          3m11s\n")))),(0,n.kt)("h2",{id:"exposing-wordpress-to-the-world"},"Exposing Wordpress to the World"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once both mysql and wordpress pods are running, we can expose the\nwordpress service to be able to access wordpress\\' Web UI."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc expose service/wordpress\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"route.route.openshift.io/wordpress exposed\n")),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"OCP exposes internal services to the outside world using the concept of routes. This routes concept existed even before the popular\nkubernetes Ingress object was developed."),(0,n.kt)("p",{parentName:"admonition"},"As a result, when you create Ingress object in latest versions of OCP, this will automatically create routes in the background."),(0,n.kt)("p",{parentName:"admonition"},"For more information about OCP Routes see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html"},"here.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get the OCP route information by running the following command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"oc get route\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME        HOST/PORT                                   PATH   SERVICES    PORT   TERMINATION   WILDCARD\nwordpress   wordpress-default.apps.xyz9.ntnxlab.local          wordpress   80                   None\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the value of ",(0,n.kt)("strong",{parentName:"p"},"HOST/PORT")," field and prepend a ",(0,n.kt)("inlineCode",{parentName:"p"},"http://")," to it as we not using SSL (secure) termination"),(0,n.kt)("p",{parentName:"li"},"Your route should look as follows:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Template URL",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-url"},"http://wordpress-default.apps.<your-ocp-cluster>.ntnxlab.local\n"))),(0,n.kt)(l.Z,{value:"Sample URL",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-url"},"http://wordpress-default.apps.xyz.ntnxlab.local\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the URL and paste in a browser in your ",(0,n.kt)("strong",{parentName:"p"},"WindowsToolsVM"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should see a configuration page"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(9008).Z,width:"864",height:"694"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"English - United States")," and click on ",(0,n.kt)("strong",{parentName:"p"},"Continue"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the following fields as shown in the figure below"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(5421).Z,width:"803",height:"839"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note the auto-generated password and copy it somewhere safe. You are also free to use your own password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should see a installation confirmation page"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(2022).Z,width:"835",height:"467"})),(0,n.kt)("p",{parentName:"li"},"You will get re-directed to login page")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login to the wordpress site using admin and the password you used to install wordpress application")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will see the wordpress administration page")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Lets populate some data by creating a new admin user")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Users")," > ",(0,n.kt)("strong",{parentName:"p"},"Add New")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(1017).Z,width:"1534",height:"1147"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the following fields as shown in the figure below"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(82).Z,width:"929",height:"776"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add New User"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be able to see the list of users"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(246).Z,width:"1778",height:"553"})))),(0,n.kt)("p",null,"You have succesfully set up Wordpress application with mysql backend. In the next section we will backup and restore a deleted wordpress user using Kasten K10 software."))}m.isMDXComponent=!0},5421:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocp_wp_config_options-a2ccccbdd148573efd24a42470a08644.png"},82:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocp_wp_create_newuser-08f1eb3fa51bbee93e15a606d576fbe5.png"},9008:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocp_wp_flash-f3ed50fb1e36165a13e74c9508a3de96.png"},2022:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocp_wp_install_success-159f64108825e55573b810fb2b1df7e3.png"},246:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocp_wp_user_list-f8c524a12ed745ba470c9bff2ca93d79.png"},1017:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ocp_wp_users_addnew-eb4953cb13773c2c6d352be4199b9662.png"}}]);