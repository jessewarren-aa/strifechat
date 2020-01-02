import React from 'react';

import ServerJoinContainer from './server_join/server_join_container'
import ServerCreateContainer from './server_create/server_create_container'

class ServerPlus extends React.Component {
  constructor(props) {
    super(props)

    this.preventBubbling = this.preventBubbling.bind(this)
    this.modalHide = this.modalHide.bind(this)
    this.slideInJoinForm = this.slideInJoinForm.bind(this)
    this.slideOutJoinForm = this.slideOutJoinForm.bind(this)
    this.slideInCreateForm = this.slideInCreateForm.bind(this)
    this.slideOutCreateForm = this.slideOutCreateForm.bind(this)

    this.handleInput = this.handleInput.bind(this)
    // [DEV] remember to clear the input between forms
  }
  
  handleInput(type) {
    return (e) => {
      e.preventDefault()
      e.stopPropagation()

      this.setState({ [type]: e.target.value });

      let search = this.state[type]
      if (search.length <= e.target.value.length) {
        search = search + e.target.value[e.target.value.length - 1]
      } else {
        search = e.target.value
      }

      this.setState({ [type]: search });
    };
  }

  componentDidUpdate () {
    this.modalHide(false) 
  }

  modalHide (slideHide=true) {
    
    if (slideHide) {
      $('#primary-modal-server-options').show("slide", { direction: "right" }, 0);
    }

    $('#slideable-join-form').addClass("hidden");
    $('#slideable-create-form').addClass("hidden");

    $('#slideable-join-form').removeClass("animated bounceIn");
    $('#slideable-create-form').removeClass("animated bounceIn");

    const jServerOptionsModal = $('.server-options-modal-background')
    jServerOptionsModal.addClass('hidden')

    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }

    const jObject = $(`#${this.props.match.params[0].split("/")[0].replace("@", "")}`)
    jObject.addClass("server-selected")
  }

  slideInJoinForm (e) {
    e.preventDefault()
    $('#primary-modal-server-options').hide("slide", {direction: "left"}, 500);
    setTimeout(() => {
      $('#slideable-join-form').removeClass("hidden");
      $('#slideable-join-form').addClass("animated bounceIn");
    }, 500)
  }

  slideOutJoinForm(e) {
    e.preventDefault()
    $('#slideable-join-form').addClass("hidden");
    $('#slideable-join-form').removeClass('animated bounceIn')
    $('#primary-modal-server-options').show("slide", {direction: "left"}, 500);
  }

  slideInCreateForm(e) {
    e.preventDefault()
    $('#primary-modal-server-options').hide("slide", {direction: "left"}, 500);
    setTimeout(() => {
      $('#slideable-create-form').removeClass("hidden");
      $('#slideable-create-form').addClass("animated bounceIn");
    }, 500)
  }

  slideOutCreateForm(e) {
    e.preventDefault()
    $('#slideable-create-form').addClass("hidden");
    $('#slideable-create-form').removeClass('animated bounceIn')
    $('#primary-modal-server-options').show("slide", {direction: "left"}, 500);
  }

  preventBubbling(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    return (
      <div
        onClick={this.modalHide}
        className="server-options-modal-background hidden">
        <div
          onClick={this.preventBubbling}
          id="primary-modal-server-options"
          className="server-options-modal">
          <div className="server-options-title">REALLY? ANOTHER SERVER?</div>
          <div className="server-options-control">
            <div 
              onClick={this.slideInCreateForm}
              className="server-options-create">
              <div className="so-title blue-font">
                CREATE
              </div>
              <div className="so-text text-center">
                <small>
                  Create a new server and invite your friends! It's free™!
                </small>
              </div>
              <div className="so-create-icon">
                <img src={window.create} />
              </div>
              <div 
                className="so-create-button">
                Create a server
              </div>
            </div>
            <div 
              onClick={this.slideInJoinForm}
              className="server-options-join">
              <div className="so-title green-font">
                JOIN
              </div>
              <div className="so-text text-center">
                <small>
                  Enter an invite code and join your enemy's server!
              </small>
              </div>
              <div className="so-join-icon">
                <img src={window.join} />
              </div>
              <div 
                className="so-join-button">
                Join a server
              </div>
            </div>
          </div>
        </div>

        <ServerJoinContainer {...this.props} 
          slideOutJoinForm={this.slideOutJoinForm}
          modalHide={this.modalHide}
          preventBubbling={this.preventBubbling} />

        <ServerCreateContainer {...this.props} 
          slideOutCreateForm={this.slideOutCreateForm}
          modalHide={this.modalHide}
          preventBubbling={this.preventBubbling} />
      </div>
    )
  }
}

export default ServerPlus