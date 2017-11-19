import React            from 'react';

import { Link }         from 'react-router-dom';

import IconMenu         from 'material-ui/IconMenu';
import MenuItem         from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar           from 'material-ui/AppBar';
import IconButton       from 'material-ui/IconButton';
import NavigationClose  from 'material-ui/svg-icons/navigation/close';
import FlatButton       from 'material-ui/FlatButton';
import MoreVertIcon     from 'material-ui/svg-icons/navigation/more-vert';

import Login from './Login'


class CustomDiv extends React.Component {
  render() {
      return (
        <div>{this.props.children}</div>
      );
  }
}

//------------------------------------------------------------
//    Logged Button
//------------------------------------------------------------
class LoginButton extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

//------------------------------------------------------------
//    Logged Dropdown menu
//------------------------------------------------------------
const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';


//------------------------------------------------------------
//    Header Component
//------------------------------------------------------------
export default class Header extends React.Component {

	constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...',
         name: 'Angel',
          logged: false
      }

      this.setLogged = this.setLogged.bind(this);

   	};


    setLogged(loggedValue){    
        console.log("Main :: setLogged");
        this.setState({logged: loggedValue}) ;
    };

   	render() {

    return (
         <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                title="Harmony"
                iconElementLeft={
                    <CustomDiv>
                      <IconButton><NavigationClose /></IconButton>
                      <FlatButton label="Login" href="/login"/>
                      <FlatButton label="SIGN UP" href="/signup" />
                    </CustomDiv>
                }
                iconElementRight={this.state.logged ? <Logged /> : <LoginButton />}
                />
                <Login callSetLoggedOfParent={this.setLogged}/>
              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header