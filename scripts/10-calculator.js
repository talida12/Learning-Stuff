  let calculationText = localStorage.getItem('calculation') || '';
  const buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    button.onclick = () => {
      switch (button.innerText) { 
          case "=": 
            result = eval(calculationText);
            displayCalculation(result);
            break;
          case 'Clear':
            calculationText = '';
            displayCalculation(calculationText);
            localStorage.setItem('calculation', calculationText);
            break;
          default:
            calculationText += button.innerText;
            displayCalculation(calculationText);
      }
    }
  }
  
  function displayCalculation(text) { 
    document.querySelector('.calculation-display').innerHTML = text;
  }