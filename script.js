// alert("Connected");
while(true){
    var guess = prompt("val = ");
    var val = Number(guess);
    if(val === 7){
        alert("BOOYAH!!!!");
        break;
    }
    else if(val < 7){
        alert("Less than actual");
    }
    else {
        alert("Greater than actual");
    }
}
