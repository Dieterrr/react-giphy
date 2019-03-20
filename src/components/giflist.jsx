import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  render() {
      console.log(this.props.gifs)
    return (
      <div className="gif-list">
        {this.props.gifs.map( gif => {
          console.log(gif);
          return <Gif id={gif} key={gif}/>
        })}
      </div>
    )
  }
}

export default GifList
