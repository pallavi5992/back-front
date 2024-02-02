import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"

const TamilnaduDefenceCorridor = () => {
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
              <h5><strong><i className="fa fa-inbox"></i>TN Defence Corridor List</strong></h5>
            </strong>
            {/* <hr/> */}
          </li>
        </ul>
      </div>

      {/* Hearde Private sector and Public sector Add user */}

      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom text-center">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-2 text-dark text-decoration-none"
          >
          </a>
          {/* Add user Button */}
          <div className="row pull-right">
            <div className="col-md-12">
              <Link type="button" className="btn btn-primary m-1" to="/admin/index/addannouncedatatn">
                <i className="fa fa-fw fa-user-plus"></i> Add Investment Announced Data
              </Link>
              <Link type="button" to="/admin/index/addtamilnadudefenceData" className="btn btn-primary">
                <i className="fa fa-fw fa-user-plus"></i> Add Investment Made Data
              </Link>
            </div>
          </div>
        </header>
      </div> 
      {/* Table data this line start */}
      <div className="container mt-5">
        <div className="table -responsive">
          <table className="table table-responsive table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr className="bg-info justify-center " style={{textAlign:"center"}}>
                <th >S.No</th>
                <th>Sector</th>
                <th>Organisation</th>
                <th>Investment</th>
                <th>Project Discription</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody style={{textAlign:"center"}}>
              <tr role='row'>
                <td>1</td>
                <td>Public</td>
                <td rowspan="4">7 New OF Companies*</td>
                <td>1640.00</td>
                <td>Modernisation of Heavy Vehicle Factory, Chennai and Engine Factory, Avadi</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Active <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr >
                <td>2</td>
                <td>Public</td>
                {/* <td >7 New OF Companies*</td> */}
                <td>1640.00</td>
                <td>Modernisation of Heavy Vehicle Factory, Chennai and Engine Factory, Avadi</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Active <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Public</td>
                {/* <td >7 New OF Companies*</td> */}
                <td>1640.00</td>
                <td>Modernisation of Heavy Vehicle Factory, Chennai and Engine Factory, Avadi</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Active <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Public</td>
                {/* <td >7 New OF Companies*</td> */}
                <td>1640.00</td>
                <td>Modernisation of Heavy Vehicle Factory, Chennai and Engine Factory, Avadi</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Active <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr >
                <td>5</td>
                <td>Public</td>
                <td >7 New OF Companies*</td>
                <td>1640.00</td>
                <td>Modernisation of Heavy Vehicle Factory, Chennai and Engine Factory, Avadi</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Active <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
              <tr >
                <td>6</td>
                <td>Public</td>
                <td >7 New OF Companies*</td>
                <td>1640.00</td>
                <td>Modernisation of Heavy Vehicle Factory, Chennai and Engine Factory, Avadi</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit<i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-primary" type="button">
                    Active <i className="fa fa-edit" aria-hidden="true"></i>{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* pagination line  */}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TamilnaduDefenceCorridor