import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const DefenceExportAPI = () => {
  return (
    <div className="form-group row exportBody">

      <div className="exportContainer">
        <div className='' >
          <ul
            className="nav nav-tabs pull-right ui-sortable-handle"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <li className="pull-left header">
              <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>

              <h3><i className="fa fa-inbox"></i>Defence Export</h3>
            </li>
          </ul>
          <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom text-center">
              <a
                href="/"
                className="d-flex align-items-center col-md-3 mb-4  text-dark text-decoration-none">
              </a>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center ">
                <li>
                  <Link
                   
                    className="btn btn-primary btn-lg btn-block   btn-spacing"
                  >
                    <i className='fa-solid fa-user-plus' aria-hidden="true"></i>Api For Defence Exim
                  </Link>
                  <Link
                    
                    className="btn btn-primary btn-lg btn-block btn-spacing"
                  >
                    <i className='fa-solid fa-user-plus' aria-hidden="true"></i>Darpan Api For Defence Export
                  </Link>
                  <Link
                    to="/admin/index/defenceExportAPI/viewexportdata"
                    className="btn btn-success btn-lg btn-block">
                    <i aria-hidden="true"></i>View Defence Export Data
                  </Link>
                </li>
              </ul>
            </header>
          </div>
        </div>
        {/* Search  add navbar this line means  */}

      </div>

      <div className="exportFormContainer">
        <div>
          <ul
            className="nav nav-tabs pull-right ui-sortable-handle"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <li className="pull-left header">
              <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>

              <h3><i className="fa fa-inbox"></i>Defence Export</h3>
            </li>
          </ul>
        </div>
        <form style={{ marginTop: "12px" }}>
          <div className="row">
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">Select Year</label>
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
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">Export By DPSU/OFB</label>
              <input type="text" className="form-control" placeholder="Export By DPSU/OFB" name="" />
            </div>
          </div><br />
          <div className="row">
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">Scomet</label>
              <input type="text" className="form-control" placeholder="Scomet" name="Scomet" />
            </div>
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">Private Company</label>
              <input type="text" className="form-control" placeholder="Private Company" name="" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">Contract Value</label>
              <input type="text" className="form-control" placeholder="Contract Value" name="" />
            </div>
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">As on Date</label>
              <input name="As_On_Date" type="date" className="form-control" placeholder="As on Date" />
            </div>
          </div>

          <br />
          <div className="exportButtom">
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </div>
          <br />
        </form>
        <br />
      </div>

    </div>
  )
}

export default DefenceExportAPI


