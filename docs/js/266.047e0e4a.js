"use strict";(self["webpackChunktodo_buudienxatulap"]=self["webpackChunktodo_buudienxatulap"]||[]).push([[266],{4026:(a,t,n)=>{n.d(t,{Z:()=>d});var e=n(9835),o=n(6970);const s={class:"text-bold text-subtitle1"};function i(a,t,n,i,u,l){const c=(0,e.up)("q-banner");return(0,e.wg)(),(0,e.j4)(c,{dense:"","inline-actions":"",class:(0,o.C_)([n.bgcolor,"list-header text-white text-center"])},{default:(0,e.w5)((()=>[(0,e._)("span",s,[(0,e.WI)(a.$slots,"default")])])),_:3},8,["class"])}const u={props:["bgcolor"]};var l=n(1639),c=n(7128),r=n(9984),h=n.n(r);const p=(0,l.Z)(u,[["render",i]]),d=p;h()(u,"components",{QBanner:c.Z})},6266:(a,t,n)=>{n.r(t),n.d(t,{default:()=>D});var e=n(9835),o=n(6970);const s={class:"q-pa-md"},i=(0,e.Uk)("Mã số BHXH: "),u=["href"],l=["href"];function c(a,t,n,c,r,h){const p=(0,e.up)("ListHeader"),d=(0,e.up)("q-item-label"),g=(0,e.up)("q-item-section"),m=(0,e.up)("q-item"),w=(0,e.up)("q-separator"),f=(0,e.up)("q-list");return(0,e.wg)(),(0,e.iD)("div",s,[(0,e.Wm)(p,{bgcolor:"bg-orange-4"},{default:(0,e.w5)((()=>[(0,e.Uk)(" Danh sách khách hàng tái tục BHXH "+(0,o.zw)(r.khachHangTaiTucs.length)+"/Tổng: "+(0,o.zw)(r.tongCong.toLocaleString()),1)])),_:1}),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.khachHangTaiTucs,(a=>((0,e.wg)(),(0,e.j4)(f,{key:a.maSoBHXH},{default:(0,e.w5)((()=>[(0,e.Wm)(m,null,{default:(0,e.w5)((()=>[(0,e.Wm)(g,null,{default:(0,e.w5)((()=>[(0,e.Wm)(d,null,{default:(0,e.w5)((()=>[(0,e.Uk)((0,o.zw)(a.hoVaTen)+" "+(0,o.zw)(a.ngayThangNamSinh),1)])),_:2},1024),(0,e.Wm)(d,{caption:"",lines:"2"},{default:(0,e.w5)((()=>[i,(0,e._)("a",{target:"_blank",href:`https://app.buudienxatulap.ga/#/tra-cuu?q=${a.maSoBHXH}`},(0,o.zw)(a.maSoBHXH),9,u)])),_:2},1024),(0,e.Wm)(d,{caption:"",lines:"2"},{default:(0,e.w5)((()=>[(0,e.Uk)((0,o.zw)(a.diaChi),1)])),_:2},1024),(0,e.Wm)(d,{caption:"",lines:"2"},{default:(0,e.w5)((()=>[(0,e._)("a",{href:`tel:${a.soDienThoai}`},(0,o.zw)(a.soDienThoai),9,l)])),_:2},1024)])),_:2},1024),(0,e.Wm)(g,{side:"",top:""},{default:(0,e.w5)((()=>[(0,e.Wm)(d,{caption:""},{default:(0,e.w5)((()=>[(0,e.Uk)((0,o.zw)(a.ngayDenHan),1)])),_:2},1024),(0,e.Wm)(d,{caption:""},{default:(0,e.w5)((()=>[(0,e.Uk)("Số tiền: "+(0,o.zw)(parseInt(a.soPhaiDong).toLocaleString())+" / "+(0,o.zw)(a.phuongThuc)+" tháng",1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,e.Wm)(w,{spaced:"",inset:""})])),_:2},1024)))),128))])}var r=n(4026),h=n(465),p=n(6950),d=n(8359);const g={components:{ListHeader:r.Z},data(){return{khachHangTaiTucs:[],tongCong:0}},methods:{async loadData(){p.Z.show({spinner:d.Z,spinnerSize:"100px"});const{data:a}=await h.Z.post("https://ssm-api.vnpost.vn/api/services/app/BaoCaoTongHopGDThu/DanhSachKhachHangTaiTuc",{denThang:"2023-01-01 00:00:00",filterItems:[],loaiDichVu:0,mangLuoiId:4580,maxResultCount:500,skipCount:0,tuThang:"2022-04-01 00:00:00",type:-1}),{result:t,error:n}=a;n||(this.khachHangTaiTucs=t.items,this.tongCong=await t.items.map((a=>a.soPhaiDong)).reduce(((a,t)=>a+parseInt(t)),0)),p.Z.hide()}},mounted(){this.loadData()}};var m=n(1639),w=n(3246),f=n(490),H=n(1233),T=n(3115),_=n(2218),k=n(9984),b=n.n(k);const Z=(0,m.Z)(g,[["render",c]]),D=Z;b()(g,"components",{QList:w.Z,QItem:f.Z,QItemSection:H.Z,QItemLabel:T.Z,QSeparator:_.Z})}}]);