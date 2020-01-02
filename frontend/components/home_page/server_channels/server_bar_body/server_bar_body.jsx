import React from 'react';
import {Redirect} from 'react-router'

class ServerBarBody extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
  }

  
  handleSelect (e) {
    e.preventDefault()

    const removeFrom = $(".sbb-channel-selected")
    if (removeFrom) {
      removeFrom.removeClass("sbb-channel-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("sbb-channel-selected")

    const path = jObject.attr('value')
    this.props.history.push(`/channels/${this.props.match.params[0].split("/")[0]}/${path}`)
  }

  showChannelOptions (e) {
    e.preventDefault()
    e.stopPropagation()

    $('.update-channel-modal-background').removeClass('hidden')
    $('.server-preferences-wrapper').addClass('hidden')
    $('.invisible-preferences-wrapper').addClass('hidden')
  }

  render() {
    const params = this.props.match.params[0].split('/')
    if (params[1] == "") {
      params.splice(1, 1)
    }
    if (params.length < 2 && Object.values(this.props.channels).length > 0) {
      const path = Object.values(this.props.channels)[0].unique_id
      return <Redirect to={`/channels/${params[0]}/${path}`} />
    }

    return (
      <div className="server-conversation-bar-body-master">

        {Object.values(this.props.channels).map((channel, index) => {
          return (
            <div
              id={channel.unique_id}
              key={index}
              value={channel.unique_id}
              onClick={this.handleSelect}
              className={params[1] === channel.unique_id ? "sbb-channel noselect sbb-channel-selected" : "sbb-channel noselect"}>
                # {channel.name}
                <img 
                  onClick={this.showChannelOptions}
                  className="sbb-channel-options-button" 
                  src="/assets/options.svg" />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ServerBarBody
