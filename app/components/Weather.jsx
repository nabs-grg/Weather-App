var React = require('react');
//container componenet for the weather which manages the state which is the place the user is searching for and the temperature that is displayed for the place
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


var Weather = React.createClass({

render: function(){

	return (
		<div>
		<h3>Weather Component</h3>
		<WeatherForm />
		<WeatherMessage />
		</div>
	)
	}

});

module.exports = Weather;
