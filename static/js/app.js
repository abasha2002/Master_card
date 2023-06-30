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
    const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
    const truncatedValue = formattedValue.trim().slice(0, 19);
    event.target.value = truncatedValue;
  });

CardDate.addEventListener('input', function(event) {
    const { value } = event.target;
    const formattedValue = value.replace(/\s/g, '').slice(0, 2);
    event.target.value = formattedValue;
});
CardDate1.addEventListener('input', function(event) {
    const { value } = event.target;
    const formattedValue = value.replace(/\s/g, '').slice(0, 2);
    event.target.value = formattedValue;
});
CardCVC.addEventListener('input', function(event){
    const { value } = event.target;
    const formattedValue = value.replace(/\s/g, '').slice(0, 3);
    event.target.value = formattedValue;
});


CardForm.addEventListener('submit', function(event) {
  let isValid = true;

  CardNumberError.textContent = '';
  CardNameError.textContent = '';
  CardDateError.textContent = '';

  const mastercardNumbers = /^(?:\d{4}\s){3}\d{4}$/;
  if (!mastercardNumbers.test(CardNumber.value)) {
    CardNumberError.textContent = 'Woops! Wrong format, numbers only.';
    CardNumber.style.borderColor = 'red';
    isValid = false;
  }else{
    CardNumber.style.borderColor = '';
  }

  if (!/^\d{2}$/.test(CardDate.value)) {
    CardDateError.textContent = 'Woops! Wrong format, numbers only.';
    CardDate.style.borderColor = 'red';
    isValid = false;
  }else{
    CardDate.style.borderColor = '';
    isValid = true;
  }

  if (!/^[A-Za-z\s]+$/.test(CardName.value)) {
    CardNameError.textContent = 'Woops! Wrong format, letters only.';
    CardName.style.borderColor = 'red';
    isValid = false;
  } else {
    CardName.style.borderColor = '';
    isValid = true;
  }

  if (!/^\d{2}$/.test(CardDate1.value)) {
    CardDateError.textContent = 'Woops! Wrong format, numbers only.';
    CardDate1.style.borderColor = 'red';
    isValid = false;
  }else{
    CardDate1.style.borderColor = '';
    isValid = true;
  }

  if (!/^\d{3}$/.test(CardCVC.value)) {
    CardDateError.textContent = 'Woops! Wrong format, numbers only.';
    CardCVC.style.borderColor = 'red';
    isValid = false;
  }else{
    CardCVC.style.borderColor = '';
    isValid = true;
  }

  if (!isValid) {
    event.preventDefault();
  }
});