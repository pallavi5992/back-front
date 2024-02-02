import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const getOrganisationSectorIdAction = createAsyncThunk(
  "getOrgBySectorId",
  async ({ token,pageNumber,dataLimit, sectorId }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/organisation/get-organisation-by-sector-id?sectorId=${sectorId}&page=${pageNumber}&limit=${dataLimit}`,
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

const getOrganisationSectorIdSlice = createSlice({
  name: "getOrgBySectorId",
  initialState: {
    getOrgBySectorId: [],
    loading: false,
    error: "",
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrganisationSectorIdAction.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getOrganisationSectorIdAction.fulfilled, (state, { payload }) => {
        state.getOrgBySectorId = payload.data;
        state.loading = false;
        state.success = true;
      })
      .addCase(getOrganisationSectorIdAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
        // notify(payload?.message, "error");
      });
  },
});

export default getOrganisationSectorIdSlice.reducer;
