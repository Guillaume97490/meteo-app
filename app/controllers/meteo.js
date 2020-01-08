let request = require('request');
let apiKey = require('../../config/secret.js').key;

const validator = require('validator');
const ejs = require('ejs');

exports.index = (req,res)=> res.render('meteo/form.ejs', {title: 'Météo'});

exports.weather = (req,res)=> {
    let city = validator.escape(req.body.city).trim();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    request(url, function (err, response, weather) {
        if(err)
            weather = err;
        if (req.xhr) {
            res.set('Content-Type', 'text/html');
            weather = JSON.parse(weather);
            if ( weather.cod != 200)
                return res.send(Buffer.from(`<section data-id="error" class="col-md-6 p-0">
                    <div class="bg-white p-4 rounded mb-2 mx-1">
                        <button onclick="closeWeather('error')" class="close"><span class="float-right text-danger"><i class="fas fa-times"></i></span></button>
                        <p>Lieu Introuvable</p>
                    </div>
                </section>`,'utf8'));
            let meteoTpl = require('../views/templates/meteo.js').data;
            let compiled = ejs.compile(meteoTpl);
            let html = compiled({'data' : weather});
            return res.send(Buffer.from(html,'utf8'));
        }
        // return res.json(JSON.parse(weather));
        res.render('meteo/show.ejs', {
            title: 'Résultat',
            data: JSON.parse(weather)
        });
    });
};

exports.techno = (req,res)=> res.render('meteo/techno.ejs', {title: 'Techno'});
