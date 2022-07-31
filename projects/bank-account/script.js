let accounts = [];

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    accounts.push(name);
  }
  deposit = function(amt, acct) {
    if (acct) {
      acct.balance += amt;
    } else {
      this.balance += amt;
    }
    return this.balance;
  }
  describe = function() {
    return this.name;
  }
  transfer = function(recAcct, amt) {
    this.deposit(-Math.abs(amt));
    this.deposit(Math.abs(amt), recAcct);
  }
}

let billy = new Account('Billy', 5);

let rosie = new Account('Rosie', 10);

let jack = new Account('Jack', 15);

let jill = new Account('Jill', -5);

console.log(`
  Billy's current balance: ${billy.balance}
  Rosie's current balance: ${rosie.balance}
  Jack's current balance: ${jack.balance}
  Jill's current balance: ${jill.balance}
`);

billy.transfer(jack, 1);
console.log(
  `
  Billy's new balance: ${billy.balance}
  Jack's new balance: ${jack.balance}
  `
);

rosie.transfer(jack, 11);
// rosie ==> -1, jack ==> 27
console.log(
  `
  Rosie's new balance: ${rosie.balance}
  Jack's new balance: ${jack.balance}
  `
);

// Page Elements ---------------------------------
const br = document.createElement('br');
const p = document.createElement('p');

// Header ---------------------------------
const header = document.createElement('header');
const greeting = document.createElement('h1');
greeting.innerHTML = `Hello, ${billy.describe()}!`;
header.appendChild(greeting);
document.body.appendChild(header);

// Description ---------------------------------
const description = document.createElement('div');
document.body.appendChild(description);

// p1: Describes Billy's current balance
const p1 = document.createElement('p');
const p1h2 = document.createElement('h2');
description.appendChild(p1);
p1h2.innerHTML = `Currently, your balance is: $${billy.balance}.`;
p1.appendChild(p1h2);
p1.appendChild(p);

// Transfer Section ---------------------------------
const transferSection = document.createElement('div');
document.body.appendChild(transferSection);
const transferHeading = document.createElement('h3');
transferHeading.innerHTML = `Make a Transfer`;
transferSection.appendChild(transferHeading);

// Creates a Transfer Form and adds it to Transfer Section
const transferForm = document.createElement('form');
transferSection.appendChild(transferForm);

// Div for the radio buttons
const transferButtonsDiv = document.createElement('div');
transferSection.appendChild(transferButtonsDiv);
// Function that creates a radio button for each possible recipient
function createRadioButton(value) {
  const radioBtn = document.createElement('input');
  radioBtn.setAttribute('type', 'radio');
  radioBtn.setAttribute('value', value);
  radioBtn.setAttribute('id', `${value}Radio`);
  radioBtn.setAttribute('name', 'transferRec');
  radioBtn.setAttribute('class', 'radioBtn');
  const radioLabel = document.createElement('label');
  radioLabel.setAttribute('for', value);
  radioLabel.innerHTML = `${value}`;
  transferButtonsDiv.appendChild(radioBtn);
  transferButtonsDiv.appendChild(radioLabel);
  return radioBtn + radioLabel + '\n';
}

// Creates radio buttons for all recipients
for (let i of accounts) {
  createRadioButton(i);
}

// Div for transfer amount:
const transferInputDiv = document.createElement('div');
transferSection.appendChild(transferInputDiv);
// Input for transfer amount
let transferInputLabel = document.createElement('label');
transferInputLabel.setAttribute('for', 'transferAmt');
transferInputLabel.innerHTML = `Please enter an amount to transfer (in US dollars):`;
transferInputDiv.appendChild(transferInputLabel);
transferInputDiv.appendChild(br);
let transferAmtInput = document.createElement('input');
transferAmtInput.setAttribute('type', 'number');
transferAmtInput.setAttribute('name', 'transferAmt');
transferInputDiv.appendChild(transferAmtInput);
// Transfer submit button
let transferSubmit = document.createElement('button');
transferSubmit.setAttribute('type', 'button');
transferSubmit.setAttribute('id', 'transferButton');
transferInputDiv.appendChild(p);
transferSubmit.innerHTML = 'Submit';

// When user fills out form and submits, verifyRecP appears to verify what was sent:
let verifyRecP = document.createElement('p');
let transferRec;
let transferAmt; 
transferInputDiv.appendChild(transferSubmit);
transferInputDiv.appendChild(verifyRecP);

transferSubmit.addEventListener('click', function () {
  let transferRecipient = document.querySelector('input[name="transferRec"]:checked') ? document.querySelector('input[name="transferRec"]:checked').value : null;
  transferRec = transferRecipient;
  transferAmt = document.querySelector('input[name="transferAmt"]').value;

  verifyRecP.innerHTML = `You have sent $${transferAmt} to ${transferRec}.`;
});

