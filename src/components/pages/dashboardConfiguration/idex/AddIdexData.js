import React from "react";
import { Link } from "react-router-dom";

const AddIdexData = () => {
  return (
    <>
      <div className="updateUser">
        <div className="contentAddTl">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <h5 style={{ color: "#0dc5f1" }}>Defence Startup</h5>
          </div>

          <div
            className="addUserContainer"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "78px",
            }}
          >
            <div className="formAddUser" style={{ width: "90%" }}>
              <form>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <b>StartUp Name:-</b>
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="text"
                      placeholder="Name of user"
                      className="form-control"
                      id="staticEmail"
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <b>Challenge Category:-</b>
                  </label>
                  <div className="col-sm-7">
                    <select name="TargetYearID" className="form-control">
                      <option selected="" value="0">
                        --Select DISC--
                      </option>
                      <option value="1">DISC 1</option>
                      <option value="2">DISC 2</option>
                      <option value="3">DISC 3</option>
                    </select>
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <b>Challenge:-</b>
                  </label>
                  <div className="col-sm-7">
                    <select name="TargetYearID" className="form-control">
                      <option selected="" value="0">
                        --Select Challenge--
                      </option>
                    </select>
                  </div>
                </div>

                <br />

                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <b>Location Name:-</b>
                  </label>
                  <div className="col-sm-7">
                    <select name="TargetYearID" className="form-control">
                      <option selected="" value="0">
                        --Select Location--
                      </option>
                      <option value="1">Noida</option>
                      <option value="2">Delhi</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    <b>Services:-</b>
                  </label>
                  <div className="col-sm-7">
                    <select name="TargetYearID" className="form-control">
                      <option selected="" value="0">
                        --Select Services--
                      </option>
                      <option value="1">ARMY</option>
                      <option value="2">NAVY</option>
                      <option value="3">AIR FORSE</option>
                      <option value="4">HAL</option>
                      <option value="5">BHEL</option>
                    </select>
                  </div>
                </div>
                <br />

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-spacingadduser"
                  >
                    Submit
                  </button>
                  <Link
                    to="/admin/index/idex"
                    className="btn btn-danger  btn-spacingadduser"
                  >
                    cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </div>

    
    </>
  );
};

export default AddIdexData;
