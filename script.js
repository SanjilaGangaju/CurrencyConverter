const dropList =document.querySelectorAll(".dropdown select");
fromCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select");
getButton = document.querySelector("form button");
let exchangeRatetext= document.querySelector(".exchangeRate-text");

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
getButton.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if (amtVal==="" || amtVal<1){
        amtVal=1;
        amtVal.value="1";
    }
    const URL=`https://v6.exchangerate-api.com/v6/c9586faeceddafa2f5698f10/latest/${fromCurrency.value}`;
    fetch(URL).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amtVal * exchangeRate).toFixed(2);
        
        exchangeRatetext.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        exchangeRatetext.innerText = "Something went wrong";
    });
});
