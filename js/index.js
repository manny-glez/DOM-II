/*
1. mouseover ✅
2. mouseenter ✅
3. wheel ✅
4. click ✅
5. dblclick ✅
6. focus ✅
7. mouseleave ✅
8. load ✅
9. keydwon ✅
10. sroll ✅
*/

// nav ---------------
let nav = document.querySelector(".nav");

nav.addEventListener("mouseover", function(event) {
  event.target.style.color = "orange";

  setTimeout(function() {
    event.target.style.color = "";
  },500);
}, false);

// images ---------------
// imgs is a NodeList of image elements
let imgs = document.querySelectorAll("img");

// we're adding an event listener to each image
imgs.forEach(image => {
  image.addEventListener("mouseenter", evt => {
    evt.target.style="filter: brightness(60%)";
  
    setTimeout(function() {
      evt.target.style="";
    },400);
  }, false);
});

// wheel event ---------------
const body = document.querySelector("body");
const navBar = document.querySelector(".main-navigation")
const anchors = document.querySelectorAll("a")

body.addEventListener("wheel", () => {
  navBar.style.background = "navy"
  navBar.style.color = "white"
  anchors.forEach(anchor => anchor.style.color = "white")
})

// focus
let links = document.querySelectorAll("a")

links.forEach(link => {
  link.addEventListener("focus", () => {
    link.style.color = "orange"
    link.style.fontSize = "2rem"
  })
})

// scroll
window.addEventListener("scroll", evt => {
  console.log(`${evt.type} happened`)
})

// images border ---------------
let imgBorder = document.querySelectorAll("img");

// we're adding an event listener to each image
imgBorder.forEach(image => {
  image.addEventListener("click", evt => {
    evt.target.style="border: solid blue 5px;";
  
    setTimeout(function() {
      evt.target.style="border: solid purple 5px;";
    },400);
  }, false);
});

// destination card
let card = document.querySelectorAll(".destination");

card.forEach( card => {
  card.addEventListener("dblclick", evt => {
    evt.target.style = "border: solid blue 1px;";
  })
})

// h2
let subTitles = document.querySelectorAll("h2")

subTitles.forEach(title => {
  title.addEventListener("mouseleave", () => {
    title.style.fontWeight = "bold"
    title.style.fontSize = "4rem"
    title.style.color = "orange"
  })
})

window.addEventListener("load", evt => {
  console.log(`${evt.type} happened`)
})

// h1
const h1 = document.querySelector("h1")

h1.addEventListener("onselect", () => {
  h1.style.border = "dotted orange 5px"
  console.log("am i here")
})

// key Down
window.addEventListener("keydown", evt => {
  console.log(`${evt.type} happened`)
})

