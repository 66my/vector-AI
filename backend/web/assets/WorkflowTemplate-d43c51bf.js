import{r as f,u as ue,U as ie,e as de,f as n,g as c,z as k,l as o,j as t,q as p,t as i,p as l,i as W,F as J,x as Y,k as S,a as pe,b as me,d as fe,o as ge,O as ve,m as q,Q as we,J as ne,n as ke,V as ye,w as be,G as xe}from"./index-f19a36db.js";import{p as he,z as Te,U as De,A as Ce,B as Ee,C as $e,D as Ue,E as Ve,_ as Ne,a as Oe,b as Se,c as We,d as Ie,e as Pe,f as Me,g as Re,h as Ae,i as je,j as Be,k as qe,l as Fe,m as He,n as Le,o as ze,q as Ze,r as Ge,s as Je,t as Ye,u as Xe,v as Qe,w as Ke,x as et,y as tt}from"./style-b479b0a1.js";import{_ as ot}from"./MarkdownEditor-477d5f97.js";import{_ as at}from"./UploaderFieldUse-ba09f33a.js";import{_ as st}from"./_plugin-vue_export-helper-c27b6911.js";import"./TemperatureInput-5ab7dd29.js";import"./userDatabase-78af9299.js";const nt={__name:"WorkflowEditor",props:{title:{type:String,required:!0},brief:{type:String,required:!0,default:""},images:{type:Array,required:!0,default:()=>[]},tags:{type:Array,required:!0},nodes:{type:Array,required:!0},edges:{type:Array,required:!0}},emits:["ok"],setup(le,{expose:_,emit:F}){const y=le,I=f(y.title),C=f(y.brief),x=f(y.images),E=f(y.tags.map(a=>a.tid)),s=f(!1),X=()=>{s.value=!0},H=a=>{F("ok",{title:I.value,brief:C.value,images:x.value,tags:E.value,workflow:V()}),s.value=!1};_({showModal:X});const $=f(!1),{t:m}=ue(),{addEdges:g,updateEdge:h,onConnect:U,toObject:V}=he();U(a=>{a.animated=!0,a.style={strokeWidth:3,stroke:"#565656"},g([a])});const T=({edge:a,connection:e})=>{h(a,e)},u=f([...y.nodes,...y.edges]),P=a=>{},N=a=>{u.value=u.value.filter(e=>e.id!==a.id),u.value=u.value.filter(e=>!(e.source&&e.source===a.id||e.target&&e.target===a.id))},M=a=>{u.value=u.value.filter(e=>!(e.source===a.edge.source&&e.target===a.edge.target&&e.sourceHandle===a.edge.sourceHandle&&e.targetHandle===a.edge.targetHandle))};ie(()=>{u.value.forEach(a=>{a.events={change:e=>P(),delete:e=>N(e)}})});let L=null;const R=a=>{L=a};let A=null;const j=a=>{a.dataTransfer.setData("nodeType",a.target.id)},z=a=>{const e=a.srcElement.id,w=O[e],v=Ve(),D=JSON.parse(JSON.stringify(B[e].props.templateData));D.description=m(`components.nodes.${w}.${e}.description`),Object.keys(D.template).forEach(b=>{D.template[b].display_name=m(`components.nodes.${w}.${e}.${b}`)});const Z=A.getBoundingClientRect(),{x:ee,y:te,zoom:G}=L.viewport.value,oe=a.clientX-Z.left,ae=a.clientY-Z.top,se={id:v,type:e,category:w,position:{x:(oe-ee)/G,y:(ae-te)/G},data:D,events:{change:b=>P(),delete:b=>N(b)}};u.value.push(se)},Q=a=>{a.preventDefault(),A=a.target},K=Object.assign({"/src/components/nodes/controlFlows/Conditional.vue":Ne,"/src/components/nodes/controlFlows/Empty.vue":Oe,"/src/components/nodes/controlFlows/RandomChoice.vue":Se,"/src/components/nodes/fileProcessing/FileLoader.vue":We,"/src/components/nodes/imageGeneration/StableDiffusion.vue":Ie,"/src/components/nodes/llms/ChatGLM.vue":Pe,"/src/components/nodes/llms/OpenAI.vue":Me,"/src/components/nodes/outputs/Document.vue":Re,"/src/components/nodes/outputs/Email.vue":Ae,"/src/components/nodes/outputs/Mindmap.vue":je,"/src/components/nodes/outputs/Text.vue":Be,"/src/components/nodes/textProcessing/ListRender.vue":qe,"/src/components/nodes/textProcessing/MarkdownToHtml.vue":Fe,"/src/components/nodes/textProcessing/TemplateCompose.vue":He,"/src/components/nodes/textProcessing/TextInOut.vue":Le,"/src/components/nodes/textProcessing/TextSplitters.vue":ze,"/src/components/nodes/tools/ImageSearch.vue":Ze,"/src/components/nodes/tools/ProgrammingFunction.vue":Ge,"/src/components/nodes/triggers/ButtonTrigger.vue":Je,"/src/components/nodes/vectorDb/AddData.vue":Ye,"/src/components/nodes/vectorDb/DeleteData.vue":Xe,"/src/components/nodes/vectorDb/Search.vue":Qe,"/src/components/nodes/webCrawlers/BilibiliCrawler.vue":Ke,"/src/components/nodes/webCrawlers/TextCrawler.vue":et,"/src/components/nodes/webCrawlers/YoutubeCrawler.vue":tt}),B={},d={},O={};return Object.entries(K).forEach(([a,e])=>{const w=a.match(/\/([^/]+)\.vue$/)[1];B[w]=de(e.default);const v=a.match(/\/([^/]+)\/[^/]+\.vue$/)[1];d[v]||(d[v]=[]),d[v].push(w),O[w]=v}),(a,e)=>{const w=n("a-typography-text"),v=n("a-divider"),D=n("a-modal"),Z=n("a-button"),ee=n("a-space"),te=n("a-menu-item"),G=n("a-sub-menu"),oe=n("a-menu"),ae=n("a-layout-sider"),se=n("a-layout-content"),b=n("a-layout");return c(),k(D,{open:s.value,"onUpdate:open":e[8]||(e[8]=r=>s.value=r),width:"100%","wrap-class-name":"full-modal",onOk:H,"ok-text":l(m)("common.save")},{title:o(()=>[t(ee,null,{default:o(()=>[t(w,{style:{"font-size":"18px"},editable:{triggerType:["text","icon"]},content:I.value,"onUpdate:content":e[0]||(e[0]=r=>I.value=r)},null,8,["content"]),t(v,{type:"vertical"}),t(Te,{modelValue:E.value,"onUpdate:modelValue":e[1]||(e[1]=r=>E.value=r)},null,8,["modelValue"]),t(v,{type:"vertical"}),t(Z,{type:"primary",onClick:e[6]||(e[6]=r=>$.value=!0)},{default:o(()=>[p(i(l(m)("components.workspace.workflowEditor.brief_editor"))+" ",1),t(D,{title:l(m)("components.workspace.workflowEditor.brief_editor"),open:$.value,onCancel:e[4]||(e[4]=r=>$.value=!1),onOk:e[5]||(e[5]=r=>$.value=!1),"ok-text":l(m)("common.save")},{default:o(()=>[t(ot,{markdown:C.value,"onUpdate:markdown":e[2]||(e[2]=r=>C.value=r)},null,8,["markdown"]),t(v,null,{default:o(()=>[p(i(l(m)("components.workspace.workflowEditor.brief_images")),1)]),_:1}),t(at,{modelValue:x.value,"onUpdate:modelValue":e[3]||(e[3]=r=>x.value=r),multiple:!0},null,8,["modelValue"])]),_:1},8,["title","open","ok-text"])]),_:1})]),_:1})]),default:o(()=>[t(b,{"has-sider":"",style:{height:"100%"}},{default:o(()=>[t(ae,{style:{overflow:"auto",backgroundColor:"#fff"},class:"custom-scrollbar"},{default:o(()=>[t(oe,{theme:"light",mode:"inline"},{default:o(()=>[(c(!0),W(J,null,Y(Object.keys(d),(r,ce)=>(c(),k(G,{key:`category-${ce}`},{title:o(()=>[p(i(l(m)(`components.nodes.${r}.title`)),1)]),default:o(()=>[(c(!0),W(J,null,Y(d[r],(re,_e)=>(c(),k(te,{id:re,draggable:"true",onDragstart:j,onDragend:z,key:`node-${_e}`},{default:o(()=>[S("span",null,i(l(m)(`components.nodes.${r}.${re}.title`)),1)]),_:2},1032,["id"]))),128))]),_:2},1024))),128))]),_:1})]),_:1}),t(b,null,{default:o(()=>[t(se,{style:{margin:"24px 16px 0",overflow:"initial"}},{default:o(()=>[t(l(De),{modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=r=>u.value=r),"default-edge-options":{type:"smoothstep"},"node-types":B,edgesUpdatable:!0,onEdgeUpdate:T,onPaneReady:R,onDragover:Q,onEdgeDoubleClick:M,"snap-to-grid":!0,"snap-grid":[20,20]},{default:o(()=>[t(l(Ce)),t(l(Ee)),t(l($e),{variant:l(Ue).Dots},null,8,["variant"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["open","ok-text"])}}};const lt={key:0,class:"space-container"},rt={style:{"margin-bottom":"10px"}},ut={style:{"margin-bottom":"10px"}},ct=["src"],_t=["src"],it={__name:"WorkflowTemplate",setup(le){const{t:_}=ue(),F=f(!0),y=f(!1),I=pe(),C=me(),x=fe(),E=I.params.workflowTemplateId,s=f({});ge(async()=>{const g=await ve("get_template",{tid:E});if(g.status!=200){q.error(_("workspace.workflowSpace.get_workflow_failed")),C.push({name:"Workspace"});return}s.value=g.data,F.value=!1});const X=async()=>{const g=await be("create",s.value);if(g.status==200)q.success(_("workspace.workflowTemplate.add_success"));else{q.error(_("workspace.workflowTemplate.add_failed"));return}const h=s.value;x.addUserWorkflow(h),x.setUserWorkflowsTotal(x.userWorkflowsTotal+1),C.push({name:"WorkflowUse",params:{workflowId:g.data.wid}})},H=f(null),$=()=>{H.value.showModal()},m=async g=>{const{title:h,brief:U,images:V,tags:T,workflow:u}=g;(await xe("update",{tid:E,title:h,brief:U,images:V,tags:T,data:u})).status==200?(q.success(_("workspace.workflowTemplate.update_success")),s.value.title=h,s.value.brief=U,s.value.images=V,s.value.tags=T,s.value.data=u):q.error(_("workspace.workflowTemplate.update_failed"))};return(g,h)=>{const U=n("a-skeleton"),V=n("router-link"),T=n("a-breadcrumb-item"),u=n("a-breadcrumb"),P=n("a-typography-title"),N=n("a-typography-text"),M=n("a-divider"),L=n("a-tag"),R=n("a-space"),A=n("a-button"),j=n("a-col"),z=n("a-row"),Q=n("a-carousel"),K=n("a-spin"),B=we("highlight");return F.value?(c(),W("div",lt,[t(U,{active:""})])):(c(),k(K,{key:1,spinning:y.value,class:"space-container"},{default:o(()=>[t(u,null,{default:o(()=>[t(T,null,{default:o(()=>[t(V,{to:"/workflow?tab=official-workflow-templates"},{default:o(()=>[p(i(l(_)("workspace.workflowSpaceMain.official_workflow_template")),1)]),_:1})]),_:1}),t(T,null,{default:o(()=>[p(i(s.value.title),1)]),_:1})]),_:1}),t(z,{justify:"space-around"},{default:o(()=>[t(j,{lg:12,md:12,sm:24,xs:24},{default:o(()=>[t(P,null,{default:o(()=>[p(i(`${l(_)("workspace.workflowTemplate.template")}: ${s.value.title}`),1)]),_:1}),S("div",rt,[t(R,null,{default:o(()=>[t(N,{type:"secondary"},{default:o(()=>[p(i(l(_)("common.update_time_format",{time:new Date(s.value.update_time).toLocaleString()})),1)]),_:1}),t(M,{type:"vertical"}),(c(!0),W(J,null,Y(s.value.tags,(d,O)=>(c(),k(L,{color:d.color,key:O},{default:o(()=>[p(i(d.title),1)]),_:2},1032,["color"]))),128))]),_:1})]),S("div",ut,[t(R,null,{default:o(()=>[t(N,{type:"secondary"},{default:o(()=>[p(i(l(_)("workspace.workflowTemplate.author",{author:"VectorVein"})),1)]),_:1}),t(M,{type:"vertical"}),s.value.used_count>10?(c(),k(N,{key:0,type:"secondary"},{default:o(()=>[p(i(l(_)("workspace.workflowTemplate.used_count",{count:s.value.used_count})),1)]),_:1})):ne("",!0)]),_:1})]),t(R,null,{default:o(()=>[t(A,{type:"primary",onClick:X},{default:o(()=>[p(i(l(_)("workspace.workflowTemplate.add_to_my_workflows")),1)]),_:1}),s.value.is_owner?(c(),k(A,{key:0,type:"primary",onClick:$},{default:o(()=>[p(i(l(_)("workspace.workflowTemplate.edit_template")),1)]),_:1})):ne("",!0),(c(),k(nt,{ref_key:"editorModalRef",ref:H,title:s.value.title,brief:s.value.brief,images:s.value.images,tags:s.value.tags,key:s.value.wid,nodes:s.value.data.nodes,edges:s.value.data.edges,onOk:m},null,8,["title","brief","images","tags","nodes","edges"]))]),_:1})]),_:1})]),_:1}),t(M),t(z,{justify:"space-around"},{default:o(()=>[s.value.images.length>0?(c(),k(j,{key:0,lg:12,md:12,sm:24,xs:24},{default:o(()=>[t(Q,{autoplay:"",arrows:"","dots-class":"slick-dots slick-thumb"},{customPaging:o(d=>[S("a",null,[S("img",{src:s.value.images[d.i]},null,8,ct)])]),default:o(()=>[(c(!0),W(J,null,Y(s.value.images,(d,O)=>(c(),W("div",{key:O},[S("img",{src:d},null,8,_t)]))),128))]),_:1})]),_:1})):ne("",!0),t(j,{lg:12,md:12,sm:24,xs:24},{default:o(()=>[ke(t(l(ye),{source:s.value.brief,class:"custom-scrollbar markdown-body custom-hljs"},null,8,["source"]),[[B]])]),_:1})]),_:1})]),_:1},8,["spinning"]))}}},kt=st(it,[["__scopeId","data-v-15201269"]]);export{kt as default};