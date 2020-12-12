const getCountryCovidInfo = async (country, callback) => {
    let covidURL = "https://coronavirus-19-api.herokuapp.com/countries/";
    let urlConcat = covidURL + country;


    var request = await sendXHR("GET", urlConcat); // send request

    request.onload = function () {

        var responseRaw = request.response;
        var responseParsed = JSON.parse(responseRaw);

        var responseFiltered = {};
        responseFiltered["name"] = responseParsed.country;
        responseFiltered["todayCases"] = responseParsed.todayCases;

        // parse api response with necessary information
        // var responseParsed = {};
        // execute callback function
        callback(responseFiltered);
    }
}

const getStateCovidInfo = async (state, callback) => {
    let covidURL = "https://api.covidtracking.com/v1/states/";
    let dataFormat = "/current.json";
    let urlConcat = covidURL + state + dataFormat;

    var request = await sendXHR("GET", urlConcat); // send request

    request.onload = function () {
        var responseRaw = request.response;
        var responseParsed = JSON.parse(responseRaw);

        // parse api response with necessary information
        var responseFiltered = {};
        responseFiltered["name"] = responseParsed.state;
        responseFiltered["positiveIncrease"] = responseParsed.positiveIncrease;
        responseFiltered["inIcuCurrently"] = responseParsed.inIcuCurrently;

        // execute callback function
        callback(responseFiltered);
    }
}


const getAllCountriesCovid = async (callback) => {
    let urlConcat = "https://coronavirus-19-api.herokuapp.com/countries";

    var request = await sendXHR("GET", urlConcat); // send request

    request.onload = function () {

        let responseRaw = request.response;

        // parse api response with necessary information
        let responseParsed = JSON.parse(responseRaw);
        let countries = [];
        for (index in responseParsed) {
            countries.push(responseParsed[index].country);
        }
        // execute callback function
        callback(countries);
    }
}