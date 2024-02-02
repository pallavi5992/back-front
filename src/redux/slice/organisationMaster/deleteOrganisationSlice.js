import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notify, removeUserSession } from "../../../utils/util";

export const deleteOrganisationAction = createAsyncThunk(
  "deleteUser",
  async ({ token, id }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/organisation/delete-organisation/${id}`,
        {
          method: "DELETE",
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
      } else if (response.status !== 200) {
        return rejectWithValue(processedData);
      } else if (response.status === 200) {
        return fulfillWithValue(processedData);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteOrganisationSlice = createSlice({
    name: "deleteOrganisation",
    initialState: {
      organisation: {},
      loading: false,
      error: "",
      message: "",
      success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      // signIn Request Handling
      builder
        .addCase(deleteOrganisationAction.pending, (state) => {
          state.loading = true;
          state.error = false;
          state.success = false;
        })
        .addCase(deleteOrganisationAction.fulfilled, (state, { payload }) => {
          state.organisation = payload;
          state.loading = false;
          state.success = true;
          state.error = false;       
          notify(payload.message,"warn");
        })
        .addCase(deleteOrganisationAction.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = true;
          state.message = payload.message;
          state.success = false;
          notify(payload.message, "error"); 
        });
    },
  });


export default deleteOrganisationSlice.reducer;
