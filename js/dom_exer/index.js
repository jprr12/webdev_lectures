// // selecting html elements with javascript        
// // getElements, querySelector
// document.getElementsByClassName("item")[2];
// document.getElementById("third");
// document.querySelector("third");
        
// // combining selectors for specificity
// document.querySelector("li a");
// // only takes the first item
// document.querySelector("#list .item");
// // use this instead to take all items
// document.querySelectorAll("li.item");
// // take only specific item from querySelectorAll
// document.querySelectorAll("#list .item")[2];
        
// // challenge
// var gLink = document.querySelector("li a");
// gLink.style.color = "#E5D283";

// ===============================================
// changing html styles with js
// camelCasing is the standard syntax for JS
// document.querySelector("h1").style.fontSize = "0.5rem";
// document.querySelector("button").style.backgroundColor = "yellow";

// remember that html = structure, css = style, js = behavior

// adding a class to button element
// document.querySelector("button").classList.add("invisible");
// // removing the class from button element
// document.querySelector("button").classList.remove("invisible");
// // toggle a class; add/remove depending on if it currently exist or not
// document.querySelector("button").classList.toggle("invisible");
// document.querySelector("button").classList.toggle("invisible");

// challenge - add "huge" class using js
// document.querySelector("h1").classList.add("huge");

// ===============================================
// text manipulation and text content property
// inner html =/= text content
// // innerHTML can add/change html elements/properties
// document.querySelector("#third").innerHTML = "<a href='yahoo.com'>Yahoo</a>";
// // textContent can only change text
// document.querySelector("h1").textContent = "hello world";

// ===============================================
// manipulating html element attributes

// // accessing html element attributes
// document.querySelector("a").attributes;
// // retrieve value of a specific attribute
// document.querySelector("a").getAttribute("href");
// // change value of a specific attribute
// document.querySelector("li a").setAttribute("href", "https://www.yahoo.com");
// document.querySelector("a").setAttribute("target", "_blank");

