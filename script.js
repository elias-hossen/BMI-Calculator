const inputAge = document.querySelector('.age-input');
const height = document.querySelector('.height-input');
const weight = document.querySelector('.weight-input');
const calculate = document.querySelector('.calculate-btn');
const result = document.querySelector('.calculated');
const BMI = document.querySelector('.calculate-bmi');
const condition = document.querySelector('.bmi-condition');

const work = function () {
  if (inputAge.value == '' || height.value == '' || weight.value == '') {
    alert('All fields required');
  } else {
    resultBMI();
    result.classList.remove('hidden');
    height.value = '';
    weight.value = '';
    inputAge.value = '';
  }
};
calculate.addEventListener('click', work);
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    work();
  }
});
let bmi = 26;
const resultBMI = function () {
  const h = Number(height.value);
  const w = Number(weight.value);
  bmi = Math.abs((w / h / h) * 10000).toFixed(2);
  BMI.textContent = bmi;
  if (bmi < 18.5) {
    condition.style.color = '#d7d70b ';
    BMI.style.background = '#d7d70b ';
    condition.textContent = 'UNDERWEIGHT';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    condition.style.color = '#26d70b  ';
    BMI.style.background = '#26d70b ';
    condition.textContent = 'NORMAL';
  } else if (bmi >= 25 && bmi <= 29.9) {
    condition.style.color = '#d70b0b  ';
    BMI.style.background = '#d70b0b';
    condition.textContent = 'OVERWEIGHT';
  } else if (bmi > 30) {
    condition.style.color = '#d70b0b  ';
    BMI.style.background = '#d70b0b';
    condition.textContent = 'OVERWEIGHT';
  }
};
