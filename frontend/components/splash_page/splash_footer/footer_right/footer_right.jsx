import React from 'react';
import { Link } from "react-router-dom";

class FooterRight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cta-footer-right col-md-5">
        <div>
          <ul>
            <strong>Resources</strong>
            <small>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong>Credits</strong>
            <small>
              <li>
                <a href="https://stackoverflow.com/questions/46676336/spread-out-images-randomly-without-overlapping-inside-container?rq=1" target="_blank">
                  Hover Effect
                </a>
              </li>
              <li>
                <a href="https://fontawesome.com/license" target="_blank">
                  Fontawesome
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/" target="_blank">
                  Discord Assets
                </a>
              </li>
              <li>
                <a href="https://pixabay.com/photos/dog-nose-snout-head-animal-2286773/" target="_blank">
                  Download Pup
                </a>
              </li>

              <li>
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik's Icons</a> 
              </li>
            </small>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default FooterRight