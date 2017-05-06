import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'react-router-redux';
import {App} from '../../containers/App';

class Root extends Component {
  
  componentWillMount () {
    const { fetchUser }= this.props;
    fetchUser();
  }

  render() {
    const { history, locale, muiTheme, message}= this.props;
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <IntlProvider locale={locale} messages={messages}>
	  <ConnectedRouter history={history} >

	    <Route
	      exact path="/"
	      component={App}
	    />

	   </ConnectedRouter>
	  </IntlProvider>
	</MuiThemeProvider>

	);
    }
  
  }
export default Root;
