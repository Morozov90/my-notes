import React, { Component } from 'react';
import './App.css';


import NotesGroup from "./components/NotesGroup/NotesGroup";
import Notes from "./components/Notes/Notes";
import Note from "./components/Note/Note";
import Header from "./components/Header/Header";
import {connect} from "react-redux";

class App extends Component {
  
  render() {
    let groups;
    if (this.props.isOpened){
        groups = <NotesGroup/>
    }
    return (
      <div className="App">
        <Header/>
        <div className="Content">
             { groups }
            <Notes/>
            <Note/>
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

