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
      position:"absolute",
      top: 950,
      left: 150,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 110,
      width: 900,
      left: 150,
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
    height: 1,
    padding: '15px 0px',
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
  export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div className="forms">
        <Grid container spacing={3}>
        <Grid item md={6} lg={3}>
        <Typography variant="h3" className={classes.heading}>
              Manage Scenario
            </Typography>
    
            <Divider className={classes.line}/>
          </Grid>
        

        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
            <p><div className = "field1">
             Select Scenario to Edit: 
             </div> </p>
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
            
            
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field">  
                
                <p> <div className="field1" >Enter Scenario Name:  </div> </p>
                <div className="block"><CSSTextField
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  /> </div>
                
                
                </div>
                
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                
                <p> <div className="field1"> Enter Scenario ID:  </div> </p>
                <div className="block"> <CSSTextField
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  />
                   </div>
                </div>
            </form>
            
            <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
            <p><div className="field1"> Select Scenario Strategy: </div></p>
            <div className="block"> 
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                          <MenuItem value="">
                          DTScenario
                          </MenuItem>
                          <MenuItem value="">FAQScenario</MenuItem>
                          <MenuItem value="">SwitchScenario</MenuItem>
                      </Select>
                </div>
              </div>
            
              <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
              <p><div className= "field1"> Select Scenario LOB: 
              </div></p>
                <div className="block"> 
                    <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                              <MenuItem value="">PostPaid</MenuItem>
                              <MenuItem value="">PrePaid</MenuItem>
                              <MenuItem value="">DTH</MenuItem>
                              <MenuItem value="">Telemedia</MenuItem>
                              <MenuItem value="">HR</MenuItem>
                              <MenuItem value="">PaymentsBank</MenuItem>
                          </Select>
                    </div>
                  </div>
                  <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                  <p> <div className="field1"> MSISDN Required:  </div> </p>
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
                    <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> <p> Feedback Required:</p>
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
            
                        <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        <p> <div className = "field1">Enter Scenario Response: </div></p>
                      <div className="block"> 
                      
                          <CSSTextField
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                        />
                                  </div>
                              </div>

                              <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        <p> <div className = "field1">Enter Bot Classify Score: </div></p>
                      <div className="block"> 
                      
                          <CSSTextField
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                        />
                                  </div>
                              </div>
            


            

            
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                Save
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                Load
            </BootstrapButton>
            </div>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Remove Scenario
            </Typography>
        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <InputLabel id="demo-simple-select-outlined-label">   </InputLabel>
            <div className= "field1">  
                <div className="block">
                    <Select 
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label=""
                    >
                    <MenuItem value="">
                        True
                    </MenuItem>
                    <MenuItem value="">False</MenuItem>
                    </Select>
                </div>
                <br /> <br />
                <p> Select Scenario to Delete:  </p>
                

            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                Delete Scenario
            </BootstrapButton>
            </div>
      </FormControl>
      </Grid>
        </div>
    );
  }