"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[620],{4026:(t,e,n)=>{n.d(e,{Z:()=>m});var o=n(9835),a=n(6970);const s={class:"text-bold text-subtitle1"};function l(t,e,n,l,i,h){const c=(0,o.up)("q-banner");return(0,o.wg)(),(0,o.j4)(c,{dense:"","inline-actions":"",class:(0,a.C_)([n.bgcolor,"list-header text-white text-center"])},{default:(0,o.w5)((()=>[(0,o._)("span",s,[(0,o.WI)(t.$slots,"default")])])),_:3},8,["class"])}const i={props:["bgcolor"]};var h=n(1639),c=n(7128),r=n(9984),d=n.n(r);const u=(0,h.Z)(i,[["render",l]]),m=u;d()(i,"components",{QBanner:c.Z})},4068:(t,e,n)=>{n.d(e,{Z:()=>f});var o=n(9835),a=n(6970);const s=(0,o.Uk)(" Mã hộ:"),l=["href"],i=["href"];function h(t,e,n,h,c,r){const d=(0,o.up)("q-icon"),u=(0,o.up)("q-item-label"),m=(0,o.up)("q-item-section"),p=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:(0,a.C_)(1==n.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==n.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,o.Uk)((0,a.zw)(n.bhyt.hoTen)+" "+(0,a.zw)(n.bhyt.ngaySinhDt)+" ",1),(0,o.Wm)(d,{onClick:e[0]||(e[0]=t=>r.xacNhanLoaiBo(n.bhyt)),name:1==n.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==n.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,o.Wm)(u,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[s,(0,o._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/ho-gia-dinh/${n.bhyt.maHoGd}`},(0,a.zw)(n.bhyt.maHoGd),9,l)])),_:1}),(0,o.Wm)(u,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.bhyt.soTheBhyt),1)])),_:1}),(0,o.Wm)(u,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)("5 năm:"+(0,a.zw)(n.bhyt.ngay5Nam),1)])),_:1}),(0,o.Wm)(u,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${n.bhyt.soDienThoai}`},(0,a.zw)(n.bhyt.soDienThoai),9,i)])),_:1})])),_:1}),(0,o.Wm)(m,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.bhyt.denNgayDt),1)])),_:1}),(0,o.Wm)(d,{onClick:e[1]||(e[1]=t=>r.xacNhanTheoDoi(n.bhyt)),name:"star",color:1==n.bhyt.completed?"yellow":"gray"},null,8,["color"])])),_:1})])),_:1})}var c=n(3100);const r={props:["bhyt"],methods:{...(0,c.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))}}};var d=n(1639),u=n(490),m=n(1233),p=n(3115),b=n(2857),y=n(9984),w=n.n(y);const g=(0,d.Z)(r,[["render",h]]),f=g;w()(r,"components",{QItem:u.Z,QItemSection:m.Z,QItemLabel:p.Z,QIcon:b.Z})},6620:(t,e,n)=>{n.r(e),n.d(e,{default:()=>w});var o=n(9835);const a={class:"q-pa-md"},s=(0,o.Uk)("Danh sách thẻ BHYT cần gia hạn");function l(t,e,n,l,i,h){const c=(0,o.up)("ListHeader"),r=(0,o.up)("ThongTinTheBHYT"),d=(0,o.up)("q-separator"),u=(0,o.up)("q-list");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(c,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[s])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.bhyts,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{bhyt:t},null,8,["bhyt"]),(0,o.Wm)(d,{spaced:"",inset:""})])),_:2},1024)))),128))])}var i=n(3100),h=n(4068),c=n(4026);const r=(0,o.aZ)({components:{ThongTinTheBHYT:h.Z,ListHeader:c.Z},name:"IndexPage",methods:{...(0,i.nv)("bhyts",["getAllBhyts"]),loadData(){this.getAllBhyts({disabled:1})}},computed:{...(0,i.Se)("bhyts",["bhyts"])},mounted(){this.loadData()}});var d=n(1639),u=n(3246),m=n(926),p=n(9984),b=n.n(p);const y=(0,d.Z)(r,[["render",l]]),w=y;b()(r,"components",{QList:u.Z,QSeparator:m.Z})}}]);