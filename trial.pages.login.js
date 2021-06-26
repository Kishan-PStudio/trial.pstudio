function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
    function validate()
    {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin"&& password=="admin" 
    || username=="kishan"&& password=="kishan"
    || username=="raju"&& password=="raju"
    || username=="lol"&& password=="lol")
    {
    alert("login sucessfull")
    return false;
    }
    else 
    {
    alert("login failed")
    }
    }
