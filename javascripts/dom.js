"use strict";


//grab elements
let table = document.querySelector("#table");
let form = document.querySelector("#form");

//add listeners
form.addEventListener("submit", donate);

function donate(event) {
    console.log("submit event: ", event);
}