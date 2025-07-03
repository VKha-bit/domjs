/**
 * Đầu vào:
 * khai báo biến luong
 * khai báo biến soNgay
 * khai báo biến tongLuong
 * Xử lý
 * Tổng lương = lương cơ bản * số ngày làm
 * tongLuong =luong * soNgay
 * Đầu ra
 * Hiện kết quả đã tính tổng tiền lương
 */

let btnTong_luong = document.getElementById("tongLuong");
btnTong_luong.onclick = function () {
  let luong = document.getElementById("txtLuong").value;
  let soNgay = document.getElementById("txtNgay").value;
  let tongLuong = luong * soNgay;
  console.log(tongLuong);
  let divInfor = document.getElementById("divInfo");
  divInfor.innerHTML = "Tổng lương là: " + tongLuong;
};
