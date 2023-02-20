let counterValue = 0;

const counter = document.querySelector('#value');

const minusBtn = document.querySelector('button[data-action="decrement"]');

const plusBtn = document.querySelector('button[data-action="increment"]');

const resetBtn = document.querySelector('button[data-reset="reset"]');

minusBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
})

plusBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
})

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    counter.textContent = counterValue;
})




