/*console.log(document);
console.log(document.all);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
//document.all[8].textContent = "hey there";
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.dir(document);


//get element by id name
let headerTitle = document.getElementById("header-title");
console.log(headerTitle.textContent);
//headerTitle.textContent = "hello";
//headerTitle.innerHTML = "<h3>hello</h3>";
console.log(headerTitle.textContent);/*the textContent will give you the text without 
//  html tags, while the innerHTML will give you the text with the html tags and also 
// textContent will not pay attention to the css styles while the innerHTML will pay 
// attention to the css styles wichich will print yes i that was display none in the html inline code*/
//headerTitle.style.borderBottom = "solid 3px #000"

/*
//get element by class name
let items = document.getElementsByClassName("list-group-item");
console.log(items);
items[1].textContent = " samri keep going u will make it happen anyway";
items[2].style.fontWeight = 'bold';

//this will give error
//items.style.backgroundColor = "yellow";/* this will not work because items is an array and
// we need to loop through it to change the backgroundColor of all the items in the array 

 for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'yellow';
 }
 */
 //get element by tag name

 //let li = document.getElementsByTagName("li");
//console.log(li);
//li[1].textContent = " samri keep going u will make it happen anyway";
//li[2].style.fontWeight = 'bold';

//this will give error
//items.style.backgroundColor = "yellow";/* this will not work because items is an array and
// we need to loop through it to change the backgroundColor of all the items in the array */

 /*for(let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'yellow';
 } */
 //for the element get by tag name if we another list item the style we applied  to the privious
 //list item will be applied to the new list item because we are applying the stlye which has the
 //  sam tag name  but this will not happen in the element get by class name because we must give the same class name as privious list item to apply the style to the new one

 // query selcetor
/*
 let header3 = document.querySelector('#main-header');
 header3.style.borderBottom = "solid 4px #666";

 let input = document.querySelector('input');
 input.value = "hello samri";

 let submit = document.querySelector('input[type="submit"]');
 submit.value = "send";

 let item6 = document.querySelector('.list-group-item:last-child');
 item6.style.color = "red";

 let secondItem = document.querySelector('.list-group-item:nth-child(2)');
 secondItem.style.color = "coral";
 */

 // query selector all

 //let titles = document.querySelectorAll('.title');
 //console.log(titles);
 /* 
This gives us a NodeList, which is like an array.
We can loop through it using forEach() or a for loop.

HTMLCollection is also array-like and DOES have a length property,
so we can use a for loop to iterate through it.

However, HTMLCollection does not have the forEach() method,
so if we want to use array methods, we can convert it using:

Array.from(htmlCollection)

Another key difference:
HTMLCollection is live (updates automatically),
while NodeList from querySelectorAll() is usually static.
*/

//titles[0].textContent = " kumasta samri";
/*
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
console.log(odd);
console.log(even);

for(let i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = "purple";
   even[i].style.backgroundColor = 'pink'

}
/*
This code selects all odd and even <li> elements using CSS pseudo-classes.

querySelectorAll() returns a NodeList (array-like object), 
so we can loop through it using a for loop.

odd  → contains all <li> elements in odd positions
even → contains all <li> elements in even positions

We loop through the odd NodeList using its length,
and for each index:
- change the background color of the odd item to purple
- change the background color of the even item to pink

Note:
Both NodeLists usually have the same length when the list 
has pairs of odd and even elements, but if the number of 
<li> elements is odd, the 'even' list may be shorter.
*/


//travering the dom

var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = "grey";
//console.log(itemList.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = "grey";
//console.log(itemList.parentElement.parentElement);
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);
/*
This gives a NodeList of all child nodes of itemList,
including:
- element nodes (like <li>)
- text nodes (spaces or line breaks between elements)
- comment nodes (if any)

Because HTML usually has spaces and line breaks,
the first child node is often a text node.
*/

//children
//console.log(itemList.children);
/*
This returns an HTMLCollection of only the element nodes
inside itemList.

Unlike childNodes:
- It does NOT include text nodes (spaces, line breaks)
- It does NOT include comments
- It only contains actual HTML elements like <li>

We can loop through it using a for loop,
but it does not have the forEach() method unless we convert
it to an array using Array.from().



array.from(itemList.children).forEach(function(item){
item.style.backgroundColor = "yellow";});
*/
/*
Array.from(itemList.children).forEach(function(item){

item.style.backgroundColor = "yellow";

}
);
*/
//itemList.children[2].style.backgroundColor = "pink";

//firstchild
//console.log(itemList.firstChild);
/*
This returns the first child node of itemList.

Important:
- firstChild returns ANY node type:
  • text node (spaces or line breaks)
  • element node
  • comment node

Because HTML usually has whitespace or a new line
before the first <li>, the firstChild is often a
text node instead of an element.

If we want the first actual element, we should use:
itemList.firstElementChild
*/
//console.log(itemList.firstElementChild);
//firstElementChild → only elements

//lastchild
//console.log(itemList.lastChild);
//itemList.lastChild.textContent = 'hello samri';
// Returns the last child node (could be text, comment, or element) – use when you want the very last node including whitespace.


//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = "hello samri";
// Returns the last ELEMENT only – use when you want the last actual HTML element (ignores text nodes).

//nextSibling

//console.log(itemList.nextSibling);
//itemList.nextSibling.textContent = "meow";
// Returns the next node (could be text or comment) – use when navigating raw DOM structure including whitespace.


//nextelementSibling
//console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.textContent = "lol";
// Returns the next ELEMENT only – use when moving to the next HTML element safely.

//previousSibling
//console.log(itemList.previousSibling);
//itemList.previousSibling.textContent = 'lalala';
// Returns the previous node (text/comment/element) – use when navigating all node types.
 

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.textContent = 'lalala';
// Returns the previous ELEMENT only – use when you want the previous real HTML element.
/*Sibling → any node
ElementSibling → only elements
Child → any node
ElementChild → only elements
*/


// createElement
// Creates a new HTML element in memory (not yet on the page)
var newDiv = document.createElement('div');


// add class
// Adds a class name to the new element (like writing class="" in HTML)
newDiv.className = "yes i";


// add id
// Assigns an id to the element (like id="" in HTML)
newDiv.id = "yes i am";


// add attribute
// Adds a custom attribute to the element
newDiv.setAttribute('title', 'hello smrrr');


// create text node
// Creates text that will go inside the element
var newDivText = document.createTextNode('holla');


// add text to div
// Inserts the text node inside the div
newDiv.appendChild(newDivText);


// select parent container
// Finds the container where the new div will be inserted
var container = document.querySelector('header .container');


// select reference element
// Finds the element before which the new div will be placed
var h1 = document.querySelector('header h1');


// insert element into the DOM
// Places newDiv inside container before the h1 element
container.insertBefore(newDiv, h1);


// style the new element
// Changes the font size of the new div
newDiv.style.fontSize = "30px";


// view result in console
// Shows the created element and its properties
console.log(newDiv);


//var button = document.getElementById('button').addEventListener('click', function(e){


   //console.log(e);// logs the event object, which containes detailes about the event that occured.
   //console.log(e.target);// logs the element that triggered the event in this case the button that was clicked.
   //console.log(e.target.id);//logs the id of the element that triggered the event.
   //console.log(e.target.classList);
   //let output = document.getElementById('out-put');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>'
      //let header = document.getElementById('main-header');
      //console.log(e.clientX); this tells the length from the left of the window to the point we are triggering the action
      //console.log(e.clientY);
      //console.log(e.offsetX); this tells the length from the element to the point we are triggering the action
      //console.log(e.offsetY);

      //console.log(e.altKey);
      //console.log(e.ctrlKey);
      //console.log(e.shiftKey);
      

//})

var button = document.getElementById('button');
var box = document.getElementById('box');
let output = document.getElementById('out-put');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

//box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector(".form-control");

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);
//itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);
//itemInput.addEventListener('cut',runEvent);
//itemInput.addEventListener('paste',runEvent);

itemInput.addEventListener('input', runEvent);
select.addEventListener('change', runEvent);

function runEvent(e){
   console.log('event type: '+e.type);
   
  // output.innerHTML = '<h3>mouseX:'+e.offsetX+'</h3><h3>mouseY:'+e.offsetY+'</h3>';
   //box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
    //document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';

    //console.log(e.target.value);
    //document.getElementById('out-put').innerHTML = '<h3>'+e.target.value+'</h3>';
    
}

