import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleChange(evt) {
    setCity(evt.target.value);
  }
  function handleClick() {
    const weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ea3b8f763004636943c1bb052da9070`,
    );
    weatherData.then(function (data) {
      setWeather(data.data.weather[0].main);
      setTemp(data.data.main.temp);
      setDesc(data.data.weather[0].description);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-50 to-purple-100 p-6">
      <div className="w-full max-w-lg rounded-3xl border border-white bg-white/80 p-8 shadow-2xl backdrop-blur-md sm:p-10">
        <div className="mb-8 text-center">
          <div className="mb-4 text-5xl">🌤️</div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
            Weather App
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Get real-time weather updates for your city.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            onChange={handleChange}
            value={city}
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            type="text"
            placeholder="Enter city name"
          />

          <button
            onClick={handleClick}
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
          >
            Get Report
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-indigo-50 bg-gradient-to-br from-indigo-50 to-sky-50 p-6">
          <div className="mb-6 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">
              Current Weather
            </p>

            <h2 className="mt-3 text-3xl font-bold capitalize text-slate-800">
              {weather || "Your Weather"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                🌡️ Temperature
              </p>
              <p className="mt-2 break-words text-xl font-bold text-indigo-700">
                {temp || "--"}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                ☁️ Description
              </p>
              <p className="mt-2 break-words text-lg font-semibold capitalize text-slate-700">
                {desc || "Waiting for data"}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Weather information powered by OpenWeatherMap
        </p>
      </div>
    </div>
  );
}

root.render(
  <>
    <App />
  </>,
);
