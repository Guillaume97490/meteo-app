$(() => {
    $('#meteo-form').on('submit', (event)=> {
        event.preventDefault();
        let city = $('#city').val();
        $.post(`/meteo`,{city: city}, (data) => {
            $("#meteo-show").append(data);
            let cityArray = [];
            let cities = $.cookie('cities'); // => "value"
            console.log(cities);
            if (cities != '') {
                cityArray.push($.cookie('cities'), $('#city').val().trim());
            }else{
                cityArray.push($('#city').val().trim());
            }
            // let city = $('#city').val();
            $.cookie('cities', cityArray); // set cookie
            // $.removeCookie('name'); // => true
            // console.log($.cookie('cities'));
            $('#city').val('');
        });
    });
    getWeather();
});

function closeWeather(id){
    $(`section[data-id=${id}]`).remove();
};

function getWeather() {
    // console.log("toto");
    let citiesArray = new Array;
    citiesArray.push($.cookie('cities'));
    let count = 0;
    // console.log(citiesArray);
    // let array = citiesArray.split(',');
    console.log(citiesArray.split(","));
    for (let index = 0; index < citiesArray.length; index++) {
        // const element = array[index];
        console.log(index);
    };
    // citiesArray.forEach(item => {
        
    //     // console.log(item);
    //     console.log('toto');
    //     // $.post(`/meteo`,{city: item}, (data) => {
    //     //     $("#meteo-show").append(data);
    //     // });

    // });
    // console.log(citiesArray);
}


