import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const AddMakeProject3 = () => {
  return (
    <div className="containermakeDap3">
    <div className="contentmakeDap3">
      <div className="mainmakeDap3">
        <div
          className=""
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
          Make III Project{" "}
          </h4>
        </div>s
        <div
          className=""
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="formAddUser" style={{ width: "90%" }}>
            <form className="">
            <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Year Name:-</b>
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
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Month Name:-</b>
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
        

              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Project Name:-</b>
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
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AIP Accorded (DPP):-</b>{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the AIP Accorded (DPP)"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AIP Dropped (DPP):-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the AIP Dropped (DPP)"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AIP Accorded (DPSUs):-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the AIP Accorded (DPSUs)"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
          
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>
                    AIP Dropped (DPSUs):-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter theAIP Dropped (DPSUs)"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />

              <div className="d-flex justify-content-center container-fluid">
                <button
                  type="submit"
                  className="btn btn-primary btn-spacingmakeprojectmakeDap3"
                >
                  Save
                </button>
                <Link
                  to="/admin/index/makeproject3dap"
                  className="btn btn-primary btn-spacingmakeprojectmakeDap3"
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
  )
}

export default AddMakeProject3