/* -------------------------- kiểm tra email và sđt ------------------------- */
//khai báo lấy giá trị từ đâu
document.getElementById("textInput").addEventListener("input", function () {
  //lấy giá trị nhập từ html
  var input = document.getElementById("textInput").value;
  //biểu thức kiểm tra định dạng mail
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //biểu thức kiểm tra định dạng số điện thoại
  var phonePattern = /^\d{10}$/;
  // lấy phần từ hiển thị thông báo
  var errorMessage = document.getElementById("errorMessage");
  // kiểm tra xem chuỗi nhập có khớp với 1 tro 2 biểu thức trên
  if (emailPattern.test(input)) {
    errorMessage.style.display = "none";
  } else if (phonePattern.test(input)) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.innerText = "Email hoặc sđt không hợp lệ";
    errorMessage.style.display = "block";
    //đặt hàm ẩn sau 3s
    setTimeout(function () {
      errorMessage.style.display = "none";
    }, 5000);
  }
});
/* --------------------- bấm đăng nhập chuyển trang khác -------------------- */
// check credential
var errorMissing = document.getElementById("errorMissing");
function checkCredentials() {
  // lấy giá trị từ input email và password
  var email = document.getElementById("textInput").value;
  var password = document.getElementById("passwordInput").value;
  //kiểm tra xem đã nhập email với mk chưa
  if (email.trim() === "" || password.trim() === "") {
    alert("Bạn vui lòng nhập Email và mật khẩu nhé!");
  }
  // kiểm tra điều kiện
  if (email === "admin@gmail.com" && password === "123") {
    // nếu đúng mở trang mới
    openNewpage();
    //ngăn gửi form đi
    return false;
  } else {
    // nếu không đúng, hiện thông báo lỗi
    alert("Email hoặc mật khẩu không đúng");
    return false;
  }
}
// mở trang mới
function openNewpage() {
  window.open("https://facebook.com", "_blank");
}
