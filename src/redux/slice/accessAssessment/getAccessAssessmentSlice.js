import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const getAccessAssessmentAction = createAsyncThunk(
  "getAccessAssessment",
  async ({ token, id }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/access-assignment/get-access-assessment-user?userId=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${token ? token : ""}`,
          },
        }
      );

      const processedData = await response.json();
      if (response.status === 401) {
        removeUserSession();
        window.location.href="/admin/index/login"
        return rejectWithValue(processedData);
      } else if (response.status === 200) {
        return fulfillWithValue(processedData);
      } else {
        return rejectWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getAccessAssessmentSlice = createSlice({
  name: "getAccessAssessment",
  initialState: {
    accessData: {},
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccessAssessmentAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAccessAssessmentAction.fulfilled, (state, { payload }) => {
        state.accessData = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(getAccessAssessmentAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload?.message, "error");
      });
  },
});

export default getAccessAssessmentSlice.reducer;
