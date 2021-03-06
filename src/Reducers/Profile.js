import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../Actions/Constantans";

const initialstate = {
    profile: null,
    profiles: [],
    loading: true,
}

export default function(state=initialstate, action){
    const {type, payload} = action;

    switch(type){
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
            
        default:
            return state
    }
}