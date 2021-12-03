// Write your JavaScript code here!

function newFunction() {
    module.import; { validateInput; formSubmission; pickPlanet; myFetch; addDestinationInfo;} from; "./scriptHelper.js";
}

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    //list.style.visibility = "hidden";

    addDestinationInfo(document,"test","test","test","test","test","test");
    
    pickPlanet("https://handlers.education.launchcode.org/static/planets.json");

    form.addEventListener("submit", function () {
        formSubmission(document, list, form.pilotName.value, form.copilotName.value, form.fuelLevel.value, form.cargoMass.value);

    });

    //     // Make sure to call your formSubmission() function at the appropriate time in your script.js file!
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch("https://handlers.education.launchcode.org/static/planets.json");

    listedPlanetsResponse.then(function (result) {
        console.log(result);
        listedPlanets = result;
        console.log(listedPlanetsResponse);
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse = myFetch("https://handlers.education.launchcode.org/static/planets.json");

    // console.log(listedPlanetsResponse);

    // listedPlanetsResponse.then(function (result) {
    //     // console.log(result);

    //     listedPlanets = result;
        
    //     // console.log(listedPlanets);

    // }).then(function () {
    //     // console.log(listedPlanets);

    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

});
