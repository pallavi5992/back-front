import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const getAllModuleAction = createAsyncThunk(
  "getAllModule",
  async ( token , { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/module/get-all-module`,
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

const getAllModuleSlice = createSlice({
  name: "getAllModule",
  initialState: {
     allModule: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllModuleAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAllModuleAction.fulfilled, (state, { payload }) => {
        state.allModule = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(getAllModuleAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload?.message, "error");
      });
  },
});

export default getAllModuleSlice.reducer;
