const CHANGE_ACTIVE_NOTE = 'an/CHANGE_ACTIVE_NOTE';

export const changeActNote = (obj) => ({
    type: CHANGE_ACTIVE_NOTE,
    payload: obj
})

export default function notesGroup(state = '', action) {
    switch (action.type ) {
        case CHANGE_ACTIVE_NOTE: {
            return action.payload;
        }
        default : return state;
    }
}
