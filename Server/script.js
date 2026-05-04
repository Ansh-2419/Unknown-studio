function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  const errorMsg = document.getElementById("regError");

  if (username === "" || password === "" || confirm === "") {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (password !== confirm) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username]) {
    errorMsg.textContent = "Username already taken.";
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account created! Please login.");
  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === "" || password === "") {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[username]) {
    errorMsg.textContent = "Username not found.";
    return;
  }

  if (users[username] !== password) {
    errorMsg.textContent = "Wrong password.";
    return;
  }

  const activeSessions = JSON.parse(localStorage.getItem("activeSessions") || "[]");

  if (activeSessions.includes(username)) {
    errorMsg.textContent = "This account is already logged in.";
    return;
  }

  activeSessions.push(username);
  localStorage.setItem("activeSessions", JSON.stringify(activeSessions));
  localStorage.setItem("loggedIn", username);
  alert("Welcome, " + username + "!");
  window.location.href = "../server.html";
}

function logout() {
  const loggedIn = localStorage.getItem("loggedIn");
  let activeSessions = JSON.parse(localStorage.getItem("activeSessions") || "[]");
  activeSessions = activeSessions.filter(u => u !== loggedIn);
  localStorage.setItem("activeSessions", JSON.stringify(activeSessions));
  localStorage.removeItem("loggedIn");
  window.location.href = "../server.html";
}

function checkSession() {
  const loggedIn = localStorage.getItem("loggedIn");
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.textContent = loggedIn ? loggedIn.charAt(0).toUpperCase() : "U";
  }
}
