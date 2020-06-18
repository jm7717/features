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



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
 

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 160,
    height: 40,
    padding: '6px 12px',
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
    padding: '15px 0px',
      },
  
  
})(TextField);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      position: 'relative',
      right: 180,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      align: 'center',
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
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
  export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div className="forms">
        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            <div className="managebot"> Manage Bot</div>
            <hr />
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field">  
                <div className="block"><CSSTextField id="outlined-basic" label="" variant="outlined" /> </div>
                
                <p>Enter Bot Name:</p>
                </div>
                
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                <div className="block"><CSSTextField id="outlined-basic" label="" variant="outlined" /> </div>
                <p>Enter Bot Access Name: </p>
                </div>
            </form>
            
           
            <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> Enter Bot Strategy: 
            <div className="block"> 
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                          <MenuItem value="">
                              DEFAULT
                          </MenuItem>
                          <MenuItem value="">EXTERNAL</MenuItem>
                          <MenuItem value="">NATIVE</MenuItem>
                          <MenuItem value="">GRAPH</MenuItem>
                      </Select>
                </div>
              </div>
            
            <br/ >
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field">  
                    <div className="block"><CSSTextField id="outlined-basic" label="" variant="outlined" /> </div>
                    <p>Enter Bot Algorithm Location:</p>
                </div>
            </form> 
            

            
            <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> Bot MSISDN Log: 
            <div className="block"> 
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                          <MenuItem value="">
                              True
                          </MenuItem>
                          <MenuItem value="">False</MenuItem>
                          
                      </Select>
                </div>
              </div>
            
            <br />

            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field">  
                    <div className="block"><CSSTextField id="outlined-basic" label="" variant="outlined" /> </div>
                    <p>Enter Bot Classify Score:</p>
                </div>
            </form>
            <div className ="btn">
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                Save
            </BootstrapButton> &emsp;

            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                Load
            </BootstrapButton>
            </div>
            </div>
            <br />
            <div className= "DeleteBot">
            <div className="managebot"> Delete Bot </div>
            <hr />
            <div className ="btn">
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                DeleteBot
            </BootstrapButton>
            </div>
            </div>
      </FormControl>
        </div>
    );
  }