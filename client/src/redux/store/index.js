import { applyMiddleware, createStore } from 'redux';
// import reducer from './reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import countriesReducer from '../reducers/countriesDucks';

const store = createStore(countriesReducer, composeWithDevTools(applyMiddleware(thunk)))//

 export default store;