import React, {Component} from 'react';
import './NotesGroupList.css';
import {connect} from "react-redux";
import { deleteNoteGroup } from '../../reducers/notesGroup';
import { editNoteGroup } from '../../reducers/notesGroup';
import { changeActGr } from '../../reducers/changeGroup';
import { deleteNoteGr } from '../../reducers/notes';
import {changeActNote} from "../../reducers/changeNote";

class NotesGroupList extends Component {
    constructor(props){
        super(props);
        this.state = {  };
        this.activeGroup = this.activeGroup.bind(this);
    }
    
    activeGroup = (item) => (e) => {
        if(e.target.className !== 'delete') {
            this.props.onActiveGroup(item.id);
        }
    }
    
    edit = (id) => (e) => {
        const listItem = e.target.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');
        if(isEditing) {
            if (editInput.value !== '') {
                title.innerText = editInput.value;
                e.target.innerText = 'Изменить';
                this.props.onEdit(id, editInput.value);
            }
        } else {
            editInput.value = title.innerText;
            e.target.innerText = 'Сохранить';
        }
        listItem.classList.toggle('editing');
    }
    
    delGr = (id) => (e) => {
        e.stopPropagation();
        this.props.deleteGroup(id);
    }
    
    render () {
        return (
            <div className="NotesGroupList">
                <ul>
                    {this.props.notesGroup.map((item) => (
                        <li key={item.id}
                            style={(item.id === this.props.actGroup) ? {background: "#4c91f5", color: "#ffffff"} : {background: "none", color: "#000000"}}
                            onClick={this.activeGroup(item)}
                            >
                            <label className='title'> { item.noteGroupName } </label>
                            <input type='text' className='textfield' />
                            <button className='edit' onClick={this.edit(item.id)}>Изменить</button>
                            <button className='delete' onClick={this.delGr(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        actGroup: state.changeGroup,
        actNote: state.changeNote,
    }),
    dispatch => ({
        onEdit: (id, val) => {
            const param = {
                id,
                val
            };
          dispatch(editNoteGroup(param));
        },
        deleteGroup: (id) => {
            dispatch(changeActNote(''));
            dispatch(deleteNoteGr(id));
            dispatch(changeActGr(''));
            dispatch(deleteNoteGroup(id));
        },
        onActiveGroup: (id) => {
            dispatch(changeActNote(''));
            dispatch(changeActGr(id));
        }
    })
)(NotesGroupList);
