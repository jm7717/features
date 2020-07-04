import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Airtel from './Airtel.png';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  square :{
    width:120,
    height:40
  },
    formControl: {
      position:"relative",
      top:-10,
      left:-30,
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function ButtonAppBar() {
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
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:"#0367fc"}}>
          <img src ={Airtel} className={classes.square} />
          <Typography variant="h6" className={classes.title} style={{color:"white"}}>
            BOT Manager
          </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel style={{color:"white",}}>Select Bot Name</InputLabel>
        <Select
          native
          value={state.botName}
          onChange={handleChange}
          inputProps={{
            name: 'botName',
            id: 'botName-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Chat Bot"}>Chat Bot</option>
          <option value={"HR Bot"}>HR Bot</option>
          <option value={"Payments Bank Bot"}>Payments Bank Bot</option>
          <option value={"PostPaid Seibel Bot"}>PostPaid Seibel Bot</option>
          <option value={"PrePaid Bot"}>PrePaid Bot</option>
          <option value={"DTH Bot"}>DTH Bot</option>
        </Select>
      </FormControl>

          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
