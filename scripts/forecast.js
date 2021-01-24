/*--forecast is for interact with api */

const key = 'qXd3IsDaZSsxV9eqWFXpbLZttSmGPIDj';

//get weather information
const getWeather = async (id) => {
    const base  = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query );
    const data     = await response.json();
    return data[0];
}



// get city information
const getCity = async (city) => {
    const base     = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query    = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data     = await response.json();
    return data[0]
}


/*

getCity().then(data => {
    return getWeather( data.Key )        /!*--Key with Capital K is response from data request and return as another promises = promises chaining--*!/
    }).then(data => console.log(data) )  /!*-- data for weather Info are fired after return data from getWeather always in callback --*!/
    .catch(err => console.log(err))
*/

