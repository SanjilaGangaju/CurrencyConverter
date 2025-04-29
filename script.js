const dropList =document.querySelectorAll(".dropdown select");
fromCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select");
getButton = document.querySelector("form button");
console.log(dropList);

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
  console.log(element.value);
}
