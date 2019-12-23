import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.randomLoadingLine = this.randomLoadingLine.bind(this)
  }

  randomLoadingLine () {
    const loadingLines = [
      "Wobbling to 99%",
      "DISCORD REQUIRES MORE PYLONS",
      "Traveling to Eichenwalde",
      "Shuffling the deck 7 times, because that's statistically... nevermind",
      "Now with 107% more percentages!",
      "Look to your left",
      "If you can't read this, how do you know what I'm saying?",
      "And now for something entirely the same"
    ]

    var item = loadingLines[Math.floor(Math.random() * loadingLines.length)];
    return item
  }

  render() {
    return <div className="loading-master">
      <div>
        <div className="loading-blob">
          <img
            className="loader-logo shadowed"
            src={window.logoImageUrl}>
          </img>
        </div>
        <div className="loading-text">
          {this.randomLoadingLine()}
        </div>
      </div>
    </div>
  }
}

export default Loader