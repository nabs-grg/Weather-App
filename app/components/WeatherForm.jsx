var React = require('react');

var WeatherForm = React.createClass({
	render: function(){
		return (
			<div>
				<div>
				<input type="text" ref="cityName" placeholder="Enter the city name"/>
				</div>
				<div>
				<button>Get Weather</button>
				</div>
			</div>
		)
	}
});

module.exports = WeatherForm;