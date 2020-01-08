
exports.data = `<section data-id="<%= data.id %>" class="col-md-6 p-0">
    <div class="bg-white p-4 rounded mb-2 mx-1">
        <button onclick="closeWeather(<%= data.id %>)" class="close"><span class="float-right text-danger"><i class="fas fa-times"></i></span></button>
        <h2 class="text-center mb-0"><%= data.name %></h2>
        <div class="text-center">
            <span class="small">Longitude: <%= data.coord.lon %></span>
            <span class="small">, Latitude: <%= data.coord.lat %></span>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <!--<span><%= data.weather[0].description %></span>-->
                <img class="img-fluid" src="http://openweathermap.org/img/wn/<%= data.weather[0].icon %>@2x.png" alt="<%= data.weather[0].main %>">
            </div>
            <!--<div class="col-md-6 d-md-flex flex-column align-items-center">
                Température :
                <ul>
                    <li>Actuelle: <%= data.main.temp.toFixed(0) %> °C</li>
                    <li>min: <%= data.main.temp_min.toFixed(0) %> °C</li>
                    <li>max: <%= data.main.temp_max.toFixed(0) %> °C</li>
                </ul>
            </div>-->
        </div>
        
            
        <!--<div>
            Pression atmosphérique : <%= data.main.pressure.toFixed(0) %> hPa
        </div>-->
        <!--<div>
            Humidité:  <%= data.main.humidity.toFixed(0) %> %
        </div>
        <div>
            Vents: <%= data.wind.speed.toFixed(0) %> Metres/s
        </div>-->
        <div class="row">
            <div class="col-4 text-center"><i class="fas fa-temperature-low"></i> <%= data.main.temp.toFixed(0) %> °C</div>
            <div class="col-4 text-center"><i class="fas fa-tint"></i> <%= data.main.humidity.toFixed(0) %> %</div>
            <div class="col-4 text-center"><i class="fas fa-wind"></i> <%= data.wind.speed.toFixed(0) %> M/s</div>
        </div>
    </div>
</section>`