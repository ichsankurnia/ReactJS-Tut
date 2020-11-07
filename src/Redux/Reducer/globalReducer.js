import initialState from "./initialState";
import { ActionType } from "../Action/actions";

// const globalState = {
//     totalOrder: 0,
//     testState: 'jhjas',
//     ektp: {}
// }

/* REDUCER */
const globalReducer = (state = initialState, action) => {
    console.log("ACTION :", action.type)
    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case ActionType.MINUS_ORDER:
            let totOrder = 0;
            if(state.totalOrder > 0){
                totOrder = state.totalOrder - 1
            }
            return {
                ...state,
                totalOrder: totOrder
            }
        // case ActionType.SET_DATA_KTP:
        //     return { 
        //         ...state, 
        //         ektp: action.data_ektp
        //     }
        // case ActionType.UPDATE_DATA_KTP:
        //     const newDataEktp = {...state.ektp}
        //     newDataEktp[action.key] = action.value
        //     return {
        //         ...state,
        //         ektp: newDataEktp
        //     }
        case ActionType.TEST_ACTION:
            return {
                ...state,
                testState: action.data
            }
        default:
            return state
    }
}

export default globalReducer