function loadNavbar(path) {
  document.getElementById("navbar").innerHTML = `
    <nav>
      <div class="authors">
        <ul>
          <li><a href="${path}about.html">About</a></li>
        </ul>
      </div>
      <div class="logo">
        <h1>Unknown Studio</h1>
      </div>
      <div class="user-profile">
        <div class="avatar" id="avatar" onclick="handleAvatar()">U</div>
      </div>
    </nav>
    <div class="dropdown" id="dropdown">
      <p id="dropUser"></p>
      <a href="${path}login.html" id="loginBtn">Login</a>
      <a href="#" id="logoutBtn" onclick="logout()" style="display:none">Logout</a>
    </div>
  `;
  checkSession();
  updateDropdown();
}

function updateDropdown() {
  const loggedIn = localStorage.getItem("loggedIn");
  const avatar = document.getElementById("avatar");
  const dropUser = document.getElementById("dropUser");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loggedIn) {
    if (avatar) avatar.textContent = loggedIn.charAt(0).toUpperCase();
    if (dropUser) dropUser.textContent = "Hello, " + loggedIn;
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "block";
  } else {
    if (avatar) avatar.textContent = "U";
    if (dropUser) dropUser.textContent = "Not logged in";
    if (loginBtn) loginBtn.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
}

function handleAvatar() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
  updateDropdown();
}
