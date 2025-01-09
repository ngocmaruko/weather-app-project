# Weather App

The Weather App is a simple and responsive web application that provides weather information for a specific city or your current location. Built with vanilla JavaScript, HTML, and CSS, this app uses the OpenWeatherMap API for fetching real-time weather data.

## Features

- **Geolocation Support**:
  - Automatically fetches weather data for your current location if geolocation access is granted.
  
- **City Search**:
  - Allows users to enter a city name to retrieve the weather information.

- **Weather Information Display**:
  - Displays temperature, humidity, weather description, and an appropriate weather emoji.

- **Error Handling**:
  - Provides error messages for geolocation denial, invalid city input, or API issues.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **API**: OpenWeatherMap API

## Getting Started

Follow these steps to set up and run the Weather App:

### Prerequisites
- A modern web browser
- Node.js and npm (optional, if serving through a local server)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ngocmaruko/weather-app-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app-project
   ```

3. Open the `index.html` file directly in your browser:
   ```
   ./index.html
   ```
   Alternatively, you can use a local development server (e.g., Live Server for VS Code).

## Usage

1. **Automatic Weather Fetch**:
   - On loading, the app tries to fetch your current location's weather using geolocation.
   - If geolocation is denied, an error message will prompt you to manually enter a city name.

2. **Search by City**:
   - Enter a city name in the input field and click the "Get Weather" button.
   - The app will display the weather information for the entered city.

## Future Enhancements

- **Unit Conversion**:
  - Add options to switch between Celsius and Fahrenheit.

- **Extended Forecast**:
  - Include a 5-day weather forecast.

- **Styling Improvements**:
  - Enhance the UI for better responsiveness and aesthetics.

- **Offline Support**:
  - Implement caching for offline access to previously fetched weather data.

## API Key

This app uses the OpenWeatherMap API. Replace the `apiKey` in the `script.js` file with your own API key:
```javascript
const apiKey = 'your-api-key';
```

You can get a free API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

---

This README has been created to guide users and developers through the app's setup and usage.
