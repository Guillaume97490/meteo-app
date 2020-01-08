var meteo = require('../app/controllers/meteo');

module.exports = (app) => {
    app.get('/', meteo.index);
    app.post('/meteo', meteo.weather);
    app.get('/techno', meteo.techno);
}