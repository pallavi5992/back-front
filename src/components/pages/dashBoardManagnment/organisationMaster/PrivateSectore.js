import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOrganisationSectorIdAction } from "../../../../redux/slice/organisationMaster/getOrganisationbySectorIdSlice";
import { getToken, convertPrivatePublicOrag } from "../../../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../common/UI/pagination/Pagination";
import { searchOrganisationAction } from "../../../../redux/slice/organisationMaster/searchOrganisationSlice";
import { deleteOrganisationAction } from "../../../../redux/slice/organisationMaster/deleteOrganisationSlice";
const PrivateSectore = () => {
  const [allAllOrganisationList, setAllOrganisationList] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [dataLimit, setDataLimit] = useState(10);
  const dispatch = useDispatch();
  const { sectorId } = useParams();
  const token = getToken();

  const { deleteOrganisationSlice, searchOrganisationSlice } = useSelector(
    (state) => state
  );

  const { getOrgBySectorId, success } = useSelector(
    (state) => state.getOrganisationbySectorIdSlice
  );

  // api calling search organisation
  useEffect(() => {
    if (searchItem) {
      dispatch(
        searchOrganisationAction({ token: token || "", key: searchItem })
      );
    }
  }, [searchItem]);

  // Deleting Organisation
  const handleDelete = (id, name) => {
    window.confirm(`Are you sure? You want to delete '${name}'?`) &&
      dispatch(deleteOrganisationAction({ token, id }));
  };

  useEffect(() => {
    token &&
      dispatch(
        getOrganisationSectorIdAction({
          token: token,
          pageNumber: pageNumber,
          dataLimit: dataLimit,
          sectorId: sectorId,
        })
      );
  }, [
    token,
    pageNumber,
    dataLimit,
    deleteOrganisationSlice?.success,
    !searchItem,
    sectorId,
  ]);

  // Update the list based on search or getAllOrag
  useEffect(() => {
    if (!searchItem) {
      setAllOrganisationList(getOrgBySectorId?.dataItems || []);
    } else if (searchOrganisationSlice?.success) {
      setAllOrganisationList(searchOrganisationSlice?.serachOrag || []);
    }
  }, [success, searchOrganisationSlice?.success]);

  useEffect(() => {
    searchItem && setAllOrganisationList(searchOrganisationSlice?.serachOrag);
  }, [searchOrganisationSlice?.success]);

  const handleSearchItem=(e)=>{
    const serachValue = e.target.value;
    setSearchItem(serachValue);
  }

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
          >
            {/* <p>Front add Data </p> */}
          </a>

          {/* Public sector and Private sector */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to={`/admin/index/${1}/privatesector`}
                className="btn btn-outline-success btn-lg btn-block resizable-btn custom-padding btn-spacing"
              >
                <i aria-hidden="true"></i>Public sector
              </Link>
              <Link
                to={`/admin/index/${0}/privatesector`}
                className="btn btn-success btn-lg btn-block resizable-btn custom-padding"
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

      <div className="d-flex justify-content-end">
        <form>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleSearchItem}
          />
        </form>
      </div>

      {/* Table data this line start */}
      <div className="container mt-5">
        <div className="table -responsive">
          <table className="table table-responsive table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr
                className="bg-info justify-center"
                style={{ textAlign: "center" }}
              >
                <th>Name</th>
                <th>Code</th>
                <th>Sector</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allAllOrganisationList.map((data, index) => {
                return (
                  <tr style={{ textAlign: "center" }} key={index}>
                    <td>{data.Name}</td>
                    <td>{data.Code}</td>
                    <td>{convertPrivatePublicOrag(data.PublicSector)}</td>
                    <td>
                      <Link
                      type="button"
                      className="btn btn-success"
                      to={`/admin/index/upadte/${data.id}/organisation/master`}
                      >
                        Edit<i className="fas fa-edit"></i>
                      </Link>{" "}
                      <button 
                      className="btn btn-danger" 
                      type="button"
                      onClick={() => handleDelete(data.id, data.Name)}
                      >
                        Delete
                        <i className="fa fa-trash"
                         aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* pagination line  */}
          <Pagination
              currentPage={pageNumber}
              setCurrentPage={setPageNumber}
                totalPages={getOrgBySectorId?.totalPage}
              />
        </div>
      </div>
    </div>
  );
};

export default PrivateSectore;
