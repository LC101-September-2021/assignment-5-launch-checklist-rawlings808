
// Write your JavaScript code here!
function newFunction() {
    module.import; { validateInput; formSubmission; pickPlanet; myFetch; addDestinationInfo; } from; "./scriptHelper.js";
}

// const window;
window.addEventListener("load", function () {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    list.style.visibility = 'hidden';
    

    form.addEventListener("submit", function () {
        formSubmission(document, list, form.pilotName.value, form.copilotName.value, form.fuelLevel.value, form.cargoMass.value);
    });

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        //create a variable for pickPlanet and then create an action for it. the action is to addDestinationInfo function.

        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
});