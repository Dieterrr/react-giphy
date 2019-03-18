import React, { Component } from 'react';

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
        <div className="left-scene">lala left</div>
        <div className="right-scene">lala right</div>
      </div>
      )
  }
}

export default App;
