import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authUser: null,
  otherUsers: null,
  selectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("RESET_STATE", () => initialState);
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser } =
  userSlice.actions;
export default userSlice.reducer;
