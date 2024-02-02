import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const getAllUserAction = createAsyncThunk(
  "getAllUser",
  async (
    { token, pageNumber, dataLimit },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/get-all-user?limit=${dataLimit}&page=${pageNumber}`,
        {
          method: "GET",
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

const getAllUserSlice = createSlice({
  name: "getAllUser",
  initialState: {
    users: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAllUserAction.fulfilled, (state, { payload }) => {
        state.users = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(getAllUserAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload.message, "error");
      });
  },
});

export default getAllUserSlice.reducer;
