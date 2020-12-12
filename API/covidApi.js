/*  COVID API interface
    Created by Jeremy Jung 7/12/2020
*/

const https = require('https');

const getCountryCovidInfo = async (country, callback) => {
    let covidURL = "https://coronavirus-19-api.herokuapp.com/countries/";
    let urlConcat = covidURL + country;

    // var request = await xhr.sendXHR("GET", urlConcat); // send request

    https.get(urlConcat, (res) => {

        var dataConcat = '';

        res.on('data', function (chunk) {
            dataConcat += chunk;
        })

        res.on('end', function () {
                var responseParsed = JSON.parse(dataConcat);

                // parse api response with necessary information
                var responseFiltered = {};
                responseFiltered["name"] = responseParsed.country;
                responseFiltered["todayCases"] = responseParsed.todayCases;

                // execute callback function
                callback(responseFiltered);
            })
        })
    
}

const getStateCovidInfo = async (state, callback) => {
    let covidURL = "https://api.covidtracking.com/v1/states/";
    let dataFormat = "/current.json";
    let urlConcat = covidURL + state + dataFormat;

    // var request = await xhr.sendXHR("GET", urlConcat); // send request

    https.get(urlConcat, (res) => {

        var dataConcat = '';

        res.on('data', function (chunk) {
            dataConcat += chunk;
        })

        res.on('end', function () {
            var responseParsed = JSON.parse(dataConcat);

            // parse api response with necessary information
            var responseFiltered = {};
            responseFiltered["name"] = responseParsed.state;
            responseFiltered["positiveIncrease"] = responseParsed.positiveIncrease;
            responseFiltered["inIcuCurrently"] = responseParsed.inIcuCurrently;

            // execute callback function
            callback(responseFiltered);
        })
    })
}


const getAllCountriesCovid = async (callback) => {
    let urlConcat = "https://coronavirus-19-api.herokuapp.com/countries";

    // var request = await xhr.sendXHR("GET", urlConcat); // send request

    https.get(urlConcat, (res) => {

        var dataConcat = '';

        res.on('data', function (chunk) {
            dataConcat += chunk;
        })

        res.on('end', function () {
            // parse api response with necessary information
            let responseParsed = JSON.parse(dataConcat);
            let countries = [];
            for (let index in responseParsed) {
                countries.push(responseParsed[index].country);
            }
            // execute callback function
            callback(countries);
        })
    })

    
}

const getAllStatesCovid = async(callback) => {
    let covidURL = "https://api.covidtracking.com/v1/states/";
    let dataFormat = "/info.json";
    let urlConcat = covidURL + dataFormat;

    // var request = await xhr.sendXHR("GET", urlConcat); // send request

    https.get(urlConcat, (res) => {

        var dataConcat = '';

        res.on('data', function (chunk) {
            dataConcat += chunk;
        })

        res.on('end', function() {
            var responseParsed = JSON.parse(dataConcat);

            let states = [];
            // parse api response with necessary information
            for (let index in responseParsed)
                states.push(responseParsed[index].state);

            // execute callback function
            callback(states);
        })
    })

}

exports.getCountryCovidInfo = getCountryCovidInfo;
exports.getStateCovidInfo = getStateCovidInfo;
exports.getAllCountriesCovid = getAllCountriesCovid;
exports.getAllStatesCovid = getAllStatesCovid;