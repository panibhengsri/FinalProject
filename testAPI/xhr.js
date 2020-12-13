
/** Send an xhr
 * @param {string} method 
 * @param {string} URL 
 * @param {string} body OPTIONAL
 * @returns {XMLHttpRequest} 
 */
const sendXHR = (method, URL, body) => {

    var request = new XMLHttpRequest();

    request.open(method, URL, true);

    // body is undefined send GET request
    if (body === undefined) {
        request.setRequestHeader("Accept", "application/json");
        request.send();
    }
    // body is defined, send POST, PUT, etc. request
    else {
        request.setRequestHeader("Content-type", "application/json");
        var requestBody = JSON.stringify(body);
        try {
            request.send(requestBody);
        } catch (e) {
            console.log("error sending request:", request.response);
        }
    }
    return request;
}

exports.sendXHR = sendXHR;
