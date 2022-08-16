class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(type, price) {
    let ticket = new TicketType(type, price);
    this.availableTickets.push(ticket);
    console.log(`Ticket Type: ${ticket.type} added. Price: ${price}`);
  }

  allTickets() {
    let num = 1;
    let x = '';
    if (this.availableTickets.length === 0) {
        x = "<br><b>No tickets available</b></br>";
    } else {
        x = '<br><b>Available Tickets:</b><br>';
        for (let i of this.availableTickets) {
          x += `${num}. ${i.type}: ${i.price}` + ' <br> ';
          num++;        
        }  
      }
    this.description += x;
  }

  searchTickets(lower,upper) {
    let x = '';

    let filtered = this.availableTickets.filter( e => e.price > lower && e.price < upper);
    if (filtered.length === 0) {
        x = "<br><b>No tickets available</b></br>";
    } else {
        x = '<br><b>Eligible Tickets:</b><br>';
        let num = 1;
  
        for (let i of filtered) {
          x += `${num}. ${i.type}: ${i.price}` + ' <br> ';
          num++;
        }  
      }
    this.description += x;
  }
}

const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();
  
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray);


class TicketType {
  constructor (type, price) {
    this.type = type;
    this.price = price;
  }
}

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

// Call allTickets method to show tickets available
eventObj1.allTickets();
eventObj2.allTickets();
eventObj3.allTickets();

eventObj1.searchTickets(0, 250)
eventObj2.searchTickets(0, 250)
eventObj3.searchTickets(0, 250)

document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}<br><br>`;
  });
  document.querySelector('#event').innerHTML = html;
});
