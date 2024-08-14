const apiKey = "b0c55f261bfb2e1626c419c95bef6699";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const obj = {
            Clear: "Weather App images/clear.png",
            Clouds: "Weather App images/clouds.png",
            Drizzle: "Weather App images/drizzle.png",
            Mist: "Weather App images/mist.png",
            Rain: "Weather App images/rain.png"
        }
        weatherIcon.src = obj[data.weather[0].main]

    }
}

SearchBtn.addEventListener("click", () => {
    checkWeather(SearchBox.value);


})


