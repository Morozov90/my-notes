import React, { Component } from 'react';
import './App.css';


import NotesGroup from "./components/NotesGroup/NotesGroup";
import Notes from "./components/Notes/Notes";
import Note from "./components/Note/Note";
import Header from "./components/Header/Header";
import {connect} from "react-redux";

class App extends Component {
    textpole = React.createRef();
  
  render() {
    
    let groups;
    if (this.props.isOpened){
        groups = <NotesGroup/>
    }
    return (
      <div className="App">
        <Header pole={this.textpole}/>
        <div className="Content">
             { groups }
            <Notes/>
            <Note pole={this.textpole} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isOpened: state.toggle,
  })
)(App);
