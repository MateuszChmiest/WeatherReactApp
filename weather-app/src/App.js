import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa"

function App() {
	return (
		<section className='App'>
			<div className='App__container'>
				<h3 className='App__brand'>The Weather</h3>
				<div className="App__parameters">
					<h1 className='App__temp'>16&#176;</h1>
					<div className='App__citytime'>
						<h1 className='App__name'>London</h1>
						<small>
							<span className='App__time'>06:09 -</span>
							 <span className='App__date'> Monday, Sep 19</span>
						</small>
					</div>
					<div className='App__weather'>
						<div className='App__icon'>
							<BsFillSunFill />
						</div>
						<span className='App__condition'>Cloudy</span>
					</div>
				</div>
			</div>

      <div className="App__panel">
        <form id="locationInput">
          <input type="text" className="App__search" placeholder="Search Location..."/>
          <button type="submit" className="App__btn"><FaSearch/></button>
        </form>
        <ul className="App__cities">
          <li className="App__city">New York</li>
          <li className="App__city">California</li>
          <li className="App__city">Paris</li>
          <li className="App__city">Tokyo</li>
        </ul>
        <ul className="App__details">
          <h4>Weather Details</h4>
          <li>
            <span>Cloudy</span>
            <span className="App__cloud">89%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span className="App__humidity">64%</span>
          </li>
          <li>
            <span>Wind</span>
            <span className="App__wind">8km/h</span>
          </li>
        </ul>
      </div>
		</section>
	);
}

export default App;
