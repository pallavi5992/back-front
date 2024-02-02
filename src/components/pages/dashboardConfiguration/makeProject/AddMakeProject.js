import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const AddMakeProject = () => {
  return (
    <div className="updatemakeproject">
      <div className="contentmakeproject">
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
            Make II Project{" "}
          </h4>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <div className="formAddUser" style={{ width: "90%" }}>
            <form className="paddingmastertopmakeproject">
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Year Name:-</b>
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-control "
                      id="exampleFormControlSelect1"
                    >
                      <option selected="" value="0">
                        --Select Year--
                      </option>
                      <option value="1">2016-17</option>
                      <option value="2">2017-18</option>
                      <option value="3">2018-19</option>
                      <option value="4">2019-20</option>
                      <option value="5">2020-21</option>
                      <option value="6">2021-22</option>
                      <option value="7">2022-23</option>
                      <option value="8">2023-24</option>
                      <option value="11">2024-25</option>
                    </select>
                  </div>
             
              </div>
              <br />

              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Month Name:-</b>
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control "
                    id="exampleFormControlSelect1"
                  >
                    <option>--Select sectore--</option>

                    <option value="1">Mar</option>
                    <option value="2">Apr</option>
                    <option value="3">May</option>
                    <option value="4">June</option>
                    <option value="5">July</option>
                    <option value="6">Aug</option>
                    <option value="7">Sep</option>
                    <option value="8">Oct</option>
                    <option value="9">Nov</option>
                    <option value="10">Dec</option>
                    <option value="11">Jan</option>
                    <option value="12">Feb</option>
                    <option value="13">Mar</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b> AIP Accorded(DPP):-</b>{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AIP Dropped(DPP):-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Action"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AIP Accorded(DPSUs):-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Action"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AIP Dropped(DPSUs):-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Action"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-spacingmakeproject"
                >
                  Save
                </button>
                <Link
                  to="/admin/index/makeproject"
                  className="btn btn-primary btn-spacingmakeproject"
                >
                  cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMakeProject;
