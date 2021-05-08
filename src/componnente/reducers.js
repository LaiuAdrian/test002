import { combineReducers } from 'redux';
const ADD_INFO = 'ADD_INFO';


export const addInfo =(text,tip,val) =>{
  return {
    type: ADD_INFO,
    text,
    tip,
    val
  }
}

const defaultDate = [

];

const informatii=(state=defaultDate, action)=>{
  switch (action.type) {
    case  ADD_INFO:
      return [
        ...state,
        {
          name: action.text,
          tip:action.tip,
          val:action.val
        }
      ];

    default:
      return state;
  }
}

const reducers = combineReducers({
  informatii,
});

export default reducers;