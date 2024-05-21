import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
}

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("RESET_STATE", () => initialState);
  },
});

export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
