import React, {Component} from 'react';
import './NotesGroupList.css';
import {connect} from "react-redux";

class NotesGroupList extends Component {
    constructor(props){
        super(props);
        this.state = {  };
        this.activeGroup = this.activeGroup.bind(this);
    }
    
    activeGroup = (item) => (e) => {
        this.props.onActiveGroup(item.id);
        this.props.onActiveNote();
    }
    
    render () {
        return (
            <div className="NotesGroupList">
                <ul>
                    {this.props.notesGroup.map((item, index) => (
                        <li key={index} style={(item.id === this.props.actGroup) ? {background: "#4c91f5", color: "#ffffff"} : {background: "none", color: "#000000"}}
                            onClick={this.activeGroup(item)}
                        >
                            {item.noteGroupName}
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
        onActiveGroup: (id) => {
            dispatch({ type: 'CHANGE_ACTIVE_GROUP', changeGroup: id })
        },
        onActiveNote: () => {
            dispatch({ type: 'CHANGE_ACTIVE_NOTE', changeNote: {} })
        }
    })
)(NotesGroupList);
