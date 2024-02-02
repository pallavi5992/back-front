import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const getConfigByModuleIdAction = createAsyncThunk(
  "getConfigByModuleId",
  async ( {token,moduleId} , { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/module-config/get-module-config-By-module-id?moduleId=${moduleId}`,
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

const getConfigByModuleIdSlice = createSlice({
  name: "getConfigByModuleId",
  initialState: {
    getConfigByModuleId: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConfigByModuleIdAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getConfigByModuleIdAction.fulfilled, (state, { payload }) => {
        state.getConfigByModuleId = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(getConfigByModuleIdAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload?.message, "error");
      });
  },
});

export default getConfigByModuleIdSlice.reducer;
