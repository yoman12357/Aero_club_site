document.getElementById("signin-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const emailInput = document.getElementById("email").value.trim();
  
    if (!emailInput) {
      alert("Please enter your email or phone number.");
      return;
    }
  
    // Simple validation (can be expanded)
    alert("Signed in as: " + emailInput);
  });
  