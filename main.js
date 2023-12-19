var sbButton = document.getElementById("submit");
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");

var color = document.getElementById("color");
var colorVal = color.value;
console.log(colorVal)



var myDate = new Date();
myDate.setDate(myDate.getDate() + 3);
function submit(){
    document.cookie = `username=${nameInput.value};expires= ${myDate}`;
    document.cookie = `age=${ageInput.value};expires=${myDate}`;
    document.cookie = `gender=${displayRadioValue()};expires=${myDate}`;
    var UserOption  = document.getElementById("color").value;;
    console.log(UserOption)
    document.cookie = `color=${UserOption};expires=${myDate}`;
    document.cookie = `counter=0;expires=${myDate}`;
    window.open("./profile.html");
}

function displayRadioValue() {
    var ele = document.getElementsByName('gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            return ele[i].value;
        }
    }
}






