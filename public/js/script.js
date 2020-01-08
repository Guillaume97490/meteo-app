$(() => {
    $('#meteo-form').on('submit', (event)=> {
        event.preventDefault();
        let city = $('#city').val();
        let cities = $.cookie('cities'); // => get cookie
        let cityExist = false;
        unescape(cities).split(',').forEach(element => {
            if (element.toUpperCase() == city.toUpperCase()) {
                cityExist = true;
                $('#city').val('');
            };
        });
        if(!cityExist) {
            $.post(`/meteo`,{city: city}, (data) => {
                if (!data.error) {
                    $("#meteo-show").append(data);
                    let cityArray = new Array();
                    if (cities != '') {
                        cityArray.push($.cookie('cities'), $('#city').val().trim());
                    }else{
                        cityArray.push($('#city').val().trim());
                    };
                    $.cookie('cities', cityArray); // set cookie
                };
                $('#city').val('');
            });
        };
    });
    getWeather();
});

function closeWeather(id){
    cities = $.cookie('cities');
    cities = unescape(cities).split(',');
    city = $(`section[data-id=${id}] h2`).text();
    if (id == 'error') {
        city = null;
    };
    cities.forEach(function (value, i) {
        if (value.toUpperCase() == city.toUpperCase()) {
            cities.splice(i,1);
            $.cookie('cities', cities);
            $(`section[data-id=${id}]`).remove();
        };
    });
};

function getWeather() {
    let citiesArray = new Array;
    citiesArray.push(unescape($.cookie('cities')));
    citiesArray = unescape(citiesArray).split(',');
    citiesArray.forEach(item => {
        $.post(`/meteo`,{city: item}, (data) => {
            if (!data.erreur) {
                $("#meteo-show").append(data);
            };
        });
    });
};