function clickAdd() {
    document.getElementById("add-btn").style.border = "hidden yellowgreen 1.5px";
    document.getElementById("minus-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("mul-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("div-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("operator").value = "add";
}

function clickMinus() {
    document.getElementById("add-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("minus-btn").style.border = "hidden yellowgreen 1.5px";
    document.getElementById("mul-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("div-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("operator").value = "minus";
}

function clickMul() {
    document.getElementById("add-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("minus-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("mul-btn").style.border = "hidden yellowgreen 1.5px";
    document.getElementById("div-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("operator").value = "mul";
}

function clickDiv() {
    document.getElementById("add-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("minus-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("mul-btn").style.border = "solid yellowgreen 1.5px";
    document.getElementById("div-btn").style.border = "hidden yellowgreen 1.5px";
    document.getElementById("operator").value = "div";
}

function load() {
    var operator = document.getElementById("operator").value;
    var message = document.getElementById("message").innerHTML;
    var message_box = document.getElementById("message-box");

    if (operator === "add") {
        document.getElementById("add-btn").style.border = "hidden yellowgreen 1.5px";
    }

    if (operator === "minus") {
        document.getElementById("minus-btn").style.border = "hidden yellowgreen 1.5px";
    }

    if (operator === "mul") {
        document.getElementById("mul-btn").style.border = "hidden yellowgreen 1.5px";
    }

    if (operator === "div") {
        document.getElementById("div-btn").style.border = "hidden yellowgreen 1.5px";
    }

    if (message !== "") {
        message_box.style.animation = "animatop 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";

        if (x.matches) {
            message_box.style.top = "335px";
        }
        else {
            message_box.style.top = "275px";
        }
        
        message_box.style.background = "aquamarine";
    }
    else {
        message_box.style.animation = "initial";
        message_box.style.top = "0px";
        message_box.style.background = "rgb(230, 230, 250)";
        document.getElementById("message").innerHTML = "";
    }
}

function clickToReverse(x) {
    var message_box = document.getElementById("message-box");
    message_box.style.animation = "initial";
    message_box.style.top = "0px";
    message_box.style.background = "rgb(230, 230, 250)";
    message.innerHTML = "";

    document.getElementById("content").classList.remove("appear");
    document.getElementById("content").classList.add("disappear");
    document.getElementById("side-front").classList.remove("none-flipped");
    document.getElementById("side-front").classList.add("flipped");
    document.getElementById("side-back-content").classList.remove("bounceDown-ani");
    document.getElementById("side-back-content").classList.add("bounceUp-ani");

    if (x.matches) {
        document.getElementById("side-back-content").style.top = "-335px";
    }
    else {
        document.getElementById("side-back-content").style.top = "-275px";
    }
    
    document.getElementById("side-back-content").classList.add("spin-ani");
    document.getElementById("side-back-content").style.transform = "rotateX(0deg)";
    document.getElementById("side-back-content").style.visibility = "visible";
    document.getElementById("btn-wrap-close").style.visibility = "visible";
}

function clickToComeback() {
    document.getElementById("content").classList.remove("disappear");
    document.getElementById("content").classList.add("appear");
    document.getElementById("side-front").classList.remove("flipped");
    document.getElementById("side-front").classList.add("none-flipped");
    document.getElementById("side-back-content").classList.add("bounceDown-ani");
    document.getElementById("side-back-content").style.top = "0px";
    document.getElementById("side-back-content").style.transform = "rotateX(-180deg)";
    document.getElementById("side-back-content").style.visibility = "hidden";
    document.getElementById("side-back-content").classList.remove("bounceUp-ani");
    document.getElementById("side-back-content").classList.remove("spin-ani");
    document.getElementById("btn-wrap-close").style.visibility = "hidden";
}

var x = window.matchMedia("(max-width: 709px)")
clickToReverse(x) // Call listener function at run time
x.addListener(clickToReverse) // Attach listener function on state changes
