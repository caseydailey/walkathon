"use strict";


//grab elements
let table = document.querySelector("#table");
let tbody = document.querySelector("tbody");
let form = document.querySelector("#form");
let inputs = Array.from(document.querySelectorAll(".input"));
let radios = Array.from(document.querySelectorAll(".radio"));
let cancel = Array.from(document.querySelectorAll("#cancel"));



//add listeners
form.addEventListener("submit", Donor.addDonor);
cancel.addEventListener("click", clear);

let displayDonors = function(){
    let donors = Donor.getDonors();
    donors.forEach((donor)=>{
        console.log("donor:", donor);
        tbody.innerHTML += `<tr>
                                <td>${donor.firstName}</td>
                                <td>${donor.lastName}</td>
                                <td>${donor.email}</td>
                                <td>${donor.amount}</td>
                                <td>${donor.paymentType}</td>                                       
                            </tr>`
    });
}

let clear = function(){
    
}

displayDonors();
