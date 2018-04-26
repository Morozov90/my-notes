export default function changeNote(state = {}, action) {
    if (action.type === 'CHANGE_ACTIVE_NOTE') {
        return action.changeNote;
    }
    return state;
}