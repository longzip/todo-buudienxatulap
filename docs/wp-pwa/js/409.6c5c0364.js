"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[409],{4026:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(9835),o=a(6970);const i={class:"text-bold text-subtitle1"};function s(e,t,a,s,l,h){const r=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(r,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",i,[(0,n.WI)(e.$slots,"default")])])),_:3},8,["class"])}const l={props:["bgcolor"]};var h=a(1639),r=a(7128),u=a(9984),c=a.n(u);const p=(0,h.Z)(l,[["render",s]]),m=p;c()(l,"components",{QBanner:r.Z})},4068:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(9835),o=a(6970);const i=(0,n.Uk)(" Mã hộ:"),s=["href"],l=["href"];function h(e,t,a,h,r,u){const c=(0,n.up)("q-icon"),p=(0,n.up)("q-item-label"),m=(0,n.up)("q-item-section"),d=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:(0,o.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,n.Uk)((0,o.zw)(a.bhyt.hoTen)+" "+(0,o.zw)(a.bhyt.ngaySinhDt)+" ",1),(0,n.Wm)(c,{onClick:t[0]||(t[0]=e=>u.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[i,(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,o.zw)(a.bhyt.maHoGd),9,s)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.soTheBhyt),1)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("5 năm:"+(0,o.zw)(a.bhyt.ngay5Nam),1)])),_:1}),(0,n.Wm)(p,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,o.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,n.Wm)(m,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.denNgayDt),1)])),_:1}),(0,n.Wm)(c,{onClick:t[1]||(t[1]=e=>u.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"])])),_:1})])),_:1})}var r=a(3100);const u={props:["bhyt"],methods:{...(0,r.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(e){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(e)}))},xacNhanTheoDoi(e){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(e)}))}}};var c=a(1639),p=a(490),m=a(1233),d=a(3115),b=a(2857),g=a(9984),w=a.n(g);const y=(0,c.Z)(u,[["render",h]]),T=y;w()(u,"components",{QItem:p.Z,QItemSection:m.Z,QItemLabel:d.Z,QIcon:b.Z})},9409:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(9835),o=a(1957);const i=(0,n.Uk)("Tìm thẻ BHYT"),s={class:"q-gutter-y-md column"};function l(e,t,a,l,h,r){const u=(0,n.up)("ListHeader"),c=(0,n.up)("q-icon"),p=(0,n.up)("q-input"),m=(0,n.up)("ThongTinTheBHYT"),d=(0,n.up)("q-separator"),b=(0,n.up)("q-list"),g=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n._)("div",s,[(0,n.Wm)(p,{outlined:"",modelValue:h.searchText,"onUpdate:modelValue":t[1]||(t[1]=e=>h.searchText=e),onKeyup:(0,o.D2)(r.timKiemTheoDS,["enter"]),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,n.w5)((()=>[""!==h.searchText?((0,n.wg)(),(0,n.j4)(c,{key:0,name:"close",onClick:t[0]||(t[0]=e=>h.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(c,{name:"search"})])),_:1},8,["modelValue","onKeyup"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.bhyts,(e=>((0,n.wg)(),(0,n.j4)(b,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{bhyt:e},null,8,["bhyt"]),(0,n.Wm)(d,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var h=a(3100),r=a(9981),u=a.n(r),c=(a(4328),a(6950)),p=a(8359),m=a(4068),d=a(4026);const b={components:{ThongTinTheBHYT:m.Z,ListHeader:d.Z},data(){return{searchText:"",bhyts:[]}},computed:{...(0,h.Se)("auth",["isLogin"])},methods:{async timKiemTheoDS(){this.bhyts=[],c.Z.show({spinner:p.Z,spinnerSize:"100px"});let e=this.searchText.split(",");if(0!==e.length){for(let t=0;t<e.length;t++){const a=e[t];await this.timKiem(a)}c.Z.hide()}},async timKiem(e){let t=`https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=01&maHuyen=250&maXa=08986&hoTen=${e}&isCoDau=true&`,{data:a}=await u().get(t,{headers:{Authorization:`Bearer ${this.isLogin}`}}),n=a.result.value.map((e=>e.maSoBhxh));for(let i=0;i<n.length;i++){const e=n[i];try{await this.xem(e)}catch(o){console.log(o)}}},async luu(e){let{data:t}=await u().put(`https://cmsbudientulap.herokuapp.com/api/bhyts/${e.maSoBhxh}`,e);return t},async xem(e){let{data:t}=await u().get(`https://ssm-api.vnpost.vn/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${e}`,{headers:{Authorization:`Bearer ${this.isLogin}`}}),a=await this.luu({...t.result.thongTinTheHGD,maHoGd:t.result.thongTinTK1.maHoGd});this.bhyts.push(a)}}};var g=a(1639),w=a(9885),y=a(113),T=a(2857),f=a(3246),_=a(926),x=a(9984),k=a.n(x);const v=(0,g.Z)(b,[["render",l]]),Z=v;k()(b,"components",{QPage:w.Z,QInput:y.Z,QIcon:T.Z,QList:f.Z,QSeparator:_.Z})}}]);