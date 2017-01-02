var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => { 
	return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p>You can try out the few examples location provided below:</p>
				<ol>
					<li>
						<Link to='/?location=London'>London, UK</Link>
					</li>
					<li>
						<Link to='/?location=NewYork'>New York, USA</Link>
					</li>
				</ol>
			</div>
		)
}

module.exports = Examples;