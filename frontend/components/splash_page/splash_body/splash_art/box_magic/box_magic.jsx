import React from 'react';

class BoxMagic extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const boxes = document.getElementsByClassName('box');
    reposition(boxes, 0, 0);
  }

  render() {
    return (
      <div className="boxes-master">

        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashX} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashTriangle} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashDot} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashSquare} /></div>
        </div>


        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashX} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashTriangle} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashCircle} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashSquare} /></div>
        </div>


        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashX} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashDot} /></div>
        </div>
        <div className="boxes">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashCircle} /></div>
        </div>

        <div className="boxes sixth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashSquare} /></div>
        </div>
        <div className="boxes fifth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashX} /></div>
        </div>
        <div className="boxes fifth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashTriangle} /></div>
        </div>
        <div className="boxes fifth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashDot} /></div>
        </div>

        <div className="boxes fourth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashSquare} /></div>
        </div>
        <div className="boxes fourth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashX} /></div>
        </div>
        <div className="boxes fourth-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashTriangle} /></div>
        </div>

        <div className="boxes third-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashCircle} /></div>
        </div>
        <div className="boxes third-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashDot} /></div>
        </div>
        <div className="boxes third-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashX} /></div>
        </div>

        <div className="boxes second-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashTriangle} /></div>
        </div>
        <div className="boxes second-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashCircle} /></div>
        </div>
        <div className="boxes second-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashSquare} /></div>
        </div>


        <div className="boxes first-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashDot} /></div>
        </div>
        <div className="boxes first-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashTriangle} /></div>
        </div>
        <div className="boxes first-boxes-hidden">
          <div className="box"><img className="splash-shape-sizer marginify" src={window.splashCircle} /></div>
        </div>

      </div>
    )
  }
}

export default BoxMagic