var target=new Date("January 27,2016 17:00:00").getTime();

setInterval(function(){

var actual = new Date().getTime();
var milisecondsLeft= target-actual; //miliseconds between dates;
document.getElementById("day").innerHTML = parseInt(milisecondsLeft/86400000);
milisecondsLeft=milisecondsLeft%86400000;
document.getElementById("hr").innerHTML = parseInt(milisecondsLeft/3600000);
milisecondsLeft=milisecondsLeft%3600000;
document.getElementById("min").innerHTML = parseInt(milisecondsLeft/60000);
milisecondsLeft=milisecondsLeft%60000;
document.getElementById("sec").innerHTML = parseInt(milisecondsLeft/1000);
milisecondsLeft=milisecondsLeft%1000;
document.getElementById("mili").innerHTML = milisecondsLeft;
}, 1);

