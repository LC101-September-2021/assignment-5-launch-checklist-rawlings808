// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        console.log(testInput + " is Not a Number");
        return "Not a Number";
    } else {
        console.log(testInput + " is a Number");
        return "Is a Number"
    };
}


// In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a 
// document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. 
// Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below.

//do if statements for each value based on the input validation. if fuel level and cargo mass is not a number, invalidate the form.

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        console.log("All fields are required!");
        window.alert("All fields are required!");
        event.preventDefault();
    } else if (validateInput(fuelLevel) === "Not a Number"){
        console.log("Fuel Level must be a number!");
        window.alert("Fuel Level must be a number!");
        event.preventDefault();
    } else if (validateInput(cargoLevel) === "Not a Number"){
        console.log("Cargo Mass must be a number!");
        window.alert("Cargo Mass must be a number!");
        event.preventDefault();
    }
};
//fuel and cargo can't be "not a number", AND fuel level needs to be equal to or above 10000 AND cargo mass has to be equal to or less than 10000

//update faultyItems to visible if it does not meet the specs



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

function isReady(status){};
function pilotStatus(pilot){};
function copilotStatus(copilot){};
function fuelLevelStatus(fuelLevel){};
function cargoLevelStatus(cargoLevel){};


//create object for each item and run functions to get their status and update their statuses
//create array for validate input, inputs variable to run a for loop for each input. array can be each object, which updates the object statuses

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
