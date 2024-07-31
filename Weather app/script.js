const weatherApiUrl = 'https://open-weather13.p.rapidapi.com/city/landon/EN'
const weatherApiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your RapidAPI key for weather
const imageApiUrl = 'https://dall-e-2.p.rapidapi.com/v1/images/generations'; // Example URL, replace with actual endpoint
const imageApiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your RapidAPI key for image generation

document.getElementById('getWeather').addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    try {
        // Fetch weather data
        const weatherResponse = await fetch(weatherApiUrl + `?q=${location}&units=metric`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': weatherApiKey
            }
        });
        const weatherData = await weatherResponse.json();
        
        if (weatherData.cod !== 200) {
            alert('Location not found');
            return;
        }

        // Display weather information
        document.getElementById('temperature').textContent = `Temperature: ${weatherData.main.temp} °C`;
        document.getElementById('description').textContent = `Description: ${weatherData.weather[0].description}`;
        
        // Generate and display weather image
        const imageResponse = await fetch(imageApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': 'dall-e-2.p.rapidapi.com',
                'x-rapidapi-key': imageApiKey
            },
            body: JSON.stringify({
                prompt: `Weather in ${location}: ${weatherData.weather[0].description}`
            })
        });
        const imageData = await imageResponse.json();
        document.getElementById('weather-image').src = imageData.url; // Adjust based on API response format

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
