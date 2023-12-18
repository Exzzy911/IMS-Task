let val;
let val1;
let val2;
let val3;
let val4;

document.getElementById("myButton").onclick = function(){
    
    val = document.getElementById("myText").value;
    console.log(val);
    val1 = document.getElementById("myText1").value;
    console.log(val1);
    val2 = document.getElementById("myText2").value;
    console.log(val2);
    val3 = document.getElementById("myText3").value;
    console.log(val3);
    val4 = document.getElementById("myText4").value;
    console.log(val4);
    

    let profit = (val2 - val1) * val4;
    document.getElementById("myText5").value = profit;
    
}