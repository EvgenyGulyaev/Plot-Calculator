import { combineReducers } from 'redux';

import spinner from './spinner';
import toast from './toast';

const reducer = combineReducers({
  spinner,
  toast,
});

export default reducer;
