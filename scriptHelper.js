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
    document.getElementById("missionTarget").innerHTML = `
    
                   <h2>Mission Destination</h2>
                   <ol>
                       <li>Name: ${name}</li>
                       <li>Diameter: ${diameter}</li>
                       <li>Star: ${star}</li>
                       <li>Distance from Earth: ${distance}</li>
                       <li>Number of Moons: ${moons}</li>
                   </ol>
                   <img src="${imageUrl}">
    `
};

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {        
        return "Not a Number";
    } else {
        return "Is a Number";
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility = "visible";
    document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;
    if (
        validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty"
    ) {
        alert("All fields are required");

    } else if ((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number") || (validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")) {
        alert("Input must be valid");
    } else if ((fuelLevel < 10000) || (cargoLevel > 10000)) {
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
        } else {
            document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch"
        }
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
        } else {
            document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch"
        }
    } else {
        document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch"
        document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch"
    };
};
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return planetsReturned;
};

function pickPlanet(planets) {
    return (planets[(Math.floor(Math.random() * planets.length))]);
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;