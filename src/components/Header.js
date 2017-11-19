import React            from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar           from 'material-ui/AppBar';
import IconButton       from 'material-ui/IconButton';
import NavigationClose  from 'material-ui/svg-icons/navigation/close';
import FlatButton       from 'material-ui/FlatButton';

export default class Header extends React.Component {

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
                title="Harmony"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={<FlatButton label="LOGIN" href="/Login" />}
                />

              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header