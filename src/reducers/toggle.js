const CHANGE_STATE = 'CHANGE_STATE';

export const changeState = (param) => ({
    type: CHANGE_STATE,
    payload: param
})

export default function notesGroup(state = true, action) {
    switch (action.type ) {
        case CHANGE_STATE: {
            return action.payload;
        }
        default : return state;
    }
}