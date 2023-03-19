// do not show api key on your js file
const API_KEY = `f01955166ec6bd70f5977795f54e8ac1`;
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
loadTemperature('dhaka')