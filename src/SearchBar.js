import React from 'react';

class SearchBar extends React.Component {
render() {
    return (
        <header className="search-bar">
          <h1>React Notes App</h1>
          <input type="text" placeholder="Imagine It" 
          value={this.props.text} 
          onChange = {(e) => {
              this.props.handleChange(e.target.value)
          }} />
        </header>
    );
}

}




export default SearchBar;