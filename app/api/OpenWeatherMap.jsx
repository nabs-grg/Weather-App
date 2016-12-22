var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=747d90314c9a7bcd1f4f21ef559f4f88&units=metric';

module.exports = {
	getTemp: function(location){
		//template string
		var encodedLocation = encodeURIComponent(location); //takes plain text string and encodes the string peoprerly for the browser
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){

			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
				cosnole.log(res.data.main.temp);
			}

		},function(res){
			throw new Error(res.data.message); //handle error thrown by the API.
		});
	}
}