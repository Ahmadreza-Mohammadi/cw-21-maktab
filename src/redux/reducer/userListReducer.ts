import { createSlice } from "@reduxjs/toolkit";
import { getUsersList } from "../actions/UserActions";

interface IusersState {
  loading: boolean;
  error: boolean;
  data: [];
}

const init: IusersState = { loading: false, error: false, data: [] };

const usersListReducer = createSlice({
  name: "userList",
  initialState: init,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      })
      .addCase(getUsersList.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default usersListReducer.reducer;
