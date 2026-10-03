function convertCurrency(){
    var amount=document.getElementById("amt").value;
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var rates={

        INR:{
            USD: 0.011,
            EUR: 0.0095,
            GBP: 0.0082,
            JPY: 1.75,
            AUD: 0.016,
            CAD: 0.015,
            CHF: 0.0090,
            CNY: 0.079,
            AED: 0.043,
            INR: 1
        },
        USD:{
            INR: 88,
            EUR: 0.86,
            GBP: 0.74,
            JPY: 154,
            AUD: 1.52,
            CAD: 1.38,
            CHF: 0.79,
            CNY: 7.10,
            AED: 3.67,
            USD: 1
        },
        EUR:{
            INR: 103,
            USD: 1.16,
            GBP: 0.86,
            JPY: 179,
            AUD: 1.77,
            CAD: 1.60,
            CHF: 0.92,
            CNY: 8.25,
            AED: 4.27,
            EUR: 1
        },
        GBP:{
            INR: 119,
            USD: 1.35,
            EUR: 1.16,
            JPY: 208,
            AUD: 2.06,
            CAD: 1.86,
            CHF: 1.07,
            CNY: 9.58,
            AED: 4.95,
            GBP: 1
        },
        JPY:{
            INR: 0.57,
            USD: 0.0065,
            EUR: 0.0056,
            GBP: 0.0048,
            AUD: 0.0099,
            CAD: 0.0090,
            CHF: 0.0051,
            CNY: 0.046,
            AED: 0.024,
            JPY: 1
        },
        AUD:{
            INR: 58,
            USD: 0.66,
            EUR: 0.56,
            GBP: 0.49,
            JPY: 101,
            CAD: 0.90,
            CHF: 0.52,
            CNY: 4.67,
            AED: 2.42,
            AUD: 1
        },
        CAD:{
            INR: 64,
            USD: 0.72,
            EUR: 0.63,
            GBP: 0.54,
            JPY: 112,
            AUD: 1.11,
            CHF: 0.57,
            CNY: 5.14,
            AED: 2.65,
            CAD: 1
        },
        CHF: {
            INR: 98,
            USD: 1.27,
            EUR: 1.09,
            GBP: 0.93,
            JPY: 195,
            AUD: 1.92,
            CAD: 1.75,
            CNY: 8.99,
            AED: 4.65,
            CHF: 1
        },
        CNY:{
            INR: 12.5,
            USD: 0.14,
            EUR: 0.12,
            GBP: 0.10,
            JPY: 21.7,
            AUD: 0.21,
            CAD: 0.19,
            CHF: 0.11,
            AED: 0.52,
            CNY: 1
        },
        AED:{
            INR: 24,
            USD: 0.27,
            EUR: 0.23,
            GBP: 0.20,
            JPY: 42,
            AUD: 0.41,
            CAD: 0.38,
            CHF: 0.22,
            CNY: 1.93,
            AED: 1
        }
    };

    var result = amount * rates[from][to];
    document.getElementById("result").innerHTML=
        `${amount} ${from} = ${result} ${to}`;
}

var button=document.getElementById("btn")
button.addEventListener("click",function(){
    var amount=document.getElementById("amt").value;
    if(amount=="")
        alert("please enter amount")
})

    

var from = document.getElementById("from");
var leftimage=document.getElementById("leftimage")

from.addEventListener("click", function() {
    //if(leftimage.style.display=="none")
    if(from.value == "INR"){
        leftimage.setAttribute("src","india.webp" )
    }
    else if(from.value== "USD") {
        leftimage.setAttribute("src","us.webp");
    }
    else if(from.value== "EUR") {
        leftimage.setAttribute("src","eur.webp");
    }
    else if(from.value== "GBP") {
        leftimage.setAttribute("src","uk.webp");
    }
    else if(from.value== "JPY") {
        leftimage.setAttribute("src","japan.webp");
    }
    else if(from.value== "AUD") {
        leftimage.setAttribute("src","Australia.webp");
    }
    else if(from.value== "CAD") {
        leftimage.setAttribute("src","Canada.webp");
    }
    else if(from.value== "CHF") {
        leftimage.setAttribute("src","switz.webp");
    }
    else if(from.value== "CNY") {
        leftimage.setAttribute("src","China.webp");
    }
    else if(from.value== "AED") {
        leftimage.setAttribute("src","UAE.webp");
    }
});
    
 var to= document.getElementById("to");
var rightimage=document.getElementById("rightimage")

to.addEventListener("click", function() {
    //if(leftimage.style.display=="none")
    if(to.value == "INR"){
        rightimage.setAttribute("src","india.webp" )
    }
    else if(to.value== "USD") {
        rightimage.setAttribute("src","us.webp");
    }
    else if(to.value== "EUR") {
        rightimage.setAttribute("src","eur.webp");
    }
    else if(to.value== "GBP") {
        rightimage.setAttribute("src","uk.webp");
    }
    else if(to.value== "JPY") {
        rightimage.setAttribute("src","japan.webp");
    }
    else if(to.value== "AUD") {
        rightimage.setAttribute("src","Australia.webp");
    }
    else if(to.value== "CAD") {
        rightimage.setAttribute("src","Canada.webp");
    }
    else if(to.value== "CHF") {
        rightimage.setAttribute("src","switz.webp");
    }
    else if(to.value== "CNY") {
        rightimage.setAttribute("src","China.webp");
    }
    else if(to.value== "AED") {
        rightimage.setAttribute("src","UAE.webp");
    }
});