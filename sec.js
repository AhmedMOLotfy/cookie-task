function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

var myDate = new Date();
myDate.setDate(myDate.getDate() + 3);

function getCounter(){
    var x = Number(getCookie("counter"));
    x++;
    document.cookie = `counter=${x};expires=${myDate}`;
    return x;
}

var UImg = document.getElementById("genderImg");
var uname = document.getElementById("u-name");
var con = document.getElementById("times");

console.log(UImg)
if(getCookie("gender") == "male"){
    UImg.src = "1.jpg";
}
else {
    UImg.src = "2.jpg";
}


uname.innerHTML = getCookie("username");
con.innerHTML = getCounter();


var spanss = document.getElementsByTagName("span");

for(var i = 0;i < spanss.length;i++){
    spanss[i].style.color = getCookie("color")
}