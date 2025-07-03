/**
 * Đầu vào
 * khai báo biến giaTri1-giaTri5
 * khai báo biến tongTrungBinh
 *
 * Xử Lý
 * ép kiểu string thành float vì hệ thống mặc dịnh là chuổi nên muốn chuyển đổi thì phải dùng hàm parsefloat
 * Tính tongTrungBinh= (giaTri1+giaTri2+giaTri3+giaTri4+giaTri5)/5 theo đề bài
 *
 * Đầu ra
 * xuất ra màn hình kết quả trung bình tổng
 */

let btnTongTrungBinh = document.getElementById("btnTongTrungBinh");
btnTongTrungBinh.onclick = function () {
  let giaTri1 = parseFloat(document.getElementById("txtGiatri1").value);
  let giaTri2 = parseFloat(document.getElementById("txtGiatri2").value);
  let giaTri3 = parseFloat(document.getElementById("txtGiatri3").value);
  let giaTri4 = parseFloat(document.getElementById("txtGiatri4").value);
  let giaTri5 = parseFloat(document.getElementById("txtGiatri5").value);

  let tongTrungBinh = (giaTri1 + giaTri2 + giaTri3 + giaTri4 + giaTri5) / 5;
  console.log(tongTrungBinh);
  let divTongTrungBinh = document.getElementById("divTongTrungBinh");
  divTongTrungBinh.innerHTML = "Tổng trung bình là: " + tongTrungBinh;
};
