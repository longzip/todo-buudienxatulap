"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[905],{4026:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(9835),o=a(6970);const h={class:"text-bold text-subtitle1"};function s(t,e,a,s,i,l){const r=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(r,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",h,[(0,n.WI)(t.$slots,"default")])])),_:3},8,["class"])}const i={props:["bgcolor"]};var l=a(1639),r=a(7128),c=a(9984),u=a.n(c);const p=(0,l.Z)(i,[["render",s]]),m=p;u()(i,"components",{QBanner:r.Z})},7685:(t,e,a)=>{a.d(e,{Z:()=>x});var n=a(9835),o=a(6970);const h=(0,n.Uk)(" Mã hộ:"),s=["href"],i=["href"],l=["href"];function r(t,e,a,r,c,u){const p=(0,n.up)("q-icon"),m=(0,n.up)("q-item-label"),d=(0,n.up)("q-item-section"),g=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(g,{class:(0,o.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":u.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey-3":u.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:(0,o.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,n.Uk)((0,o.zw)(a.bhyt.hoTen||a.bhyt.hoVaTen)+" "+(0,o.zw)(a.bhyt.ngaySinhDt||a.bhyt.ngayThangNamSinh)+" ",1),(0,n.Wm)(p,{onClick:e[0]||(e[0]=t=>u.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[h,(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,o.zw)(a.bhyt.maHoGd),9,s)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/tra-cuu?q=${a.bhyt.soTheBhyt?a.bhyt.soTheBhyt:a.bhyt.maSoBhxh||a.bhyt.maSoBHXH}`},(0,o.zw)(a.bhyt.soTheBhyt?a.bhyt.soTheBhyt:a.bhyt.maSoBhxh||a.bhyt.maSoBHXH),9,i)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.maKCB),1)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("5 năm:"+(0,o.zw)(a.bhyt.ngay5Nam||a.bhyt.trangThaiHoSoName),1)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,o.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,n.Wm)(d,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(u.getDateDiff(a.bhyt.denNgayDt))+" ngày",1)])),_:1}),(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Đến:"+(0,o.zw)(a.bhyt.denNgayDt||a.bhyt.ngayDenHan),1)])),_:1}),(0,n.Wm)(p,{onClick:e[1]||(e[1]=t=>u.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"]),(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Cập nhật:"+(0,o.zw)(a.bhyt.updated_at?new Date(a.bhyt.updated_at).toLocaleDateString():a.bhyt.ngayLapString),1)])),_:1})])),_:1})])),_:1},8,["class"])}var c=a(3100),u=a(4376);const p={props:["bhyt"],methods:{...(0,c.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){t.maSoBhxh||(t.maSoBhxh=t.maSoBHXH),this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){t.maSoBhxh||(t.maSoBhxh=t.maSoBHXH),this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))},getDateDiff(t){return u.ZP.getDateDiff(new Date(t),new Date,"days")}}};var m=a(1639),d=a(490),g=a(1233),y=a(3115),b=a(2857),w=a(9984),f=a.n(w);const T=(0,m.Z)(p,[["render",r]]),x=T;f()(p,"components",{QItem:d.Z,QItemSection:g.Z,QItemLabel:y.Z,QIcon:b.Z})},7905:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var n=a(9835),o=a(1957);const h=(0,n.Uk)("Tra cứu thẻ BHYT"),s={class:"q-gutter-y-md column"};function i(t,e,a,i,l,r){const c=(0,n.up)("ListHeader"),u=(0,n.up)("q-icon"),p=(0,n.up)("q-input"),m=(0,n.up)("ThongTinTheBHYT"),d=(0,n.up)("q-separator"),g=(0,n.up)("q-list"),y=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[h])),_:1}),(0,n._)("div",s,[(0,n.Wm)(p,{outlined:"",modelValue:l.searchText,"onUpdate:modelValue":e[1]||(e[1]=t=>l.searchText=t),onKeyup:(0,o.D2)(r.timKiem,["enter"]),placeholder:"Mã số BHXH",hint:"Mã số cách nhau bởi dấu phẩy, nhấn Enter để tìm kiếm",dense:""},{append:(0,n.w5)((()=>[""!==l.searchText?((0,n.wg)(),(0,n.j4)(u,{key:0,name:"close",onClick:e[0]||(e[0]=t=>l.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(u,{name:"search"})])),_:1},8,["modelValue","onKeyup"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.bhyts,(t=>((0,n.wg)(),(0,n.j4)(g,{key:t.id},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{bhyt:t},null,8,["bhyt"]),(0,n.Wm)(d,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var l=a(3100),r=a(9981),c=a.n(r),u=a(6950),p=a(8359),m=a(7685),d=a(4026);const g={components:{ThongTinTheBHYT:m.Z,ListHeader:d.Z},data(){return{searchText:"",bhyts:[]}},methods:{async timKiem(){if(window.close(),0===this.searchText.length||""===localStorage.getItem("setIsLogin"))return;this.bhyts=[],u.Z.show({spinner:p.Z,spinnerSize:"100px"});let t=this.searchText.split(",");for(let a=0;a<t.length;a++){const n=t[a];try{await this.xem(n)}catch(e){console.log(e)}}window.close(),u.Z.hide()},async luu(t){let{data:e}=await c().put(`https://cmsbudientulap.herokuapp.com/api/bhyts/${t.maSoBhxh}`,t);return e},async xem(t){let{data:e}=await c().get(`https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${t.slice(t.length-10)}`,{headers:{Authorization:`Bearer ${localStorage.getItem("setIsLogin")}`}}),{thongTinTK1:a,thongTinTheHGD:n}=e.result;if(a){let t=await this.luu({...n,maHoGd:a.maHoGd});this.bhyts.length>5&&(this.bhyts=[]),this.bhyts.push(t)}}},computed:{...(0,l.Se)("auth",["isLogin"])},async mounted(){localStorage.getItem("setIsLogin")||this.$router.push("/auth"),this.$route.query.q&&(this.searchText=this.$route.query.q);let{data:t}=await c().get("https://cmsbudientulap.herokuapp.com/api/maSoBhxhs");localStorage.setItem("dsMaSoBhxhsDaCapNhat",JSON.stringify(t));let e=await c().get("https://cmsbudientulap.herokuapp.com/api/maHoGd");localStorage.setItem("maHoGds",JSON.stringify(e.data));let a=JSON.parse(localStorage.getItem("dsMaSoBhxhs"));console.log("danh sách mã số bh còn lại: "+a.length),console.log("Đã cập nhật thành công: "+t.length);let n=!1;while(n)t.includes(n)||(await this.xem(n),t.push(n)),n=a.pop(),localStorage.setItem("dsMaSoBhxhs",JSON.stringify(a));this.timKiem()}};var y=a(1639),b=a(9885),w=a(361),f=a(2857),T=a(3246),x=a(926),S=a(9984),_=a.n(S);const B=(0,y.Z)(g,[["render",i]]),D=B;_()(g,"components",{QPage:b.Z,QInput:w.Z,QIcon:f.Z,QList:T.Z,QSeparator:x.Z})}}]);