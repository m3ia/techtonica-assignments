## Objectives
 Create a new class named Event
- allow the event host to add tickets with prices and "ticket type" (e.g. regular, VIP, mezzanine, balcony, etc)
- allows a user to input a price range they are willing to pay to see what ticket types are available to them
- Create a few event objects
- Push the event objects into an array and use DOM manipulation to display the list of events to an html page.


## Instructions
### Part 1
1. Create an HTML file named index.html. This is the HTML file that contains the unordered list(ul) element where the final list of events will be displayed.
2. Create a JS file event.js.
3.  Create an Event class. (on the JS file already)
4. Now use this class to create an object and assign values to them.
5. Create few more objects with different values.
6. Create an empty Event array.
7. Now push the objects created into the array. In order to push objects in the array, do the following.
8. Keep checking every time you push the element using console.log.
9. After you have created the array now we need to write the code to iterate through it in the same js file event.js, using .forEach() and .innerHTML (see lesson for example and explanation of DOMContentLoaded which prevents code from running on the doc before the doc is finished loading)

### Part 2
1. Once you are done with the above code, you will get an unordered list of all the events along with the descriptions in the web page as the output of your code, like so:
   - KLOS Golden Gala - An evening with Hollywood vampires
   - Skillet & Sevendust - Victorious war tour
   - Jenny Lewis - On the line tour 2019

2. Now that you have the basic class working, let's add more functionality to the app. We're going to add the ability for events to have different ticket types with different prices. Start by creating a class TicketType that can store the name and price of a ticket type (for example, maybe "Balcony" tickets are $35).

3. Now add a function on the Event class called addAvailableTickets that will create a ticket type for the event. The function should accept two parameters. The first parameter will be the name of the ticket type, and the second parameter will be the price of the ticket. The method should look like this when it is called:

   - eventObj1.addAvailableTickets("human", 299);
   - eventObj1.addAvailableTickets("vampire", 99);

Hint: Use Event's availableTickets property to store ticket types for the event.

### Part 3
4. Now that your class has the capability of adding tickets, go ahead and use that function to add different types to every single one of your events. Here are some more examples for how it will be called:

   - eventObj2.addAvailableTickets("General Admission", 25)
   - eventObj2.addAvailableTickets("Floor Seating", 80)
   - eventObj3.addAvailableTickets("Orchestra", 300)
   - eventObj3.addAvailableTickets("Mezzanine", 200)
   - eventObj3.addAvailableTickets("Balcony", 100)

5. Add a function to Event called allTickets that returns a string representing all ticket types and prices, like: All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)

### Part 4
6. Now, modify your code to call the allTickets function and display the ticket types. When you run your code, it should now look something like this:

    - KLOS Golden Gala - An evening with Hollywood vampires - All tickets: 1. human ($299) 2. vampire ($99)
    - Skillet & Sevendust - Victorious war tour - All tickets: 1. General Admission ($25) 2. Floor Seating ($80)
    - Jenny Lewis - On the line tour 2019 - All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)

### Part 5
7. Now let's add another function. Write a function on Event named `searchTickets` that will take in two values (to specify the lower and upper bounds of a price range), and return a list of ticket types available. The method should look like this when it is called: `eventObj3.searchTickets(0, 250)` and will return the string: `Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200)` for that particular call. If no tickets are available in that range, it will instead return: `No tickets available`. Use console.log to test your function and make sure it works for different inputs.

8. Now, view the results of calls to this function by modifying your jquery code to call the function and display the matched tickets instead of all tickets. You can hardcode the price range for now. When you run your jquery code, it should now look something like this:

    - KLOS Golden Gala - An evening with Hollywood vampires - Eligible tickets: 1. vampire ($99)
    - Skillet & Sevendust - Victorious war tour - Eligible tickets: 1. General Admission ($25) 2. Floor Seating ($80)
    - Jenny Lewis - On the line tour 2019 - Eligible tickets: 1. Balcony ($100)

The above output should be identical to yours if you added the same tickets that were added in this tutorial and you passed in the parameters 0 and 100 into your function call. Try it out with different parameters.