function activateButton() {
    let submitButton =  document.getElementsByClassName("button contact")[0];
    if (isNameCorrect() &&
        isEmailCorrect() &&
        !isTextBoxEmpty()) {
         
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function sendPost() {
    alert("Message has been sent!");
}

function isNameCorrect() {
    var htmlNameValue, regex;
    htmlNameValue = document.getElementById("name").value;
    regex = new RegExp("^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$");
    return validate("name", regex, htmlNameValue);
}

function isEmailCorrect() {
    var regex, htmlEmailValue;
    htmlEmailValue = document.getElementById("email").value;
    regex = new RegExp('^[a-z1-9]+@[a-z]+\.[a-z]{2,6}$');
    return validate("email", regex, htmlEmailValue);

}


function isTextBoxEmpty() {
    var htmlMessageValue, id;
    id = "message";
    htmlMessageValue = document.getElementById(id).value;
    if (htmlMessageValue == "" || htmlMessageValue.charAt(0) == " ") {
        document.getElementById(id).style.border = "2px solid red";
        return true;
    } else {
        document.getElementById(id).style.border = "2px solid black";
        return false;
    }
}

function validate(id, regex, htmlValue) {
    if (regex.test(htmlValue)) {
        document.getElementById(id).style.border = "2px solid black";
        return true;
    } else {
        document.getElementById(id).style.border = "2px solid red";
        return false;
    }

}