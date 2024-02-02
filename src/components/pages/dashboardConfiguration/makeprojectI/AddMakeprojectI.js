import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const AddMakeprojectI = () => {
  return (
    <div className="updatemakeproject1">
    <div className="contentmakeproject1">
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <h4 style={{color:"#0dc5f1", marginTop:"20px"}}>Make I Project </h4>
      </div>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div className="formAddUser" style={{ width: "90%" }}>
          <form  className="paddingmastertopmakeproject1">
          <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                <b>SHQ:-</b>
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
            <br/>
            
            <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                <b>Project Name:-</b>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Enter the code"
                  className="form-control "
                  id="staticEmail"
                />
              </div>
            </div>
            <br/>
            <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label"><b> Quantity-</b>  </label>
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
                <b>Tenative Cost:-</b>
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
            <br/>
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
            <br/>
            <div className="form-group row ">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                <b>Remarks:-</b>
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
            <br/>


         
              

            <div className="d-flex justify-content-center"> 
             
             <button type="submit" className="btn btn-primary btn-spacingmakeproject1">
              Submit
            </button>
            <Link to="/admin/index/make1project" className="btn btn-primary  btn-spacingmakeproject1 ">
              cancel
            </Link>
            </div>
          </form>
      
        </div>
     
      </div>
    </div>
  </div>
  )
}

export default AddMakeprojectI