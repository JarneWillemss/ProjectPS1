function checkPass() {
    var hello = $("#passwordID").val();
    console.log(hello);
    if (isPasswordStrong(hello)) {
      window.location.href = "/goodPass.html";
    } else {
      window.location.href = "/badPass.html";
    }
  }
  
  function isPasswordStrong(password) {
    // Check length
    if (password.length < 8) {
        console.log("1");
      return false;
    }
    
    // Check uppercase letters
    if (!/[A-Z]/.test(password)) {
        console.log("2");
      return false;
    }
    
    // Check lowercase letters
    if (!/[a-z]/.test(password)) {
        console.log("3");
      return false;
    }
    
    // Check numbers
    if (!/\d/.test(password)) {
        console.log("4");
      return false;
    }
    
    // Check symbols
    if (!/[\W_]/.test(password)) {
        console.log("5");
      return false;
    }
    
    // Check for commonly used words
    var commonWords = ["password", "123456", "qwerty", "letmein", "admin", "welcome", "monkey", "login", "abc123", "passw0rd"];
    for (var i = 0; i < commonWords.length; i++) {
      if (password.toLowerCase().indexOf(commonWords[i]) !== -1) {
        return false;
      }
    }
    
    // Password is strong
    return true;
  }
  