import React from "react";

class DocumentList extends React.Component {
  render() {
    let items = this.props.allNotes.map(note => {
      return <li className="document-list-item">{note.title}</li>;
    });

    return (
      <div className="document-list">
        <ul>{items}</ul>
      </div>
    );
  }
}

export default DocumentList;
