const CardForm = document.getElementById("form");
const CardNumber = document.getElementById("number");
const CardName = document.getElementById("name");
const CardDate = document.getElementById("date");
const CardDate1 = document.getElementById("date1");
const CardCVC = document.getElementById("CVC");

const CardNumberError = document.getElementById("number-error");
const CardNameError = document.getElementById("name-error");
const CardDateError = document.getElementById("date-error");


CardNumber.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '');
  const truncatedValue = formattedValue.slice(0, 16);
  const spacedValue = truncatedValue.replace(/(.{4})(?!$)/g, '$1 ');
  event.target.value = spacedValue;
});

CardDate.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').slice(0, 2);
  event.target.value = formattedValue;
});

CardDate1.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').slice(0, 2);
  event.target.value = formattedValue;
});

CardCVC.addEventListener('input', function(event) {
  const { value } = event.target;
  const formattedValue = value.replace(/\D/g, '').slice(0, 3);
  event.target.value = formattedValue;
});


CardForm.addEventListener('submit', function(event) {
  let isValid = true;

  CardNumberError.textContent = '';
  CardNameError.textContent = '';
  CardDateError.textContent = '';

  const mastercardNumbers = /^(?:\d{4}\s){3}\d{4}$/;
  if (!mastercardNumbers.test(CardNumber.value)) {
    CardNumberError.textContent = 'Woops! Wrong format, fill the input please.';
    CardNumber.style.borderColor = 'red';
    isValid = false;
  }else{
    CardNumber.style.borderColor = '';
  }

  if (!/^[A-Za-z\s]+$/.test(CardName.value)) {
    CardNameError.textContent = 'Woops! Wrong format, letters only.';
    CardName.style.borderColor = 'red';
    isValid = false;
  } else {
    CardName.style.borderColor = '';
  }


  if (!/^\d{2}$/.test(CardDate.value)) {
    CardDateError.textContent = 'Woops! Wrong format, fill the input please.';
    CardDate.style.borderColor = 'red';
    isValid = false;
  }else{
    CardDate.style.borderColor = '';
  }

  if (!/^\d{2}$/.test(CardDate1.value)) {
    CardDateError.textContent = 'Woops! Wrong format, fill the input please.';
    CardDate1.style.borderColor = 'red';
    isValid = false;
  }else{
    CardDate1.style.borderColor = '';
  }

  if (!/^\d{3}$/.test(CardCVC.value)) {
    CardDateError.textContent = 'Woops! Wrong format, fill the input please.';
    CardCVC.style.borderColor = 'red';
    isValid = false;
  }else{
    CardCVC.style.borderColor = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});