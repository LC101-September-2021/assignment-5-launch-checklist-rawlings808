// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
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
    return "Empty";
  } else if (isNaN(testInput)) {
    console.log(testInput + " is Not a Number");
    return "Not a Number";
  } else {
    console.log(testInput + " is a Number");
    return "Is a Number";
  }
}

// In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a
// document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
// Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below.

//do if statements for each value based on the input validation. if fuel level and cargo mass is not a number, invalidate the form.
function stopFormSubmission(alertMessage) {
  console.log(alertMessage);
  window.alert(alertMessage);
  event.preventDefault();
}
function fuelLevelStatus(fuelLevel) {
  if (fuelLevel < 10000) {
      let fuelStatus = "Fuel level too low.";
    stopFormSubmission(fuelStatus);
    return fuelStatus;
  }
}
function cargoLevelStatus(cargoLevel) {
  if (cargoLevel > 10000) {
    let cargoStatus = "Cargo level too high.";
    stopFormSubmission(cargoStatus);
    return cargoStatus;
  }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    stopFormSubmission("All fields are required");

  } else if (validateInput(fuelLevel) === "Not a Number") {
    stopFormSubmission("Fuel Level must be a number");

  } else if (validateInput(cargoLevel) === "Not a Number") {
    stopFormSubmission("Cargo Mass must be a number");

  } else {
    document.getElementById("pilotStatus").innerText = `Pilot ${pilot} ready.`;
    document.getElementById("copilotStatus").innerText = `Copilot ${copilot} ready.`;
    if (fuelLevelStatus(fuelLevel) === "Fuel level too low.") {
        // list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerText = "Not enough fuel for the journey.";
        document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "Red";
        let shuttleReady = false;
    };

    if (cargoLevelStatus(cargoLevel) === "Cargo level too high.") {
    //   list.style.visibility = "visible";
      document.getElementById("cargoStatus").innerText = "Cargo level too high for the journey.";
      document.getElementById("launchStatus").innerText = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "Red";
      let shuttleReady = false;
    };
    list.style.visibility = "visible";
    if (!fuelReady && !cargoReady){
        document.getElementById("launchStatus").innerText = "Shuttle ready for launch";
        document.getElementById("launchStatus").style.color = "Green";
    };
    
    //make variables for each argument to update at the bottom
    //remove this later after testing
    event.preventDefault();
  }
  function isReady(status) {}
//   function pilotStatus(pilot) {}
//   function copilotStatus(copilot) {}
}
//fuel and cargo can't be "not a number", AND fuel level needs to be equal to or above 10000 AND cargo mass has to be equal to or less than 10000

//update faultyItems to visible if it does not meet the specs

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

//create object for each item and run functions to get their status and update their statuses
//create array for validate input, inputs variable to run a for loop for each input. array can be each object, which updates the object statuses

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
