var count=1;

 function validate(){

    var username= document.getElementById("t1").value;
    var password= document.getElementById("t2").value;
    var submitBtn = document.getElementById("submit");

   if(username=="Admin" && password=="Admin"){
        alert("Login Succesful");
        window.location= "./admin.html"
        return;
    }
    else
    {
        count++;
        alert("login failed, Incorrect usename or password");
        if(count>3){
            alert("The username or password was incorrect 3 times, login Disabled");
            submitBtn.disabled = true;

        }
        else{
            return false;
        }
        
    }
} 

function clearFunc()
{
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
}
