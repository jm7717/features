import {LoginActionType} from "../action-types/login.actiontype";

const initialState={
    user:"",
    password:"",
   

};

export default function LoginReducer(state = initialState, action){

    switch(action.type){

        case LoginActionType.SET_USER:
            return{
                ...state, user:action.user
            };

        case LoginActionType.SET_PASSWORD:
            return{
                ...state, password:action.password
            };

       

        default:
            return state;
  
    }
    
}