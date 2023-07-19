import {combineReducers,createStore} from 'redux'
import { carReducer } from '../reducers/cartReducer'

const allReducers =combineReducers({
    books:carReducer

})
export const myStore= createStore(allReducers)