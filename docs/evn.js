const txtTien=$('<input type="text" id="txt_tien_value" name="txt_tien_value" required="" data-parsley-trigger="change" data-parsley-length="[1,100]">'),btnSave=$('<button class="btn btn-secondary" type="button" onclick="saveWallet()" id="btn-save" disabled = true><i class="fa fa-save"></i> Lưu</button>'),btnShow=$('<button class="btn btn-show" type="button" onclick="showWallet()" id="btn-eye"><i class="fa fa-eye"></i> Xem</button>'),btnLock=$('<button class="btn btn-show" type="button" onclick="unLock()" id="btn-lock"><i class="fa fa-lock"></i> Mở</button>'),btnTraLai=$('<button class="btn btn-show" type="button" onclick="traLai()" id="btn-minus"><i class="fa fa-minus"></i> Trả lại</button>'),btnSaoChep=$('<button class="btn btn-copy" type="button" onclick="doCopy()" id="btn-copy"><i class="fa fa-copy"></i> Copy</button>');$("#wallet-current-balance").parent().append(btnSave),$("#wallet-current-balance").parent().append(btnShow),$("#wallet-current-balance").parent().append(btnLock),$("#wallet-current-balance").parent().append(txtTien),$("#wallet-current-balance").parent().append(btnTraLai),$("#btn-reset").parent().append(btnSaoChep),document.getElementById("txt_tien_value").addEventListener("keydown",(function(t){13==t.keyCode&&traLai()}),!0);const saveWallet=()=>{localStorage.setItem("ourarraykey",JSON.stringify(parseInt($("#wallet-current-balance").text().replaceAll(".","")))),alert("Đã lưu: "+parseInt(localStorage.getItem("ourarraykey"))),document.getElementById("btn-save").disabled=!0};let tongTien=0;const daThanhToan=()=>Math.round((parseInt(localStorage.getItem("ourarraykey"))-parseInt($("#wallet-current-balance").text().replaceAll(".","")))/1e3+.4),showWallet=()=>{alert("Tổng: "+daThanhToan())},unLock=()=>{document.getElementById("btn-save").disabled=!1},tienThua=()=>parseInt(document.getElementById("txt_tien_value").value)-daThanhToan(),tienTra=()=>Math.floor((1e3*parseInt(document.getElementById("txt_tien_value").value)-parseInt($("#total-amount").text().replaceAll(".","")))/1e3),traLai=()=>{!1===document.getElementById("btn-save").disabled?alert("Trả lại: "+tienTra()):alert("Trả lại: "+tienThua())},readEvn=async()=>({ma:document.getElementById("customer-code").textContent,ten:document.getElementById("customer-name").textContent,soDienThoai:document.getElementById("customer-phone").textContent,diaChi:document.getElementById("customer-address").textContent,soTien:document.getElementById("total-amount").textContent.replaceAll(".",""),ghiChu:document.getElementById("depositor_note").value}),doCopy=async()=>{const t=await readEvn();document.getElementById("depositor_name").value=t.ten,document.getElementById("depositor_address").value=t.diaChi,$.ajax({url:"https://evn-buudienxatulap.com/api/evns",type:"POST",async:!0,data:t})};