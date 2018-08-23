import { createStore } from "redux";
import PhraseTextReducer from "./reducers/PhraseTextReducer";
const store = createStore(PhraseTextReducer);

export default store;
