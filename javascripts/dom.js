"use strict";


//grab elements
let table = document.querySelector("#table");
let form = document.querySelector("#form");
let inputs = Array.from(document.querySelectorAll(".input"));
let lap = document.querySelector("#lap");
let lump = document.querySelector("#lump");
let radios = Array.from(document.querySelectorAll(".radio"));



//add listeners
form.addEventListener("submit", Donor.getData);