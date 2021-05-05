// Your code goes here
// const darken = document.querySelector("h1").style.color = "blue";

// GOAL: add event listeners to certain elements on the page

// 'load' is the event that triggers this function


window.addEventListener('load', event => { 
    console.log(`${event.type} happened`)
})

// use document.querySelectorAll to save all the divs with the "btn" class

const buttons = document.querySelectorAll(".btn")

// buttons is a NodeList of the divs
console.log(buttons)

// when you click the fake buttons, the function executes
buttons[0].addEventListener('click', event => {
    buttons[0].style.backgroundColor = "navy"
})

buttons[1].addEventListener('click', event => {

    // when the fake button is clicked, we change the background color to a color
    buttons[1].style.backgroundColor = "navy"
})

buttons[2].addEventListener('click', event => {
    buttons[2].style.backgroundColor = "navy"
})

// Step 1
// pick an element you want to add an event listener to
// remember: use the Chrome dev tools (inspector)
// remember: add an id or class so you can get a specific element(s)

// Step 2
// save that element to a variable

// Step 3
// add an event listener (like the examples)
// different types of events (like click, hover, load, scroll, etc etc)

// Step 4
// do something interesting or change the attributes when the event fires
// examples: change font size, text color, add borders, etc; be creative

const anchors = document.querySelectorAll(".nav-link")
console.log(anchors)

anchors[0].addEventListener('mouseover', event => {
    anchors[0].style.color = "lightgrey"
    anchors[0].style.fontSize = "20px"
})

anchors[1].addEventListener('mouseover', event => {
    anchors[1].style.color = "lightgrey"
    anchors[1].style.fontSize = "20px"
})

anchors[2].addEventListener('mouseover', event => {
    anchors[2].style.color = "lightgrey"
    anchors[2].style.fontSize = "20px"
})

anchors[3].addEventListener('mouseover', event => {
    anchors[3].style.color = "lightgrey"
    anchors[3].style.fontSize = "20px"
})

// wheel
const nav = document.querySelector(".main-navigation")
console.log(nav)

document.addEventListener('wheel', event => {
    nav.style.backgroundColor = "navy";
    nav.style.color = "white"
})

// dbclick 
const subTitle = document.querySelector("h2")
console.log(subTitle)

subTitle.addEventListener('dblclick', event => {
    subTitle.style.color = "blue"
})

// anchor focus event
anchors[0].addEventListener('focus', event => {
    anchors[0].style.color = "red"
    anchors[0].style.fontSize = "20px"
})

anchors[1].addEventListener('focus', event => {
    anchors[1].style.color = "red"
    anchors[1].style.fontSize = "20px"
})

anchors[2].addEventListener('focus', event => {
    anchors[2].style.color = "red"
    anchors[2].style.fontSize = "20px"
})

anchors[3].addEventListener('focus', event => {
    anchors[3].style.color = "red"
    anchors[3].style.fontSize = "20px"
})

// need 3 more unique events

const paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

paragraphs[0].addEventListener('mouseleave', event => {
    paragraphs[0].style.color = "navy"
    paragraphs[0].style.fontSize = "20px"
})

paragraphs[5].addEventListener('mouseleave', event => {
    paragraphs[5].style.color = "navy"
    paragraphs[5].style.fontSize = "20px"
})

paragraphs[6].addEventListener('mouseleave', event => {
    paragraphs[6].style.color = "navy"
    paragraphs[6].style.fontSize = "20px"
})

paragraphs[7].addEventListener('mouseleave', event => {
    paragraphs[7].style.color = "navy"
    paragraphs[7].style.fontSize = "20px"
})

paragraphs[8].addEventListener('mouseleave', event => {
    paragraphs[8].style.color = "navy"
    paragraphs[8].style.fontSize = "20px"
})










