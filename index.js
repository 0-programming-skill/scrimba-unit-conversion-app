/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputElement = document.getElementById('js-input');
const convertButtonElement = document.getElementById('js-convert-button');
const lengthPElement = document.getElementById('js-length-p');
const volumePElement = document.getElementById('js-volume-p');
const massPElement = document.getElementById('js-mass-p');

let inputValue = '';

function convert() {

  inputValue = inputElement.value;

  let meterToFeet = (inputValue * 3.281).toFixed(3);
  let feetToMeter = (inputValue / 3.281).toFixed(3);
  let litersToGallons = (inputValue * 0.264).toFixed(3);
  let gallonsToLiters = (inputValue / 0.264).toFixed(3);
  let kilosToPounds = (inputValue * 2.204).toFixed(3);
  let poundsToKilos = (inputValue / 2.204).toFixed(3);

  lengthPElement.innerText = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`;

  volumePElement.innerText = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;

  massPElement.innerText = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`;
}

convertButtonElement.addEventListener('click', convert);