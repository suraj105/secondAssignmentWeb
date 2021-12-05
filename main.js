function registration()
{

    var email= document.getElementById("t2").value;
    var pwd= document.getElementById("t4").value;			
    
    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    
    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    /* else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    } */
    else if(document.getElementById("t4").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    else if(document.getElementById("t4").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else
    {				                            
           alert('Thank You for Login & You are Redirecting to the Homepage');
           window.location = "http://127.0.0.1:5501/index.html"; 
    }
}
function clearFunc()
{
    document.getElementById("t2").value="";
    document.getElementById("t4").value="";

}

var code = document.getElementById("t4");

var strengthbar = document.getElementById("meter");
var display = document.getElementsByClassName("textbox")[0];

code.addEventListener("keyup", function() {
  checkpassword(code.value);
});


function checkpassword(password) {
  var strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;

  }

  if (password.length < 6) {
    display.innerHTML = "minimum number of characters is 6";
  }

  if (password.length > 12) {
    display.innerHTML = "maximum number of characters is 12";
  }

  switch (strength) {
    case 0:
      strengthbar.value = 0;
      break;

    case 1:
      strengthbar.value = 25;
      break;

    case 2:
      strengthbar.value = 50;
      break;

    case 3:
      strengthbar.value = 75;
      break;

    case 4:
      strengthbar.value = 100;
      break;
  }
}