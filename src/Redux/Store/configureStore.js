import { createStore } from "redux";
import rootReducer from "../Reducer/rootReducer";

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore