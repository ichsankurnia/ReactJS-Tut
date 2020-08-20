const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 17
}

/* REDUCER */
const rootReducer = (state = initialState, action) => {
    console.log('STATE =>', state)
    console.log('ACTION =>', action)
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state
    }
}


/* STORE */
const store = createStore(rootReducer)
console.log("GET STATE BEFORE ACTION =>", store.getState())


/* SUBSCRIPTION */
// Dipanggil setiap value state pada store berubah
store.subscribe(() => {
    console.log('STORE CHANGE :', store.getState())
})


/* DISPATCHING ACTION */
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log("GET STATE AFTER DISPATCH =>", store.getState())