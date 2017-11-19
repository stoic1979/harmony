import React            from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar           from 'material-ui/AppBar';
import IconButton       from 'material-ui/IconButton';
import NavigationClose  from 'material-ui/svg-icons/navigation/close';
import FlatButton       from 'material-ui/FlatButton';
import { Link }         from 'react-router-dom'



class CustomDiv extends React.Component {
  render() {
      return (
        <div>{this.props.children}</div>
      );
  }
}

export default class Footer extends React.Component {

	constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...',
         name: 'Angel'
      }
      this.updateState = this.updateState.bind(this);
      this.updateName  = this.updateName.bind(this);
   	};

   	updateState() {
      this.setState({data: 'Data updated...'})
  	};

  	updateName(e) {
      this.setState({name: e.target.value})
  	};

   	render() {

   		var myStyle = {
        	 fontSize: 100,
         	color: '#0000ff'
    	};

    return (
         <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                title="Footer"
                iconElementLeft={
                  <FlatButton label="ABOUT" href="/about" />
                }
                iconElementRight={  
                  <FlatButton label="CONTACT US" href="/contact" />
                }
                />
                 React version: {React.version}
              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header