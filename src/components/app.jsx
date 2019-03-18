import React, { Component } from 'react';

import SearchBar from './searchbar.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      initialId: "",
    }
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">

        </div>
      </div>
      )
  }
}

export default App;
