"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[76],{4026:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(9835),o=a(6970);const i={class:"text-bold text-subtitle1"};function s(t,e,a,s,h,l){const r=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(r,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",i,[(0,n.WI)(t.$slots,"default")])])),_:3},8,["class"])}const h={props:["bgcolor"]};var l=a(1639),r=a(7128),u=a(9984),c=a.n(u);const d=(0,l.Z)(h,[["render",s]]),p=d;c()(h,"components",{QBanner:r.Z})},5424:(t,e,a)=>{a.d(e,{Z:()=>_});var n=a(9835),o=a(6970);const i=(0,n.Uk)(" Mã hộ:"),s=["href"],h=["href"],l=["href"];function r(t,e,a,r,u,c){const d=(0,n.up)("q-icon"),p=(0,n.up)("q-item-label"),m=(0,n.up)("q-item-section"),g=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(g,{class:(0,o.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":c.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey":c.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:(0,o.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,n.Uk)((0,o.zw)(a.bhyt.hoTen)+" "+(0,o.zw)(a.bhyt.ngaySinhDt)+" ",1),(0,n.Wm)(d,{onClick:e[0]||(e[0]=t=>c.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[i,(0,n._)("a",{target:"_blank",href:`https://longzip.github.io/todo-buudienxatulap/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,o.zw)(a.bhyt.maHoGd),9,s)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{target:"_blank",href:`https://longzip.github.io/todo-buudienxatulap/#/tra-cuu?q=${a.bhyt.soTheBhyt}`},(0,o.zw)(a.bhyt.soTheBhyt),9,h)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.maKCB),1)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("5 năm:"+(0,o.zw)(a.bhyt.ngay5Nam),1)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,o.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,n.Wm)(m,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(c.getDateDiff(a.bhyt.denNgayDt)),1)])),_:1}),(0,n.Wm)(p,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.denNgayDt),1)])),_:1}),(0,n.Wm)(d,{onClick:e[1]||(e[1]=t=>c.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"])])),_:1})])),_:1},8,["class"])}var u=a(3100),c=a(4376);const d={props:["bhyt"],methods:{...(0,u.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))},getDateDiff(t){return c.ZP.getDateDiff(new Date(t),new Date,"days")}}};var p=a(1639),m=a(490),g=a(1233),b=a(3115),y=a(2857),f=a(9984),w=a.n(f);const T=(0,p.Z)(d,[["render",r]]),_=T;w()(d,"components",{QItem:m.Z,QItemSection:g.Z,QItemLabel:b.Z,QIcon:y.Z})},76:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Z});var n=a(9835),o=a(1957);const i=(0,n.Uk)("Tra cứu thẻ BHYT"),s={class:"q-gutter-y-md column"};function h(t,e,a,h,l,r){const u=(0,n.up)("ListHeader"),c=(0,n.up)("q-icon"),d=(0,n.up)("q-input"),p=(0,n.up)("ThongTinTheBHYT"),m=(0,n.up)("q-separator"),g=(0,n.up)("q-list"),b=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n._)("div",s,[(0,n.Wm)(d,{outlined:"",modelValue:l.searchText,"onUpdate:modelValue":e[1]||(e[1]=t=>l.searchText=t),onKeyup:(0,o.D2)(r.timKiem,["enter"]),placeholder:"Mã số BHXH",hint:"Mã số cách nhau bởi dấu phẩy, nhấn Enter để tìm kiếm",dense:""},{append:(0,n.w5)((()=>[""!==l.searchText?((0,n.wg)(),(0,n.j4)(c,{key:0,name:"close",onClick:e[0]||(e[0]=t=>l.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(c,{name:"search"})])),_:1},8,["modelValue","onKeyup"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.bhyts,(t=>((0,n.wg)(),(0,n.j4)(g,{key:t.id},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{bhyt:t},null,8,["bhyt"]),(0,n.Wm)(m,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var l=a(3100),r=a(9981),u=a.n(r),c=a(6950),d=a(8359),p=a(5424),m=a(4026);const g={components:{ThongTinTheBHYT:p.Z,ListHeader:m.Z},data(){return{searchText:"",bhyts:[]}},methods:{async timKiem(){if(0===this.searchText.length||""===localStorage.getItem("setIsLogin"))return;this.bhyts=[],c.Z.show({spinner:d.Z,spinnerSize:"100px"});let t=this.searchText.split(",");for(let a=0;a<t.length;a++){const n=t[a];try{await this.xem(n)}catch(e){console.log(e)}}c.Z.hide()},async luu(t){let{data:e}=await u().put(`https://cmsbudientulap.herokuapp.com/api/bhyts/${t.maSoBhxh}`,t);return e},async xem(t){let{data:e}=await u().get(`https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${t.slice(t.length-10)}`,{headers:{Authorization:`Bearer ${localStorage.getItem("setIsLogin")}`}}),a=await this.luu({...e.result.thongTinTheHGD,maHoGd:e.result.thongTinTK1.maHoGd});this.bhyts.push(a)}},computed:{...(0,l.Se)("auth",["isLogin"])},mounted(){localStorage.getItem("setIsLogin")||this.$router.push("/auth"),this.$route.query.q&&(this.searchText=this.$route.query.q),this.timKiem()}};var b=a(1639),y=a(9885),f=a(361),w=a(2857),T=a(3246),_=a(926),x=a(9984),k=a.n(x);const D=(0,b.Z)(g,[["render",h]]),Z=D;k()(g,"components",{QPage:y.Z,QInput:f.Z,QIcon:w.Z,QList:T.Z,QSeparator:_.Z})}}]);