import React, {Component} from 'react';
import './NotesList.css';
import {connect} from "react-redux";
import { deleteNote } from '../../reducers/notes';
import { changeActNote } from '../../reducers/changeNote';

class NotesList extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    
    activeNote = (item) => (e) => {
        this.props.onActiveNote(item);
    }
    
    delNote = (id) => (e) => {
        e.stopPropagation();
        this.props.onDeleteNote(id);
    }
    
    render () {
        return (
            <div className="NotesList">
                <ul>
                    
                    {this.props.notes.filter(element => element.groupId === this.props.actGroup ).map((item) => (
                            <li key={item.id}
                                style={(item.id === this.props.actNote.id) ? {background: "#dcdcda"} : {background: "none"}}
                                onClick={this.activeNote(item)}
                            >
                                <span className='note__text'>{item.noteName}</span>
                            
                                <button className='delete' onClick={this.delNote(item.id)}>Удалить</button>
                            </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default connect(
    state => ({
        actNote: state.changeNote,
        actGroup: state.changeGroup
    }),
    dispatch => ({
        onActiveNote: (item) => {
            dispatch(changeActNote(item));
        },
        onDeleteNote: (id) => {
            dispatch(changeActNote(''));
            dispatch(deleteNote(id));
        },
    })
)(NotesList);
