const STORAGE_KEY = "spck_accounts";

let signup = document.querySelector("#signup");

if (signup) {
  signup.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    if (
      email.value.trim().length === 0 ||
      password.value.trim().length === 0 ||
      confirmPassword.value.trim().length === 0
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (password.value.trim() !== confirmPassword.value.trim()) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    let addAccount = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    addAccount.push({
      email: email.value.trim(),
      password: password.value.trim(),
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(addAccount));

    alert("Đăng ký thành công!");
    console.log(email.value);
    console.log(password.value);
  });
}
