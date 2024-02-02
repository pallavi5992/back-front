import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const MissionRakshaGyan = () => {
  return (
    <div className="form-group row">
      {/* User Detail  */}
      <div>
        <ul
          className="nav nav-tabs pull-right ui-sortable-handle"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <li className="pull-left header">
            <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>
            <strong>
              <h3>
                <strong>
                  <i className="fa fa-inbox"></i>MISSION RAKSHA GYAN
                </strong>
              </h3>
            </strong>
          </li>
        </ul>
      </div>

      {/* Hearde Private sector and Public sector Add user */}

      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-Top text-center">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          ></a>

          {/* Add user Button */}
          <div className="col-md-3 text-end">
            <button
              type="button"
              class="btn btn-primary btn-spacingmission"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <i className="fa fa-user-plus" aria-hidden="true"></i>Port to
              Prayas
            </button>

            <Link className="btn btn-primary" to="/admin/index/addmrgsipr">
              <i className="fa fa-user-plus" aria-hidden="true"></i>Add MRGS IPR
              Target
            </Link>
          </div>
        </header>
      </div>

      {/* Table data this line start */}
      <div className="missioncontent">
        <div className="table -responsive ">
          <table className="table table-responsive table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr className="bg-info justify-center boderbox">
                <th>Year</th>
                <th>Organization</th>
                <th>IPR Target</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td rowSpan="3">2021-22</td>
                <td>BEL</td>
                <td>IPR Target</td>

                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td >2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td rowSpan="3">2021-22</td>
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>

                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td rowSpan="3">2021-22</td>
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>

                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td rowSpan="3">2021-22</td>
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>

                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td rowSpan="3">2021-22</td>
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                {/* <td>2021-22</td> */}
                <td>BEL</td>
                <td>IPR Target</td>

                <td>
                  <button type="button" className="btn btn-success">
                    Edit <i className="fas fa-edit"></i>
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container-fluid">
        <div style={{ borderBottom: "1px solid #ddd" }}></div>
        <div
          style={{
            borderBottom: "1px solid #ddd",
            marginTop: "30px",
            textAlign: "center",
          }}
        ></div>
      </div>
      <br />

      {/* lower side MRGS IPR Consolidated Data */}
      <div className="MissionContainer ">
        <div className="missioncontent">
          <div className="missionaccessline">
            <h5>
              <i className="fa fa-inbox"></i>MRGS IPR Consolidated Data
            </h5>
            <div>
              <div className="searchdatabyyear">
                <div>
                  <a
                    href="#demo"
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                  >
                    2021-22
                  </a>
                  <a
                    href="#demo"
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    style={{ margin: "0px 4px" }}
                  >
                    2022-23
                  </a>
                  <a
                    href="#demo"
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                  >
                    2023-24
                  </a>
                </div>
                <div>
                  <Link
                    to="/admin/index/addmrgsiconsolidatedData"
                    className="btn btn-primary"
                  >
                    <i class="fa fa-user-plus"></i>Add MRGS consolidated Data
                  </Link>
                </div>
              </div>
              <div id="demo" className="collapse">
                <div>
                  <br />
                </div>
                <div className="table -responsive">
                  <table className="table table-responsive table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                      <tr className="bg-info justify-center boderbox ">
                        <th>Organization</th>
                        <th>
                          {" "}
                          IPR Filing Target(Consolidated up <br /> to March
                          2022)
                        </th>
                        <th>
                          IPR Filed(Consolidated up
                          <br /> to November 2023)
                        </th>
                        <th>
                          IPR Granted / Registered by Indian Patent Office{" "}
                          <br />
                          (Consolidated till November 2023)
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ textAlign: "center" }}>
                        <td>BEL</td>
                        <td>940</td>
                        <td>1182</td>
                        <td>462</td>

                        <td>
                          <Link to="/update/user" className="btn btn-success">
                            Edit<i className="fas fa-edit"></i>
                          </Link>
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td>BEL</td>
                        <td>940</td>
                        <td>1182</td>
                        <td>462</td>
                        <td>
                          <button type="button" className="btn btn-success">
                            Edit<i className="fas fa-edit"></i>
                          </button>{" "}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td>BEL</td>
                        <td>940</td>
                        <td>1182</td>
                        <td>462</td>
                        <td>
                          <Link to="/user" className="btn btn-success">
                            Edit<i className="fas fa-edit"></i>
                          </Link>{" "}
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td>BEL</td>
                        <td>940</td>
                        <td>1182</td>
                        <td>462</td>
                        <td>
                          <button type="button" className="btn btn-success">
                            Edit<i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center", borderTop: "black" }}>
                        <td>BEL</td>
                        <td>940</td>
                        <td>1182</td>
                        <td>462</td>
                        <td>
                          <button type="button" className="btn btn-success">
                            Edit<i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                      <tr style={{ textAlign: "center" }}>
                        <td>BEL</td>
                        <td>940</td>
                        <td>1182</td>
                        <td>462</td>
                        <td>
                          <button type="button" className="btn btn-success">
                            Edit<i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popub button code */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-body">
                  <div className="col-md-12">
                    <div
                      className="tab-pane show"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-12 text-left">
                          <div className="form-group">
                            <font color="Red">
                              <bold>
                                {" "}
                                Following Data is not Updated, Click on Confirm
                                to Continue!{" "}
                              </bold>
                            </font>
                            <table
                              className="table table-striped table-bordered text-center"
                              id="tablePort"
                            >
                              <thead>
                                <tr>
                                  <th>Organization</th>
                                  <th>IPR Filing Target</th>
                                  <th>IPR Filed</th>
                                  <th>
                                    IPR Granted / Registered by Indian Patent
                                    Office
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="tbody1">
                                <tr>
                                  {" "}
                                  <td>BEL</td>
                                  <td>940</td>
                                  <td>1182</td>
                                  <td>462</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>MDL</td>
                                  <td>300</td>
                                  <td>246</td>
                                  <td>30</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>BEML</td>
                                  <td>286</td>
                                  <td>375</td>
                                  <td>165</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>BDL</td>
                                  <td>182</td>
                                  <td>150</td>
                                  <td>67</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>MIDHANI</td>
                                  <td>187</td>
                                  <td>195</td>
                                  <td>84</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>GSL</td>
                                  <td>164</td>
                                  <td>68</td>
                                  <td>40</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>HSL</td>
                                  <td>157</td>
                                  <td>65</td>
                                  <td>14</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>GRSE</td>
                                  <td>182</td>
                                  <td>142</td>
                                  <td>68</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>HAL</td>
                                  <td>889</td>
                                  <td>2268</td>
                                  <td>854</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>MIL</td>
                                  <td>496</td>
                                  <td>325</td>
                                  <td>51</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>AVNL</td>
                                  <td>165</td>
                                  <td>116</td>
                                  <td>28</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>AWEIL</td>
                                  <td>98</td>
                                  <td>64</td>
                                  <td>13</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>TCL</td>
                                  <td>158</td>
                                  <td>99</td>
                                  <td>72</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>YIL</td>
                                  <td>160</td>
                                  <td>142</td>
                                  <td>32</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>IOL</td>
                                  <td>83</td>
                                  <td>68</td>
                                  <td>13</td>
                                </tr>
                                <tr>
                                  {" "}
                                  <td>GIL</td>
                                  <td>51</td>
                                  <td>46</td>
                                  <td>19</td>
                                </tr>
                              </tbody>
                              <tbody></tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionRakshaGyan;
