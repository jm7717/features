import {LoginActionType} from "../action-types/login.actiontype";

export function inputUser(event){
    return {type:LoginActionType.SET_QUERY,
            user: event.target.value
    };
}

export function inputPassword(event){
    return {type:LoginActionType.SET_BOT_INTENT,
            password: event.target.value
    };
}



}