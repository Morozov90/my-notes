import React, {Component} from 'react';
import './Note.css';
import {connect} from "react-redux";

class Note extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    
    render () {
        return (
            <div className="Note">
                {this.props.acNote.noteName}
            </div>
        );
    }
}

export default connect(
    state => ({
        acNote: state.changeNote
    }),
    dispatch => ({
    
    })
)(Note);