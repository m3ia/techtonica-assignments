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
    return `Name: ${name}`;
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
`)

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
)

// console.log(accounts);

const br = document.createElement('br');
const p = document.createElement('p');

// Header ---------------------------------
const header = document.createElement('header');
const greeting = document.createElement('h1');
greeting.innerHTML = `Hello, ${billy.name}!`
header.appendChild(greeting);
document.body.appendChild(header);

// Transfer Section ---------------------------------
const transferSection = document.createElement('div');
document.body.appendChild(transferSection);
const transferHeading = document.createElement('h2');
transferHeading.innerHTML = `Make a Transfer`;
transferSection.appendChild(transferHeading);


const p1 = document.createElement('p');
p1.innerHTML = `Currently, your balance is: $${billy.balance}.`;
transferSection.appendChild(p1);
p1.appendChild(p);

const transferBtn = document.createElement('button');
transferBtn.innerHTML = `Make a Transfer`;
p1.appendChild(transferBtn);

// Creates a Form with Radio Buttons
const transferForm = document.createElement('form');

p1.appendChild(transferForm);

let allButtonIds = [];
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
  transferForm.appendChild(radioBtn);
  transferForm.appendChild(radioLabel);
  allButtonIds.push(`${value}Radio`);
  radioBtn.addEventListener("click", function() {
    if (!radioBtn.checked) {
      let transferRecipients = document.getElementsByName('transferRec');
      for (let i of transferRecipients) {
        if (i.checked) {
          i.removeAttribute('checked');
        }
      }
      radioBtn.setAttribute('checked');
    }
  })
  return radioBtn + radioLabel + '\n';
}


for (let i of accounts) {
  createRadioButton(i);
}

// If a user is selected, this input shows up:
let transferRecipient;


transferSection.innerHTML += `<p>Please enter an amount to transfer (in dollars): </p>`;
transferForm.appendChild(br);
let transferAmtInput = document.createElement('input');
transferAmtInput.setAttribute('type', 'number');
transferForm.appendChild(transferAmtInput);
let transferSubmit = document.createElement('input');
transferSubmit.setAttribute('type', 'submit');
// transferSubmit.addEventListener("click", function() {
//   let transferRecipients = document.getElementsByName('transferRec');
//   for (item in transferRecipients) {
//     if (item.checked) {
//       transferRecipient = item.value;
//     }
//   }
//   console.log(transferRecipient);
// });
transferForm.appendChild(transferSubmit);

// Gets all buttons and assigns them to vars
console.log(allButtonIds);
let transferSelection;

// this works
let submitTransfer = document.createElement('button');
submitTransfer.setAttribute('id', 'transerSubmit');
submitTransfer.addEventListener("click", function() {
  for (let i of allButtonIds) {
    if (document.getElementById(i).checked) {
      transferSelection = document.getElementById(i).innerHTML;
    }
  }
})

console.log(transferSelection);


let p2 = document.createElement('p');

var form = document.getElementById("form");
// var log = document.querySelector("#log");

transferForm.addEventListener("submit", function(event) {
  console.log(transferForm);
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = output + entry[0] + "=" + entry[1] + "\r";
  };
  // log.innerText = output;
  event.preventDefault();
}, false);