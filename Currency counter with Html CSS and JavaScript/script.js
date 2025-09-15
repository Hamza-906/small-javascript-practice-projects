const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";


const dropdowns = document.querySelectorAll(".drop-down select");
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector('.msg');


     // Country codes and currnecy codes 

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "From" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "To" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

    // Flag update with country code 

const updateFlag = (element) => {
  let currCode = element.value;
  let countCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener('click', async (e)=>{
    e.preventDefault();

    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;
    if(amtVal === '' || amtVal < 1){
        amtVal = 1;
        amount.value = '1';
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`
    let response = await fetch(URL);
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    let data = await response.json();
    let rate = data[from][to];
    let finalAmount = (rate * amtVal).toFixed(2);
    
    msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`

})