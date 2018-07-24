import React from "react";

class DocumentEditor extends React.Component {
  render() {
   

   
   
    return (
      <div className="document-editor">
        <textarea value="This is a note. " />
      </div>
    );
  }
}




// A function component is like a "render-only" component. It cant have state. It doesnt have a lifecylce methods like constructor or componentDidMount. Does not use "this".
// const DocumentEditor = props => {
//   return (
//     <div className="document-editor">
//       <textarea value="This is a note. " />
//     </div>
//   );
// };

export default DocumentEditor;
