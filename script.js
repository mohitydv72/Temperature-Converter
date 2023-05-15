const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const btn = document.getElementById('btn');
//round of number
function roundNumber(number){
    return Math.round(number*100)/100
}
//cel to all
celsiusInput.addEventListener('input',function(){
    let cVal = parseFloat(celsiusInput.value)
    let fVal = (cVal*(9/5))+32
    let kVal = cVal+273.15

    fahrenheitInput.value=roundNumber(fVal)
    kelvinInput.value=roundNumber(kVal)
})
//fahrenheit to all
fahrenheitInput.addEventListener('input',function(){
    let fVal = parseFloat(fahrenheitInput.value)
    let cVal = (fVal-32)*(5/9)
    let kVal = (fVal-32)*(5/9)+273.15

    celsiusInput.value=roundNumber(cVal)
    kelvinInput.value=roundNumber(kVal)
})
//kelvin to all
kelvinInput.addEventListener('input',function(){
    let kVal = parseFloat(kelvinInput.value)
    let cVal = kVal-273.15
    let fVal = (kVal-273.15)*(9/5)+32

    celsiusInput.value=roundNumber(cVal)
    fahrenheitInput.value=roundNumber(fVal)
})
//clear all
btn.addEventListener('click',()=>{
    celsiusInput.value=""
    fahrenheitInput.value=""
    kelvinInput.value=""
})