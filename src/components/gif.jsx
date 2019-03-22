import React, { Component } from 'react';

class Gif extends Component {

  setSelectedGif = () => {
    this.props.setSelectedGif(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt="gif" className="gif" onClick={() => this.props.selectGif(this.props.id)}/>
      )
  }

}

export default Gif;
