"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[692],{4026:(t,e,a)=>{a.d(e,{Z:()=>m});var o=a(9835),n=a(6970);const i={class:"text-bold text-subtitle1"};function s(t,e,a,s,h,l){const d=(0,o.up)("q-banner");return(0,o.wg)(),(0,o.j4)(d,{dense:"","inline-actions":"",class:(0,n.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,o.w5)((()=>[(0,o._)("span",i,[(0,o.WI)(t.$slots,"default")])])),_:3},8,["class"])}const h={props:["bgcolor"]};var l=a(1639),d=a(7128),r=a(9984),c=a.n(r);const u=(0,l.Z)(h,[["render",s]]),m=u;c()(h,"components",{QBanner:d.Z})},5977:(t,e,a)=>{a.d(e,{Z:()=>D});var o=a(9835),n=a(6970);const i=(0,o.Uk)(" Mã hộ:"),s=["href"],h=["href"],l=["href"];function d(t,e,a,d,r,c){const u=(0,o.up)("q-icon"),m=(0,o.up)("q-item-label"),b=(0,o.up)("q-item-section"),p=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(p,{class:(0,n.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":c.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey-3":c.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:(0,n.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,o.Uk)((0,n.zw)(a.bhyt.hoTen)+" "+(0,n.zw)(a.bhyt.ngaySinhDt)+" ",1),(0,o.Wm)(u,{onClick:e[0]||(e[0]=t=>c.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[i,(0,o._)("a",{target:"_blank",href:`https://longzip.github.io/todo-buudienxatulap/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,n.zw)(a.bhyt.maHoGd),9,s)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{target:"_blank",href:`https://longzip.github.io/todo-buudienxatulap/#/tra-cuu?q=${a.bhyt.soTheBhyt}`},(0,n.zw)(a.bhyt.soTheBhyt),9,h)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(a.bhyt.maKCB),1)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)("5 năm:"+(0,n.zw)(a.bhyt.ngay5Nam),1)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,n.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,o.Wm)(b,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(c.getDateDiff(a.bhyt.denNgayDt)),1)])),_:1}),(0,o.Wm)(m,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(a.bhyt.denNgayDt),1)])),_:1}),(0,o.Wm)(u,{onClick:e[1]||(e[1]=t=>c.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"]),(0,o.Wm)(m,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Cập nhật:"+(0,n.zw)(new Date(a.bhyt.updated_at).toLocaleDateString()),1)])),_:1})])),_:1})])),_:1},8,["class"])}var r=a(3100),c=a(4376);const u={props:["bhyt"],methods:{...(0,r.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))},getDateDiff(t){return c.ZP.getDateDiff(new Date(t),new Date,"days")}}};var m=a(1639),b=a(490),p=a(1233),g=a(3115),y=a(2857),f=a(9984),w=a.n(f);const _=(0,m.Z)(u,[["render",d]]),D=_;w()(u,"components",{QItem:b.Z,QItemSection:p.Z,QItemLabel:g.Z,QIcon:y.Z})},8692:(t,e,a)=>{a.r(e),a.d(e,{default:()=>k});var o=a(9835),n=a(6970);const i={class:"q-pa-md"},s=(0,o.Uk)("Danh sách thẻ BHYT theo hộ gia đình: "),h=["href"];function l(t,e,a,l,d,r){const c=(0,o.up)("q-btn"),u=(0,o.up)("ListHeader"),m=(0,o.up)("ThongTinTheBHYT"),b=(0,o.up)("q-separator"),p=(0,o.up)("q-list");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[s,(0,o._)("a",{href:`https://hgd.baohiemxahoi.gov.vn/doViewInfoHo.do?maHo=${t.maHoGd}`,target:"_blank"},(0,n.zw)(t.maHoGd),9,h),(0,o.Wm)(c,{rounded:"",color:"primary",label:"Tải",onClick:e[0]||(e[0]=e=>t.dongBo()),icon:"sync"}),(0,o.Wm)(c,{color:"deep-orange",rounded:"",label:"Xóa",onClick:e[1]||(e[1]=e=>t.xacNhanXoa(t.maHoGd)),icon:"delete_forever"})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.bhyts,(t=>((0,o.wg)(),(0,o.j4)(p,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{bhyt:t},null,8,["bhyt"]),(0,o.Wm)(b,{spaced:"",inset:""})])),_:2},1024)))),128))])}var d=a(3100),r=a(6950),c=a(8359),u=a(5977),m=a(4026);const b=(0,o.aZ)({components:{ThongTinTheBHYT:u.Z,ListHeader:m.Z},name:"IndexPage",data(){return{maHoGd:""}},methods:{...(0,d.nv)("bhyts",["getAllBhyts","xoaHoGd","dongBoDuLieu"]),async loadData(){await this.getAllBhyts({maHoGd:this.maHoGd})},async dongBo(){r.Z.show({spinner:c.Z,spinnerSize:"100px"}),await this.dongBoDuLieu(this.bhyts.map((t=>t.maSoBhxh)).join()),r.Z.hide()},async xacNhanXoa(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn xóa hộ gia đình?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((async()=>{await this.xoaHoGd(t),this.$router.go()}))}},computed:{...(0,d.Se)("bhyts",["bhyts"])},mounted(){this.maHoGd=this.$route.params.id,this.loadData()}});var p=a(1639),g=a(4455),y=a(3246),f=a(926),w=a(9984),_=a.n(w);const D=(0,p.Z)(b,[["render",l]]),k=D;_()(b,"components",{QBtn:g.Z,QList:y.Z,QSeparator:f.Z})}}]);