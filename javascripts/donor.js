"use strict";

var Donor = (function(donor) {
    let donors = [];
    let user = {};

    donor.getData = function(event){

        event.preventDefault();
        inputs.forEach((input)=>{
            user[input.name] = input.value;
        });
        let checked = radios.filter((radio)=>radio.checked === true)[0].id;
        user.paymentType = checked;
        console.log("user: ", user);
        donors.push(user);
        console.log("donors: ", donors);
    }

    donor.getDonors = function(){
        return donors;
    }

    return donor

})(Donor || {});