import { EMPLOYEES_FETCH_SUCCESS } from "../Action/types";

const INITIAL_STATE ={}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
    
        default:
            return state;
    }
}