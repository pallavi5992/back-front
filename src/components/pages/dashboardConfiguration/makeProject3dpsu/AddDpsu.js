import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const AddDpsu = () => {
  return (
    <div className="containerDpsu3">
      <div className="contentdpsu3">
        <div className="mainDpsu3">
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
              Make III Project OFB{" "}
            </h4>
          </div>
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="formAddUser" style={{ width: "90%" }}>
              <form className="paddingmastertopmakeproject2Dpsu">
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Organisation:-</b>
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-control "
                      id="exampleFormControlSelect1"
                    >
                      {" "}
                      <option>--Select Organisation--</option>
                      <option value="1">7 New OF Companies*</option>
                      <option value="2">BEL</option>
                      <option value="3">GRSE</option>
                      <option value="4">GSL</option>
                      <option value="5">MDL</option>
                      <option value="6">BEML</option>
                      <option value="7">MDNL</option>
                      <option value="8">BDL</option>
                      <option value="9">HAL</option>
                      <option value="10">HSL</option>
                      <option value="11">MKU</option>
                      <option value="12">PTC</option>
                      <option value="17">AIDAT </option>
                      <option value="18">Bharat Forge</option>
                      <option value="19">Alpha Design Technologies</option>
                      <option value="20">TVS Defence</option>
                      <option value="21">Data Patterns</option>
                      <option value="22">Aerospace Engineers Pvt Ltd</option>
                      <option value="23">MIDHANI</option>
                      <option value="25">aero</option>
                      <option value="26">AVNL</option>
                      <option value="27">MIL</option>
                      <option value="28">IOL</option>
                      <option value="29">AWEIL</option>
                      <option value="30">YIL</option>
                      <option value="31">TCL</option>
                      <option value="32">GIL</option>
                    </select>
                  </div>
                </div>

                <br />

                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Item Code:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      placeholder="Enter Item Code"
                      className="form-control "
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Project Name:-</b>{" "}
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      placeholder="Enter the Project Name"
                      className="form-control "
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row ">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>AIP Date:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      placeholder="Enter the AIP Date"
                      className="form-control "
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row ">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>EOI date:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      placeholder="Enter the EOI date"
                      className="form-control "
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row ">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Contract Date:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      className="form-control "
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row ">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>WithDrawn On:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      placeholder="Enter the Action"
                      className="form-control "
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />

                <div className="d-flex justify-content-center container-fluid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-spacingmakeprojectDpsu3"
                  >
                    Save
                  </button>
                  <Link
                    to="/admin/index/makeproject3dpsu"
                    className="btn btn-primary btn-spacingmakeprojectDpsu3"
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
  );
};

export default AddDpsu;
