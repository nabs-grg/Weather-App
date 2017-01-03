var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	onSearch: function(e){
		e.preventDefault();
		alert('search for the weather through search box');
	},

	render: function(){
		return (

		  	<div className="top-bar">
		  		<div className="top-bar-left">
		  			<ul className="menu">
		  				<li className = "menu-text nav-title">Weather App</li>
		  				<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="nav-title">Get Weather</IndexLink></li>
		  				<li><Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}} className="nav-title">About</Link></li>
		  				<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="nav-title">Examples</Link></li>
		  			</ul>
		  		</div>
		  		<div className="top-bar-right">
		  			<form onSubmit={this.onSearch}>
		  				<ul className="menu nav-search">
		  					<li><input type="search" placeholder="Search Weather" /></li>
      						<li><button type="button" className="button expanded hollow secondary" id="btn-get-weather">Search Weather</button></li>
      					</ul>
		  			</form>
		  		</div>
		    </div>
		);
	}
})

module.exports = Nav;

