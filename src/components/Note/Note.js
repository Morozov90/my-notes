import React, {Component} from 'react';
import './Note.css';
import {connect} from "react-redux";
import {editNote} from "../../reducers/notes";

class Note extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    
    edit = (id) => (e) => {
        if (e.target.value !== '') {
            this.props.onEditNote(id, e.target.value);
        }
    }
    
    render () {
        return (
            <textarea ref={this.props.pole} className="Note"
                      key={this.props.acNote.id}
                      onChange={this.edit(this.props.acNote.id)}
            >
                {this.props.acNote.noteName}
            </textarea>
        );
    }
}

export default connect(
    state => ({
        notes: state.notes,
        acNote: state.changeNote
    }),
    dispatch => ({
        onEditNote: (id, val) => {
            const param = {
                id,
                val
            };
            dispatch(editNote(param));
        },
    })
)(Note);
