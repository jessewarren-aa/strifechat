import * as ChannelAPIUtils from '../utils/channel_utils'

export const GET_CHANNEL = "GET_CHANNEL";
export const GET_CHANNELS = "GET_CHANNELS";

export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const UPDATE_CHANNEL = "UPDATE_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";

const getChannel = (channel) => ({
  type: GET_CHANNEL,
  channel
})

const getChannels = (channels) => ({
  type: GET_CHANNELS,
  channels
})

const createChannel = (channel) => {
  return {
    type: CREATE_CHANNEL,
    channel
  }
}

const updateChannel = (channel) => ({
  type: UPDATE_CHANNEL,
  channel
})

const deleteChannel = (channelId) => ({
  type: DELETE_CHANNEL,
  channelId
})

export const sendGetChannel = (channel) => dispatch => ChannelAPIUtils.getChannel(channel)
  .then(
    channel => dispatch(getChannel(channel)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )

export const sendGetChannels = () => dispatch => {
  ChannelAPIUtils.getChannels()
    .then(
      channels => dispatch(getChannels(channels)),
      // errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const sendCreateChannel = (channel) => dispatch => ChannelAPIUtils.postChannel(channel)
  .then(
    channel => dispatch(createChannel(channel))
  )

export const sendUpdateChannel = (channel) => dispatch => ChannelAPIUtils.patchChannel(channel)
  .then(
    channel => dispatch(updateChannel(channel))
  )

export const sendDeleteChannel = (channelId) => dispatch => ChannelAPIUtils.deleteChannel(channelId)
  .then(
    channelId => dispatch(deleteChannel(channelId))
  )