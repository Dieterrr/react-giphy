import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './giflist.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [{id: "Axfqx1ssvUcM0"}, {id: "NM25giLBTobx6"}],
      selectedGifId: "Axfqx1ssvUcM0",
    }
  }

  search = (query) => {
    giphy('EZYnHmptvs6Yxzk8bR92hQJi7BMYQdJY').search({
    q: query,
    rating: 'g',
    limit: 10
  }, (error, result) => {
    this.setState({
      gifs: result.data
    });
  });
  }

  setSelectedGif = (id) => {
    this.setState({
      selectedGifId: id,
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.setSelectedGif}/>
        </div>
      </div>
      )
  }
}

export default App;
