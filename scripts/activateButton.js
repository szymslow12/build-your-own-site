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
    regex = new RegExp("^([A-Z]{1}[a-z]+ ?)+$");//[A-Z]{1}[a-z]+$");
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
    if (htmlMessageValue.length ==  0 || htmlMessageValue.charAt(0) == " ") {
        document.getElementById(id).style.border = "2px solid black";
        return true;
    } else {
        document.getElementById(id).style.border = "2px solid #c2c2a3";
        return false;
    }
}

function validate(id, regex, htmlValue) {
    let element = document.getElementById(id);
    let label = document.getElementById(id + "-label");
    let badInputBox = document.createElement("div");
    badInputBox.setAttribute("class", "dropdown");
    badInputBox.textContent = "Bad input!";
    
    if (regex.test(htmlValue)) {
        element.style.border = "2px solid #c2c2a3";
        for (let i = 0; i < label.childNodes.length; i++) {
            if (i != 0) {
                label.removeChild(label.childNodes[i]);
            }
        }
        return true;
    } else {
        element.style.border = "2px solid black";
        if (label.childNodes.length < 2) {
            label.appendChild(badInputBox);
            badInputBox.style.background = "white";
		badInputBox.style.color = "red";
            badInputBox.style.top = (element.offsetTop - element.offsetHeight ) + "px";
            badInputBox.style.left = element.offsetLeft + "px";
        } 
       return false;
    }

}

function addNameListener() {
    let nameInput = document.getElementById("name");
    nameInput.addEventListener("input", isNameCorrect);
}

function addEmailListener() {
    let emailInput = document.getElementById("email");
    emailInput.addEventListener("input", isEmailCorrect);
}

function addMessageListener() {
    let messageInput = document.getElementById("message");
    messageInput.addEventListener("input", isTextBoxEmpty);
}

function addListeners() {
    addNameListener();
    addEmailListener();
    addMessageListener();
}
