import messages from './messages';
import auth from './auth';
import welcomePage from './welcomePage';
import userValidation from './userValidation';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  messages,
  auth,
  welcomePage,
  userValidation,
  formReducer
});

export default rootReducer;
