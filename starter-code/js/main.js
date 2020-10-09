let pin = [0, 3, 0, 3, 8, 9];
let keyPressed = [];
let action = "";
let $toDisplay = document.querySelector(".display_screen");
let $pinHolder = document.querySelector(".pin_holder");
let $toShowbalance = document.querySelector(".shown_balance")

document.querySelector("#screen__landing").style.display = ("none");

document.querySelector(".keypad").addEventListener("click", function (e) {
    let id = Number(e.target.getAttribute("id"));
    let action = e.target.getAttribute("id");


    if (keyPressed.length < 6 && !isNaN(id)) {

        keyPressed.push(Number(id));
        let $div = document.createElement("div");
        $div.className = ("hide_pin");
        let $hidePin = document.createTextNode("*");
        $pinHolder.appendChild($div);
        $div.appendChild($hidePin);

    } else if (keyPressed.length == 6) {
        if (action == "accept") {

            checkPin(keyPressed);

        } else if (action == "cancel") {

            location.reload();

        }
    } else if (keyPressed.length < 6 && isNaN(id)) {
        if (action == "clear") {

            location.reload();

        }
    }
    console.log(keyPressed);
    console.log(action);
});

function checkPin(keys) {
    if (keys.join("") == pin.join("")) {
        document.querySelector("#screen__pin").style.display = ("none");
        document.querySelector("#screen__landing").style.display = ("block");
        keyPressed = [];
    } else {
        $toDisplay.style.backgroundColor = ("red");
        $pinHolder.remove();
        let $div = document.createElement("div");
        let $errTxt = document.createTextNode("Please try again!");
        $toDisplay.appendChild($div);
        $div.appendChild($errTxt);
    }

}

let initialBalance = 10000;

let $balanceDiv = document.createElement("div");
let $balance = document.createTextNode(initialBalance);
$toShowbalance.appendChild($balanceDiv);
$balanceDiv.appendChild($balance);

var d = new Date();
var n = d.toString();
var h = d.getHours();

let $dateDiv = document.createElement("div");
let $date = document.createTextNode(n);
document.querySelector(".time").appendChild($dateDiv);
$dateDiv.appendChild($date);

if (h > 11) {
    let $greetingDiv = document.createElement("div");
    let $greeting = document.createTextNode("Good day sir/ma'am!");
    document.querySelector(".greeting").appendChild($greetingDiv);
    $greetingDiv.appendChild($greeting);
} else if (h > 18) {
    let $greetingDiv = document.createElement("div");
    let $greeting = document.createTextNode("Good evening sir/ma'am!");
    document.querySelector(".greeting").appendChild($greetingDiv);
    $greetingDiv.appendChild($greeting);
} else if (h > 0) {
    let $greetingDiv = document.createElement("div");
    let $greeting = document.createTextNode("Good morning sir/ma'am!");
    document.querySelector(".greeting").appendChild($greetingDiv);
    $greetingDiv.appendChild($greeting);
}

document.querySelector(".withdraw").addEventListener("click", function (e){
    if(initialBalance > 0){
        document.querySelector("#screen__landing").style.display = ("none");
        document.querySelector("#screen__withdraw").style.display = ("block");
    }
});
