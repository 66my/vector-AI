import{I as me,c as a,_ as pe,W as be,s as y,r as fe,a as ke,x as ve,aQ as ge,V as he,h as x,j as e,a7 as ye,ab as xe,a1 as C,M as r,f as n,B as l,T as i,D as _,aN as Ce,aO as we,K as c,E as f,F as I,G as W}from"./index-CEGDekEr.js";import{_ as Te}from"./UploaderFieldUse-BhBB2cMF.js";import{a as Ie,r as K}from"./database-CIn0kHLZ.js";import{F as qe}from"./FileCabinet-DCS-U6Km.js";import{D as je}from"./Delete-Bn9DTipa.js";import{P as Ue}from"./Plus-DRYyUj77.js";const Ve=me("table-file",!1,function(s){return a("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6Z",fill:s.colors[1],stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M4 18H44",stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M17.5 18V42",stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M30.5 18V42",stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M4 30H44",stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V8",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null)])}),De={key:0,class:"loading-container"},Re={key:1,class:"dataspace-container"},Se={__name:"RelationalDatabaseTableCreate",setup(s){const{t}=be(),j=y(!0),Q=ye(),Z=xe(),U=Q.params.databaseId,S=y({}),o=fe({add_method:"table_file",files:[],sql_statement:""}),k=y(0),J=y([{title:t("workspace.databaseTableCreate.add_table")},{title:t("workspace.databaseTableCreate.table_schema")},{title:t("common.finish")}]),X=ke(()=>{if(k.value==0){if(o.add_method=="table_file")return o.files.length==0;if(o.add_method=="sql")return o.sql_statement==""}else if(k.value==1&&o.add_method=="table_file")return Object.keys(m.value).length==0}),Y=async()=>{const u=await Ie("get",{rid:U});u.status==200?S.value=u.data:C.error(u.msg)};ve(async()=>{j.value=!0,await Y(),j.value=!1});const L=y(!1),ee=async()=>{if(o.add_method=="sql"){if(o.sql_statement.length==0){C.error(t("workspace.databaseTableCreate.sql_statement_empty"));return}}else if(m.value.length==0){C.error(t("workspace.databaseTableCreate.table_schema_empty"));return}L.value=!0;const u=await K("create",{rid:U,...o,table_schema:m.value});u.status===200?await Z.push(`/data/relational-db/${U}`):u.status===400?C.error(t("workspace.databaseTableCreate.table_name_already_exists")):u.status===402?C.error(t("workspace.databaseTableCreate.not_enough_quota")):C.error(u.msg),L.value=!1},m=y([]),q=y(!1),V=[{title:t("workspace.databaseTableCreate.column_name"),key:"name",dataIndex:"name"},{title:t("workspace.databaseTableCreate.column_type"),key:"type",dataIndex:"type",width:"150px"},{title:t("workspace.databaseTableCreate.max_length"),key:"max_length",dataIndex:"max_length",width:"100px"}],ae=[...V,{title:t("common.action"),key:"action",dataIndex:"action",width:"80px"}],O=ge.map(u=>({label:t(`workspace.databaseTableCreate.type_${u}`)+`(${u})`,value:u})),M=async()=>{q.value=!0;try{const u=await K("get_table_schema",{rid:U,...o});u.status==200?(C.success(t("common.success")),m.value=u.data):C.error(u.msg)}catch(u){console.error(u)}q.value=!1},D=y("MyTable"),te=()=>{m.value.length==0&&m.value.push({table_name:D.value,columns:[]});const u=m.value[0].columns.map(p=>p.index).reduce((p,H)=>Math.max(p,H),0);m.value[0].columns.push({index:u+1,name:`column_${u+1}`,type:"VARCHAR",max_length:255})};he(()=>{o.add_method==="manual"&&m.value.length>0&&(m.value[0].table_name=D.value)});const le=u=>{m.value[0].columns.splice(u,1)};return(u,p)=>{const H=r("a-spin"),B=r("router-link"),$=r("a-breadcrumb-item"),ne=r("a-breadcrumb"),F=r("a-col"),se=r("a-steps"),A=r("a-radio-button"),oe=r("a-radio-group"),N=r("a-form-item"),de=r("a-alert"),v=r("a-flex"),ue=r("a-textarea"),w=r("a-typography-text"),re=r("a-form"),h=r("a-button"),ie=r("a-list-item"),_e=r("a-list"),z=r("a-card"),P=r("a-input"),E=r("a-select"),G=r("a-input-number"),R=r("a-table"),ce=r("a-row");return j.value?(n(),x("div",De,[a(H)])):(n(),x("div",Re,[a(ce,{justify:"center",gutter:[16,16]},{default:e(()=>[a(F,{xl:16,lg:18,md:20,sm:22,xs:24},{default:e(()=>[a(ne,null,{default:e(()=>[a($,null,{default:e(()=>[a(B,{to:"/data?tab=relational-database"},{default:e(()=>[a(l(qe)),i(" "+_(l(t)("components.layout.basicHeader.data_space")),1)]),_:1})]),_:1}),a($,null,{default:e(()=>[a(B,{to:`/data/relational-db/${S.value.rid}`},{default:e(()=>[a(l(Ce)),i(" "+_(S.value.name),1)]),_:1},8,["to"])]),_:1}),a($,null,{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.add_table")),1)]),_:1})]),_:1})]),_:1}),a(F,{xl:16,lg:18,md:20,sm:22,xs:24},{default:e(()=>[a(z,{loading:j.value},{title:e(()=>[a(l(we)),i(" "+_(l(t)("workspace.databaseTableCreate.add_table")),1)]),default:e(()=>[a(se,{current:k.value,items:J.value,style:{"margin-bottom":"30px"}},null,8,["current","items"]),k.value==0?(n(),c(re,{key:0,"label-col":{span:6}},{default:e(()=>[a(N,{label:l(t)("workspace.databaseTableCreate.add_method")},{default:e(()=>[a(oe,{value:o.add_method,"onUpdate:value":p[0]||(p[0]=d=>o.add_method=d)},{default:e(()=>[a(A,{value:"table_file"},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.add_method_table_file")),1)]),_:1}),a(A,{value:"manual"},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.add_method_manual")),1)]),_:1}),a(A,{value:"sql"},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.add_method_sql")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),o.add_method=="table_file"?(n(),c(v,{key:0,vertical:"",gap:"middle",style:{"margin-bottom":"30px"}},{default:e(()=>[a(de,{message:l(t)("workspace.databaseTableCreate.upload_file_alert_title"),description:l(t)("workspace.databaseTableCreate.upload_file_alert_description"),type:"info","show-icon":""},null,8,["message","description"]),a(Te,{modelValue:o.files,"onUpdate:modelValue":p[1]||(p[1]=d=>o.files=d),multiple:!0,"support-file-types":".xlsx, .xls, .csv, .txt, .sql"},null,8,["modelValue"])]),_:1})):o.add_method=="sql"?(n(),c(N,{key:1,label:l(t)("workspace.databaseTableCreate.sql_statement")},{default:e(()=>[a(ue,{value:o.sql_statement,"onUpdate:value":p[2]||(p[2]=d=>o.sql_statement=d),status:o.sql_statement.length>1e4?"error":"","auto-size":{minRows:2,maxRows:30},"show-count":!0},null,8,["value","status"]),o.sql_statement.length>1e4?(n(),c(w,{key:0,type:"danger"},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.sql_statement_too_long")),1)]),_:1})):f("",!0)]),_:1},8,["label"])):f("",!0)]),_:1})):f("",!0),k.value==1?(n(),c(v,{key:1,gap:"middle",vertical:""},{default:e(()=>[o.add_method!="manual"?(n(),x(I,{key:0},[o.add_method=="table_file"?(n(),c(z,{key:0,title:l(t)("workspace.databaseTableCreate.uploaded_files")},{extra:e(()=>[a(h,{type:"primary",onClick:M,loading:q.value},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.get_table_schema")),1)]),_:1},8,["loading"])]),default:e(()=>[a(_e,{size:"small","data-source":o.files},{renderItem:e(({item:d})=>[a(ie,null,{default:e(()=>[a(l(Ve)),i(" "+_(d),1)]),_:2},1024)]),_:1},8,["data-source"])]),_:1},8,["title"])):o.add_method=="sql"?(n(),c(h,{key:1,type:"primary",onClick:M,loading:q.value},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.get_table_schema")),1)]),_:1},8,["loading"])):f("",!0),(n(!0),x(I,null,W(m.value,d=>(n(),c(R,{columns:V,"data-source":d.columns,pagination:{hideOnSinglePage:!0},style:{width:"100%"}},{title:e(()=>[a(v,{gap:"small",align:"center"},{default:e(()=>[a(w,{strong:"",style:{"flex-shrink":"0"}},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.table_name")),1)]),_:1}),a(P,{value:d.table_name,"onUpdate:value":T=>d.table_name=T},null,8,["value","onUpdate:value"])]),_:2},1024)]),bodyCell:e(({column:T,record:b})=>[T.dataIndex=="type"?(n(),c(E,{key:0,value:b.type,"onUpdate:value":g=>b.type=g,options:l(O)},null,8,["value","onUpdate:value","options"])):T.dataIndex=="max_length"&&b.type=="VARCHAR"?(n(),c(G,{key:1,value:b.max_length,"onUpdate:value":g=>b.max_length=g,min:1},null,8,["value","onUpdate:value"])):f("",!0)]),_:2},1032,["data-source"]))),256))],64)):o.add_method=="manual"?(n(),x(I,{key:1},[m.value.length>0?(n(),c(R,{key:0,disabled:Object.keys(m.value).length==0,columns:ae,"data-source":m.value[0].columns,pagination:{hideOnSinglePage:!0}},{title:e(()=>[a(v,{gap:"small",align:"center"},{default:e(()=>[a(w,{strong:"",style:{"flex-shrink":"0"}},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.table_name")),1)]),_:1}),a(P,{value:D.value,"onUpdate:value":p[3]||(p[3]=d=>D.value=d)},null,8,["value"])]),_:1})]),bodyCell:e(({column:d,index:T,record:b})=>[d.dataIndex=="name"?(n(),x(I,{key:0},[a(P,{value:b.name,"onUpdate:value":g=>b.name=g},null,8,["value","onUpdate:value"]),b.name.includes(" ")?(n(),c(w,{key:0,type:"danger"},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.no_space_in_column_name")),1)]),_:1})):f("",!0)],64)):d.dataIndex=="type"?(n(),c(E,{key:1,value:b.type,"onUpdate:value":g=>b.type=g,options:l(O),style:{width:"100%"}},null,8,["value","onUpdate:value","options"])):d.dataIndex=="max_length"&&b.type=="VARCHAR"?(n(),c(G,{key:2,value:b.max_length,"onUpdate:value":g=>b.max_length=g,min:1},null,8,["value","onUpdate:value"])):d.dataIndex=="action"?(n(),c(h,{key:3,type:"text",onClick:g=>le(T)},{icon:e(()=>[a(l(je))]),_:2},1032,["onClick"])):f("",!0)]),_:1},8,["disabled","data-source"])):f("",!0),a(h,{onClick:te},{icon:e(()=>[a(l(Ue))]),default:e(()=>[i(" "+_(l(t)("workspace.databaseTableCreate.add_column")),1)]),_:1})],64)):o.add_method=="sql"?(n(),c(v,{key:2,vertical:"",gap:"middle"},{default:e(()=>[a(h,{type:"primary",onClick:M,loading:q.value},{default:e(()=>[i(_(l(t)("workspace.databaseTableCreate.get_table_schema")),1)]),_:1},8,["loading"]),(n(!0),x(I,null,W(m.value,d=>(n(),c(R,{columns:V,"data-source":d.columns,pagination:{hideOnSinglePage:!0},style:{width:"100%"}},{title:e(()=>[a(v,{gap:"small",align:"center"},{default:e(()=>[a(w,{strong:""},{default:e(()=>[i(_(d.table_name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["data-source"]))),256))]),_:1})):f("",!0)]),_:1})):f("",!0),k.value==2?(n(),c(v,{key:2},{default:e(()=>[a(v,{vertical:"",gap:"middle",style:{width:"100%"}},{default:e(()=>[(n(!0),x(I,null,W(m.value,d=>(n(),c(R,{columns:V,"data-source":d.columns,pagination:{hideOnSinglePage:!0},style:{width:"100%"}},{title:e(()=>[a(v,{gap:"small",align:"center"},{default:e(()=>[a(w,{strong:""},{default:e(()=>[i(_(d.table_name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["data-source"]))),256))]),_:1})]),_:1})):f("",!0),a(v,{justify:"flex-end",gap:"small",style:{"margin-top":"16px"}},{default:e(()=>[a(h,{disabled:k.value==0,onClick:p[4]||(p[4]=d=>k.value-=1)},{default:e(()=>[i(_(l(t)("common.previous_step")),1)]),_:1},8,["disabled"]),k.value<2?(n(),c(h,{key:0,type:"primary",disabled:X.value,onClick:p[5]||(p[5]=d=>k.value+=1)},{default:e(()=>[i(_(l(t)("common.next_step")),1)]),_:1},8,["disabled"])):k.value==2?(n(),c(h,{key:1,type:"primary",loading:L.value,onClick:ee},{default:e(()=>[i(_(l(t)("common.finish")),1)]),_:1},8,["loading"])):f("",!0)]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]))}}},We=pe(Se,[["__scopeId","data-v-65cac9b3"]]);export{We as default};