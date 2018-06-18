import React, {Component} from 'react';
import './Header.css';
import {connect} from "react-redux";
import { changeState } from '../../reducers/toggle';
import  shortid  from 'shortid';
import { addNote } from '../../reducers/notes';
import {changeActNote} from "../../reducers/changeNote";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { };
        this.showGroups = this.showGroups.bind(this);
        this.addNote = this.addNote.bind(this);
    }
    
    showGroups(e){
        e.preventDefault();
        this.props.onShowGroups(!this.props.isOpened);
    }
    
    addNote(e) {
        e.preventDefault();
        this.props.onAddNote(this.props.activeGroup);
        if(this.props.pole.current) {
            this.props.pole.current.focus();
        }
    }
    
    render () {
        return (
            <div className="Header">
                <button onClick={this.showGroups}>Закрыть боковое меню</button>
                <button onClick={this.addNote} disabled={this.props.activeGroup === '' ? true : false}>Добавить заметку</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        isOpened: state.toggle,
        activeGroup: state.changeGroup
    }),
    dispatch => ({
        onShowGroups: (open) => {
            dispatch(changeState(open));
        },
        onAddNote: (groupId) => {
            const noteNames = {
                id: shortid.generate(),
                noteName: 'Новая заметка',
                groupId
            };
            dispatch(addNote(noteNames));
            dispatch(changeActNote(noteNames));
        }
    })
)(Header);
