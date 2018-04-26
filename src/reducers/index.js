import { combineReducers } from 'redux';

import notes from './notes';
import notesGroup from './notesGroup';
import changeGroup from './changeGroup';
import changeNote from './changeNote';
import toggle from './toggle';

export default combineReducers({
    notes,
    notesGroup,
    changeGroup,
    changeNote,
    toggle
})