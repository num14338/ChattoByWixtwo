import { combineReducers } from 'redux'
import Information from './informationReducer'
import Login from './loginReducer'

const reducer = combineReducers({
  Information,
  Login,

})

export default reducer
