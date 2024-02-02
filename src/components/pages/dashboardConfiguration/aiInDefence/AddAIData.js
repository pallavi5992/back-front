import React from 'react'
import { Link } from 'react-router-dom';
const AddAIData = () => {
    return (
        <div className="updateUser">
            <div className="contentAddTl">
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

                    <h5 style={{ color: "#0dc5f1" }}>AI In Defence Project Details</h5>

                </div>

                <div
                    className="addUserContainer"
                    style={{ display: "flex", justifyContent: "center", marginTop: "78px" }}
                >
                    <div className="formAddUser" style={{ width: "90%" }}>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" >
                                    <b>Year Name:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <select name="TargetYearID" className="form-control">
                                        <option selected="" value="0">--Select Year--</option>
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
                                <label className="col-sm-3 col-form-label" >
                                    <b>Organisation Name:-</b>
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
                                    <b>Project:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    <b>Complete:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="staticEmail"  />
                                </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center">

                                <button type="submit" className="btn btn-primary btn-spacingadduser btn_tl">
                                    Submit
                                </button>
                                <Link to="/admin/index/aidefence" className="btn btn-primary  btn-spacingadduser btn_tl">
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

export default AddAIData
