/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const val = document.getElementById("input-el");
const converts = document.getElementById("convert-btn");

let arr = [];

converts.addEventListener("click", () => convert(val.value));
converts.addEventListener("click", () => addToHTML(arr));

function convert(val) {
  arr = []
  const meter = { 
    title: "Length (Meter/Feet)",
    conversion: (val * 3.281).toFixed(2),
    secondConversion: (val / 3.281).toFixed(2),
    firstUnit: "meters",
    secondUnit: "feet"
    };
  const liter = {
  title: "Volume (Liter/Gallons)",
    conversion: (val * 0.264).toFixed(2),
    secondConversion: (val / 0.264).toFixed(2),
    firstUnit: "liters",
    secondUnit: "gallons"
    };
    const kilogram = {
    title: "Volume (Liter/Gallons)",
    conversion: (val * 0.264).toFixed(2),
    secondConversion: (val / 0.264).toFixed(2),
    firstUnit: "kilos",
    secondUnit: "pounds"
    };
            
    arr.push(meter);
    arr.push(liter);
    arr.push(kilogram);
}

function addToHTML(arr) {
    const divEl = document.getElementById("conversion-container");
    let html = "";
    divEl.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        html += `<div class="result">
        <p class="title">${arr[i].title}</p>  
        <p>${val.value} ${arr[i].firstUnit} = ${arr[i].conversion} ${arr[i].secondUnit} | 
        ${val.value} ${arr[i].secondUnit} = ${arr[i].secondConversion} ${arr[i].firstUnit}</p>
        </div>
        `
    }
    divEl.innerHTML += html;
}