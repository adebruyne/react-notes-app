import React, { Component } from "react";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";
import DocumentEditor from "./DocumentEditor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        allNotes={this.state.notes}/>
        <DocumentEditor />
      </div>
    );
  }
}

export default App;
