import React, {Component} from 'react';
import './Notes.css';
import NotesList from "./NotesList";
import {connect} from "react-redux";

class Notes extends Component {
    constructor(props){
        super(props);
        this.state = { };
        this.addNote = this.addNote.bind(this);
    }
    
    addNote(e) {
        e.preventDefault();
        this.props.onAddNote(this.notesInput.value, this.props.activeGroup);
        this.notesInput.value = "";
    }
    
    render () {
        let body;
        if(this.props.activeGroup  !== '') {
            body = <div>
                <label>
                    What needs to be done?
                    <input
                        type="text"
                        ref={(input) => {
                            this.notesInput = input
                        }}
                    />
                </label>
                <button onClick={this.addNote}>
                    Add
                </button>
                <NotesList notes={this.props.notes}/>
            </div>;
        }
        
        return (
            <div className="Notes">
                {body}
            </div>
        );
    }
}

export default connect(
    state => ({
        notes: state.notes,
        activeGroup: state.changeGroup
    }),
    dispatch => ({
        onAddNote: (noteName, groupId) => {
            const noteNames = {
                id: Date.now().toString(),
                noteName,
                groupId
            };
            dispatch({ type: 'ADD_NOTE', addNote: noteNames })
        }
    })
)(Notes);
