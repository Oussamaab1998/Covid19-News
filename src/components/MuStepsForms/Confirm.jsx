import React, { Component } from 'react'
import styled from 'styled-components';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import styles from './styles.module.css';

  // An other Import


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar'


const Wrapper = styled.div`
margin-top: 1em;
margin-left: 18em;
margin-right: 6em;
`;



export class Confirm extends Component {

    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    
        }
    continuee = (e) => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();

    }

    render() {

      const { values:{firstName, lastName, occupation, email, city, bio } } = this.props;
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
               <br/>
               <Button
                variant="contained" color="primary"  onClick={this.continuee}>
                  Primary
              </Button>
              <Button
                variant="contained" color="danger"  onClick={this.back}>
                  Primary
              </Button>
              
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

export default Confirm;
