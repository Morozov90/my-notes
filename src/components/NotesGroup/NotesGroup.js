import React, {Component} from 'react';
import './NotesGroup.css';
import NotesGroupList from "./NotesGroupList";
import { connect } from 'react-redux';
import { addNoteGroup } from '../../reducers/notesGroup';
import  shortid  from 'shortid';

class NotesGroup extends Component {
    constructor(props){
        super(props);
        this.state = { };
        this.addNoteGroup = this.addNoteGroup.bind(this);
    }
    
    addNoteGroup(e) {
        this.props.onAddNoteGroup();
    }
    
    render () {
        return (
            <div className="NotesGroup">
                <div className="NotesGroup__button" onClick={this.addNoteGroup}>
                    <span>+</span>
                    Новая папка
                </div>
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
        onAddNoteGroup: () => {
            const noteGroupNames = {
                id: shortid.generate(),
                noteGroupName: 'Новая папка'
            };
            dispatch(addNoteGroup(noteGroupNames));
        }
    })
)(NotesGroup);
