import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    beatPadActive: false,
    purpleBeatPad: false,
  }

  toggleBeatPad = () => {
    this.setState(prevState => {
      return {
        beatPadActive: !prevState.beatPadActive
      }
    });
  }

  togglePurplePad = () => {
    this.setState(prevState => {
      return {
        purpleBeatPad: !prevState.purpleBeatPad
      }
    });
  }

  render() {
    const { beatPadActive, purpleBeatPad } = this.state;

    return (
      <div className="container">
        <div className="pad-buttons">
          <button
            type="button"
            className="pad-button"
            onClick={this.toggleBeatPad}
          >Toggle beat pad</button>
          <button
            type="button"
            className="pad-button"
            onClick={this.togglePurplePad}
          >Purple beat pad</button>
        </div>
        <div className={`beat-app ${beatPadActive && 'black-beat-pad'}`}>
          <div id={`${purpleBeatPad && 'purple-beat-pad'}`}></div>
          <div id={`${purpleBeatPad && 'purple-beat-pad'}`}></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
