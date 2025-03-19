function addLeadingZero(value) {
    return value <= 9 ? `0${value}` : value;
}

function setTime(id) {
    var date = new Date();
    var h = addLeadingZero(date.getHours());
    var m = addLeadingZero(date.getMinutes());
    var s = addLeadingZero(date.getSeconds());
    var toPrint = `${h}:${m}:${s}`;
    document.getElementById(id).innerHTML = toPrint;
}

function timeOne() {
    setTime("sat1");
}

var intervalId;

function clockOne() {
    intervalId = setInterval(timeOne, 1000);
}

function stopClock() {
    clearInterval(intervalId);
}

function timeTwo() {
    setTime("sat2");
    setTimeout(timeTwo, 1000);
}

function sayHi() {
    alert("Hello, welcome to my webpage!");
}

function areYouReady() {
    var answer = confirm("Are you ready?!?");
    if (answer) {
        alert("Yeey, you are ready!");
    } else {
        alert("Meeeh, why?");
    }
}

function rateUs() {
    var answer = prompt("Rate our page? 0-5", "5");
    if (answer != null && answer.trim() != "") {
        alert(`Your answer: ${answer}`);
    } else {
        alert("Rate us next time!");
    }
}