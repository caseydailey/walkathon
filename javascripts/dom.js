"use strict";


//grab elements
let table = document.querySelector("#table");
let form = document.querySelector("#form");
let inputs = Array.from(document.querySelectorAll(".input"));
let lap = document.querySelector("#lap");
let lump = document.querySelector("#lump");
let radios = Array.from(document.querySelectorAll(".radio"));



//add listeners
form.addEventListener("submit", getData);

function getData(event){
    event.preventDefault();
    inputs.forEach((input)=>{
        console.log("input.name",input.name);
        console.log(`${input.name}.value`,input.value);
    });
    let checked = radios.filter((radio)=>radio.checked === true)[0].id;
    console.log("checked:", checked); 
}
