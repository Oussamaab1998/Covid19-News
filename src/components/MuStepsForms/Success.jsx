import React, { Component } from 'react'
import styled from 'styled-components';
import styles from './styles.module.css';

  // An other Import


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
margin-top: 1em;
margin-left: 18em;
margin-right: 6em;
`;



const Success = (props) =>  {

    
   const back = (e) => {
        e.preventDefault();
        props.prevStep();
    
        }

    


    

      
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
                <h1>Thank You For Your Submission</h1>
                <h4>You Will Get An Email For Confirmation</h4>
           
              <Button
                variant="contained" color="default"  onClick={back}>
                  Back
              </Button>
              
            </div>
            
        )
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


export default Success;