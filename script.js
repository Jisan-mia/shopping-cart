//1st plus sign event handler--->
const firstPlusSign = document.getElementById("1st-plusSign");
firstPlusSign.addEventListener("click", function(){
    const updateValue= floatingValue("updateValue");
    updatedValue(updateValue, "updateValue", 1);
    const currentIphone = floatingInnerText("currentIphone");
    iphoneAndCoverValue(currentIphone, 1219, "currentIphone");
    const subtotal = floatingInnerText("subtotal");
    iphoneAndCoverValue(subtotal, 1219, "subtotal" );
    const tax = floatingInnerText("tax");
    iphoneAndCoverValue(tax, 5, "tax");
})
//1st minus sign event handler 
const firstMinusSign = document.getElementById("1st-minusSign");
firstMinusSign.addEventListener("click", function(){
    const degradeValue = floatingValue("updateValue");
    updatedValue(degradeValue, "updateValue", -1);
    const currentIphone = floatingInnerText("currentIphone");
    iphoneAndCoverValue(currentIphone, -1219, "currentIphone");
    const subtotal = floatingInnerText("subtotal");
    iphoneAndCoverValue(subtotal,-1219, "subtotal" )
    const tax = floatingInnerText("tax");
    iphoneAndCoverValue(tax, -5, "tax");

})
//second plus sign event handler
const secondPlusSign = document.getElementById("2nd-plusSign");
secondPlusSign.addEventListener("click", function(){
    const coverUpdate = floatingValue("coverUpdate");
    updatedValue(coverUpdate, "coverUpdate", 1);
    const currentCover = floatingInnerText("currentCover");
    iphoneAndCoverValue(currentCover, 59, "currentCover");
    const subtotal = floatingInnerText("subtotal");
    iphoneAndCoverValue(subtotal,59, "subtotal" )
    const tax = floatingInnerText("tax");
    iphoneAndCoverValue(tax, 5, "tax");
})
//second minus sign event handler
const secondMinusSign = document.getElementById("2nd-minusSign");
secondMinusSign.addEventListener("click", function(){
    const coverUpdate = floatingValue("coverUpdate");
    updatedValue(coverUpdate, "coverUpdate", -1);
    const currentCover = floatingInnerText("currentCover");
    iphoneAndCoverValue(currentCover, -59, "currentCover")
    const subtotal = floatingInnerText("subtotal");
    iphoneAndCoverValue(subtotal,-59, "subtotal" )
    const tax = floatingInnerText("tax");
    iphoneAndCoverValue(tax, -5, "tax");
    
})
//get and float the input value (function)
function floatingValue(id){
    const number = document.getElementById(id).value;
    const floatingNumber = parseFloat(number);
    return floatingNumber;
}
//get and float the innerHTML (function)
function floatingInnerText(id){
    const number = document.getElementById(id).innerHTML;
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


