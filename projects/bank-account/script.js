let accounts = [];

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    accounts.push(this);
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

// div1: Describes Billy's current balance
const div1 = document.createElement('div');
const div1h2 = document.createElement('h2');
description.appendChild(div1);
div1.appendChild(div1h2);
div1.appendChild(p);
div1h2.innerHTML = `Currently, your balance is: <span id="balance-span">$${billy.balance}</span>.`
let userUpdate = document.createElement('p');
userUpdate.setAttribute('id', 'userUpdate');
userUpdate.style.color = 'blue';

description.appendChild(userUpdate);

// Function to update description
function updateBalanceDescription() {
  if (billy.balance != 0) {
    div1h2.innerHTML = `Currently, your balance is: <span id="balance-span">$${billy.balance}</span>.`
  } else {
    div1h2.innerHTML = `Currently, your balance is: <span id="balance-span">$${billy.balance}</span>.`;
    let x = document.getElementById('balance-span');
    x.style.color = 'red';
    transferSection.style.visibility = 'hidden';
    div1.innerHTML += `
    <p>If you'd like to make a transfer, please deposit more funds.</p>
    `
  }
} 

// Deposit Section ---------------------------------
const depositSection = document.createElement('div');
depositSection.setAttribute('id', 'depositSection');
document.body.appendChild(depositSection);
const depositHeading = document.createElement('h3');
depositHeading.innerHTML = `Make a Deposit`;
depositSection.appendChild(depositHeading);

// Creates a Deposit Form
const depositForm = document.createElement('form');
depositForm.setAttribute('id', 'depositForm');
depositSection.appendChild(depositForm);

// Div for deposit amount:
const depositInputDiv = document.createElement('div');
depositSection.appendChild(depositInputDiv);
// Input for transfer amount
let depositInputLabel = document.createElement('label');
depositInputLabel.setAttribute('for', 'depositAmt');
depositInputLabel.innerHTML = `Please enter an amount to deposit (in US dollars):`;
depositForm.appendChild(depositInputLabel);
depositForm.appendChild(br);
let depositAmtInput = document.createElement('input');
depositAmtInput.setAttribute('type', 'number');
depositAmtInput.setAttribute('id', 'depositAmt');
depositForm.appendChild(depositAmtInput);
// Deposit submit button
let depositSubmit = document.createElement('button');
depositSubmit.setAttribute('type', 'button');
depositSubmit.setAttribute('id', 'depositButton');
depositForm.appendChild(depositSubmit);
depositSubmit.innerHTML = 'Submit';
let depositAmt = 0;
depositInputDiv.appendChild(depositSubmit);

// Event Listener where the deposit magic happens
depositSubmit.addEventListener('click', function () {
  depositAmt = Number(document.querySelector('input[id="depositAmt"]').value);
  if (!validateInput(depositAmt)) {
    return false;
  } else {
    if (depositAmt < 0) {
      userUpdate.innerHTML = `You cannot deposit a negative amount.`;
    } else {
      billy.deposit(depositAmt);
      console.log(`
        For admin: Billy now has ${billy.balance}.
      `)
      userUpdate.innerHTML = `You have deposited $${depositAmt}`;
      let x = document.getElementById('balance-span');
      x.style.color = 'green';
      if (transferSection.style.visibility==='hidden') {
        transferSection.style.visibility = 'visible';
      }
      updateBalanceDescription(); 

    }
  }
  updateBalanceDescription(); 

  document.getElementById("depositForm").reset();
});


// Transfer Section ---------------------------------
const transferSection = document.createElement('div');
transferSection.setAttribute('id', 'transferSection');
document.body.appendChild(transferSection);
const transferHeading = document.createElement('h3');
transferHeading.innerHTML = `Make a Transfer`;
transferSection.appendChild(transferHeading);

// Creates a Transfer Form and adds it to Transfer Section
const transferForm = document.createElement('form');
transferForm.setAttribute('id', 'transferForm');
transferSection.appendChild(transferForm);

// Div for the radio buttons
const transferButtonsDiv = document.createElement('div');
transferForm.appendChild(transferButtonsDiv);
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
  if (i.name === 'Billy')
  {
    continue;
  }
  createRadioButton(i.name);
}

// Div for transfer amount:
const transferInputDiv = document.createElement('div');
transferForm.appendChild(transferInputDiv);
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
let transferRec;
let transferAmt = 0; 
transferInputDiv.appendChild(transferSubmit);

// Event Listener where the transfer magic happens
transferSubmit.addEventListener('click', function () {
  let transferRecipient = document.querySelector('input[name="transferRec"]:checked') ? document.querySelector('input[name="transferRec"]:checked').value : null;
  transferRec = transferRecipient;
  const transferAcct = accounts.filter(e => e.name === transferRec)[0];
  transferAmt = Number(document.querySelector('input[name="transferAmt"]').value);
  if (!Boolean(transferRec)) {
    userUpdate.innerHTML = `Please choose a recipient.`
  } else if (!validateInput(transferAmt)) {
    return false;
  } else {
    if (transferAmt < 0) {
      userUpdate.innerHTML = `You cannot transfer a negative amount.`;
    } else if (billy.balance < transferAmt) {
      userUpdate.innerHTML = `Unfortunately, you do not have enough to transfer this amount.`;
    } else if (billy.balance >= transferAmt) {
      billy.transfer(transferAcct, transferAmt);
      updateBalanceDescription(); 
      console.log(`
        For admin: Billy now has ${billy.balance}.
        ${transferRec} now has ${transferAcct.balance}.
      `)
      userUpdate.innerHTML = `You have sent $${transferAmt} to ${transferAcct.name}.`;
    }  
  }
  
  document.getElementById("transferForm").reset();

});

// Function to check if item is empty
function validateInput(amt) {
  if (!Boolean(amt)) {
    userUpdate.innerHTML = `Please enter a valid amount.`
    return false;
  }
  return true;
}