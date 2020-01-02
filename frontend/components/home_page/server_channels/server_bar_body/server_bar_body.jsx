import React from 'react';

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

  render() {
    return (
      <div className="server-conversation-bar-body-master">

        {Object.values(this.props.channels).map((channel, index) => {
          return (
            <div
              id={channel.unique_id}
              key={index}
              value={channel.unique_id}
              onClick={this.handleSelect}
              className={index === 0 ? "sbb-channel noselect sbb-channel-selected" : "sbb-channel noselect"}>
                # {channel.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ServerBarBody
