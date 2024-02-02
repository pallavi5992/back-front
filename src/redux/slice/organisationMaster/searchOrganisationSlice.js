import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const searchOrganisationAction = createAsyncThunk(
  "searchOrganisation",
  async (
    { token,key},
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/organisation/Search-organisation/${key}`,
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

const searchOrganisationSlice = createSlice({
  name: "searchOrganisation",
  initialState: {
    serachOrag: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchOrganisationAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(searchOrganisationAction.fulfilled, (state, { payload }) => {
        state.serachOrag = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(searchOrganisationAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload.message, "error");
      });
  },
});

export default searchOrganisationSlice.reducer;

