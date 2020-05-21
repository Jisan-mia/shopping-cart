//1st plus sign event handler--->
const firstPlusSign = document.getElementById("1st-plusSign");
firstPlusSign.addEventListener("click", function(){
    allSign("updateValue", 1, "currentIphone", 1219, 5);
})
//second plus sign event handler
const secondPlusSign = document.getElementById("2nd-plusSign");
secondPlusSign.addEventListener("click", function(){
    allSign("coverUpdate", 1, "currentCover", 59, 5);
})

//1st minus sign event handler 
const firstMinusSign = document.getElementById("1st-minusSign");
firstMinusSign.addEventListener("click", function(){
    allSign("updateValue", -1, "currentIphone", -1219, -5);
})


//second minus sign event handler
const secondMinusSign = document.getElementById("2nd-minusSign");
secondMinusSign.addEventListener("click", function(){
    allSign("coverUpdate", -1, "currentCover", -59, -5);
})


//current values, updated value and tax value function 
function currentValues(currentValue, value, id, taxValue){
    iphoneAndCoverValue(currentValue, value, id);
    const subtotal = floatingInnerText("subtotal");
    iphoneAndCoverValue(subtotal,value, "subtotal" )
    const tax = floatingInnerText("tax");
    iphoneAndCoverValue(tax, taxValue, "tax");
}

// all the plus minus sign function:
function allSign(id, value, id2, value2, value3){
    const coverUpdate = floatingValue(id);
    updatedValue(coverUpdate, id, value);
    const currentCover = floatingInnerText(id2);
    currentValues(currentCover, value2, id2, value3 );
}

//get and float the input value (function)
function floatingValue(id){
    const number = document.getElementById(id).value;
    const floatingNumber = parseFloat(number);
    return floatingNumber;
}

//get and float the innerHTML (function)
function floatingInnerText(id){
    const number = document.getElementById(id).innerHTML.replace(',', '');
    const floatingNumber = parseFloat(number);
    return floatingNumber;
}

//update or degrade number value
function updatedValue(value, id, addValue){
    const currentValue = value+ addValue;
    if(currentValue<1){

    }
    else{
        document.getElementById(id).value = currentValue; 
    }

}
//update or degrade product value
function iphoneAndCoverValue(value, addValue, id){
    const updateValue = value+addValue;
    if(updateValue<1){
        
    }else{
    document.getElementById(id).innerHTML = updateValue;
    }
}
// check out button handler:
const checkOutBtn = document.querySelector("#checkOutBtn");
checkOutBtn.addEventListener("click", function(){
    const sectionPart = document.querySelector("#section");
    sectionPart.style.display = "none"
    const secTwo = document.querySelector("#sectionTwo")
    secTwo.style.display = "block";

})



