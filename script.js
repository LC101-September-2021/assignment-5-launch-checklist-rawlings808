// Write your JavaScript code here!

function newFunction() {
    module.import; { validateInput; formSubmission; } from; "./scriptHelper.js";
}

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    
    console.log(list.innerText);
    // list.innerText = "Hello"

    form.addEventListener("submit", function () {
        formSubmission(document, list, form.pilotName.value, form.copilotName.value, form.fuelLevel.value, form.cargoMass.value);
    });

    //     // Make sure to call your formSubmission() function at the appropriate time in your script.js file!


    //below is part of the program do not delete from let listedPlanets to })
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

});
