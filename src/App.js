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
        handleSelection={this._selectNote}
        />
        <DocumentEditor 
        note={this._getSelectedNote()} 
        />
      </div>
    );
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
