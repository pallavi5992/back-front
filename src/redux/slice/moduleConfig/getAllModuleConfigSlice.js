import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const getAllModuleConfigAction = createAsyncThunk(
  "getAllModuleConfig",
  async (token,{ fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/module-config/get-all-module-config`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${token||""}`,
          },
        }
      );

      const processedData = await response.json();

      if (response.status === 401) {
        window.location.href="/admin/index/login"
        removeUserSession();
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

const getAllModuleConfigSlice = createSlice({
  name: "getAllModuleConfig",
  initialState: {
    getAllModuleConfig: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllModuleConfigAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAllModuleConfigAction.fulfilled, (state, { payload }) => {
        state.getAllModuleConfig = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(getAllModuleConfigAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload.message, "error");
      });
  },
});

export default getAllModuleConfigSlice.reducer;
