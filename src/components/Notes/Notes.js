import React, {Component} from 'react';
import './Notes.css';
import NotesList from "./NotesList";
import {connect} from "react-redux";

class Notes extends Component {
    constructor(props){
        super(props);
    }
    
    render () {
        let body;
        if(this.props.activeGroup  !== '') {
            body = <div>
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
    
    })
)(Notes);
