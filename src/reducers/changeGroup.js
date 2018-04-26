export default function changeGroup(state = '', action) {
    if (action.type === 'CHANGE_ACTIVE_GROUP') {
        return action.changeGroup;
    }
    return state;
}