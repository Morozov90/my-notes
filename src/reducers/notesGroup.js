const ADD_NOTE_GROUP = 'gr/ADD_NOTE_GROUP';
const DEL_NOTE_GROUP = 'gr/DEL_NOTE_GROUP';
const EDIT_NOTE_GROUP = 'gr/EDIT_NOTE_GROUP';
const initiallState = [];



export const addNoteGroup = (obj) => ({
    type: ADD_NOTE_GROUP,
    payload: obj
})

export const deleteNoteGroup = (id) => ({
    type: DEL_NOTE_GROUP,
    payload: id
})

export const editNoteGroup = (param) => ({
    type: EDIT_NOTE_GROUP,
    payload: param
})

export default function notesGroup(state = initiallState, action) {
    switch (action.type ) {
        case ADD_NOTE_GROUP: {
            return [
                ...state,
                action.payload
            ];
        }
        case DEL_NOTE_GROUP: {
            return state.filter(elem => elem.id !== action.payload   );
        }
    
        case EDIT_NOTE_GROUP: {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.noteGroupName = action.payload.val
                }
                return item;
            });
        }
        default : return state;
    }
}
