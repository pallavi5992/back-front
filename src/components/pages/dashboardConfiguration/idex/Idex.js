import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const Idex = () => {
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
            <h5><strong><i className="fa fa-inbox"></i>STARTUPS IN DEFENCE LIST</strong></h5>
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
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        </a>

        {/* Add user Button */}
        <div className="row pull-right">
            <div className="col-md-12">
              <Link type="button" className="btn btn-primary m-1">
                <i className="fa fa-fw fa-user-plus"></i> Port to Prayas
              </Link>
              <Link type="button" to="/admin/index/addidexdata" className="btn btn-primary">
                <i className="fa fa-fw fa-user-plus"></i> Add Data
              </Link>
            </div>
          </div>
      </header>
      
    </div>
    {/* Table data this line start */}
    <div className="container">
    {/* Search  add navbar this line means  */}
    <div className="">
          <form>
            <div className="row">
              <div className="col">
                <label className="div.relative" style={{ display: "flex" }}>
                  Show
                  <select
                    className="form-select form-control input-sm"
                    aria-label="Default select example"
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
                style={{ display: "flex", justifyContent: "flex-end" }}
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
            <tr className="bg-info" style={{textAlign:"center"}}>
              <th >StartUp Name</th>
              <th>Challenge Category</th>
              <th>Challenge</th>
              <th>Location Name</th>
              <th>Services</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            <tr style={{textAlign:"center"}}>
               <td>Big Bang Boom Solutions Private Limited</td>
              <td>DISC 2</td>
              <td></td>
              <td>Tamil Nadu</td>
              <td>AIR FORCE</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr style={{textAlign:"center"}}>
               <td>Big Bang Boom Solutions Private Limited</td>
              <td>DISC 2</td>
              <td></td>
              <td>Tamil Nadu</td>
              <td>AIR FORCE</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr style={{textAlign:"center"}}>
               <td>Big Bang Boom Solutions Private Limited</td>
              <td>DISC 2</td>
              <td></td>
              <td>Tamil Nadu</td>
              <td>AIR FORCE</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr style={{textAlign:"center"}}>
               <td>Big Bang Boom Solutions Private Limited</td>
              <td>DISC 2</td>
              <td></td>
              <td>Tamil Nadu</td>
              <td>AIR FORCE</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr style={{textAlign:"center"}}>
               <td>Big Bang Boom Solutions Private Limited</td>
              <td>DISC 2</td>
              <td></td>
              <td>Tamil Nadu</td>
              <td>AIR FORCE</td>
              <td>
                <button type="button" className="btn btn-success">
                Edit<i className="fas fa-edit"></i>
                </button>{" "}
                <button className="btn btn-danger" type="button">
                  Active<i className="fa fa-times" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
            <tr style={{textAlign:"center"}}>
               <td>Big Bang Boom Solutions Private Limited</td>
              <td>DISC 2</td>
              <td></td>
              <td>Tamil Nadu</td>
              <td>AIR FORCE</td>
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

export default Idex