import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "channel",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannel: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannel } = chatSlice.actions;
export const selectChannelId = (state) => state.channel.channelId;
export const selectChannelName = (state) => state.channel.channelName;

export default chatSlice.reducer;
