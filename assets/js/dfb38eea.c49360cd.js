"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[2017],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),m=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(t),g=a,d=c["".concat(s,".").concat(g)]||c[g]||p[g]||r;return t?o.createElement(d,l(l({ref:n},u),{},{components:t})):o.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<r;m++)l[m]=t[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7294),a=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>O});var o=t(7462),a=t(7294),r=t(6010),l=t(2466),i=t(6550),s=t(1980),m=t(7392),u=t(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,m.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[s,m]=d({queryString:t,groupId:o}),[c,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),h=(()=>{const e=s??c;return g({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),b(e)}),[m,b,r]),tabValues:r}}var h=t(2389);const f="tabList__CuJ",N="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),o=m[t].value;o!==i&&(c(n),s(o))},g=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},m.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:g,onClick:p},l,{className:(0,r.Z)("tabs__item",N,l?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function v(e){const n=b(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f)},a.createElement(y,(0,o.Z)({},e,n)),a.createElement(k,(0,o.Z)({},e,n)))}function O(e){const n=(0,h.Z)();return a.createElement(v,(0,o.Z)({key:String(n)},e))}},7181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=t(7462),a=(t(7294),t(3905));t(4866),t(5162);const r={title:"Deploy Multi-Zone MongoDB",lastupdate:"git",lastupdateauthor:"git"},l="Overview",i={unversionedId:"ocp_topology/multiaz_app2",id:"ocp_topology/multiaz_app2",title:"Deploy Multi-Zone MongoDB",description:"In this section we will install a mutli-zone deployable workload. The workload will contain a MongoDB Database.",source:"@site/docs/ocp_topology/multiaz_app2.md",sourceDirName:"ocp_topology",slug:"/ocp_topology/multiaz_app2",permalink:"/ocp_topology/multiaz_app2",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_topology/multiaz_app2.md",tags:[],version:"current",lastUpdatedBy:"LB",lastUpdatedAt:1713408511,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{title:"Deploy Multi-Zone MongoDB",lastupdate:"git",lastupdateauthor:"git"}},s={},m=[],u={toc:m};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this section we will install a mutli-zone deployable workload. The workload will contain a MongoDB Database. "),(0,a.kt)("h1",{id:"add-mongo-db-helm-charts"},"Add Mongo DB Helm Charts"),(0,a.kt)("p",null,"This section requires Helm. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new OCP project"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oc new-project mongo\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Helm (if not already present)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\n#\nchmod 700 get_helm.sh\n#\n./get_helm.sh\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Verify Helm version"',title:'"Verify',Helm:!0,'version"':!0},"helm version\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following Helm repo"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add my-mongo https://charts.bitnami.com/bitnami\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Check if repo is present"',title:'"Check',if:!0,repo:!0,is:!0,'present"':!0},"helm repo list\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME    URL                                  \nmy-mongo    https://charts.bitnami.com/bitnami   \n")))),(0,a.kt)("h1",{id:"deploy-mongo-db-database"},"Deploy Mongo DB Database"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create following Helm ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo_values.yaml")," file "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF > mongo_values.yaml\nglobal:\n  storageClass: "nutanix-volume"\n\n## MongoDB(&reg;) Authentication parameters\n##\narchitecture: replicaset\nauth:\n  enabled: true\n  rootUser: root\n  rootPassword: "nutanix"\n## @param replicaCount Number of MongoDB(&reg;) nodes (only when `architecture=replicaset`)\n## Ignored when mongodb.architecture=standalone\n##\nreplicaCount: 3                                        ## << Three replicas for three AZs\naffinity:\n  podAntiAffinity:\n    requiredDuringSchedulingIgnoredDuringExecution:    ## << Following strict scheduling in each zone\n    - topologyKey: csi.nutanix.com/prism-element-uuid  ## << Nutanix provided topology key\n      labelSelector:\n        matchLabels:\n          app.kubernetes.io/component: mongodb\n          app.kubernetes.io/instance: mongo-topology\nEOF\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Testing has indicated that wordpress container expects to run as root in terms of security context. To enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo-mongodb")," service account in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo")," namespace to run as root, we need to grant anyuid security context to the service account."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-scc-to-user anyuid -z mongo-mongodb\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install MongoDB "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," replicas for the Deployment - as we have three availability zones"),(0,a.kt)("li",{parentName:"ul"},"Using a topology key provided by Nutanix ",(0,a.kt)("inlineCode",{parentName:"li"},"csi.nutanix.com/prism-element-uuid")," "),(0,a.kt)("li",{parentName:"ul"},"Using strict topology maintenance requirement ",(0,a.kt)("inlineCode",{parentName:"li"},"requiredDuringSchedulingIgnoredDuringExecution"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm install mongo my-repo/mongodb -f mongo_values.yaml\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output - we will use some commands in the output to access Mongo DB database"',title:'"Output',"-":!0,we:!0,will:!0,use:!0,some:!0,commands:!0,in:!0,the:!0,output:!0,to:!0,access:!0,Mongo:!0,DB:!0,'database"':!0},'NAME: mongo\nLAST DEPLOYED: Mon Jan 23 07:40:12 2023\nNAMESPACE: mongo\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nCHART NAME: mongodb\nCHART VERSION: 13.6.3\nAPP VERSION: 6.0.3\n\n** Please be patient while the chart is being deployed **\n\nMongoDB&reg; can be accessed on the following DNS name(s) and ports from within your cluster:\n\n    mongo-mongodb-0.mongo-mongodb-headless.mongo1.svc.cluster.local:27017\n    mongo-mongodb-1.mongo-mongodb-headless.mongo1.svc.cluster.local:27017\n    mongo-mongodb-2.mongo-mongodb-headless.mongo1.svc.cluster.local:27017\n\nTo get the root password run:\n\n    export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace mongo mongo-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 -d)\n\nTo connect to your database, create a MongoDB&reg; client container:\n\n    kubectl run --namespace mongo mongo-mongodb-client --rm --tty -i --restart=\'Never\' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:6.0.3-debian-11-r20 --command -- bash\n\nThen, run the following command:\n    mongosh admin --host "mongo-mongodb-0.mongo-mongodb-headless.mongo1.svc.cluster.local:27017,mongo-mongodb-1.mongo-mongodb-headless.mongo1.svc.cluster.local:27017,mongo-mongodb-2.mongo-mongodb-headless.mongo1.svc.cluster.local:27017" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD\n')),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This installation may take up to 5 minutes."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You are able to watch the pods to get details status"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -w\nNAME                      READY   STATUS              RESTARTS   AGE\nmongo-mongodb-0           0/1     ContainerCreating   0          26s\nmongo-mongodb-arbiter-0   1/1     Running             0          26s\nmongo-mongodb-0           0/1     ContainerCreating   0          39s\nmongo-mongodb-0           0/1     Running             0          40s\nmongo-mongodb-0           1/1     Running             0          50s\nmongo-mongodb-1           0/1     Pending             0          0s\nmongo-mongodb-1           0/1     Pending             0          7s\nmongo-mongodb-1           0/1     ContainerCreating   0          7s\nmongo-mongodb-1           0/1     ContainerCreating   0          40s\nmongo-mongodb-1           0/1     Running             0          41s\nmongo-mongodb-1           1/1     Running             0          50s\nmongo-mongodb-2           0/1     Pending             0          0s\nmongo-mongodb-2           0/1     Pending             0          43s\nmongo-mongodb-2           0/1     ContainerCreating   0          43s\nmongo-mongodb-2           0/1     ContainerCreating   0          69s\nmongo-mongodb-2           0/1     Running             0          70s\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once pods are running, examine the pods"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -w --output custom-columns=NAME:metadata.name,IP:status.podIP,NODE:spec.nodeName,STATUS:status.phase\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME                      IP             NODE           STATUS\nmongo-mongodb-0           10.129.2.17    ocp-worker-8   Running ## Availability zone 3\nmongo-mongodb-1           10.130.1.107   ocp-worker-1   Running ## Availability zone 1\nmongo-mongodb-2           10.130.2.140   ocp-worker-4   Running ## Availability zone 2\nmongo-mongodb-arbiter-0   10.129.2.16    ocp-worker-8   Running \n")))),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new MongoDB client container to access the MongoDB database"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run --namespace mongo mongo-mongodb-client --rm --tty -i --restart='Never' --env=\"MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD\" --image docker.io/bitnami/mongodb:6.0.3-debian-11-r20 --command -- bash\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the container prompt, run the following command to connect to the database"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mongosh admin --host "mongo-mongodb-0.mongo-mongodb-headless.mongo1.svc.cluster.local:27017, mongo-mongodb-1.mongo-mongodb-headless.mongo1.svc.cluster.local:27017, mongo-mongodb-2.mongo-mongodb-headless.mongo1.svc.cluster.local:27017" \\ \n--authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD\n')))),(0,a.kt)("p",null,"   use myNewDatabase\ndb.myCollection.insertOne( { x: 1 } );"))}c.isMDXComponent=!0}}]);