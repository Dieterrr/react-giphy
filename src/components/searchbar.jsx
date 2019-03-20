import React, { Component } from 'react';

class SearchBar extends Component {
  onChange = (event) => {
    console.log(event.target.value);
  }

  render() {
      return (
        <div>
          <input type="text" className="form-search" onChange={this.onChange}/>
        </div>
    )
  }
}

export default SearchBar;
