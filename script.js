function validateForm() {
    let x = document.forms["signInForm"]["firstName"].value;
    let y = document.forms["signInForm"]["surName"].value;
    // Check empty field
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (y == "") {
        alert("Surname must be filled out")
        return false;
    }
  }