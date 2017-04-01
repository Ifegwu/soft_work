import React from "react";
import ReactDom from "react-dom";
import injetTapEventPlugin from "react-tap-event-plugin";
import {getMuiTheme, MuiThemeProvider} from "material-ui/styles";
import {RaisedButton, TextField, AppBar, Chip} from "material-ui";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";

injectTapEventPlugin();

var Index = React.createClass({
	getInitialState: fi=unction(){
		return {message, ''};
	},
	send: function(e) {
		e.preventDefault();
		this.setState({message: '', sentMessage: this.state.message.trim()});
		},
	handleChange: function(e) {
		this.setState({message: e.target.value});
	},
	render: function() {
		return (
			<div>
				<MuiThemeProvider muiTheme={getMuiTeheme(lightBaseTheme)}>
					<div>
						<AppBar title="Title" iconClassNameRight="muidoc-icon-navigation-expand-more"/>
						<h1> Material UI Daniel</h1>
						<form onSubmit={this.send}>
							<TextField hintText="Content" floatingLabelText="Submit" value={this.state.message} onChange={this.handleChange}/>
							<RaisedButton label="item" primary={true} onTouchTap={this.send}></RaisedButton>
							<Chip>
								{this.state.sentMessage}
							</Chip>
						</form>
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
});
window.onload = function() {
	ReactDOM.render(
		<Index/>, document.getElementById("root"));
};

export default item;
