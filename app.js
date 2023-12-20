let counter = 0;

var counterValue = document.getElementById('counter-value')
var buttonCountPlus = document.getElementById('buttonCountPlus')
var buttonCountMinus = document.getElementById('buttonCountMinus')
var resetBtn = document.querySelector('#reset')

buttonCountPlus.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter



})

buttonCountMinus.addEventListener('click', () => {
    counter--
    counterValue.innerHTML = counter
})

resetBtn.addEventListener('click', reset)

function reset() {
    counter = 0
    counterValue.innerHTML = counter
}