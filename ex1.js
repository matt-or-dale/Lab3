function validate(){
  var password1 = document.getElementById("password").value;
  var password2 = document.getElementById("verify").value;
  var len = password1.length;
  if((password1 != password2) || (len < 8)){
    window.alert("Failure. The password entered in both fields must match and be at least 8 characters long. Try again.");
  }
  else{
    window.alert("Success!");

  }
}
