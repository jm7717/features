import {TrainedDataActionType} from "../action-types/trained-data.actiontype";

const initialState={
    query:"",
    botIntent:"",
    botScenario:"",
   

};

export default function TrainedDataReducer(state = initialState, action){

    switch(action.type){

        case TrainedDataActionType.SET_QUERY:
            return{
                ...state, query:action.query
            };

        case TrainedDataActionType.SET_BOT_INTENT:
            return{
                ...state, botIntent:action.botIntent
            };

        case TrainedDataActionType.SET_BOT_SCENARIO:
            return{
                ...state, botScenario:action.botScenario
            };


        default:
  
    }
    return state;
}