import React, {Component} from 'react';
import './NotesList.css';
import {connect} from "react-redux";

class NotesList extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    
    activeNote = (item) => (e) => {
        this.props.onActiveNote(item);
    }
    
    render () {
        return (
            <div className="NotesList">
                <ul>
                    
                    {this.props.notes.filter(element => element.groupId === this.props.actGroup ).map((item) => (
                            <li key={item.id} style={(item.id === this.props.actNote.id) ? {background: "#dcdcda"} : {background: "none"}}
                            onClick={this.activeNote(item)}
                            >
                            {(item.noteName.length > 10 ) ? item.noteName.slice(0, 10) + '...' : item.noteName}
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
            dispatch({ type: 'CHANGE_ACTIVE_NOTE', changeNote: item })
        }
    })
)(NotesList);
