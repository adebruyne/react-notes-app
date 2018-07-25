import React, { Component } from "react";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";
import DocumentEditor from "./DocumentEditor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: -1, //-1 means no selection
      notes: [
        {
          id: 1001,
          timestamp: new Date(),
          title: "How to Hikertrash",
          content: "Being a dirtbag begins with less showers..."
        },
        {
          id: 1002,
          timestamp: new Date(),
          title: "How to Techish",
          content: "Being a techie begins with more drinking..."
        }
      ]
    };
  }

  render() {
    return (
      <div className="notes-app">
        <SearchBar />
        <DocumentList 
        allNotes={this.state.notes} 
        handleSelection={this._selectNote} //
        />
        <DocumentEditor 
        note={this._getSelectedNote()} //this searches for the actual note object as the result
        />
      </div>
    );
  }


_updateNote = (noteContent) => {
  //grab exisiting note
  let theNote = this._getSelectedNote();
  //make a copy
    //update the copy

  // Version #1: Object.assign
  // let updatedNote = Object.assign({}, theNote);
  // updatedNote.content = noteContent;

  //Version #2: sprinkles aka "Object spread"
  let updatedNote = {
    ...theNote,
    content: noteContent
  }
 
  let notesArrayWithUpdatedNote = [
    ...this._allNotesExceptSelectedNote(),
    updatedNote
  ]
  //set the state
}

_allNotesExceptSelectedNote = ()=>{
  let notesWithoutSelectedNotes = this.state.notes.filter(note => note.id 
  !== this.state.selectedId);
  return notesWithoutSelectedNotes;
}

_getSelectedNote = () => {
  let theNote = this.state.notes.find(note => note.id === this.state.selectedId);
  if (!theNote){
    theNote = this.state.notes[0]
  }
  return theNote;
}


  _selectNote = (noteId) => {
    console.log(noteId);
    //I want to save the id of the selected note
    this.setState({
      selectedId: noteId
    });
  }
}

export default App;
