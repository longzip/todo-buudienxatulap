"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[449],{4026:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(9835),o=a(6970);const i={class:"text-bold text-subtitle1"};function s(t,e,a,s,l,h){const c=(0,n.up)("q-banner");return(0,n.wg)(),(0,n.j4)(c,{dense:"","inline-actions":"",class:(0,o.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,n.w5)((()=>[(0,n._)("span",i,[(0,n.WI)(t.$slots,"default")])])),_:3},8,["class"])}const l={props:["bgcolor"]};var h=a(1639),c=a(7128),r=a(9984),d=a.n(r);const u=(0,h.Z)(l,[["render",s]]),m=u;d()(l,"components",{QBanner:c.Z})},1283:(t,e,a)=>{a.d(e,{Z:()=>D});var n=a(9835),o=a(6970);const i=(0,n.Uk)(" Mã hộ:"),s=["href"],l=["href"],h=["href"];function c(t,e,a,c,r,d){const u=(0,n.up)("q-icon"),m=(0,n.up)("q-item-label"),p=(0,n.up)("q-item-section"),b=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(b,{class:(0,o.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":d.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey-3":d.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:(0,o.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,n.Uk)((0,o.zw)(a.bhyt.hoTen)+" "+(0,o.zw)(a.bhyt.ngaySinhDt)+" ",1),(0,n.Wm)(u,{onClick:e[0]||(e[0]=t=>d.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[i,(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,o.zw)(a.bhyt.maHoGd),9,s)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/tra-cuu?q=${a.bhyt.soTheBhyt}`},(0,o.zw)(a.bhyt.soTheBhyt),9,l)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.maKCB),1)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n.Uk)("5 năm:"+(0,o.zw)(a.bhyt.ngay5Nam),1)])),_:1}),(0,n.Wm)(m,{caption:"",lines:"2"},{default:(0,n.w5)((()=>[(0,n._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,o.zw)(a.bhyt.soDienThoai),9,h)])),_:1})])),_:1}),(0,n.Wm)(p,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(d.getDateDiff(a.bhyt.denNgayDt)),1)])),_:1}),(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(a.bhyt.denNgayDt),1)])),_:1}),(0,n.Wm)(u,{onClick:e[1]||(e[1]=t=>d.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"]),(0,n.Wm)(m,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)("Cập nhật:"+(0,o.zw)(new Date(a.bhyt.updated_at).toLocaleDateString()),1)])),_:1})])),_:1})])),_:1},8,["class"])}var r=a(3100),d=a(4376);const u={props:["bhyt"],methods:{...(0,r.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))},getDateDiff(t){return d.ZP.getDateDiff(new Date(t),new Date,"days")}}};var m=a(1639),p=a(490),b=a(1233),g=a(3115),y=a(2857),w=a(9984),f=a.n(w);const _=(0,m.Z)(u,[["render",c]]),D=_;f()(u,"components",{QItem:p.Z,QItemSection:b.Z,QItemLabel:g.Z,QIcon:y.Z})},3449:(t,e,a)=>{a.r(e),a.d(e,{default:()=>D});var n=a(9835);const o={class:"q-pa-md"},i=(0,n.Uk)("Danh sách thẻ BHYT cần gia hạn"),s={class:"q-gutter-y-md column"};function l(t,e,a,l,h,c){const r=(0,n.up)("q-btn"),d=(0,n.up)("ListHeader"),u=(0,n.up)("q-icon"),m=(0,n.up)("q-input"),p=(0,n.up)("ThongTinTheBHYT"),b=(0,n.up)("q-separator"),g=(0,n.up)("q-list");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(d,{bgcolor:"bg-orange-4"},{default:(0,n.w5)((()=>[i,(0,n.Wm)(r,{rounded:"",color:"primary",label:"Tải",onClick:e[0]||(e[0]=e=>t.dongBo()),icon:"sync"})])),_:1}),(0,n._)("div",s,[(0,n.Wm)(m,{outlined:"",modelValue:t.searchText,"onUpdate:modelValue":e[2]||(e[2]=e=>t.searchText=e),placeholder:"Từ khóa",hint:"Tìm kiếm danh sách hiện tại",dense:""},{append:(0,n.w5)((()=>[""!==t.searchText?((0,n.wg)(),(0,n.j4)(u,{key:0,name:"close",onClick:e[1]||(e[1]=e=>t.searchText=""),class:"cursor-pointer"})):(0,n.kq)("",!0),(0,n.Wm)(u,{name:"search"})])),_:1},8,["modelValue"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.timBhyts(t.searchText),(t=>((0,n.wg)(),(0,n.j4)(g,{key:t.id},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{bhyt:t},null,8,["bhyt"]),(0,n.Wm)(b,{spaced:"",inset:""})])),_:2},1024)))),128))])}var h=a(3100),c=a(1283),r=a(4026);const d=(0,n.aZ)({components:{ThongTinTheBHYT:c.Z,ListHeader:r.Z},name:"IndexPage",data(){return{searchText:""}},methods:{...(0,h.nv)("bhyts",["getAllBhyts","dongBoDuLieu"]),async loadData(){await this.getAllBhyts({thang:2,completed:"0",disabled:"0"})},async dongBo(){this.dongBoDuLieu(this.timBhyts(this.searchText).map((t=>t.maSoBhxh)).join())}},computed:{...(0,h.Se)("bhyts",["timBhyts"])},mounted(){this.loadData()}});var u=a(1639),m=a(4455),p=a(361),b=a(2857),g=a(3246),y=a(926),w=a(9984),f=a.n(w);const _=(0,u.Z)(d,[["render",l]]),D=_;f()(d,"components",{QBtn:m.Z,QInput:p.Z,QIcon:b.Z,QList:g.Z,QSeparator:y.Z})}}]);