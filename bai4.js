/**
 * Đầu vào
 * Khai báo biến chiều dài
 * Khai báo biến chiều rộng
 * Khai báo biến diện tích
 * Khai báo biến Chu vi
 *
 * Xử lý
 * Áp dụng theo công thức dienTich=chieuDai*chieuRong, dienTich= (chieuDai+chieuRong)*2
 *
 * Đầu ra
 * xuất ra màn hình kết quả diện tích và  chu vi
 */
let btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  let txtDai = parseFloat(document.getElementById("txtDai").value);
  let txtRong = parseFloat(document.getElementById("txtRong").value);
  let dienTich = txtDai * txtRong;
  let chuVi = (txtDai + txtRong) * 2;
  let divDtCv = document.getElementById("divDtCv");
  divDtCv.innerHTML = "Diện Tích là: " + dienTich + "; Chu Vi là: " + chuVi;
};
