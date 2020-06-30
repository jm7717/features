import {BotManagerActionType} from "../action-types/bot-manager.actiontype";

export function inputBotName(event){
    return {type: BotManagerActionType.SET_BOT_NAME,
            botName: event.target.value
    };
}

export function inputBotToken(event){
    return {type: BotManagerActionType.SET_BOT_TOKEN,
            botToken: event.target.value
    };
}

export function inputBotStrategy(event){
    return {type: BotManagerActionType.SET_BOT_STRATEGY,
            botStrategy: event.target.value
    };
}

export function inputBotAlgorithm(event){
    return {type: BotManagerActionType.SET_BOT_ALGORITHM,
            botAlgorithm: event.target.value
    };
}

export function inputBotMsisdn(event){
    return {type: BotManagerActionType.SET_BOT_MSISDN,
            botMsisdn: event.target.value
    };
}

export function inputBotScore(event){
    return {type: BotManagerActionType.SET_BOT_SCORE,
            botScore: event.target.value
    };
}