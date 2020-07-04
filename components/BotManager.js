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
import { BotManagerActionType } from "../action-types/bot-manager.actiontype";
import { connect } from "react-redux";
import {inputBotName,inputBotToken,inputBotStrategy,inputBotAlgorithm,inputBotMsisdn,inputBotScore} from "../actions/scenario-manager.action";


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
      top: 690,
      left: 20,
      fontFamily: "Segoe UI"
    },
    line1 :{
      position:"relative",
      top: 120,
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
  
   function InputFields() {
    const classes = useStyles();
    const [botName, setBotName] = React.useState('');
    const [botToken, setBotToken] = React.useState('');
    const [botStrategy, setBotStrategy] = React.useState('');
    const [botAlgorithm, BotMsisdn] = React.useState('');
    const [botScore, setBotScore] = React.useState('');

    const handleChange = (event,props) => {
      setBotName(event.target.value);
      props.dispatch({type:BotManagerActionType.SET_BOT_NAME, botName:event.target.value});
      props.dispatch({type:BotManagerActionType.SET_BOT_TOKEN, botToken:event.target.value});
      props.dispatch({type:BotManagerActionType.SET_BOT_STRATEGY, botStrategy:event.target.value});
      props.dispatch({type:BotManagerActionType.SET_BOT_ALGORITHM, botAlgorithm:event.target.value});
      props.dispatch({type:BotManagerActionType.SET_BOT_MSISDN, botMsisdn:event.target.value});
      props.dispatch({type:BotManagerActionType.SET_BOT_SCORE, botScore:event.target.value});

    };

    return (
        <div className="forms">
        <Typography variant="h3" className={classes.heading}>
              Manage Bot
            </Typography>
    
            <Divider className={classes.line}/>
        

        
        <FormControl variant="outlined" className={classes.formControl}>
            <div className= "ManageBot">
            
            
              
            
            
                <div className= "field">  
                
                <p> <div className="field1" style={{ position: "relative", left:2, top:-10 }} >Enter Bot Name:  </div> </p>
                <div className="block"><CSSTextField style={{height: 30, position: "relative", left:2, top:-60}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  /> </div>
                
                
                </div>
                
            <form className={classes.root} noValidate autoComplete="off">
                <div className= "field"> 
                
                <p> <div className="field1" style={{ position: "relative", left:5, top:-10}}> Enter Bot Access Token:  </div> </p>
                <div className="block"> <CSSTextField style={{height: 30, position: "relative", left:2, top:-50}}
                    id="filled-secondary"
                    variant="filled"
                    color="secondary"
                  />
                   </div>
                </div>
            </form>
            
            <p><div className="field1" style={{ position: "relative", left:25, top:20}}> Enter Bot Strategy: </div></p>
        <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
            <Select style={{width:205, height: 50, position: "relative", left:327, top:-5}}
              native
              onChange={handleChange}
              inputProps={{
                name: 'strategy',
                id: 'filled-strategy-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>Default</option>
              <option value={2}>External</option>
              <option value={3}>Native</option>
              <option value={4}>Graph</option>
            </Select>
              </div>
            
              <p><div className= "field1" style={{ position: "relative", left:27, top:20}}> Enter Bot Algorithm Location: 
              </div></p>
              <div className="block"> 

              <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
              <Select style={{width:205, height: 50, position: "relative", left:247, top:-5}}
                native
                onChange={handleChange}
                inputProps={{
                  name: 'lob',
                  id: 'filled-lob-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>PostPaid</option>
                <option value={2}>PrePaid</option>
                <option value={3}>DTH</option>
                <option value={4}>Telemedia</option>
                <option value={5}>HR</option>
                <option value={6}>PaymentsBank</option>
              </Select>
              </div>
              <p> <div className="field1" style={{ position: "relative", left:30, top:20}}> Bot MSISDN Log:  </div> </p>
              <div className="block"> 
                    <InputLabel htmlFor="filled-age-native-simple"></InputLabel>
                    <Select style={{width:205, height: 50, position: "relative", left:250, top:-10}}
                      native
                      onChange={handleChange}
                      inputProps={{
                        name: 'msisdn',
                        id: 'filled-msisdn-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>True</option>
                      <option value={2}>False</option>
                    </Select>
                    

                      <p> <div className = "field1" style={{ position: "relative", left:-130, top:20}} >Enter Bot Classify Score: </div></p>
                        <InputLabel id="demo-customized-select-label">   </InputLabel><div className= "field"> 
                        
                      <div className="block"> 
                      
                          <CSSTextField style={{width:205, height: 50, position: "relative", left:5, top:-40}}
                          id="filled-secondary"
                          variant="filled"
                          color="secondary"
                        />
                                  </div>

                              
                              </div>
            


            

            
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:30}}>
                Save
            </BootstrapButton>
            &emsp; &emsp;
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:520, top:30}}>
                Load
            </BootstrapButton>
            <br />
            <div className= "DeleteBot">
            <Typography variant="h3" className={classes.heading1}>
              Delete Bot
            </Typography>
        
            <Divider className={classes.line1}/>
            <br /> <br /> <br /> <br /> <br />
            <div className= "field1">  
            
                <br /> <br />
                

            </div>
            <br/>
            <br />
            <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{position: "relative", left:350, top:20}}>
                Delete Bot
            </BootstrapButton>
            </div>
            </div>
      </FormControl>
        </div>
    );
  }

  function mapStateToProps(state) {
    return {
      botName:state.botManager.mainNode,
      botToken:state.botManager.prevNode,
      botStrategy:state.botManager.botStrategy,
      botAlgorithm:state.botManager.botAlgorithm,
      botMsisdn:state.botManager.botMsisdn,
      botScore:state.botManager.botScore,
    };
  }
  
  export default connect(mapStateToProps)(InputFields);
  