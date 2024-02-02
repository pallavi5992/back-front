import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify,removeUserSession } from "../../../utils/util";


export const addModuleConfigAction = createAsyncThunk(
  "addModuleConfig",
  async ({token,values}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/module-config/add-module-config`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${token}`,
          },
        }
      );

      const processedData = await response.json();

      if (response.status === 401) {
        removeUserSession();
        window.location.href="/admin/index/login"
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

const addModuleConfigSlice = createSlice({
  name: "addModuleConfig",
  initialState: {
    addModuleConfig: null,
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // signIn Request Handling
    builder
      .addCase(addModuleConfigAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(addModuleConfigAction.fulfilled, (state, { payload }) => {
        state.addModuleConfig = payload;
        state.loading = false;
        state.success = true;
        state.error = false;
        notify(payload.message,"success");
      })
      .addCase(addModuleConfigAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.message = payload.message;
        state.success = false;
        // notify(payload.message, "error");
      });
  },
});

export default addModuleConfigSlice.reducer;