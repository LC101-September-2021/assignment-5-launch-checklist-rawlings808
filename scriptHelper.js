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
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").textContent = `Pilot ${pilot} ready`;
        document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} ready`;
        let shuttleReady = true;

        if (fuelLevelStatus(fuelLevel) === "Fuel level too low.") {
            document.getElementById("fuelStatus").textContent = "Not enough fuel for the journey.";
            document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "Red";
            shuttleReady = false;
        };

        if (cargoLevelStatus(cargoLevel) === "Cargo level too high.") {
            document.getElementById("cargoStatus").textContent = "Cargo mass too high for the journey";
            document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "Red";
            shuttleReady = false;
        };

        if (shuttleReady === true) {
            document.getElementById("launchStatus").textContent = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "Green";
        };


        //remove this later after testing
        event.preventDefault();
    }
}

async function myFetch(planetsUrl) {
    let planetsReturned;

    planetsReturned = await fetch(planetsUrl).then(function (response) {
        //added below lines
        response.json().then(function (json) {
            console.log(json);

        });
        //end of added code
    });

    // console.log(planetsReturned);

    return planetsReturned;
};

function pickPlanet(planets) {
    Math.random();
}

//pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index. 
//myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;