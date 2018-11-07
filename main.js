let convert = () => {
  // variables for input value
  let heightInput = document.getElementById('height').value;
  let weightInput = document.getElementById('weight').value;

  // vaiables for euro output
  let centi;
  let kilo;

  // math to convert inches to centimeters
  centi = Math.round(heightInput * 2.54);
  document.getElementById('euro-height').innerHTML = centi;

  //math to convert pounds to kilos
  kilo = Math.round(weightInput * 0.45359237);
  document.getElementById('euro-weight').innerHTML = kilo;
};
