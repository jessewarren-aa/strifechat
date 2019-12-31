import React from 'react';


class ServerPlus extends React.Component {
  constructor(props) {
    super(props)

    this.preventBubbling = this.preventBubbling.bind(this)
    this.modalHide = this.modalHide.bind(this)
    this.slideInJoinForm = this.slideInJoinForm.bind(this)
    this.slideOutJoinForm = this.slideOutJoinForm.bind(this)
    this.slideInCreateForm = this.slideInCreateForm.bind(this)
    this.slideOutCreateForm = this.slideOutCreateForm.bind(this)

    this.state = {

    }
    // [DEV] remember to clear the input between forms
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

    const jObject = $(`#${this.props.match.params[0].replace("@", "")}`)
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
            <div className="server-options-create">
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
                className="so-create-button" 
                onClick={this.slideInCreateForm}>
                Create a server
              </div>
            </div>
            <div className="server-options-join">
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
                className="so-join-button" 
                onClick={this.slideInJoinForm}>
                Join a server
              </div>
            </div>
          </div>
        </div>

        <div 
          id="slideable-join-form"
          onClick={this.preventBubbling}
          className="server-options-modal hidden">
          <div className="sjf-center">
            <div className="sjf-header">
              JOIN A SERVER
            </div>

            <div className="text-center sjf-info">
              Enter an invite below to join an existing server.
              The invite will look something like these:
            </div>

            <div className="sjf-example-invites">
              <div className="text-center">
                https://strifechat.gg/sqTTJj7rhrpKqL5hjJkFSMg
              </div>
              <div className="text-center">
                sqTTJj7rhrpKqL5hjJkFSMg
              </div>
            </div>

            <div className="sjf-form-div">
              <form className="sjf-form">
                <input className="sjf-input"></input>
              </form>
            </div>
          </div>
          <div className="sjf-footer">
            <div 
              onClick={this.slideOutJoinForm}>
              <img className="sjf-back-button" src="/assets/back.svg" />
            </div>
            <div className="sjf-join-button">
              Join
            </div>
          </div>
        </div>

        <div
          id="slideable-create-form"
          onClick={this.preventBubbling}
          className="server-options-modal hidden">
          <div className="sjf-center">
            <div className="scf-header">
              CREATE A SERVER
            </div>

            <div className="text-center sjf-info">
              By creating a server, you will have access to <strong>free</strong> text chat to use amongst your friends.
            </div>

            <div className="scf-title">
              <small>SERVER NAME</small>
            </div>

            <div className="scf-form-div">
              <form className="sjf-form">
                <input className="sjf-input"></input>
              </form>
            </div>
          </div>
          <div className="scf-footer">
            <div
              onClick={this.slideOutCreateForm}>
              <img className="sjf-back-button" src="/assets/back.svg" />
            </div>
            <div className="scf-create-button">
              Create
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerPlus