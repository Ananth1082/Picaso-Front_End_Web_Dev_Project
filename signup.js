document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (username === "" || password === "") {
      document.getElementById("error-message").textContent = "Username and password are required.";
  } else {
      fetch("server-side-login-script.php", {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              window.location.href = "dashboard.html";
          } else {
              document.getElementById("error-message").textContent = "Invalid username or password.";
          }
      })
      .catch(error => console.error("Error:", error));
  }
});