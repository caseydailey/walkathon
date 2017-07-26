"use strict";

var Donor = (function(donor) {
    let donors = [
        {
            firstName: "casey",
            lastName: "dailey",
            email: "casey@test.com",
            amount: "20.88",
            paymentType: "lump" 
        },
        {
            firstName: "matt",
            lastName: "brutton",
            email: "matt@test.com",
            amount: "20.22",
            paymentType: "lap" 
        },
        {
            firstName: "jissie",
            lastName: "david",
            email: "jissie@test.com",
            amount: "20.44",
            paymentType: "lump" 
        }
    ];

    let user = {};

    donor.addDonor = function(event){

        event.preventDefault();
        inputs.forEach((input)=>{
            user[input.name] = input.value;
        });

        let checked = radios.filter((radio)=>radio.checked === true)[0].id;
        user.paymentType = checked;
        donors.push(user);
        displayNewDonor(user);
    }

    donor.getDonors = function(){
        return donors;
    }

    return donor

})(Donor || {});