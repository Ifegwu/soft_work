// A simple counter example
// The setup will be more complicated in modern apps built using React
import React from "react";
import ReactDom from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import {getMuitheme, MuiThemeProvider} from 'material-ui/styles';
import {RaiseButton, TextField, AppBar, Chip} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
injectTapEventPlugin();
var index = React.createClass({
    getInitialState: function(){
       return {message: ''}
    },
    send: function(e){
    e.preventDefault();
    this.setState({message: '', sentMessage: this.state.message.trim(    )});
    },
    handleChange: function(e){
	this.setState({meesage: e.target.value});
    },

    render: function(){
	return(
	    <div>
		<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<div>
		<AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
		<h1>Material UI Awsome</h1>
		<form onSubmit={this.send}>
		    <TextField hintText="Name" floatingLabelText="Title" value={this.state.message} onChange={this.handleChange}/>
		<RaisedButton Label="send" primary={true} ontouchTap={this.send}></RaisedButton>
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
const incrementNode = document.getElementById('increment');
const decrementNode = document.getElementById('decrement');
const inputNode = document.getElementById('counter');

const counter = {
  initialize() {
    incrementNode.addEventListener('click', (event) => {
      event.preventDefault();
      const currentValue = inputNode.value;
      inputNode.value = parseInt(currentValue, 0) + 1;
    });

    decrementNode.addEventListener('click', (event) => {
      event.preventDefault();
      const currentValue = inputNode.value;
      if (currentValue > 0) {
        inputNode.value = parseInt(currentValue, 0) - 1;
      }
    });
  }
};

export default counter;
