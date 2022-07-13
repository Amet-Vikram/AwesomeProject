import {
  SET_USER_AGE,
  SET_USER_NAME,
  INCREASE_AGE,
  DECREASE_AGE,
} from './actions';

const initialState = {
  name: '',
  age: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_USER_AGE:
      return {...state, age: action.payload};
    case INCREASE_AGE:
      return {...state, age: state.age + 1};
    case DECREASE_AGE:
      return {...state, age: state.age - 1};
    default:
      return state;
  }
};

export default userReducer;
