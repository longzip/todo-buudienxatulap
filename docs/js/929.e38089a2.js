"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[929],{4026:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(9835),o=a(6970);const s={class:"text-bold text-subtitle1"};function i(e,t,a,i,l,h){const c=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(c,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",s,[(0,n.WI)(e.$slots,"default")])])),_:3},8,["class"])}const l={props:["bgcolor"]};var h=a(1639),c=a(7128),r=a(9984),d=a.n(r);const u=(0,h.Z)(l,[["render",i]]),m=u;d()(l,"components",{QBanner:c.Z})},8140:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(9835),o=a(6970);const s=(0,n.Uk)(" Mã hộ:"),i=["href"],l=["href"];function h(e,t,a,h,c,r){const d=(0,n.up)("q-icon"),u=(0,n.up)("q-item-label"),m=(0,n.up)("q-item-section"),p=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(p,{class:(0,o.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":r.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey":r.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:(0,o.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,n.Uk)((0,o.zw)(a.bhyt.hoTen)+" "+(0,o.zw)(a.bhyt.ngaySinhDt)+" ",1),(0,n.Wm)(d,{onClick:t[0]||(t[0]=e=>r.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,n.Wm)(u,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[s,(0,n._)("a",{target:"_blank",href:`/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,o.zw)(a.bhyt.maHoGd),9,i)])),_:1}),(0,n.Wm)(u,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.soTheBhyt),1)])),_:1}),(0,n.Wm)(u,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("5 năm:"+(0,o.zw)(a.bhyt.ngay5Nam),1)])),_:1}),(0,n.Wm)(u,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,o.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,n.Wm)(m,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(r.getDateDiff(a.bhyt.denNgayDt)),1)])),_:1}),(0,n.Wm)(u,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.denNgayDt),1)])),_:1}),(0,n.Wm)(d,{onClick:t[1]||(t[1]=e=>r.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"])])),_:1})])),_:1},8,["class"])}var c=a(3100),r=a(4376);const d={props:["bhyt"],methods:{...(0,c.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(e){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(e)}))},xacNhanTheoDoi(e){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(e)}))},getDateDiff(e){return r.ZP.getDateDiff(new Date(e),new Date,"days")}}};var u=a(1639),m=a(490),p=a(1233),b=a(3115),g=a(2857),y=a(9984),f=a.n(y);const w=(0,u.Z)(d,[["render",h]]),D=w;f()(d,"components",{QItem:m.Z,QItemSection:p.Z,QItemLabel:b.Z,QIcon:g.Z})},1929:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(9835);const o={class:"q-pa-md"},s=(0,n.Uk)("Danh sách thẻ BHYT cần gia hạn"),i={class:"q-gutter-y-md column"};function l(e,t,a,l,h,c){const r=(0,n.up)("ListHeader"),d=(0,n.up)("q-icon"),u=(0,n.up)("q-input"),m=(0,n.up)("ThongTinTheBHYT"),p=(0,n.up)("q-separator"),b=(0,n.up)("q-list");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(r,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n._)("div",i,[(0,n.Wm)(u,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchText=t),placeholder:"Từ khóa",hint:"Tìm kiếm danh sách hiện tại",dense:""},{append:(0,n.w5)((()=>[""!==e.searchText?((0,n.wg)(),(0,n.j4)(d,{key:0,name:"close",onClick:t[0]||(t[0]=t=>e.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(d,{name:"search"})])),_:1},8,["modelValue"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.timBhyts(e.searchText),(e=>((0,n.wg)(),(0,n.j4)(b,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{bhyt:e},null,8,["bhyt"]),(0,n.Wm)(p,{spaced:"",inset:""})])),_:2},1024)))),128))])}var h=a(3100),c=a(8140),r=a(4026);const d=(0,n.aZ)({components:{ThongTinTheBHYT:c.Z,ListHeader:r.Z},name:"IndexPage",data(){return{searchText:""}},methods:{...(0,h.nv)("bhyts",["getAllBhyts"]),loadData(){this.getAllBhyts({thang:2,completed:0,disabled:0})}},computed:{...(0,h.Se)("bhyts",["timBhyts"])},mounted(){this.loadData()}});var u=a(1639),m=a(361),p=a(2857),b=a(3246),g=a(926),y=a(9984),f=a.n(y);const w=(0,u.Z)(d,[["render",l]]),D=w;f()(d,"components",{QInput:m.Z,QIcon:p.Z,QList:b.Z,QSeparator:g.Z})}}]);