import React, { Component } from "react";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";
import DocumentEditor from "./DocumentEditor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText:'',
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
        <SearchBar 
        text={this.state.searchText}
        handleChange={this._updateSearchText}/>
        <DocumentList
          allNotes={this._getFilteredNotes()}
          handleSelection={this._selectNote} //
        />
        <DocumentEditor
          note={this._getSelectedNote()}
          handleChange={this._updateNote} //this searches for the actual note object as the result
        />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      selectedId: this.state.notes[0].id
    });
  }

  _updateSearchText = (newSearchText) => {
      this.setState({
        searchText: newSearchText
      })
  }

  _updateNote = noteContent => {
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
    };

    //put the copy of the note in a copt of the array
    //Version #1
    //let notesArrayWithUpdatedNote = this.state.notes.map(note => {
    //   if(note.id === this.state.selectedId ) {
    //     return updatedNote;
    //   } else {
    //     return note;
    //   }
    // });

    //Version #2

    let notesArrayWithUpdatedNote = [
      ...this._allNotesExceptSelectedNote(),
      updatedNote
    ];
    //set the state
    this.setState({
      notes: notesArrayWithUpdatedNote
    });
  };

  _allNotesExceptSelectedNote = () => {
    let selectedId = this.state.selectedId;
    if (selectedId === -1) {
      selectedId = this.state.notes[0].id;
    }
    let notesWithoutSelectedNotes = this.state.notes.filter(
      note => note.id !== this.state.selectedId
    );
    return notesWithoutSelectedNotes;
  };

  _getFilteredNotes = () => {
    //is there any searchText?
    if(this.state.searchText !== '') {
      //If so, filter the notes
      let filteredNotes = this.state.notes.filter(note => {
        let doesTitleMatch = note.title.includes(this.state.searchText.toLowerCase());

        let doesContentMatch = note.content.toLowerCase().includes(this.state.searchText.toLowerCase());
        return doesTitleMatch || doesContentMatch;
      })
      return filteredNotes;
    } else {
      //it not, return all the notes
      return this.state.notes;
    }
    
    
  }


  _getSelectedNote = () => {
    let theNote = this.state.notes.find(
      note => note.id === this.state.selectedId
    );
    if (!theNote) {
      theNote = this.state.notes[0];
    }
    return theNote;
  };

  _selectNote = noteId => {
    console.log(noteId);
    //I want to save the id of the selected note
    this.setState({
      selectedId: noteId
    });
  };
}

export default App;
