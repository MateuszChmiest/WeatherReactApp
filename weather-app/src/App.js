import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import dayClear from "./images/day/clear.jpg";
import dayCloudy from "./images/day/cloudy.jpg";
import dayRainy from "./images/day/rainy.jpg";
import icon from "./images/day/116.png";
import weatherIcon from "./images/day/weather.png";
import dayWinter from "./images/day/winter.jpg"

function App() {
	const [cityInput, setCityInput] = useState("");

	const [temp, setTemp] = useState("27");
	const [condition, setCondition] = useState("Sunny");
	const [cityName, setCityName] = useState("Los Angeles");
	const [date, setDate] = useState("12,02,2022");
	const [time, setTime] = useState("00:00");
	const [cloud, setCloud] = useState("20");
	const [humidity, setHumidity] = useState("70");
	const [wind, setWind] = useState("3");
	const [iconID, setIconID] = useState(icon);

	const cities = ["Berlin", "Warsaw", "New York", "Paris"];

	const searchWeather = (e) => {
		if (cityInput.length === 0) {
			alert("Please type in a city name");
		} else {
			fetchWeatherData();
			setCityInput("");
		}
		e.preventDefault();
	};

	const fetchWeatherData = () => {
		fetch(
			`http://api.weatherapi.com/v1/current.json?key=59b81ff816324b048da132739222506&q=${cityInput}`
		)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);

				setTemp(data.current.temp_c);
				setCondition(data.current.condition.text);
				setCityName(data.location.name);

				const date = data.location.localtime;
				const y = parseInt(date.substr(0, 4));
				const m = parseInt(date.substr(5, 2));
				const d = parseInt(date.substr(8, 2));
				const time = date.substr(11);

				setDate(`${d}, ${m}, ${y}`);
				setTime(time);

				const iconID = data.current.condition.icon;
				setIconID(iconID);

				setCloud(data.current.cloud);
				setHumidity(data.current.humidity);
				setWind(data.current.wind_kph);

				const code = data.current.condition.code;
				const App = document.querySelector(".App");
				const Btn = document.querySelector(".App__btn");

				// data.current.is_day === 0 ? setTimeOfDay(false) : setTimeOfDay(true);

				if (code === 1000) {
						App.style.backgroundImage = `url(${dayClear})`
						Btn.style.backgroundColor = "#e5ba92";
				}
				else if (
				  code === 1003 ||
				  code === 1006 ||
				  code === 1009 ||
				  code === 1030 ||
				  code === 1069 ||
				  code === 1087 ||
				  code === 1135 ||
				  code === 1273 ||
				  code === 1279 ||
				  code === 1282
				) {
						App.style.backgroundImage = `url(${dayCloudy})`
						Btn.style.backgroundColor = "#red";
				}
				else if (
				  code === 1063 ||
				  code === 1069 ||
				  code === 1072 ||
				  code === 1150 ||
				  code === 1180 ||
				  code === 1183 ||
				  code === 1186 ||
				  code === 1189 ||
				  code === 1192 ||
				  code === 1195 ||
				  code === 1204 ||
				  code === 1207 ||
				  code === 1240 ||
				  code === 1243 ||
				  code === 1246 ||
				  code === 1249 ||
				  code === 1276 ||
				  code === 1252
				) {
						App.style.backgroundImage = `url(${dayRainy})`
						Btn.style.backgroundColor = "#325c80";
				}
				else {
					App.style.backgroundImage = `url(${dayWinter})`
					Btn.style.backgroundColor = "blue";
				}
			})
			.catch(() => {
				alert('City not found, please try again')
			})
	};

	const popularCityWeather = (popularCity) => {
		fetch(
			`http://api.weatherapi.com/v1/current.json?key=59b81ff816324b048da132739222506&q=${popularCity}`
		)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);

				setTemp(data.current.temp_c);
				setCondition(data.current.condition.text);
				setCityName(data.location.name);

				const date = data.location.localtime;
				const y = parseInt(date.substr(0, 4));
				const m = parseInt(date.substr(5, 2));
				const d = parseInt(date.substr(8, 2));
				const time = date.substr(11);

				setDate(`${d}, ${m}, ${y}`);
				setTime(time);

				const iconID = data.current.condition.icon;
				setIconID(iconID);

				setCloud(data.current.cloud);
				setHumidity(data.current.humidity);
				setWind(data.current.wind_kph);

				const code = data.current.condition.code;
				const App = document.querySelector(".App");
				const Btn = document.querySelector(".App__btn");

				// data.current.is_day === 0 ? setTimeOfDay(false) : setTimeOfDay(true);

				if (code === 1000) {
						App.style.backgroundImage = `url(${dayClear})`
						Btn.style.background = "#e5ba92";
				}
				else if (
				  code === 1003 ||
				  code === 1006 ||
				  code === 1009 ||
				  code === 1030 ||
				  code === 1069 ||
				  code === 1087 ||
				  code === 1135 ||
				  code === 1273 ||
				  code === 1279 ||
				  code === 1282
				) {
						App.style.backgroundImage = `url(${dayCloudy})`
						Btn.style.backgroundColor = "red";
				}
				else if (
				  code === 1063 ||
				  code === 1069 ||
				  code === 1072 ||
				  code === 1150 ||
				  code === 1180 ||
				  code === 1183 ||
				  code === 1186 ||
				  code === 1189 ||
				  code === 1192 ||
				  code === 1195 ||
				  code === 1204 ||
				  code === 1207 ||
				  code === 1240 ||
				  code === 1243 ||
				  code === 1246 ||
				  code === 1249 ||
				  code === 1276 ||
				  code === 1252
				) {
						App.style.backgroundImage = `url(${dayRainy})`
						Btn.style.backgroundColor = "#325c80";
				} 
				else {
					App.style.backgroundImage = `url(${dayWinter})`
					Btn.style.backgroundColor = "blue";
				}
			});
	};

	return (
		<div className='App' >
			<div className='App__container'>
				<img className='App__brand' src={weatherIcon}/>
				<div className='App__parameters'>
					<h1 className='App__temp'>{temp}&#176;</h1>
					<div className='App__citytime'>
						<h1 className='App__name'>{cityName}</h1>
						<small>
							<span className='App__time'>{time} -</span>
							<span className='App__date'> {date}</span>
						</small>
					</div>
					<div className='App__weather'>
						<div className='App__icon'>
							<img src={iconID} />
						</div>
						<span className='App__condition'>{condition}</span>
					</div>
				</div>
			</div>

			<div className='App__panel'>
				<form id='locationInput' onSubmit={searchWeather}>
					<input
						type='text'
						className='App__search'
						placeholder='Search Location...'
						value={cityInput}
						onChange={(e) => setCityInput(e.target.value)}
					/>
					<button type='submit' className='App__btn'>
						<FaSearch />
					</button>
				</form>
				<ul className='App__cities'>
					<h4>Popular Cities</h4>
					{cities.map((city, index) => (
						<li
							className='App__city'
							key={index}
							onClick={(e) => {
								popularCityWeather(e.target.innerHTML);
							}}
						>
							{city}
						</li>
					))}
				</ul>
				<ul className='App__details'>
					<h4>Weather Details</h4>
					<li>
						<span>Cloudy</span>
						<span className='App__cloud'>{cloud}%</span>
					</li>
					<li>
						<span>Humidity</span>
						<span className='App__humidity'>{humidity}%</span>
					</li>
					<li>
						<span>Wind</span>
						<span className='App__wind'>{wind}km/h</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
