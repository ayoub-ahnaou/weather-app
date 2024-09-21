const apiKey = "add930fe9e8b800d621b44b3233e6253";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const image = document.getElementById("image");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const city_input = document.getElementById("city_input");
const btn = document.getElementById("btn");

async function checkWeather() {
    const response = await fetch(apiUrl + `&q=${city_input.value}` + `&appid=${apiKey}`);
    let data = await response.json();

    image.src = "images/" + data.weather[0].main + ".png";
    temperature.innerHTML = Math.round(data.main.temp) + "° C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";

}

btn.addEventListener("click", () => {
    checkWeather();
});

