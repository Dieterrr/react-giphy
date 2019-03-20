import React, { Component } from 'react';

class Gif extends Component {

  // setSelectedGif = () => {
  //   console.log("clicked");
  //   //this.props.setSelectedGif(this.props.id);
  // }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt="gif" className="gif"/>
      )
  }

}

export default Gif;
