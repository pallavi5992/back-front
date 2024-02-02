import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify,setUserSession } from "../../../utils/util";

export const forgotPasswordAction = createAsyncThunk(
  "forgotPassword",
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/forgotPassword`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const processedData = await response.json();

      if (response.status === 200) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    user: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // signIn Request Handling
    builder
      .addCase(forgotPasswordAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(forgotPasswordAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        notify(payload.message, "success");
      })
      .addCase(forgotPasswordAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload.message;
        state.success = false;
        notify(payload.message, "error");
      });
  },
});

export default forgotPasswordSlice.reducer;