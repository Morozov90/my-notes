import React, {Component} from 'react';
import './Header.css';
import {connect} from "react-redux";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { };
        this.showGroups = this.showGroups.bind(this);
    }
    
    showGroups(e){
        e.preventDefault();
        this.props.onShowGroups(!this.props.isOpened);
    }
    
    render () {
        console.log(this.props.isOpened);
        return (
            <div className="Header">
                <button onClick={this.showGroups}>Закрыть боковое меню</button>
                
            </div>
        );
    }
}

export default connect(
    state => ({
        isOpened: state.toggle,
    }),
    dispatch => ({
        onShowGroups: (open) => {
            dispatch({ type: 'CHANGE_STATE', changeState: open })
        }
    })
)(Header);
