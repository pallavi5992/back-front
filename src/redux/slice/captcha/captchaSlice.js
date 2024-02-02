import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const captchaAction = createAsyncThunk(
  "captcha",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/captcha`,
        {
          method: "GET",
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

const captchaSlice = createSlice({
  name: "capcha",
  initialState: {
    captcha: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(captchaAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(captchaAction.fulfilled, (state, { payload }) => {
        state.captcha = payload;
        state.loading = false;
        state.success = true;
        state.error = false;
      })
      .addCase(captchaAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        
      });
  },
});

export default captchaSlice.reducer;
