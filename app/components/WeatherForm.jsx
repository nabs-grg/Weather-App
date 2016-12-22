var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit: function(e){
		e.preventDefault();

		var location = this.refs.cityName.value;

		if(location.length > 0){
			this.refs.cityName.value = '';
			this.props.onSearch(location);
		}

	},

	render: function(){

		
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="cityName" placeholder="Enter the city name"/><br />
					<button>Get Weather</button>
				</form>
			</div>
		)
	}
});

module.exports = WeatherForm;