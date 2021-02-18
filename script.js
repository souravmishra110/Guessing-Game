// alert("Connected");
var guess = prompt("val = ");
var val = Number(guess);
if(val === 7){
    alert("BOOYAH!!!!");
}
else if(val < 7){
    alert("Less than actual");
}
else {
    alert("Greater than actual");
}