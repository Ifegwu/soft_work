import React, {Component} from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

injectTapEventPlugin();

const style ={
    paper: {
	display: 'inline-block',
	float: 'left',
	margin: 'left'
	},
    rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
    },
};

export default class Home extends React.Component{
constructor(props) {  
  super(props);
  this.state = {
        open: false
    };
}
getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
}
handleToggle () {
	this.setState({open: !this.state.open});
}
handleClose() {
	this.setState({open: false});
}

render() {
    return (
	     <div>
		<AppBar 
	            title="WaterGate Software"
		    onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
		<Drawer 
		    docked={false}
		    width={200}
		    open={this.state.open}
		    onRequestChange={(open) => this.setState({open})}
		>
		    <Paper style={style.paper}>
		       
		       <Menu>
			 <MenuItem leftIcon={<RemoveRedEye />} primaryText="Preview" onTouchTap={this.handleClose.bind(this)}  />
                       </Menu>
		    </Paper>
		    <Paper style={style.paper}>
			<Divider />
                       <Menu>
		   	 <MenuItem leftIcon={<PersonAdd />} primaryText="Share" onTouchTap={this.handleClose.bind(this)} / >
		      </Menu>
		    </Paper>
			<Divider />
		</Drawer>
	     </div>
	);
	}
    }
Home.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}
