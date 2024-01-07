import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accessToken")) {
    window.location.href = "dashborad/dashboard.html";
  }
  else {
    window.location.href = "login/login.html";
  }
})
