import React, { Component } from 'react';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './giflist.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: ["Axfqx1ssvUcM0", "NM25giLBTobx6"],
      initialId: "Axfqx1ssvUcM0",
    }
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.initialId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
      )
  }
}

export default App;
