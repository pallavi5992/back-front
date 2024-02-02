import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "./../../../utils/util";

export const logoutAction = createAsyncThunk(
  "logout",
  async (token, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${token?token:""}`,
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

const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  extraReducers: (builder) => {
    // logout Request Handling
    builder
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(logoutAction.fulfilled, (state, { payload }) => {
        state.success = true;
        state.loading = false;
        removeUserSession();
        notify(payload.message,"success");
      })
      .addCase(logoutAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        notify(payload.message, "error");
      });
  },
});

export default logoutSlice.reducer;
