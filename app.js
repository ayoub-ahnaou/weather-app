const apiKey = "add930fe9e8b800d621b44b3233e6253";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=france";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}

checkWeather();

