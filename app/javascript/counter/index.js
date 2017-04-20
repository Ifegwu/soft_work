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
import {Card, CardTitle, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import Toggle from 'material-ui/Toggle';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import lionLamb from '../../javascript/shared/images/Iam1.png';

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

class Login extends React.Component{
  //static muiName = 'FlatButton';
  
  render() {
    return (
      <FlatButton {...this.props} label="Login" />		    
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Signout" />
  </IconMenu>
  );
Logged.muiName = 'IconMenu';

export default class Home extends React.Component{

constructor(props) {  
  super(props);
  this.state = {
        open: false,
	logged: true
    };
}


handleChange(event, logged){
  this.setState({logged: logged});
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
//flipToggle(event, toggle) {
// this.setState({expanded: toggle});
//}
handleExpandChange (expanded) {
  this.setState({expanded: expanded});
}
handleExpand  ()  {
  this.setState({expanded: true});
}
handleReduce () {
  this.setState({expanded: false});
}

initiallyExpanded(){
  this.setState({ expanded: true});
}
render() {
    return (
	     <div>
	        <Toggle
		  label="Logged"
		  defaultToggled={true}
		  onToggle={this.handleChange.bind(this)}
		  labelPosition="right"
		  style={{margin: 20}}
		/>
		<AppBar 
	          title="WaterGate Software"
		  onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
		  iconElementLeft={<IconButton><NavigationClose /></IconButton>}
		  iconElementRight={this.state.logged ? <Logged /> : <Login />} 
		/>
		<Drawer 
		    docked={false}
		    width={300}
		    open={this.state.open}
		    onRequestChange={(open) => this.setState({open})}
		>	    		       
		       <Menu>
			 <MenuItem leftIcon={<RemoveRedEye />} primaryText="Preview" onTouchTap={this.handleClose.bind(this)}  />
                       </Menu>		    
		       <Divider />
                       <Menu>
		   	 <MenuItem leftIcon={<PersonAdd />} primaryText="Share" onTouchTap={this.handleClose.bind(this)} / >
		      </Menu>
		    
		</Drawer>
                <Card className="container">
                  <CardTitle title="SoftWork Application" subtitle="This is the home page of WaterGate Excellence Software" />
                </Card>
		<Card expanded={this.state.expanded} initiallyExpanded={true} onExpandChange={this.handleExpandChange.bind(this)}>
		  <CardHeader
		    title="URL Avatar"
		    subtitle="Subtitle"
		    avatar={lionLamb}
		    actAsExpander={true}
                    showExpandableButton={true}
                 />
	         <CardText>
		   <div>Dear Lord!</div>
	         </CardText>
	        <CardMedia
		  expandable={true}
		  overlay={<CardTitle title="Overlay title" subtitle="Card subtitle" />} >
	          <img src={lionLamb} alt="Lord Jesus" />
	        </CardMedia>
	        
		 <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
	      <CardText expandable={true}>
	        I have a very good track record plus excellent good will.
	      </CardText>
	      <CardActions>
	        <FlatButton label="Expand" onTouchTap={this.handleExpand.bind(this)} />
		<FlatButton label="Reduce" onTouchTap={this.handleReduce.bind(this)} />
	      </CardActions>
          </Card>

           </div>
	);
	}
    }
Home.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
}
