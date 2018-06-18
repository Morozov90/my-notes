const ADD_NOTE = 'nt/ADD_NOTE';
const DEL_NOTE = 'nt/DEL_NOTE';
const DEL_NOTE_GR = 'nt/DEL_NOTE_GR';
const EDIT_NOTE = 'nt/EDIT_NOTE';
const initiallState = [];

export const addNote = (obj) => ({
    type: ADD_NOTE,
    payload: obj
})

export const deleteNote = (id) => ({
    type: DEL_NOTE,
    payload: id
})

export const deleteNoteGr = (id) => ({
    type: DEL_NOTE_GR,
    payload: id
})

export const editNote = (param) => ({
    type: EDIT_NOTE,
    payload: param
})

export default function notesGroup(state = initiallState, action) {
    switch (action.type ) {
        case ADD_NOTE: {
            return [
                ...state,
                action.payload
            ];
        }
        case DEL_NOTE: {
            return state.filter(elem => elem.id !== action.payload   );
        }
    
        case DEL_NOTE_GR: {
            return state.filter(elem => elem.groupId !== action.payload   );
        }
        
        case EDIT_NOTE: {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.noteName = action.payload.val;
                }
                return item;
            });
        }
        default : return state;
    }
}