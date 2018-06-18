const CHANGE_ACTIVE_GROUP = 'ag/CHANGE_ACTIVE_GROUP';

export const changeActGr = (id ) => ({
    type: CHANGE_ACTIVE_GROUP,
    payload: id
})

export default function notesGroup(state = '', action) {
    switch (action.type ) {
        case CHANGE_ACTIVE_GROUP: {
            return action.payload;
        }
        default : return state;
    }
}
