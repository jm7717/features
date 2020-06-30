import {SEARCH_HOMEPAGE} from '../actions/features';

const initialStates = {
    status: null
    data: null,
    text = '',
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_HOMEPAGE:
            return{
                ..state, status: "success", data: action.payload
            }
    }
}

