import { combineReducers } from 'redux';
const ADD_TEXT = 'ADD_TEXT';
const ADD_DATA = 'ADD_DATA';
const ADD_NR="ADD_NR";

export const addText =(text) =>{
  return {
    type: ADD_TEXT,
    text,
  }
}

export const addNr=(nr)=>{ 
  return {
    type: ADD_NR,
    nr
  }
}

export const addData=(data) =>{
  return {
    type: ADD_DATA,
    data
  }
}



const defaultDate = [
  {
    name: '',
    nr:null,
    data:''
  }
];

const texte=(state=defaultDate, action)=>{
  switch (action.type) {
    case  ADD_TEXT:
      return [
        ...state,
        {
          name: action.text,
          views: 1
        }
      ];

    default:
      return state;
  }
}

const numere=(state=defaultDate,action)=>{
  switch (action.type) {
    case ADD_NR:
      return[
        ...state,
        {
          nr: action.nr,
        }
      ]
      default:
        return state;
     
  }
}

const date=(state=defaultDate,action)=>{
  switch (action.type) {
    case ADD_DATA:
      return[
        ...state,
        {
          data: action.data,
        }
      ]
      default:
        return state;
     
  }
}
const reducers = combineReducers({
  texte,
  numere,
  date
});

export default reducers;