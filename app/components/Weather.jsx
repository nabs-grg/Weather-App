var React = require('react');
//container componenet for the weather which manages the state which is the place the user is searching for and the temperature that is displayed for the place
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({

	getInitialState: function(){
		return {
			location: 'London',
			temp: 15
		}
	},

	handleSearch: function(location){
		var self = this;

		OpenWeatherMap.getTemp(location).then(function(temp){
			self.setState({
				location: location,
				temp: temp
			});
		},function(errMsg){
			alert(errMsg);
		})	
	},

	render: function(){
		//pass down the location and temp as props to the WeatherMessage and right now get the state for the two variable (location and temp) using this.state object
		var {location,temp} = this.state; //var location=this.state.location //location state exist here
		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage location={location} temp={temp}/>
			</div>
		)
		}

});

module.exports = Weather;
