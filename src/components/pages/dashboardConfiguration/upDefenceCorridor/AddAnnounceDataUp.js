import React from 'react'
import { Link } from 'react-router-dom';

const AddAnnounceDataUp = () => {
    return (
        <div className="updateUser">
            <div className="contentAddTl">
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

                    <h5 style={{ color: "#0dc5f1" }}>UP Defence Corridor Project</h5>

                </div>

                <div
                    className="addUserContainer"
                    style={{ display: "flex", justifyContent: "center", marginTop: "78px" }}
                >
                    <div className="formAddUser" style={{ width: "90%" }}>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" >
                                    <b>Select Sector:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <select name="TargetYearID" className="form-control">
                                        <option selected="" value="0">--Select Sector--</option>
                                        <option value="1">Private</option>
                                        <option value="2">Public</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <br />

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" >
                                    <b>Select Organisation:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <select name="TargetYearID" className="form-control">
                                        <option selected="" value="0">--Select--</option>
                                        <option value="1">BHEL</option>
                                        <option value="2">NIC</option>
                                        <option value="3">BHEL</option>
                                        <option value="4">BHEL</option>
                                        <option value="5">BHEL</option>
                                        <option value="6">BHEL</option>
                                        <option value="7">BHEL</option>
                                        <option value="8">BHEL</option>
                                        <option value="11">BHEL</option>
                                    </select>
                                </div>
                            </div>
                            <br />

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    <b>Investment:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="staticEmail"  />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    <b>Project Description:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="staticEmail"  />
                                </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center">

                                <button type="submit" className="btn btn-primary btn-spacingadduser btn_tl" >
                                    Submit
                                </button>
                                <Link to="/admin/index/uttarpradeshdefence" className="btn btn-primary  btn-spacingadduser btn_tl" >
                                    cancel
                                </Link></div>
                        </form>
                    </div>
                </div>
                <br />
            </div>


        </div>
    );
}

export default AddAnnounceDataUp