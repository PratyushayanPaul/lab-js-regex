function formValidate(){
    if(name_check() && address_check() && email_check() && password_check() && password_match() && phone_check()){
        document.getElementById("successbutton").innerHTML = "Validation succesful";
        return false;
    }
    else{
        return false;
    }
}

function name_check(){
    let check_name = document.getElementById("Name").value;
    let pattern_name=/\w{8,15}/;
    if(pattern_name.test(check_name)){
        document.getElementById("name").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("Name").focus();
        document.getElementById("name").innerHTML = "Name should be between 8-15 characters";
        return false;
    }
}

function address_check(){
    let check_address = document.getElementById("Address").value;
    let pattern_address = /\w/;
    if(pattern_address.test(check_address)){
        document.getElementById("address").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("Address").focus();
        document.getElementById("address").innerHTML = "Kindly fill Address field";
        return false;
    }
}

function email_check(){
    let check_email = document.getElementById("Email").value;
    let pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(pattern_email.test(check_email)){
        document.getElementById("email").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("Email").focus();
        document.getElementById("email").innerHTML = "Enter a valid email"
        return false;
    }
}

function password_check(){
    let check_password = document.getElementById("Password").value;
    let pattern_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/;
    if(pattern_password.test(check_password)){
        document.getElementById("pwd").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("Password").focus();
        document.getElementById("pwd").innerHTML = "Password must contain 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol"
        return false;
    }
}

function password_match(){
    let password1 = document.getElementById("Password").value;
    let password2 = document.getElementById("cPassword").value;
    if(password1!=password2){
        document.getElementById("cPassword").focus();
        document.getElementById("cpwd").innerHTML = "Password mismatch";
        return false;
    }
    else{
        document.getElementById("cpwd").innerHTML="";
        return true;
    }

}

function phone_check(){
    let check_phone = document.getElementById("Phone").value;
    let pattern_phone = /^[6-9]{1}\d{9}$/;
    if(pattern_phone.test(check_phone)){
        document.getElementById("phone").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("Phone").focus();
        document.getElementById("phone").innerHTML = "Enter a valid number";
        return false;
    }
}
