import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify,removeUserSession } from "../../../utils/util";


export const updateUserByTokenAction = createAsyncThunk(
  "upadateUserByToken",
  async ({token,values}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/update-user-by-token`,
        {
          method: "PATCH",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${token}`,
          },
        }
      );

      const processedData = await response.json();

      if (response.status === 401) {
        window.location.href="/admin/index/login"
        removeUserSession();
        return rejectWithValue(processedData);
      }
       else if (response.status === 200) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const upadateUserByTokenSlice = createSlice({
  name: "upadateUserByToken",
  initialState: {
    user: null,
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserByTokenAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(updateUserByTokenAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        notify(payload.message,"success");
      })
      .addCase(updateUserByTokenAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload.message;
        state.success = false;
        notify(payload.message, "error");
      });
  },
});

export default upadateUserByTokenSlice.reducer;