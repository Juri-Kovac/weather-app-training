/*-- app is for manipulation with DOM and events--*/

const cityForm = document.querySelector('.change-location');
const card     = document.querySelector('.card');
const details  = document.querySelector('.details');
const time     = document.querySelector('img.time');
const icon     = document.querySelector('.icon img')

updateUI = (data) => {
    const { cityDetails, weather } = data;

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
               <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
    `;
    // update the day/night images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc );

    let timeSrc = null;
    weather.IsDayTime ? timeSrc ='img/day.svg' : timeSrc = 'img/night.svg';
    time.setAttribute('src', timeSrc );

    card.classList.contains('d-none') ? card.classList.remove('d-none') : card;
};

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather     = await getWeather(cityDetails.Key);

    return{
        /*--cityDetails : cityDetails,  object short hands we have same name value and same property name we delete them--*/
        /*--weather     : weather,       weather:weather is only weather cityDetails:cityDetails is only cityDetails  --*/
        cityDetails,
        weather
    }
}

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();   /*--cityForm is name of form. City is name of name in input field and value ist value--*/
                                               /*--value is value that we want grab from form--*/
    cityForm.reset();
    // update city value
    updateCity(city)
        .then(data => updateUI(data) )
        .catch(err => console.log(err));

});