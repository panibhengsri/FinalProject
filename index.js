/*  Routing for API calls
    Created by Jeremy Jung 7/12/2020
*/

const express = require('express');
const router = express.Router();

const covidApi = require('./API/covidApi.js');
const weatherApi = require('./API/weatherApi.js');

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

    covidApi.getAllCountriesCovid((states) => {
        if (states != undefined) {
            res.status(200);

            let response = {
                places: states
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

router.get('/answer', async (req, res) => {
    let location = req.query.location;
    let worldOption = req.query.world;
    let statesCityMap = {
        "AK": "Juneau", 
        "AL": "Montgomery", 
        "AR": "Little%20Rock", 
        "AS": "Pago%20Pago",
        "AZ": "Phoenix",
        "CA": "Sacramento",
        "CO": "Denver",
        "CT": "Hartford", 
        "DC": "Washington",
        "DE": "Dover", 
        "FL": "Tallahassee", 
        "GA": "Atlanta", 
        "GU": "Guam", 
        "HI": "Honolulu", 
        "IA": "Des%20Moines", 
        "ID": "Boise", 
        "IL": "Springfield", 
        "IN": "Indianapolis", 
        "KS": "Topeka", 
        "KY": "Frankfort", 
        "LA": "Baton%20Rouge", 
        "MA": "Boston", 
        "MD": "Annapolis", 
        "ME": "Augusta", 
        "MI": "Lansing", 
        "MN": "Saint%20Paul", 
        "MO": "Jefferson%20City", 
        "MP": "Saipan", 
        "MS": "Jackson", 
        "MT": "Helena", 
        "NC": "Raleigh", 
        "ND": "Bismarck", 
        "NE": "Lincoln", 
        "NH": "Concord", 
        "NJ": "Trenton", 
        "NM": "Santa%20Fe", 
        "NV": "Carson$20City", 
        "NY": "Albany", 
        "OH": "Columbus", 
        "OK": "Oklahoma%20City", 
        "OR": "Salem", 
        "PA": "Harrisburg", 
        "PR": "San%20Juan",
        "RI": "Providence", 
        "SC": "Columbia", 
        "SD": "Pierre", 
        "TN": "Nashville", 
        "TX": "Austin", 
        "UT": "Salt%20Lake%20City", 
        "VA": "Richmond", 
        "VI": "Road%20Town", 
        "VT": "Montpelier", 
        "WA": "Olympia", 
        "WI": "Madison", 
        "WV": "Charleston", 
        "WY": "Cheyenne"
    }
    if (worldOption == "state") {
        covidApi.getStateCovidInfo(location, function (covidResponse) {
            // need to get random city from state
            weatherApi.getCityWeather(location, function (weatherResponse) {
                
            })
        })
    }
    else {
        covidApi.getCountryCovidInfo(location, function (covidResponse){

            weatherApi.getCityWeather(location, function (weatherResponse) {

            })
        })
    }

    /* Math.abs(normal temp - temp now) * 5.0 for temp scoring */

    /* positive cases increase / (positive increase + negative increase) */

    /* */

})

module.exports = router;