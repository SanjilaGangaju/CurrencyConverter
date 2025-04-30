const dropList =document.querySelectorAll(".dropdown select");
fromCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select");
getButton = document.querySelector("form button");
let exchangeRatetext= document.querySelector(".msg");
const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
for (let select of dropList){
    for (currencyCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currencyCode;
        newOption.value=currencyCode;
        if (select.name ==="from" && currencyCode==="USD"){
            newOption.selected="selected";
        }
        else if (select.name === "to" && currencyCode ==="NPR"){
            newOption.selected="selected";
        }
        select.append(newOption);
       
}
select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
})

};
const updateFlag=(element)=>{
    let currCode = element.value;
    let countryCode=countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};
const updateExchangeRate=  async()=>{
    
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if (amtVal==="" || amtVal<1){
        amtVal=1;
        amtVal.value="1";
    }
     
    const URL =`${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data=await response.json();
    let rate=data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    let finalAmount = amtVal*rate;
    exchangeRatetext.innerText=`${amtVal} ${fromCurrency.value}=${finalAmount}${toCurrency.value}`;
};
getButton.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();

});
// window.addEventListener("load",()=>{
//     updateExchangeRate();
// });
