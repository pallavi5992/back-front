import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AddMrgsIPR = () => {
  return (
    <div className="missioncontainer" style={{height:"80vh"}}>
      <div className="containermrgs">
        <div className="mainMRGS">
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
              MRGS IPR Target
            </h4>
          </div>  
          <div className="">
            <div
              className=""
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="formAddUser" style={{ width: "90%" }}>
                <form className="paddingmastertopmakeproject2dap1">
                  <div className="form-group row">
                    <label
                      for="staticEmail"
                      className="col-sm-2 col-form-label"
                    >
                      <b>Select Year:-</b>
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
                    {/* <span id="TxtDateYearID" ></span> */}
                  </div>
                  <br />

                  <div className="form-group row">
                    <label
                      for="staticEmail"
                      className="col-sm-2 col-form-label"
                    >
                      <b>Select Organization:-</b>
                    </label>
                    <div className="col-sm-10">
                      <select
                        className="form-control "
                        id="exampleFormControlSelect1"
                      >
                    <option >--Select Organization--</option>
                    <option >7 New OF Companies*</option>
                    <option>BEL</option>
                    <option >GRSE</option>
                    <option >GSL</option>
                    <option >MDL</option>
                    <option >BEML</option>
                    <option >MDNL</option>
                    <option>BDL</option>
                    <option >HAL</option>
                    <option >HSL</option>
                    <option>MKU</option>
                    <option>PTC</option>
                    <option >AIDAT </option>
                    <option >Bharat Forge</option>
                    <option >Alpha Design Technologies</option>
                    <option >TVS Defence</option>
                    <option >Data Patterns</option>
                    <option >Aerospace Engineers Pvt Ltd</option>
                    <option >MIDHANI</option>
                    <option >aero</option>
                    <option >AVNL</option>
                    <option >MIL</option>
                    <option >IOL</option>
                    <option >AWEIL</option>
                    <option >YIL</option>
                    <option >TCL</option>
                    <option >GIL</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label
                      for="staticEmail"
                      className="col-sm-2 col-form-label"
                    >
                      <b>IPR Target:-</b>
                    </label>
                    <div className="col-sm-10">
                      <input
                        name="As_On_Date"
                        type="text"
                        className="form-control"
                        placeholder="IPR Target"
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
                      to="/admin/index/missionrakshagyanshakti"
                      className="btn btn-primary btn-spacingmakeproject"
                    >
                      cancel
                    </Link>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMrgsIPR;
