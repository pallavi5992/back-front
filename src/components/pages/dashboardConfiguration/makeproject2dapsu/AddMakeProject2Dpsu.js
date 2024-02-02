import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const AddMakeProject2Dpsu = () => {
  return (
    <div className="containerdpsu">
      <div className="contentdpsu">
        <div className="contentdpsu12">
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
              Make II Project OFB{" "}
            </h4>
          </div>
          <div className="" style={{ display: "flex", justifyContent: "center" }}>
            <div className="formAddUser" style={{ width: "90%" }}>
              <form className="paddingmastertopmakeproject2Dpsu">
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Organisation:-</b>
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

                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">
                    <b>Item Code:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      placeholder="Enter the Item code"
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
                      placeholder="Enter the Action"
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
                      placeholder="Enter the Action"
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
                      placeholder="Enter the Action"
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
                    className="btn btn-primary btn-spacingmakeprojectDpsu"
                  >
                    Save
                  </button>
                  <Link
                    to="/admin/index/makeprojectdpsu"
                    className="btn btn-primary btn-spacingmakeprojectDpsu"
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
      <br />

      <div className="container-fluid">
        <h3>Bulk Copy Upload</h3>
        <div  style={{ borderBottom: "1px solid #ddd" }}></div>
        <div
        
          style={{
            borderBottom: "1px solid #ddd",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <span className="bulkupload">OR</span>
        </div>
      </div>
      <br />
      <div className="bulkcontainer">
        <div className="d-flex justify-content-center  mb-3">
          <form class="row g-3">
            <div className="col-auto">
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div className="col-auto">
              <button className="btn btn-info ">import</button>
            </div>
          </form>

          <div className="col-auto" style={{ margin: "0px 10px" }}>
            <button className="btn btn-success">
              {" "}
              <i class="fa fa-download" aria-hidden="true"></i>Download Excel
              Here
            </button>
          </div>
        </div>
      </div>

      <div className="bulkcontainer">
        <p style={{ color: "red" }}>
          Note : Data format and sequence of the fields must be same as in
          downlodable template. Suggest to download and fill data in the
          provided template
        </p>
      </div>
    </div>
  );
};

export default AddMakeProject2Dpsu;
