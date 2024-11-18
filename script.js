document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    // Basic client-side validation
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      // Redirect to the dashboard page (adjust the URL as needed)
      window.location.href = 'dashboard.html';
    } else {
      errorMessage.textContent = 'Invalid username or password!';
      errorMessage.style.display = 'block';
    }
  });
  