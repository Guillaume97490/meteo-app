$(() => {
    $('#meteo-form').on('submit', (event)=> {
        event.preventDefault();
        let city = $('#city').val().trim();
        let cities = localStorage.getItem('cities'); // => get localStorage
        let cityExist = false;
        unescape(cities).split(';').forEach(element => {
            if (element.toUpperCase() == city.toUpperCase()) {
                cityExist = true;
                $('#city').val('');
            };
        });
        if(!cityExist) {
            $.post(`/meteo`,{city: city}, (data) => {
                if (!data.error) {
                    let citiesList = null;
                    citiesList = localStorage.getItem('cities') + ';' + $('#city').val().trim();
                    localStorage.setItem('cities', citiesList); // => set localStorage
                    $("#meteo-show").append(data);
                };
                $('#city').val('');
            });
        };
    });
    getWeather();
});

function closeWeather(id = 0) {
    city = $(`section[data-id=${id}] h2`).text();
    cities = unescape(localStorage.getItem('cities')).split(';');
    cities.forEach(function (value, i) {
        if (value.split(',')[0].toUpperCase() == city.toUpperCase()) {
            cities.splice(i,1);
            localStorage.setItem('cities', cities.join(';'));
            $(`section[data-id=${id}]`).remove();
        };
    });
};

function getWeather() {
    let citiesArray = [];
    citiesArray = localStorage.getItem('cities').split(';');
    citiesArray.forEach(item => {
        $.post(`/meteo`,{city: item}, (data) => {
            if (!data.erreur) {
                $("#meteo-show").append(data);
            };
        });
    });
};