function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}


//--------------------------------------------------------------------------------------------------------------



let forgetPass = document.getElementById("forgetPass");
forgetPass.onclick = function(){
    
    Toastify({
        text: "Try Using 'admin@user.com' as Email and '123456' as Password",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
            background: "rgb(33, 57, 95)",
        },
        }).showToast();
    
}


//--------------------------------------------------------------------------------------------------------------



function login(){
    var email = document.getElementById("email").value;
    var password =+ document.getElementById("password").value;
    email = email.replace(/\./g,'')
    if(email == "admin@usercom"){
        if(password == "123456"){   
            location.href = "home.html";
        }
        else{
            Toastify({
            text: "Incorrect Password!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true,
            style: {
                background: "#17171F",
            },
            }).showToast();
        }
    }
    else{
        
            Toastify({
            text: "Incorrect Email!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "#17171F",
              },
            }).showToast();
        
    }
    var fullName = document.getElementById("username").value;
    if(fullName.length < 3){
        Toastify({
            text: "Please Enter A Valid Name!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "#17171F",
              },
            }).showToast();
        
        return;
    }
    else{
        sessionStorage.setItem("fullName", fullName);
            
    }
    
}