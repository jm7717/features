import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {ReqAnalysisActionType} from "../action-types/req-analysis.actiontype";
import {inputEncrypted,inputDecrypted} from "../actions/req-analysis.action";
import * as ReqAna from "../actions/req-analysis.action"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75ch',
      height: 1000
    },
  },

  box1 :{
    height:100,
    position :"absolute",
    top: 150,
    left :400
  },

  box2 :{
   height:100,
    position :"absolute",
    top: 450,
    left :400 
  },

  Encrypt:{
    position:"absolute",
    top: 402,
    left : 490,
    textTransform: "capitalize"
  },

  Decrypt:{
    position:"absolute",
    top: 402,
    left : 800,
    textTransform: "capitalize"
  },

  heading :{
    position:"absolute",
    top: 80,
    left: 405,
    fontFamily: "Segoe UI"
  },
  line :{
    position:"relative",
    top: -320,
    width: 900,
    left: 405,
    height: 2,
    backgroundColor:"black"
  }
}));

function InputTextField(props) {
  const classes = useStyles();
  const handleChange = (action,input) => {
    switch(action){
      case "ENCRYPT_IN" :  
        props.dispatch(ReqAna.inputEncrypted(input));
        break;

      case "DECRYPT_IN" :
        props.dispatch(ReqAna.inputDecrypted(input));
        break;          
        
      
   
      }
    };

  return (
    <div>
    <Grid container spacing={3}>
    <Grid item md={12} sm={6}>
    <Typography variant="h3" className={classes.heading}>
    Encrypt/Decrypt Chatbot Data
        </Typography>
    <Divider className={classes.line}/>
    </Grid>
    <Grid item md={12} sm={6}>

    <form className={classes.root} noValidate autoComplete="off">
      <TextField multiline rows={10} className={classes.box1} id="filled-basic" 
        label="Enter Encryted Text" variant="filled" 
        value={props.encrypted}
        onChange={(e)=>handleChange("ENCRYPT_IN",e.target.value)}
/>
      <br />
      <TextField multiline rows={10} 
        className={classes.box2} 
        id="outlined-basic" 
        label="Enter Decryted Text" 
        variant="filled"                     
        value={props.decrypted}
        onChange={(e)=>handleChange("DECRYPT_IN",e.target.value)}
 />
    </form>
    </Grid>
    <Grid item md={12} sm={6}>

    <Button className={classes.Encrypt} variant="contained" color="secondary">
        Encrypt->Decrypt
    </Button>
    <Button className={classes.Decrypt} variant="contained" color="secondary">
        Decrypt->Encrypt
    </Button>
    </Grid>

    <span style={{position:"relative",top:250}}>&nbsp;&nbsp;</span>
    </Grid>
    </div>
  );
}

function mapStatetoProps(state){
  return{
  encrypted: state.reqAnalysis.encrypted,
  decrypted: state.reqAnalysis.decrypted,
  };
}


export default connect(mapStatetoProps)(InputTextField);