  // Get the elements
const leftNumber = document.getElementById('left-number');
const rightNumber = document.getElementById('right-number');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');

// Initialize values
let leftValue = 10;
let rightValue = 0;

// Decrease button functionality
decreaseBtn.addEventListener('click', () => {
    if (leftValue > 1 && rightValue < 9) {
        leftValue -= 2;
        rightValue += 2;
        leftNumber.textContent = leftValue;
        rightNumber.textContent = rightValue;
    }
});

// Increase button functionality
increaseBtn.addEventListener('click', () => {
    if (leftValue < 9 && rightValue > 1) {
        leftValue += 2;
        rightValue -= 2;
        leftNumber.textContent = leftValue;
        rightNumber.textContent = rightValue;
    }
});
