import React, { Component } from 'react'
import styled from 'styled-components';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import styles from './styles.module.css';

  
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Wrapper = styled.div`
margin-top: 1em;
margin-left: 18em;
margin-right: 6em;
`;



export class FormPersonalDetails extends Component {

    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    
        }
    continuee = (e) => {
    e.preventDefault();
    this.props.nextStep();

    }

    render() {

      const { values , handleChange , nextStep } = this.props;
        return (
             <div style={{display: 'flex', marginTop:70, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
             <AppBar position="static" style={{    width: `calc(100% - ${250}px)`, marginLeft:250
}}>
                <Toolbar>
                  <MenuIcon />
                  <Typography variant="h6">
                    News  
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
               </AppBar>
               <div style={{display: 'flex', marginTop:70, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>

               <TextField 
                hintText="Enter Your Occupation"
                label="Occupation"
                variant="outlined"
                onChange = {handleChange('occupation')}
                defaultValue={values.occupation}
               />
               <br/>
               <TextField
                hintText="Enter Your City"
                label="City"
                variant="outlined"
                onChange = {handleChange('city')}
                defaultValue={values.city}
               />
               <br/>
               <TextField 
                hintText="Enter Your Bio"
                label="Bio"
                variant="outlined"
                onChange = {handleChange('bio')}
                defaultValue={values.bio}
               />
               <br/>
               <Button
                variant="contained" color="primary"  onClick={this.continuee}>
                  Continue
              </Button>
              <Button
                variant="contained" color="default"  onClick={this.back}>
                  Back
              </Button>
             </div>
            </div>
            
        )
    }
}

const style ={
  button :{
    margin: 15
  },
  mui:{
    marginTop: 1,
marginLeft: 18,
marginRight: 6,
}
}

export default FormPersonalDetails;
