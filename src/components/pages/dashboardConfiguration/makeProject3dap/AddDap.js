import React from 'react'
import { Link } from 'react-router-dom'

const AddDap = () => {
  return (
    <div className="containerDap3">
    <div className="contentDap3">
      <div className="mainDap3">
        <div
          className=""
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h4 style={{ color: "#0dc5f1", marginTop: "20px" }}>
          Make III Project DDP{" "}
          </h4>
        </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="formAddUser" style={{ width: "90%" }}>
            <form className="">
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>SHQ:-</b>
                </label>
                <div className="col-sm-10">
                  <select  className="form-control "
                  id="exampleFormControlSelect1">
                    {" "}
                    <option>--Select Challange--</option>
                    <option>AirForce</option>
                    <option>Army</option>
                    <option>Navy</option>
                   
                  </select>
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
                  <b>AIP Date:-</b>{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    placeholder="Enter the Project Name"
                    className="form-control "
                    id="staticEmail"
                  />
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>AON Date:-</b>
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
                  <b>PSO Date:-</b>
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
                  className="btn btn-primary btn-spacingmakeprojectDap3"
                >
                  Save
                </button>
                <Link
                  to="/admin/index/makeproject3dap"
                  className="btn btn-primary btn-spacingmakeprojectDap3"
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

export default AddDap