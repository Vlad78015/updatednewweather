/* let inputSearch = document.querySelector(".input-search")
let btnSearch = document.querySelector(".btn-search")

btnSearch.addEventListener("click", function(){
    let searchValue = inputSearch.value
    let API_KEY = "da283b6358e550e5d53bcf7ddcaa4460"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`, {
        method: "GET",
    })
    .then(response => {
        if(!response.ok){
            console.error("Error")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)

        let weatherLocation = document.querySelector(".weather-location")
        let temp = data.main.temp; 
        let weatherDescription = data.weather[0].description; 
        let iconCode = data.weather[0].icon; 
        let iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@2x.png'; 
    
    weatherLocation.innerHTML = ` 
        <h2>Погода в ${city}</h2> 
        <p>Температура: ${temp}°C</p> 
        <p>Стан: ${weatherDescription}</p> 
        <img src="${iconUrl}" alt="${weatherDescription}"> 
        <img src="${iconCode}" alt ="${weatherDescription}
    `
    })
    .catch(error => {
        console.error(error)
    })
})  */



let inputSearch = document.querySelector(".input-search");
let btnSearch = document.querySelector(".btn-search");

btnSearch.addEventListener("click", function() {
    let searchValue = inputSearch.value;
    let API_KEY = "da283b6358e550e5d53bcf7ddcaa4460";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`, {
        method: "GET",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching weather data");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Extract weather data
        let city = data.name; // Get the city name
        let temp = Math.round(data.main.temp); 
        let weatherDescription = data.weather[0].description; 
        let iconCode = data.weather[0].icon; 
        let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 

        // Display weather statistics on the page
        let weatherLocation = document.querySelector(".weather-location");
        weatherLocation.innerHTML = `
            <h2>Weather in ${city}</h2> 
            <p>Temperature: ${temp}°C</p> 
            <p>Condition: ${weatherDescription}</p> 
            <img src="${iconUrl}" alt="${weatherDescription}"> 
        `;
    })
    .catch(error => {
        console.error(error);
        // Optionally, display an error message on the page
        let weatherLocation = document.querySelector(".weather-location");
        weatherLocation.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
