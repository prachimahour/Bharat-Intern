const celsiusInput = document.querySelector('#celsius');
const fahrenheitInput = document.querySelector('#fahrenheit');
const kelvinInput = document.querySelector('#kelvin');
const convertFahrenheitButton = document.querySelector('#convert-to-fahrenheit');
const convertKelvinButton = document.querySelector('#convert-to-kelvin');

convertFahrenheitButton.addEventListener('click', () => {
  const celsius = celsiusInput.value;
  const fahrenheit = (celsius * 9/5) + 32;

  fahrenheitInput.value = fahrenheit + ' °F';
});

convertKelvinButton.addEventListener('click', () => {
  const celsius = celsiusInput.value;
  const kelvin = celsius + 273.15;

  kelvinInput.value = kelvin + ' °K';
});
