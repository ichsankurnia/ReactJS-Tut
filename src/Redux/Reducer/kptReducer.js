import initialState from "./initialState";
import { ActionType } from "../Action/actions";

const ktpReducer = (state = initialState.ektp, action) => {
    console.log("ACTION :", action.type)
    switch (action.type) {
        case ActionType.SET_DATA_KTP:
            const newState = {...state}
            for (const key in action.payload) {
                newState[key] = action.payload[key]
            }
            return newState
        case ActionType.UPDATE_DATA_KTP:
            const newStateUpdate = { ...state }
            newStateUpdate[action.key] = action.value
            return newStateUpdate
        default:
            return state
    }
}

export default ktpReducer