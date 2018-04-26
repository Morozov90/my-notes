export default function notes(state = [], action) {
    if (action.type === 'ADD_NOTE') {
        return [
            ...state,
            action.addNote
        ];
    }
    return state;
}