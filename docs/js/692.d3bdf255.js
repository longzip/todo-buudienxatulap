"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[692],{4026:(t,e,a)=>{a.d(e,{Z:()=>m});var o=a(9835),n=a(6970);const i={class:"text-bold text-subtitle1"};function h(t,e,a,h,s,l){const r=(0,o.up)("q-banner");return(0,o.wg)(),(0,o.j4)(r,{dense:"","inline-actions":"",class:(0,n.C_)([a.bgcolor,"list-header text-white text-center"])},{default:(0,o.w5)((()=>[(0,o._)("span",i,[(0,o.WI)(t.$slots,"default")])])),_:3},8,["class"])}const s={props:["bgcolor"]};var l=a(1639),r=a(7128),d=a(9984),c=a.n(d);const u=(0,l.Z)(s,[["render",h]]),m=u;c()(s,"components",{QBanner:r.Z})},7642:(t,e,a)=>{a.d(e,{Z:()=>D});var o=a(9835),n=a(6970);const i=(0,o.Uk)(" Mã hộ:"),h=["href"],s=["href"],l=["href"];function r(t,e,a,r,d,c){const u=(0,o.up)("q-icon"),m=(0,o.up)("q-item-label"),p=(0,o.up)("q-item-section"),b=(0,o.up)("q-item");return(0,o.wg)(),(0,o.j4)(b,{class:(0,n.C_)({"bg-warning":a.bhyt.coTheUuTienCaoHon,"bg-positive":c.getDateDiff(a.bhyt.denNgayDt)>30,"bg-blue-grey-3":c.getDateDiff(a.bhyt.denNgayDt)<1})},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:(0,n.C_)(1==a.bhyt.gioiTinh?"text-pink":"text-primary"),name:1==a.bhyt.gioiTinh?"female":"male"},null,8,["class","name"]),(0,o.Uk)((0,n.zw)(a.bhyt.hoTen)+" "+(0,n.zw)(a.bhyt.hoVaTen)+" "+(0,n.zw)(a.bhyt.ngaySinhDt)+" ",1),(0,o.Wm)(u,{onClick:e[0]||(e[0]=t=>c.xacNhanLoaiBo(a.bhyt)),name:1==a.bhyt.disabled?"do_not_disturb_on":"delete_forever",color:1==a.bhyt.disabled?"red":"gray"},null,8,["name","color"])])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[i,(0,o._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/ho-gia-dinh/${a.bhyt.maHoGd}`},(0,n.zw)(a.bhyt.maHoGd),9,h)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{target:"_blank",href:`https://www.buudienxatulap.ga/wordpress/wp-pwa/#/tra-cuu?q=${a.bhyt.soTheBhyt?a.bhyt.soTheBhyt:a.bhyt.maSoBhxh}`},(0,n.zw)(a.bhyt.soTheBhyt?a.bhyt.soTheBhyt:a.bhyt.maSoBhxh),9,s)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(a.bhyt.maKCB),1)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)("5 năm:"+(0,n.zw)(a.bhyt.ngay5Nam),1)])),_:1}),(0,o.Wm)(m,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:`tel:${a.bhyt.soDienThoai}`},(0,n.zw)(a.bhyt.soDienThoai),9,l)])),_:1})])),_:1}),(0,o.Wm)(p,{side:"",top:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(c.getDateDiff(a.bhyt.denNgayDt))+" ngày",1)])),_:1}),(0,o.Wm)(m,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Đến:"+(0,n.zw)(a.bhyt.denNgayDt),1)])),_:1}),(0,o.Wm)(u,{onClick:e[1]||(e[1]=t=>c.xacNhanTheoDoi(a.bhyt)),name:"star",color:1==a.bhyt.completed?"yellow":"gray"},null,8,["color"]),(0,o.Wm)(m,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Cập nhật:"+(0,n.zw)(new Date(a.bhyt.updated_at).toLocaleDateString()),1)])),_:1})])),_:1})])),_:1},8,["class"])}var d=a(3100),c=a(4376);const u={props:["bhyt"],methods:{...(0,d.nv)("bhyts",["loaiBo","theoDoi"]),xacNhanLoaiBo(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.loaiBo(t)}))},xacNhanTheoDoi(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn theo dõi?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.theoDoi(t)}))},getDateDiff(t){return c.ZP.getDateDiff(new Date(t),new Date,"days")}}};var m=a(1639),p=a(490),b=a(1233),y=a(3115),g=a(2857),w=a(9984),f=a.n(w);const _=(0,m.Z)(u,[["render",r]]),D=_;f()(u,"components",{QItem:p.Z,QItemSection:b.Z,QItemLabel:y.Z,QIcon:g.Z})},8692:(t,e,a)=>{a.r(e),a.d(e,{default:()=>k});var o=a(9835),n=a(6970);const i={class:"q-pa-md"},h=(0,o.Uk)("Danh sách thẻ BHYT theo hộ gia đình: "),s=["href"];function l(t,e,a,l,r,d){const c=(0,o.up)("q-btn"),u=(0,o.up)("ListHeader"),m=(0,o.up)("ThongTinTheBHYT"),p=(0,o.up)("q-separator"),b=(0,o.up)("q-list");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[h,(0,o._)("a",{href:`https://hgd.baohiemxahoi.gov.vn/doViewInfoHo.do?maHo=${t.maHoGd}`,target:"_blank"},(0,n.zw)(t.maHoGd),9,s),(0,o.Wm)(c,{rounded:"",color:"primary",label:"Tải",onClick:e[0]||(e[0]=e=>t.dongBo()),icon:"sync"}),(0,o.Wm)(c,{color:"deep-orange",rounded:"",label:"Xóa",onClick:e[1]||(e[1]=e=>t.xacNhanXoa(t.maHoGd)),icon:"delete_forever"})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.bhyts,(t=>((0,o.wg)(),(0,o.j4)(b,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{bhyt:t},null,8,["bhyt"]),(0,o.Wm)(p,{spaced:"",inset:""})])),_:2},1024)))),128))])}var r=a(3100),d=a(6950),c=a(8359),u=a(7642),m=a(4026);const p=(0,o.aZ)({components:{ThongTinTheBHYT:u.Z,ListHeader:m.Z},name:"IndexPage",data(){return{maHoGd:""}},methods:{...(0,r.nv)("bhyts",["getAllBhyts","xoaHoGd","dongBoDuLieu"]),async loadData(){await this.getAllBhyts({maHoGd:this.maHoGd})},async dongBo(){d.Z.show({spinner:c.Z,spinnerSize:"100px"}),await this.dongBoDuLieu(this.bhyts.map((t=>t.maSoBhxh)).join()),d.Z.hide()},async xacNhanXoa(t){this.$q.dialog({title:"Confirm",message:"Bạn có muốn xóa hộ gia đình?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((async()=>{await this.xoaHoGd(t),this.$router.go()}))}},computed:{...(0,r.Se)("bhyts",["bhyts"])},mounted(){this.maHoGd=this.$route.params.id,this.loadData()}});var b=a(1639),y=a(4455),g=a(3246),w=a(926),f=a(9984),_=a.n(f);const D=(0,b.Z)(p,[["render",l]]),k=D;_()(p,"components",{QBtn:y.Z,QList:g.Z,QSeparator:w.Z})}}]);