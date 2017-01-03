var React = require('react');

//stateless functional componenet 
var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This a weather application built using React and Open Weather App as the weather API.</p>
			<p>Links to the tools used are:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react" target="_blank">React</a> - Javascript Framework
				</li>
				<li>
					<a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Get data when the user search weather by city name in degree celcius
				</li>
			</ul>
		</div>
	)
}

module.exports = About;