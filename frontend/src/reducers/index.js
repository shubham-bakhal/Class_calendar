import {combineReducers} from 'redux'
import dateReducres from './date.reducers'
import authReducres from './auth.reducers'
import userReducres from './user.reducer'
import weekReducres from './week.reducer'

const rootReducer = combineReducers({
    date: dateReducres,
    auth: authReducres,
    user: userReducres,
    week: weekReducres
})

export default rootReducer

