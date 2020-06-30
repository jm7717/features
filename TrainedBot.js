import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      height: 30,
      alignItems: "left",
      position:"absolute",
      top: 50,
      left: -380,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    heading :{
      position:"absolute",
      top: -10,
      left: -200,
      fontFamily: "Segoe UI"
    },
    line :{
      position:"relative",
      top: 50,
      width: 900,
      left: -250,
      height: 2,
      backgroundColor:"black"
    },
    heading1 :{
      position:"relative",
      top: 240,
      left: -90,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 180,
      width: 900,
      left: 180,
      height: 2,
      backgroundColor:"black"
    },

    heading3 :{
        position:"relative",
        top: 340,
        left: 140,
        fontFamily: "Segoe UI"
      },
      line3 :{
        position:"relative",
        top: 345,
        width: 900,
        left: 180,
        height: 2,
        backgroundColor:"black"
      },
    field1 :{
      position:"relative",
      top: 1880,
      left: 10,
      
    },
  }));
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      position: 'relative',
      top: 45,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 170,
    height: 30,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const CSSTextField = withStyles({
  root: {
    width: 205,
    padding: '10px 0px',
    position: 'relative',
    top: -70,
    left: 1,
      },

  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      position: 'relative',
      top: 20,
      left: 330,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      align: 'center',
      backgroundColor: '#0367fc',
      borderColor: '#0367fc',
      
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
  
  export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading}>
              Check Bot Intent
            </Typography>
    
            <Divider className={classes.line}/>
        

        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            <div className= "field"> 
            <p><div className = "field1">
             Enter User Query Text: 
                </div> 
                </p>
                <div className="block"><CSSTextField style={{height: 30, position: "relative", left:2, top:-60}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  /> </div>
              </div>
            
              <Typography variant="h3" className={classes.heading3}>
                Map Intent to Scenario
                </Typography>
    
                <Divider className={classes.line3}/>
            
                <div className= "field">  
                
                <p> <div className="field1" style={{ position: "relative", left:2, top:-50}} >Select Bot Intent:  </div> </p>
                <div className="block"><CSSTextField style={{height: 30, position: "relative", left:2, top:-105}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  /> </div>
                
                
                </div>
                
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                
                <p> <div className="field1" style={{ position: "relative", left:5, top:-50}}> Select Scenario:  </div> </p>
                <div className="block"> <CSSTextField style={{height: 30, position: "relative", left:2, top:-90}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  />
                   </div>
                </div>
            </form>
            
            
            


            

            
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:10}}>
                Generate
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:10}}>
                Toggle View
            </BootstrapButton>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Trained Data View
            </Typography>
        
            <Divider className={classes.line1}/>

            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:10}}>
                Map
            </BootstrapButton>
            <br /> <br /> <br /> <br /> <br />
            
            <br/>
            <br />
            
            </div>
            </div>
      </FormControl>
        </div>
    );
  }