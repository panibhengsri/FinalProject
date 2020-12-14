/*  COVID API interface
    Created by Jeremy Jung 13/12/2020
*/

const utils = require('./utils.js');
const weatherApi = require('./API/weatherApi.js');
const covidApi = require('./API/covidApi.js');

const testWeatherCountriesCityMap = () => {
    let countriesCityMap = utils.countriesCityMap;
    for (let key in countriesCityMap) {
        let city = countriesCityMap[key];
        weatherApi.getCityWeather(city, function(response) {
        })
    }
}

const testCovidCountriesToCountriesCityMap = () => {
    let countriesCityMap = utils.countriesCityMap;
    covidApi.getAllCountriesCovid((countries) => {
        for (let index in countries) {
            let name = countries[index];
            if (countriesCityMap[name] == undefined) {
                console.log("matching country name was not found for country in COVID base: ", name);
            }
        }
    })
}

const getPassingCountries = (callback) => {
    // get Country to Capital mapping
    let countriesCityMap = utils.countriesCityMap;
    // get Countries list from COVID databse
    covidApi.getAllCountriesCovid((countries) => {
        
        let passingCountries = [];
        // only add countries that exist in both countriesCityMap and COVID database
        for (let index in countries) {
            let name = countries[index];
            if (countriesCityMap[name] != undefined)
                passingCountries.push(name);
        }

        callback(passingCountries);
    })
}

const testTemperature = () => {
    let lowestTemp = -459;
    let highestTemp = 134;
    for (let testTemp = lowestTemp; testTemp <= highestTemp; testTemp++) {
        let result = utils.rateTemperature(testTemp);
        console.log("test Temp: " + testTemp, "...... rating: " + result);
    }
}

const testRateUv = () => {
    let lowestUv = 0;
    let highestUv = 10;
    for (let testUv = lowestUv; testUv <= highestUv; testUv++) {
        let result = utils.rateUv(testUv);
        console.log("testUv: " + testUv, "...... rating: " + result);
    }
}

const testCovidCountry = () => {
    let highestCases = 1000;
    for (let testTodayCases = 0; testTodayCases <= highestCases; testTodayCases+= 10) {
        let result = utils.rateCovidCountry(testTodayCases);
        console.log("test TodayCases: " + testTodayCases, "...... rating: " + result);
    }
}

const testCovidState = () => {
    for (let testPositiveIncrease = 0; testPositiveIncrease <= 1000; testPositiveIncrease += 10) {
        for (let testNegativeIncrease = 0; testNegativeIncrease <= 2000; testNegativeIncrease += 10) {
            let result = utils.rateCovidState(testPositiveIncrease, testNegativeIncrease);
            if (result > 0)
                console.log("test + increase: " + testPositiveIncrease, "test - increase: " + testNegativeIncrease, "...... rating: " + result);
        }
    }
}


const runTests = () => {
    testTemperature();
    testRateUv();
    testCovidCountry();
    testCovidState();
    testWeatherCountriesCityMap();
    testCovidCountriesToCountriesCityMap();
}

runTests();

module.exports.getPassingCountries = getPassingCountries;