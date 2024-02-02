import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify } from "../../../utils/util";

export const resetPasswordAction = createAsyncThunk(
  "resetPassword",
  async ({values,token}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/resetPasswordRequest/${token}`,
        {
          method: "PATCH",
          body: JSON.stringify(values),
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

const resetPasswordSlice = createSlice({
  name: "resetPassword",
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
      .addCase(resetPasswordAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(resetPasswordAction.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        notify(payload.message, "success");
      })
      .addCase(resetPasswordAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload.message;
        state.success = false;
        notify(payload.message, "error");
      });
  },
});

export default resetPasswordSlice.reducer;