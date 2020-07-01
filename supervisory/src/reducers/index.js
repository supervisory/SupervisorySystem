import { plataformReducer } from './plataformReducer/index'
// import { OtherReducer } from './otherReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  plataformState: plataformReducer,
//   otherState: otherReducer
})