import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AddDefenceProduction = () => {
  return (
    <div className="updatemakeproject">
      <div className="contentmakeprojectdefence">
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
            Defence Production
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
                  <b>Quarter:-</b>
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control "
                    id="exampleFormControlSelect1"
                  >
                    <option>--Select Quarter--</option>
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b> DPSU:-</b>{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="DPSU"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>7 New OF Companies*:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    placeholder="Enter the Number"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Other PSU:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="PSU"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Defence Private Company:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Defence Private Company"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>As on Date:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    placeholder="Enter the Action"
                    className="form-control"
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
                  to="/admin/index/defenceproduction"
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

export default AddDefenceProduction;
