import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Makeproject2dap = () => {
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
            <h3><strong><i className="fa fa-inbox"></i>Make II Project DDP List</strong></h3>
          </strong>
          {/* <hr/> */}
        </li>
      </ul>
    </div>

    {/* Hearde Private sector and Public sector Add user */}

    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-Top text-center">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
        </a>

        {/* Add user Button */}
        <div className="col-md-3 text-end">
        <Link to="/admin/index/addmakeproject2dap" className="btn btn-info"  ><i className="fa fa-user-plus" aria-hidden="true"></i>Add Data</Link>
        </div>
   
      </header>
    </div>





    {/* Table data this line start */}
    <div className="container mt-5">

    {/* Search  add navbar this line means  */}
    <div className="">
          <form>
            <div className="row">
              <div className="col">
                <label className="div.relative" style={{ display: "flex" }}>
                  Show
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    className="form-control input-sm"
                    style={{ width: "98px", marginTop: "-6px" }}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  entries
                </label>
              </div>
              <div
                className="col"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <div className="" style={{ width: "210px" }}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                    // value={searchTerm}
                    // onChange={(e) => setSearchItem(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <br />



      <div className="table -responsive ">
        <table className="table table-responsive table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr className="bg-info justify-center ">
              <th>S.NO</th>
              <th>SHQ</th>
              <th>Project Name</th>
              <th>AIP Date</th>
              <th>AON Date</th>
              <th>PSO Date</th>
              <th>Withdrawn Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
               <td calSpan="2">1</td>
              <td>Air Force</td>
              <td>High Altitude Pseudo</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>Feasibility study initiated</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr >
               <td>2</td>
              <td>Air Force</td>
              <td>High Altitude Pseudo</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>Feasibility study initiated</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr >
               <td>3</td>
              <td>Air Force</td>
              <td>High Altitude Pseudo</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>Feasibility study initiated</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr >
               <td>4</td>
              <td>Air Force</td>
              <td>High Altitude Pseudo</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>Feasibility study initiated</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr >
               <td>5</td>
              <td>Air Force</td>
              <td>High Altitude Pseudo</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>Feasibility study initiated</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr >
               <td>6</td>
              <td>Air Force</td>
              <td>High Altitude Pseudo</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>01/08/2023</td>
              <td>Feasibility study initiated</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
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

export default Makeproject2dap
