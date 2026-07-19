const STORAGE_KEY = "spck_accounts";

function getAccounts() {
  const savedAccounts = localStorage.getItem(STORAGE_KEY);
  if (savedAccounts) {
    return JSON.parse(savedAccounts);
  }

  const legacyAccounts = localStorage.getItem("accounts");
  if (legacyAccounts) {
    const parsedAccounts = JSON.parse(legacyAccounts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedAccounts));
    localStorage.removeItem("accounts");
    return parsedAccounts;
  }

  return [];
}

let login = document.getElementById("login");

if (login) {
  login.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailLogin = document.getElementById("email");
    let passLogin = document.getElementById("password");
    let emailLoginValue = emailLogin.value;
    let passLoginValue = passLogin.value;

    let accounts = getAccounts();

    let matchedAccount = accounts.find((index) => {
      return (
        index.email === emailLoginValue.trim() &&
        index.password === passLoginValue.trim()
      );
    });

    if (matchedAccount) {
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  });
}
