/*  Set up web server either locally or in host environment
    Created by Jeremy Jung 27/11/2020
*/

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});