import React, { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const[darkMode,setDarkMode]=useState(false);
  const handleSearch = () => {
    console.log(`Searching: ${city}`);
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const result = await response.json();
        console.log(result);
        setWeatherData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

   

  const toggleMode=()=>{
    setDarkMode(!darkMode);
  }


  return (
   <div className={`${darkMode ? "dark" : ""} w-full h-screen dark:bg-black`}>

    
   <div className="min-h-screen flex items-center justify-center 
     bg-gradient-to-br from-blue-400 to-indigo-600 
     dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-4">

      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">


        <button
  className="absolute top-5 right-8 px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-gray-600"
  onClick={toggleMode}
>
  {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
</button>
  
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Weather App
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            placeholder="Search the city"
            value={city}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        <div className="text-center">
          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {weatherData && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
              <p className="text-4xl font-bold text-blue-600">
                {weatherData.main.temp}°C
              </p>
              <p className="text-gray-600 capitalize">
                {weatherData.weather[0].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
