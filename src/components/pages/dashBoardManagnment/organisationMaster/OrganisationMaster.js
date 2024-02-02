import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getToken,convertPrivatePublicOrag } from "../../../../utils/util";
import Pagination from "../../../common/UI/pagination/Pagination";
import { getAllOrganisationAction } from "../../../../redux/slice/organisationMaster/getAllOrganisationSlice";
import { deleteOrganisationAction } from "../../../../redux/slice/organisationMaster/deleteOrganisationSlice";
import { searchOrganisationAction } from "../../../../redux/slice/organisationMaster/searchOrganisationSlice";

const OrganisationMaster = () => {
  const [allAllOrganisationList, setAllAllOrganisationList] = useState([]);
  const [searchItem,setSearchItem]=useState()
  const [pageNumber, setPageNumber] = useState(0);
  const [dataLimit, setDataLimit] = useState(10);
  const dispatch = useDispatch();
  const token = getToken();
  const { getAllOrag,success } = useSelector((state) => state.getAllOrganisationSlice);
const {deleteOrganisationSlice,searchOrganisationSlice}=useSelector((state)=>state)

   // Deleting Organisation
   const handleDelete = (id, name) => {
    window.confirm(`Are you sure? You want to delete '${name}'?`) &&
      dispatch(deleteOrganisationAction({ token, id }));
  };

  // api calling search organisation
  useEffect(() => {
    if (searchItem) {
      dispatch(searchOrganisationAction({ token: token || "", key: searchItem }));
    }
  }, [searchItem]);


  useEffect(() => {
    token &&
      dispatch(
        getAllOrganisationAction({
          token: token,
          pageNumber: pageNumber,
          dataLimit: dataLimit,
        })
      );
  }, [token, pageNumber, dataLimit,deleteOrganisationSlice?.success,!searchItem]);


  // Update the list based on search or getAllOrag
  useEffect(() => {
    if (!searchItem) {
      setAllAllOrganisationList(getAllOrag?.dataItems || []);
    } else if (searchOrganisationSlice?.success) {
      setAllAllOrganisationList(searchOrganisationSlice?.serachOrag || []);
    }
  }, [success, searchOrganisationSlice?.success]);

  const handleDataLimitChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setDataLimit(selectedValue);
  };

  const handleSearchItem=(e)=>{
    const serachValue = e.target.value;
    setSearchItem(serachValue);
  }


 
  useEffect(()=>{searchItem&&
    setAllAllOrganisationList(searchOrganisationSlice?.serachOrag)
  },[searchOrganisationSlice?.success])

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
                  <i className="fa fa-inbox"></i>Organisation List
                </strong>
              </h3>
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
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          ></a>

          {/* Public sector and Private sector */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to={`/admin/index/${1}/privatesector`}
                className="btn btn-success btn-lg btn-block resizable-btn custom-padding btn-spacing"
              >
                <i aria-hidden="true"></i>Public sector
              </Link>
              <Link
                to={`/admin/index/${0}/privatesector`}
                className="btn btn-outline-success btn-lg btn-block resizable-btn custom-padding"
              >
                <i aria-hidden="true"></i>Private sector
              </Link>
            </li>
          </ul>

          {/* Add user Button */}
          <div className="col-md-3 text-end">
            <Link
              to="/admin/index/addorganisationmaster"
              className="btn btn-info"
            >
              <i className="fa fa-user-plus" aria-hidden="true"></i>Add
              Organisation
            </Link>
          </div>
        </header>
      </div>

      {/* Search  add navbar this line means  */}
      <br />

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
                  value={dataLimit}
                  onChange={handleDataLimitChange}
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
                  value={searchItem}
                  onChange={handleSearchItem}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Table data this line start */}
      <div className="container mt-5">
        <div className="table -responsive">
          <table className="table table-responsive table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr
                className="bg-info justify-center "
                style={{ textAlign: "center" }}
              >
                <th>
                  <span className="custom-checkbox" />
                  Name
                  <input type="checkbox" id="selectorAll" />
                  <label for="selectAll"></label>
                </th>
                <th>Code</th>
                <th>Sector</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allAllOrganisationList &&
              allAllOrganisationList.map(
                  (data, index) => {
                    return (
                      <tr style={{ textAlign: "center" }} key={index}>
                        <td>{data.Name}</td>
                        <td>{data.Code}</td>
                        <td>{convertPrivatePublicOrag(data.PublicSector)}</td>
                        <td>
                          <Link type="button" className="btn btn-success" to={`/admin/index/upadte/${data.id}/organisation/master`} >
                            Edit<i className="fas fa-edit"></i>
                          </Link>{" "}
                          <button 
                          className="btn btn-danger" 
                          type="button"
                          onClick={() => handleDelete(data.id, data.Name)}
                          >
                            Delete
                            <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>

        </div>
          {/* pagination line  */}
          <Pagination
                currentPage={pageNumber}
                setCurrentPage={setPageNumber}
                totalPages={getAllOrag?.totalPage}
              />
      </div>
    </div>
  );
};

export default OrganisationMaster;
