function select(identifier){
    return document.querySelector(identifier);
}
function selectAll(identifier){
    return document.querySelectorAll(identifier);
}
function display(id,show=true){
    if(show)
        id.style.display = "block";
    else
        id.style.display = "none";

}
function showWarning(id, warningMessage){
    changeContent(id, warningMessage);
    display(id);
}
function changeContent(id,content){
    id.textContent = content;
}
function validate(){
    let name = select('#name').value;
    let email = select('#email').value;
    let pw1 = select('#password').value;
    let pw2 = select('#confirmpassword').value;
    let phno = select('#phonenumber').value;

    let invalidName = select('#invalid-name');
    let invalidEmail = select('#invalid-email');
    let invalidPassword = select('#invalid-pw');
    let invalidPassword2 = select('#invalid-pw2');
    let invalidNumber = select('#invalid-number');

    if(name==null || name==""){
        showWarning(invalidName, "Please enter your name");
        return false;
    }
    else if(name.length<=2 || name.length>=30){
        showWarning(invalidName, "Name length should be greater than 2 and less than 30");
        return false;
    }
    else if(!isNaN(name)){
        showWarning(invalidName, "Name should contain only characters");
        return false;
    }
    else{
        display(invalidName, false);
        // return true;
    }
    
    if(email==null || email==""){
        return true;
    }
    else if(email[email.length-3]!='.' && email[email.length-4]!='.'){
        showWarning(invalidEmail, "Email seems Invalid");
        console.log(email[email.length-2], " ", email[email.length-3]);
        return false;
    }
    else{
        display(invalidEmail, false);
    }

    if(pw1==null || pw1==""){
        return true;
    }
    else if(pw1.length<=4 || pw1.length>=13){
        showWarning(invalidPassword, "Password length should be between 5 and 13");
        return false;
    }
    else{
        display(invalidPassword, false);
    }

    if(pw2==null || pw2==""){
        return true;
    }
    else if(pw1!=pw2){
        showWarning(invalidPassword2, "Passwords does not match");
        return false;
    }
    else{
        display(invalidPassword2, false);
    }

    if(phno==null || phno==""){
        return true;
    }
    else if(phno.length!=10){
        showWarning(invalidNumber, "Invalid Number! Length must be exact 10");
        return false;
    }
    else{
        display(invalidNumber, false);
    }
    return true;
}