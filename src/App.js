import React, { Component } from "react";
import SearchBar from "./SearchBar";
import DocumentList from "./DocumentList";
import DocumentEditor from "./DocumentEditor";

class App extends Component {
  render() {
    return (
      <div className="notes-app">
        <SearchBar />
        <DocumentList />
        <DocumentEditor />
        </div>
      
    );
  }
}

export default App;
