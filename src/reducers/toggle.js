export default function toggle(state = true, action) {
    if (action.type === 'CHANGE_STATE') {
        return action.changeState;
    }
    return state;
}