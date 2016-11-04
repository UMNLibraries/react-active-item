var React = require('react');
var ReactDOM = require('react-dom');
var ReactActiveItem = require('react-active-item');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactActiveItem />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
