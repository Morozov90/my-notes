export default function notesGroup(state = [], action) {
    if (action.type === 'ADD_NOTE_GROUP') {
        return [
            ...state,
            action.addNoteGroup
        ];
    }
    return state;
}