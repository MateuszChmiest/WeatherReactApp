import React, { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

function App() {
	const [citySelect, setCitySelect] = useState(false);
	const [cityInput, setCityInput] = useState("");


	const [temp, setTemp] = useState("27");
  const [condition, setCondition] = useState("Sunny");
  const [cityName, setCityName] = useState("Warsaw");
  const [date, setDate] = useState("12,02,2022");
  const [time, setTime] = useState("00:00");
  const [cloud, setCloud] = useState("20");
  const [humidity, setHumidity] = useState("70");
  const [wind, setWind] = useState("3")
  const [iconID, setIconID] = useState("")

	const cities = ["Berlin", "Warsaw", "New York", "Paris"];

	const searchWeather = (e) => {
		if (cityInput.length === 0) {
			alert("Please type in a city name");
		} else {
		  fetchWeatherData();
			setCityInput("");
			// setCitySelect(true);
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
        const y = parseInt(date.substr(0,4));
        const m = parseInt(date.substr(5,2));
        const d = parseInt(date.substr(8,2));
        const time = date.substr(11);

        setDate(`${d}, ${m}, ${y}`);
        setTime(time);

        const iconID = data.current.condition.icon;
        setIconID(iconID);

        setCloud(data.current.cloud);
        setHumidity(data.current.humidity);
        setWind(data.current.wind_kph);
			});
	};

  const popularCityWeatherData = (popularCity) => {
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
        const y = parseInt(date.substr(0,4));
        const m = parseInt(date.substr(5,2));
        const d = parseInt(date.substr(8,2));
        const time = date.substr(11);

        setDate(`${d}, ${m}, ${y}`);
        setTime(time);

        const iconID = data.current.condition.icon
        setIconID(iconID)

        setCloud(data.current.cloud);
        setHumidity(data.current.humidity);
        setWind(data.current.wind_kph);
			});
	};

	return (
		<section
			className='App'
			style={citySelect ? { opacity: 0 } : { opacity: 1 }}>
			<div className='App__container'>
				<h3 className='App__brand'>The Weather</h3>
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
							<img src={iconID}/>
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
                popularCityWeatherData(e.target.innerHTML)
              }			
							}>
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
		</section>
	);
}

export default App;
