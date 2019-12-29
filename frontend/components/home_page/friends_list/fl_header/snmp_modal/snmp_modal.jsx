import React from 'react';

class SNMPModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="hidden start-new-message-popup-background">
        <div
          className="start-new-message-popup">
          <div className="snmp-text-box">
            <div className="snmp-text-box-title">SELECT FRIENDS</div>
            <div className="snmp-text-box-text">
              <small>
                You can add 1 more friend (group chat isn't a thing yet).
                  </small>
            </div>
          </div>

          <div className="snmp-input-div">
            <form className="snmp-form-div">
              <input
                className="snmp-input"
                placeholder="Type the username of a friend"></input>
            </form>
          </div>

          <div className="snmp-friend-list">
            friend filter!
              </div>

          <div className="snmp-button-div">
            <div>
              Create <span className='disabled'>Group</span> DM
                </div>
          </div>

        </div>
      </div>
    )
  }
}

export default SNMPModal