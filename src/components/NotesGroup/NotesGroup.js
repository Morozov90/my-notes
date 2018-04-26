import React, {Component} from 'react';
import './NotesGroup.css';
import NotesGroupList from "./NotesGroupList";
import { connect } from 'react-redux';

class NotesGroup extends Component {
    constructor(props){
        super(props);
        this.state = { };
        this.addNoteGroup = this.addNoteGroup.bind(this);
    }
    
    addNoteGroup(e) {
        e.preventDefault();
        this.props.onAddNoteGroup(this.notesGropInput.value);
        this.notesGropInput.value = "";
    }
    
    render () {
        return (
            <div className="NotesGroup">
                    <label>
                        Имя группы
                        <input
                            type="text"
                            ref={(input) => {this.notesGropInput = input}}
                        />
                    </label>
                    <button onClick={this.addNoteGroup}>
                        Add
                    </button>
                <NotesGroupList notesGroup={this.props.notesGroup} />
            </div>
        );
    }
}

export default connect(
    state => ({
        notesGroup: state.notesGroup
    }),
    dispatch => ({
        onAddNoteGroup: (noteGroupName) => {
            const noteGroupNames = {
                id: Date.now().toString(),
                noteGroupName
            };
            dispatch({ type: 'ADD_NOTE_GROUP', addNoteGroup: noteGroupNames })
        }
    })
)(NotesGroup);