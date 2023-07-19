import{d as D,o as r,c as a,a as u,t as i,u as m,F as _,b as v,r as B,e as w,p as k,f as $,g as C}from"./index.9e5d9cb0.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";const S="/fe_resume/assets/avatar.9b3b448e.jpg",I="/fe_resume/assets/\u5FAE\u4FE1_wechat.8cecc907.svg",R="/fe_resume/assets/\u7535\u8BDD\u547C\u53EB_phone-call.e5887e9e.svg",j="/fe_resume/assets/\u53D1\u9001\u90AE\u4EF6_send-email.06284f48.svg",g="/fe_resume/assets/\u7784\u51C6_aiming.46c902dd.svg";var V=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var t=document.activeElement,n=[],E=0;E<s.rangeCount;E++)n.push(s.getRangeAt(E));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||n.forEach(function(o){s.addRange(o)}),t&&t.focus()}},T=V,A={"text/plain":"Text","text/html":"Url",default:"Text"},M="Copy to clipboard: #{key}, Enter";function N(s){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,t)}function z(s,t){var n,E,o,e,d,l,f=!1;t||(t={}),n=t.debug||!1;try{o=T(),e=document.createRange(),d=document.getSelection(),l=document.createElement("span"),l.textContent=s,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(F){if(F.stopPropagation(),t.format)if(F.preventDefault(),typeof F.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=A[t.format]||A.default;window.clipboardData.setData(p,s)}else F.clipboardData.clearData(),F.clipboardData.setData(t.format,s);t.onCopy&&(F.preventDefault(),t.onCopy(F.clipboardData))}),document.body.appendChild(l),e.selectNodeContents(l),d.addRange(e);var b=document.execCommand("copy");if(!b)throw new Error("copy command was unsuccessful");f=!0}catch(F){n&&console.error("unable to copy using execCommand: ",F),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",s),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),E=N("message"in t?t.message:M),window.prompt(E,s)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(e):d.removeAllRanges()),l&&document.body.removeChild(l),o()}return f}var G=z;const q=v('<div><input type="checkbox" id="my-modal" class="modal-toggle"><label for="my-modal" class="modal cursor-pointer"><label class="modal-box relative" for=""><h3 class="text-lg font-bold">\u63D0\u793A!</h3><p class="py-4">\u5185\u5BB9\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F</p></label></label></div>',1),H={class:"p-4 h-full text-white shadow-2xl duration-300 rounded-sm",style:{"background-color":"#42946C"}},P={class:"md:block"},W=u("div",{class:"flex justify-center"},[u("img",{class:"h-40 mx-4 rounded-lg",src:S})],-1),J={class:"text-center mt-10 justify-center items-center"},L={class:"text-xl font-bold"},O={class:"md:text-lg mt-4"},K=u("hr",{class:"pb-1 mt-6",style:{color:"#3C855D"}},null,-1),Q={class:"mb-10 ml-8 mr-4 md:block",style:{cursor:"pointer"}},X=u("div",{class:"mr-2 flex justify-center items-center"},[u("img",{src:I,alt:""})],-1),Y={for:"my-modal",style:{cursor:"pointer"}},Z=u("div",{class:"mr-2 flex justify-center items-center"},[u("img",{src:R})],-1),uu={for:"my-modal",style:{cursor:"pointer"}},eu=u("div",{class:"mr-2 flex justify-center items-center"},[u("img",{src:j})],-1),tu={for:"my-modal",style:{cursor:"pointer"}},su=["href"],ou=u("div",{class:"mr-2 flex justify-center items-center"},[u("img",{src:g})],-1),nu=u("div",{class:"border-b-1 border-white"},[u("span",{class:"text-grey-200"},"\u535A\u5BA2\u94FE\u63A5")],-1),lu=[ou,nu],ru=["href"],au=u("div",{class:"mr-2 flex justify-center items-center"},[u("img",{src:g})],-1),iu=u("div",{class:"border-b-1 border-white"},[u("span",{class:"text-grey-200"},"Github")],-1),cu=[au,iu],du=D({__name:"index",props:{userInfo:{type:Object}},setup(s){const t=s,{userInfo:n}=t;let E=o=>[G(o)];return(o,e)=>{var d,l,f,b,F,p,x;return r(),a(_,null,[q,u("div",H,[u("div",P,[W,u("div",J,[u("h1",L,i((d=m(n))==null?void 0:d.name),1),u("div",O,i((l=m(n))==null?void 0:l.job),1)])]),K,u("div",Q,[u("div",{class:"my-5 text-lg flex",onClick:e[0]||(e[0]=y=>{var h;return m(E)(((h=m(n))==null?void 0:h.wechat)||"")})},[X,u("label",Y,i((f=m(n))==null?void 0:f.wechat),1)]),u("div",{class:"my-5 text-lg flex",onClick:e[1]||(e[1]=y=>{var h;return m(E)(((h=m(n))==null?void 0:h.phone)||"")})},[Z,u("label",uu,i((b=m(n))==null?void 0:b.phone),1)]),u("div",{class:"my-5 text-lg flex",onClick:e[2]||(e[2]=y=>{var h;return m(E)(((h=m(n))==null?void 0:h.email)||"")})},[eu,u("label",tu,i((F=m(n))==null?void 0:F.email),1)]),u("a",{href:(p=m(n))==null?void 0:p.blogUrl,class:"my-5 flex",target:"_blank"},lu,8,su),u("a",{href:(x=m(n))==null?void 0:x.githubUrl,class:"my-5 flex",target:"_blank"},cu,8,ru)])])],64)}}}),c=s=>(k("data-v-b25a8aae"),s=s(),$(),s),Eu={class:"p-4 h-full shadow-2xl",style:{"border-radius":"1rem"}},mu={class:"mx-4 mb-6"},Fu=c(()=>u("h1",{class:"mb-4 text-3xl text-gray-700 font-bold"},"\u4E2A\u4EBA\u4F18\u52BF",-1)),_u=c(()=>u("span",{class:"iconfont icon-pointer mr-2"},null,-1)),Bu=c(()=>u("div",{class:"mx-4 mb-6"},[u("h1",{class:"mb-4 text-3xl text-gray-700 font-bold"},"\u6559\u80B2\u7ECF\u5386"),u("div",{class:"flex justify-between text-xl"},[u("text",null,"\u91CD\u5E86\u5927\u5B66"),u("text",null,"\u4FE1\u606F\u4E0E\u8BA1\u7B97\u79D1\u5B66"),u("text",null,"2020-2024")])],-1)),hu={class:"mx-4 mb-6"},fu=c(()=>u("h1",{class:"mb-4 text-3xl text-gray-700 font-bold"},"\u9879\u76EE\u7ECF\u5386",-1)),pu={class:"flex text-xl font-medium text-gray-800 justify-between",style:{"align-items":"center"}},bu={class:"text-md"},Du={class:"mt-1"},xu=c(()=>u("text",{class:"mr-4 font-semibold"},"\u9879\u76EE\u4ECB\u7ECD:",-1)),yu=c(()=>u("p",{class:"mr-4 font-semibold"},"\u6211\u7684\u5DE5\u4F5C:",-1)),Cu=c(()=>u("span",{class:"iconfont icon-pointer mr-2"},null,-1)),Au={class:"flex justify-between"},gu=c(()=>u("text",{class:"mr-4 font-semibold"},"\u6280\u672F\u6808:",-1)),vu=["href"],wu=c(()=>u("span",{class:"font-semibold border-b-2 border-solid border-gray-800 shadow-sm hover:font-bold hover:cursor-pointer"}," \u4E86\u89E3\u66F4\u591A ",-1)),ku=[wu],$u={class:"mx-4 mb-6"},Uu=c(()=>u("h1",{class:"mb-4 text-3xl text-gray-700 font-bold"},"\u5B9E\u4E60\u7ECF\u5386",-1)),Su={class:"mb-2"},Iu={class:"text-2xl font-medium border-b-2 border-yellow-600"},Ru={class:"flex text-xl font-medium text-gray-800 justify-between",style:{"align-items":"center"}},ju={class:"text-md"},Vu={class:"mt-1"},Tu=c(()=>u("text",{class:"mr-4 font-semibold"},"\u9879\u76EE\u4ECB\u7ECD:",-1)),Mu=c(()=>u("p",{class:"mr-4 font-semibold"},"\u6211\u7684\u5DE5\u4F5C:",-1)),Nu=c(()=>u("span",{class:"iconfont icon-pointer mr-2"},null,-1)),zu={class:"flex justify-between"},Gu=c(()=>u("text",{class:"mr-4 font-semibold"},"\u6280\u672F\u6808:",-1)),qu=["href"],Hu=c(()=>u("span",{class:"font-semibold border-b-2 border-solid border-gray-800 shadow-sm hover:font-bold hover:cursor-pointer"}," \u4E86\u89E3\u66F4\u591A ",-1)),Pu=[Hu],Wu={class:"mx-4 mb-6"},Ju=c(()=>u("h1",{class:"mb-4 text-3xl text-gray-700 font-bold"},"\u83B7\u5956\u7ECF\u5386",-1)),Lu=c(()=>u("span",{class:"iconfont icon-pointer mr-2"},null,-1)),Ou={class:"mx-4"},Ku=c(()=>u("h1",{class:"mb-8 text-3xl text-gray-700 font-bold"},"\u6280\u672F\u6808",-1)),Qu={class:"flex flex-wrap"},Xu={class:"mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200 hover:text-white hover:bg-gray-700 duration-300 hover:cursor-pointer"},Yu=D({__name:"index",props:{skills:{type:Array},prizes:{type:Array},features:{type:Array},experience:{type:Array},internship:{type:Array}},setup(s){const t=s;return(n,E)=>(r(),a("div",Eu,[u("div",mu,[Fu,(r(!0),a(_,null,B(t.features,o=>(r(),a("p",{class:"text-md",key:o},[_u,w(" "+i(o),1)]))),128))]),Bu,u("div",hu,[fu,u("ul",null,[(r(!0),a(_,null,B(t.experience,o=>(r(),a("li",{class:"mb-4",key:JSON.stringify(o)},[(r(!0),a(_,null,B(o.projects,e=>(r(),a("div",{class:"mb-2",key:e.name},[u("div",pu,[u("text",null,i(e.name),1),u("text",null,i(e.job),1),u("text",null,i(e.time),1)]),u("div",bu,[u("div",Du,[xu,u("text",null,i(e.introduce),1)]),u("div",null,[yu,(r(!0),a(_,null,B(e.myContribution,d=>(r(),a("div",{key:d},[Cu,u("text",null,i(d),1)]))),128))]),u("div",Au,[u("div",null,[gu,u("text",null,i(e.skills),1)]),u("a",{href:e.more,target:"_blank"},ku,8,vu)])])]))),128))]))),128))])]),u("div",$u,[Uu,u("ul",null,[(r(!0),a(_,null,B(t.internship,o=>(r(),a("li",{class:"mb-4",key:JSON.stringify(o.projects)},[u("div",Su,[u("text",Iu,i(o.company),1)]),(r(!0),a(_,null,B(o.projects,e=>(r(),a("div",{class:"mb-2",key:e.name},[u("div",Ru,[u("text",null,i(e.name),1),u("text",null,i(e.job),1),u("text",null,i(e.time),1)]),u("div",ju,[u("div",Vu,[Tu,u("text",null,i(e.introduce),1)]),u("div",null,[Mu,(r(!0),a(_,null,B(e.myContribution,d=>(r(),a("div",{key:d},[Nu,u("text",null,i(d),1)]))),128))]),u("div",zu,[u("div",null,[Gu,u("text",null,i(e.skills),1)]),u("a",{href:e.more,target:"_blank"},Pu,8,qu)])])]))),128))]))),128))])]),u("div",Wu,[Ju,(r(!0),a(_,null,B(s.prizes,o=>(r(),a("div",{key:o},[Lu,u("text",null,i(o),1)]))),128))]),u("div",Ou,[Ku,u("ul",Qu,[(r(!0),a(_,null,B(t.skills,o=>(r(),a("li",{class:"mb-6",key:o},[u("div",null,[u("span",Xu,i(o),1)])]))),128))])])]))}});const Zu=U(Yu,[["__scopeId","data-v-b25a8aae"]]),ue={id:"home",style:{"background-color":"#FFF"}},ee={class:"max-w-screen-lg mx-auto md:flex"},te={class:"md:w-1/3 p-4 relative"},se={class:"md:w-2/3 p-4 w-full"},le=D({__name:"index",setup(s){const t={name:"\u8BF8\u5609\u8BDA",job:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",email:"2253541907@qq.com",phone:"15023092023",wechat:"zaqwertyuioplm7412",blogUrl:"https://jiacheng-coder.github.io/my-blog",githubUrl:"https://github.com/jiacheng-coder"},n=["Vue2","Vue3","Vue Router","Pinia","React","Mobx","\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","Uniapp","TailwindCSS","DaisyUI","GraceUI"],E=["\u719F\u6089HTML,CSS,JS, \u719F\u6089W3C\u6807\u51C6\u4E0EECMA\u89C4\u8303, \u5BF9Typescript\u6709\u4E00\u5B9A\u4E86\u89E3","\u719F\u6089Vue, VueRouter, Pinia, Vitepress\u7B49Vue\u751F\u6001, \u4E86\u89E3\u524D\u7AEF\u5DE5\u7A0B\u5316, \u80FD\u591F\u7ED3\u5408\u5DF2\u6709\u57FA\u7840\u8BBE\u65BD\u5FEB\u901F\u7814\u53D1\u9879\u76EE","\u719F\u6089\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7684\u5F00\u53D1\u4E0A\u7EBF\u6D41\u7A0B, \u62E5\u6709\u5355\u65E5\u7D2F\u8BA1\u6253\u5F00\u6B21\u657010\u4E07+\u5C0F\u7A0B\u5E8F\u7684\u5F00\u53D1\u7EF4\u62A4\u7ECF\u9A8C, \u80FD\u591F\u6839\u636E\u540E\u7AEF\u63A5\u53E3\u5FEB\u901F\u5B8C\u6210\u9875\u9762\u642D\u5EFA","\u6709\u4E00\u5B9A\u7684\u524D\u7AEF\u8C03\u8BD5\u4E0E\u4F18\u5316\u80FD\u529B, \u4F8B\u5982\u5229\u7528\u8C03\u8BD5\u5DE5\u5177\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898, \u4EE5\u53CA\u901A\u8FC7\u53D8\u91CF\u52A0\u9501\u9632\u6B62\u591A\u6B21\u8BF7\u6C42\u51CF\u8F7B\u670D\u52A1\u7AEF\u538B\u529B\u7B49","\u719F\u6089ColorUI, GraceUI, TailwindCSS\u7B49\u7EC4\u4EF6\u5E93, \u5E76\u80FD\u591F\u9488\u5BF9\u5177\u4F53\u4E1A\u52A1\u5BF9\u7EC4\u4EF6\u5E93\u8FDB\u884C\u7B80\u5355\u7684\u4E8C\u6B21\u5F00\u53D1","\u6709\u5199\u535A\u5BA2\u7684\u4E60\u60EF, \u5173\u6CE8\u7528\u6237\u4F53\u9A8C, \u6CE8\u91CD\u6280\u672F\u79EF\u7D2F\u4E0E\u65B0\u6280\u672F\u7684\u63A2\u7D22"],o=[{company:"\u91CD\u5E86\u7535\u8986\u8005\u79D1\u6280\u6709\u9650\u516C\u53F8",projects:[{name:"WeCQU\u5C0F\u7A0B\u5E8F",job:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",time:"2022.9 - 2023.8",introduce:"\u9762\u5411\u5927\u5B66\u751F\u5F00\u53D1\u7684\u6821\u56ED\u4E00\u4F53\u5316\u67E5\u8BE2\u5C0F\u7A0B\u5E8F, \u5355\u65E5\u7D2F\u8BA1\u6253\u5F00\u6B21\u657010\u4E07+",myContribution:["\u7ED3\u5408\u540E\u7AEF\u63A5\u53E3\u6570\u636E, \u4F7F\u7528GraceUI\u7EC4\u4EF6\u5E93\u8FDB\u884C\u6570\u636E\u6E32\u67D3","\u91CD\u6784\u9875\u9762UI, \u7B80\u5316\u539F\u6709JS\u903B\u8F91, \u603B\u91CD\u6784\u7387\u7EA6\u8FBE50%","\u5BF9\u7EC4\u4EF6\u5E93\u4E2D\u7684\u8F6E\u64AD\u56FE\u7EC4\u4EF6\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5, \u5B9E\u73B0\u70B9\u51FB\u8DF3\u8F6Cwebview\u516C\u4F17\u53F7\u63A8\u6587\u7684\u529F\u80FD","\u4F7F\u7528promise\u5C01\u88C5wx.request\u548Cwx.showModal\u8BF7\u6C42","\u901A\u8FC7\u9632\u6296\u9632\u6B62\u53D1\u8D77\u4E8C\u6B21\u767B\u5F55\u8BF7\u6C42,\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B","\u901A\u8FC7setStorage\u5B9E\u73B0\u6570\u636E\u6301\u4E45\u5316,\u5305\u62EC\u7528\u6237\u5934\u50CF\u4E0E\u8BFE\u8868\u4FE1\u606F\u7684\u5B58\u50A8\u7B49"],skills:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F, ColorUI, GraceUI3",more:"https://zhujiacheng612.gitee.io/blog/07.%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D/Wecqu.html"},{name:"\u751F\u6001\u5708\u6821\u56ED\u8BBA\u575B",job:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",time:"2022\u5E7412\u6708 - \u81F3\u4ECA",introduce:"\u57FA\u4E8EUniapp\u5F00\u53D1\u7684\u9AD8\u6821\u8BBA\u575B\u7C7BH5\u7F51\u9875, \u5F71\u54CD\u529B\u6DB5\u76D6\u591A\u6240\u9AD8\u6821",myContribution:["\u57FA\u4E8EGraceUI\u7EC4\u4EF6\u5E93\u7ED3\u5408\u8BBE\u8BA1\u7A3F\u8FDB\u884C\u9875\u9762UI\u7684\u7ED8\u5236","\u4F7F\u7528vue\u7684component\u7EC4\u4EF6\u63D0\u5347\u9875\u9762\u6E32\u67D3\u6548\u7387","\u57FA\u4E8E\u5355\u4F8B\u6A21\u5F0F\u7684\u601D\u60F3, \u4F7F\u7528Vuex\u8FDB\u884C\u5168\u5C40\u72B6\u6001\u7BA1\u7406, \u7EDF\u4E00\u66B4\u9732\u63A5\u53E3\u5BF9\u5168\u5C40\u6570\u636E\u8FDB\u884CCRUD","\u901A\u8FC7watch\u76D1\u542C\u5668\u4E0EVuex\u7684getters\u89E3\u51B3\u4E86\u6D88\u606F\u63D0\u9192\u7684\u7EA2\u70B9\u903B\u8F91\u95EE\u9898"],skills:"Uniapp, GraceUI5",more:"https://zhujiacheng612.gitee.io/blog/07.%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D/ecosystem.html"}]}],e=[{company:"\u7F8E\u56E2",projects:[{name:"\u97E6\u6069\u7CFB\u7EDF",job:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",time:"2023.6 - \u81F3\u4ECA",introduce:"\u8FD0\u8425\u63D0\u6548\u7684 M \u7AEF\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u7F8E\u56E2\u5230\u5BB6\u4E1A\u52A1",myContribution:[],skills:"React18, React Hooks, Webpack5",more:""},{name:"\u7EDF\u4E00\u62DB\u5546\u5E73\u53F0",job:"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",time:"2023.6 - \u81F3\u4ECA",introduce:"\u8FD0\u8425\u63D0\u6548\u7684 M \u7AEF\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u7F8E\u56E2\u5230\u5BB6\u4E1A\u52A1",myContribution:[],skills:"React18, React Hooks, Webpack5, Vite, Monorepo",more:""}]}],d=["\u7B2C\u56DB\u5C4A-\u5B57\u8282\u8DF3\u52A8-\u524D\u7AEF\u9752\u8BAD\u8425-\u7801\u5982\u78D0\u77F3\u5956","2021\u5E74\u5168\u56FD\u5927\u5B66\u751F\u6570\u5B66\u7ADE\u8D5B-\u91CD\u5E86\u8D5B\u533A-\u7701\u7EA7\u4E09\u7B49\u5956"];return(l,f)=>(r(),a("div",ue,[u("div",ee,[u("div",te,[C(du,{userInfo:t})]),u("div",se,[C(Zu,{skills:n,features:E,experience:o,prizes:d,internship:e})])])]))}});export{le as default};
