const CardForm = document.getElementById("form");
const CardNumber = document.getElementById("number");
const CardName = document.getElementById("name");
const CardDate = document.getElementById("date");
const CardDate1 = document.getElementById("date1");
const CardCVC = document.getElementById("CVC");

const CardNumberError = document.getElementById("number-error");
const CardNameError = document.getElementById("name-error");
const CardDateError = document.getElementById("date-error");
const CardCVCError = document.getElementById("CVC-error");


CardNumber.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '');
  const truncatedValue = formattedValue.slice(0, 16);
  const spacedValue = truncatedValue.replace(/(.{4})(?!$)/g, '$1 ');
  event.target.value = spacedValue;

  const mastercardNumbers = /^(?:\d{4}\s){3}\d{4}$/;
  if (!mastercardNumbers.test(CardNumber.value)) {
    CardNumberError.textContent = 'Enter 16 digits';
    CardNumber.style.borderColor = 'red';
  }else{
    CardNumberError.textContent = '';
    CardNumber.style.borderColor = '';
  }
});

CardName.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/[0-9]/g, '');

  if (formattedValue !== value) {
    event.target.value = formattedValue;
  }

  if (/[0-9]/.test(value)) {
    CardNameError.textContent = 'Digits are not allowed! Only letters';
    CardName.style.borderColor = 'red';
  } else {
    CardNameError.textContent = '';
    CardName.style.borderColor = '';
  }
});

CardDate.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').slice(0, 2);
  event.target.value = formattedValue;

  const isValid = /^\d{2}$/.test(CardDate.value) && /^\d{2}$/.test(CardDate1.value);
  if (!isValid) {
    CardDateError.textContent = 'Enter 2 digits';
    CardDate.style.borderColor = 'red';
    CardDate1.style.borderColor = 'red';
  } else {
    CardDateError.textContent = '';
    CardDate.style.borderColor = '';
    CardDate1.style.borderColor = '';
  }
});

CardDate1.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').slice(0, 2);
  event.target.value = formattedValue;

  const isValid = /^\d{2}$/.test(CardDate.value) && /^\d{2}$/.test(CardDate1.value);
  if (!isValid) {
    CardDateError.textContent = 'Enter 2 digits';
    CardDate.style.borderColor = 'red';
    CardDate1.style.borderColor = 'red';
  } else {
    CardDateError.textContent = '';
    CardDate.style.borderColor = '';
    CardDate1.style.borderColor = '';
  }
});

CardCVC.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').slice(0, 3);
  event.target.value = formattedValue;

  if (!/^\d{3}$/.test(CardCVC.value)) {
    CardCVCError.textContent = 'Enter 3 digits';
    CardCVC.style.borderColor = 'red';
  }else{
    CardCVCError.textContent = '';
    CardCVC.style.borderColor = '';
  }

});


CardForm.addEventListener('submit', function(event) {
  let isValid = true;

  CardNameError.textContent = '';

  const mastercardNumbers = /^(?:\d{4}\s){3}\d{4}$/;
  if (!mastercardNumbers.test(CardNumber.value)) {
    isValid = false;
  }

  if (!/^[A-Za-z\s]+$/.test(CardName.value)) {
    isValid = false;
  }

  if (!/^\d{2}$/.test(CardDate.value)) {
    isValid = false;
  }

  if (!/^\d{2}$/.test(CardDate1.value)) {
    isValid = false;
  }

  if (!/^\d{3}$/.test(CardCVC.value)) {
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});