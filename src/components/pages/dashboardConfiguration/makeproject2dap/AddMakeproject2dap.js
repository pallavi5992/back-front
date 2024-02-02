import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const AddMakeproject2dap = () => {
  return (
    <div className="updatemakeproject2dap">
    <div className="contentmakeproject2dap">
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <h4 style={{color:"#0dc5f1", marginTop:"20px"}}>Make II Project DDP </h4>
      </div>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <div className="formAddUser" style={{ width: "90%" }}>
          <form  className="paddingmastertopmakeproject2dap">
          <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                <b>SHQ:-</b>
              </label>
              <div className="col-sm-10">
              <select className="form-control " id="exampleFormControlSelect1">
                <option>--Select Challange--</option>
                <option>AirForce</option>
                <option>Army</option>
                <option>Navy</option>
              
              </select>
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
                  placeholder="Enter Project Name"
                  className="form-control "
                  id="staticEmail"
                />
              </div>
            </div>
            <br/>
            <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label"><b>AIP date:-</b>  </label>
              <div className='col-sm-10'> 
              <input name="As_On_Date" type="date" className="form-control" placeholder="As on Date" />
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
                  placeholder="Enter the Action"
                  className="form-control "
                  id="staticEmail"
                />
              </div>
            </div>
            <br/>
            <div className="form-group row ">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                <b>PSO Date:-</b>
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
                <b>Withdrawn On:-</b>
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

           

            <div className="d-flex justify-content-center"> 
               
               <button type="submit" className="btn btn-primary btn-spacingmakeproject">
                Save
              </button>
              <Link to="/admin/index/makeprojectdap" className="btn btn-primary btn-spacingmakeproject">
                cancel
              </Link></div>

          </form>
      
        </div>
     
      </div>
    </div>
  </div>
  )
}

export default AddMakeproject2dap;