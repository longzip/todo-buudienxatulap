"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[243],{4026:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(9835),o=a(6970);const h={class:"text-bold text-subtitle1"};function i(t,e,a,i,s,l){const r=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(r,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",h,[(0,n.WI)(t.$slots,"default")])])),_:3},8,["class"])}const s={props:["bgcolor"]};var l=a(1639),r=a(7128),u=a(9984),c=a.n(u);const d=(0,l.Z)(s,[["render",i]]),m=d;c()(s,"components",{QBanner:r.Z})},7685:(t,e,a)=>{a.d(e,{Z:()=>_});var n=a(9835),o=a(6970);const h=(0,n.Uk)(" Mã hộ:"),i=["href"],s=["href"],l=["href"];function r(t,e,a,r,u,c){const d=(0,n.up)("q-icon"),m=(0,n.up)("q-item-label"),y=(0,n.up)("q-item-section"),p=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(p,{class:(0,o.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":c.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey-3":c.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,n.w5)((()=>[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:(0,o.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,n.Uk)((0,o.zw)(a.bhyt.hoTen||a.bhyt.hoVaTen)+" "+(0,o.zw)(a.bhyt.ngaySinhDt||a.bhyt.ngayThangNamSinh)+" ",1),(0,n.Wm)(d,{onClick:e[0]||(e[0]=t=>c.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[h,(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,o.zw)(a.bhyt.maHoGd),9,i)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/tra-cuu?q=${a.bhyt.soTheBhyt?a.bhyt.soTheBhyt:a.bhyt.maSoBhxh||a.bhyt.maSoBHXH}`},(0,o.zw)(a.bhyt.soTheBhyt?a.bhyt.soTheBhyt:a.bhyt.maSoBhxh||a.bhyt.maSoBHXH),9,s)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.maKCB),1)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("5 năm:"+(0,o.zw)(a.bhyt.ngay5Nam||a.bhyt.trangThaiHoSoName),1)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,o.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,n.Wm)(y,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(c.getDateDiff(a.bhyt.denNgayDt))+" ngày",1)])),_:1}),(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Đến:"+(0,o.zw)(a.bhyt.denNgayDt||a.bhyt.ngayDenHan),1)])),_:1}),(0,n.Wm)(d,{onClick:e[1]||(e[1]=t=>c.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"]),(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Cập nhật:"+(0,o.zw)(a.bhyt.updated_at?new Date(a.bhyt.updated_at).toLocaleDateString():a.bhyt.ngayLapString),1)])),_:1})])),_:1})])),_:1},8,["class"])}var u=a(3100),c=a(4376);const d={props:["bhyt"],methods:{...(0,u.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){t.maSoBhxh||(t.maSoBhxh=t.maSoBHXH),this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){t.maSoBhxh||(t.maSoBhxh=t.maSoBHXH),this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))},getDateDiff(t){return c.ZP.getDateDiff(new Date(t),new Date,"days")}}};var m=a(1639),y=a(490),p=a(1233),b=a(3115),g=a(2857),w=a(9984),f=a.n(w);const T=(0,m.Z)(d,[["render",r]]),_=T;f()(d,"components",{QItem:y.Z,QItemSection:p.Z,QItemLabel:b.Z,QIcon:g.Z})},9092:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var n=a(9835),o=a(6970),h=a(1957);const i={class:"q-gutter-y-md column"};function s(t,e,a,s,l,r){const u=(0,n.up)("q-btn"),c=(0,n.up)("ListHeader"),d=(0,n.up)("q-icon"),m=(0,n.up)("q-input"),y=(0,n.up)("ThongTinTheBHYT"),p=(0,n.up)("q-separator"),b=(0,n.up)("q-list"),g=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.bhyts.length)+" Hồ Sơ Đã Xử Lý",1),(0,n.Wm)(u,{rounded:"",color:"primary",label:"Tải",onClick:e[0]||(e[0]=t=>r.dongBo()),icon:"sync"})])),_:1}),(0,n._)("div",i,[(0,n.Wm)(m,{outlined:"",modelValue:l.searchText,"onUpdate:modelValue":e[2]||(e[2]=t=>l.searchText=t),onKeyup:e[3]||(e[3]=(0,h.D2)((e=>t.traCuuTheoTen(l.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,n.w5)((()=>[""!==l.searchText?((0,n.wg)(),(0,n.j4)(d,{key:0,name:"close",onClick:e[1]||(e[1]=t=>l.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.bhyts,(t=>((0,n.wg)(),(0,n.j4)(b,{key:t.id},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{bhyt:t},null,8,["bhyt"]),(0,n.Wm)(p,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var l=a(3100),r=a(7685),u=a(4026);const c={components:{ThongTinTheBHYT:r.Z,ListHeader:u.Z},data(){return{searchText:""}},computed:{...(0,l.Se)("auth",["isLogin"]),...(0,l.Se)("bhyts",["bhyts"])},methods:{...(0,l.nv)("bhyts",["hoSoDaXuLy","taiTuc"]),dongBo(){this.taiTuc(this.bhyts.map((t=>t.maSoBhxh)).join())}},async mounted(){this.$route.query.q&&(this.searchText=this.$route.query.q),await this.hoSoDaXuLy()}};var d=a(1639),m=a(9885),y=a(4455),p=a(361),b=a(2857),g=a(3246),w=a(926),f=a(9984),T=a.n(f);const _=(0,d.Z)(c,[["render",s]]),D=_;T()(c,"components",{QPage:m.Z,QBtn:y.Z,QInput:p.Z,QIcon:b.Z,QList:g.Z,QSeparator:w.Z})}}]);