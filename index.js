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



module.exports = router;