/*  Weather API interface
    Created by Jeremy Jung 7/12/2020 
*/

const https = require('http');

/** Get the weather information of a city
 * @param {string} cityName 
 * @param {function} callback with argument as parsed information
 * NOTE: example) parsedInformation = {
 *    condition: "Clear",
 *    country: "United Kingdom",
 *    feelslike_f: 45.7,
 *    humidity: 81,
 *    local_time: "2020-11-26 2:20",
 *    name: "London",
 *    region: "City of London, Greater London",
 *    temp_f: 46.4,
 *    uv: 1
 * }
 */
const getCityWeather = async (cityName, callback) => {
    // define api url
    const key = "17abaab7ac6e40e68a810539202611";
    var urlBase = "http://api.weatherapi.com/v1/current.json?key=";
    var query = "&q=";
    var urlConcat = urlBase + key + query + cityName;
    // console.log(cityName);
    // var request = await sendXHR("GET", urlConcat); // send request

    https.get(urlConcat, (res) => {

        var dataConcat = '';

        res.on('data', function (chunk) {
            dataConcat += chunk;
        })

        res.on('end', function () {
            try {
                var responseRaw = JSON.parse(dataConcat);

                // parse api response with necessary information
                var responseParsed = {};
                responseParsed["name"] = responseRaw.location.name;
                responseParsed["region"] = responseRaw.location.region;
                responseParsed["country"] = responseRaw.location.country;
                responseParsed["local_time"] = responseRaw.location.localtime;
                responseParsed["condition"] = responseRaw.current.condition.text;
                responseParsed["humidity"] = responseRaw.current.humidity;
                responseParsed["uv"] = responseRaw.current.uv;
                responseParsed["temp_f"] = responseRaw.current.temp_f;
                responseParsed["feelslike_f"] = responseRaw.current.feelslike_f;

                // execute callback function
                callback(responseParsed);
            }
            catch(e) {
                console.log("Error in weather API looking for city: ", cityName);
                console.log("Error message: ", dataConcat);
            }
        })
    })
}

exports.getCityWeather = getCityWeather;