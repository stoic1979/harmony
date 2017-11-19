import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';





class Login extends React.Component {

constructor(props){
  super(props);



  console.log("-- props: " + JSON.stringify(props) );

  this.state={
      username: '',
      password: ''
    }
 }

handleLogin(event){
  console.log("-- handleLogin --");


  var self = this;

  var headers = {'Content-Type': 'application/x-www-form-urlencoded'}

  var payload  = { "username": this.state.username, "password": this.state.password };

  axios.post('http://localhost:4444/users/login', payload, headers)
   .then((result) => {
      console.log("login result: " + JSON.stringify(result) );
        this.props.callSetLoggedOfParent(true); 


  })
  .catch((err) => {
      console.log("login err: " + err);
  })

}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <h3>Login</h3>
           <TextField
             hintText="Enter your username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleLogin(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;