import React from 'react';

class FourOhFour extends React.Component {
  constructor(props) {
    super(props)
    this.headHome = this.headHome.bind(this)
  }

  headHome (e) {
    e.preventDefault()
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="four-oh-four-master">
        <img src={window.lost} />
        <div className="four-oh-four-text noselect">
          It's okay to be lost. Be patient with yourself.
        </div>

        <div 
          onClick={this.headHome}
          className="four-oh-four-head-home">
          Head Back
        </div>
      </div>
    )
  }
}

export default FourOhFour