import React from 'react'
import { Link } from 'react-router-dom';

const AddTamilDefenceData = () => {
    return (
        <div className="updateUser">
            <div className="contentAddTl">
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

                    <h5 style={{ color: "#0dc5f1" }}>TL Defence Corridor Project</h5>

                </div>

                <div
                    className="addUserContainer"
                    style={{ display: "flex", justifyContent: "center" ,marginTop:"78px"}}
                >
                    <div className="formAddUser" style={{ width: "90%" }}>
                        <form>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" >
                                    <b>Investment Target:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <br />

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    <b>Investment made so far:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <br />

                            <div className="form-group row">
                                <label for="staticEmail" className="col-sm-3 col-form-label">
                                    <b>As On Date:-</b>
                                </label>
                                <div className="col-sm-7">
                                    <input name="As_On_Date" type="date" className="form-control" placeholder="As on Date" />
                                    <span className="field-validation-valid text-danger" data-valmsg-for="As_On_Date" data-valmsg-replace="true"></span>
                                    <span id="TxtIssueDate" ></span>

                                </div>
                            </div>

                            <br />


                            <div className="d-flex justify-content-center">

                                <button type="submit" className="btn btn-primary btn-spacingadduser btn_tl">
                                    Submit
                                </button>
                                <Link to="/admin/index/tamilnadudefence" className="btn btn-primary  btn-spacingadduser btn_tl">
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

export default AddTamilDefenceData
