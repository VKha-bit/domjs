/**
 * Đầu vào
 * khai báo biến soTien
 *
 * Xủ lý
 * quy đổi tiền theo usd =soTien *23500 = tongTien
 * thực hiện format tiền theo vn dùm hàm intl.NumberFormat
 * Đầu ra
 * xuất ra màn hình kết quả usd đã quy đổi sang VND
 */

let btnQuyDoiTien = document.getElementById("btnQuySoTien");
btnQuyDoiTien.onclick = function () {
  let soTien = document.getElementById("txtTien").value;
  let usd = soTien * 23500;
  let vndFormatted = Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let divSoTien = document.getElementById("divSoTien");
  divSoTien.innerHTML = "Số tiền là: " + vndFormatted.format(usd);
};
