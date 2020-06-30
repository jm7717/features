import {TrainedDataActionType} from "../action-types/trained-data.actiontype";

export function inputQuery(event){
    return {type:TrainedDataActionType.SET_QUERY,
            query: event.target.value
    };
}

export function inputBotIntent(event){
    return {type:TrainedDataActionType.SET_BOT_INTENT,
            botIntent: event.target.value
    };
}

export function inputBotScenario(event){
    return {type: TrainedDataActionType.SET_BOT_SCENARIO,
            botScenario: event.target.value
    };
}


}