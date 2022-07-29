// Made a div
const div = document.createElement("div");

// added class Fower to it
div.classList.add("Flower");

// appended this div to body of html
document.body.appendChild(div);

// made an unordered list with any three items
const myList = `
<ul>
    <li>Rose</li>
    <li>Sunflower</li>
    <li>Lily</li>
</ul>    
`;

// Added Mylist to class Flower using innerHTML property
div.innerHTML = myList;

// Created an image and added class & attributes[src, width, height, alt]
const img = document.createElement("img");
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/f/fb/Carabao_mangoes_%28Philippines%29.jpg";
img.height = 250;
img.width = 250;
img.classList.add("fruit");
img.alt = "mango";
div.appendChild(img);

// A little animation [on doubleclicking on image it toggles]
function toggleIt() {
  img.classList.toggle("round");
}

img.addEventListener("dblclick", toggleIt);

// Make another div: 
const div2 = document.createElement("div");
// Add a class to it:
div2.classList.add('my-day');
// Append div2 to document:
document.body.appendChild(div2);
const myDay = `
<ol>
    <li>Wake up</li>
    <li>Stand up</li>
    <li>Code Challenge</li>
</ol>
`

// Assign myDay to div2:
div2.innerHTML = myDay;

// Create a new image element:
const img2 = document.createElement('img');
img2.src = "https://cdn.shopify.com/s/files/1/0200/4672/articles/Kinders_Tequila_Lime_Sweet_Potato_Wedges_Web_1024x1024.jpg";
img2.width=600;
img2.classList.add('hero-image');
img2.alt="sweet potato fries";
div2.appendChild(img2);
