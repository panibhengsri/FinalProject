/*  Routing for API calls
    Created by Jeremy Jung 7/12/2020
*/

const express = require('express');
const router = express.Router();

const covidApi = require('./API/covidApi.js');
const weatherApi = require('./API/weatherApi.js');
const utils = require('./utils.js');
const test = require('./utilsTest.js');
/*
* USAGE: {baseurl}/api/states
* */
router.get('/states', async (req, res) => {
    covidApi.getAllStatesCovid( (states) => {
        if (states != undefined) {
            res.status(200);
            
            let response = {
                places: states
            }

            res.send(response);
        }
        else {
            let response = {
                error: "States could not be retrieved from CovidTrackingProject"
            }

            res.status(401);

            res.send(response);
        }

    })
})

/*
* USAGE: {baseurl}/api/countries
* */
router.get('/countries', async (req, res) => {
    test.getPassingCountries((countries) => {
        if( countries[0] == "USA") {
            let shiftedElt = countries.shift();
            countries.push(shiftedElt);
        }

        // console.log(countries);

        if (countries.length > 0) {
            res.status(200);

            let response = {
                places: countries
            }

            res.send(response);
        }
        else {
            let response = {
                error: "Countries could not be retrieved from external API"
            }

            res.status(401);

            res.send(response);
        }
    })

})

router.get('/rate/state', async (req, res) => {
    let location = req.query.location;
    console.log("location: ", location);

    covidApi.getStateCovidInfo(location, function (covidResponse) {
        console.log(covidResponse)
        // Get capital city from state
        let capital = utils.statesCityMap[location];
        console.log("capital: ", capital);
        weatherApi.getCityWeather(capital, function (weatherResponse) {
            let ratings = utils.rateForState(covidResponse, weatherResponse);
            res.json(ratings);
        })
    })
})

router.get('/rate/country', async (req, res) => {
    let location = req.query.location;
    console.log("location: ", location);

    covidApi.getCountryCovidInfo(location, function (covidResponse){
        let capital = utils.countriesCityMap[location];
        console.log("capital: ", capital);
        weatherApi.getCityWeather(capital, function (weatherResponse) {
            let ratings = utils.rateForCountry(covidResponse, weatherResponse);
            res.json(ratings);
        })
    })
    

})

module.exports = router;