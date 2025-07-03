/**
 * Đầu vào
 * khai báo biến nhapSo cho người dùng nhập vào 2 số
 * khai báo biến hangChuc
 * khai báo biến donVi
 * khai bao biến tong
 *
 * Xử lý
 *
 * lấy số người dùng nhập /10 lấy phần nguyên là biến hangChuc dùng thêm hàm Math.floor để làm trong xuống
 * lấy số người dùng nhập % 10 lấy phần dư là biến donVi
 * tổng 2 ký tự số: tong=donVi+ hangChuc
 *
 * Đầu ra
 *
 * Xuất ra màn hình kết quả sau khi đã xử lý
 */

const btnTinhTong = document.getElementById("btnTinhTong");
btnTinhTong.onclick = function () {
  let txtNhapso = document.getElementById("txtNhapSo").value;
  let hangChuc = Math.floor(txtNhapso / 10);
  let donVi = txtNhapso % 10;
  let tong = hangChuc + donVi;
  let divTong = document.getElementById("divTong");
  divTong.innerHTML = "Tổng là: " + tong;
};
