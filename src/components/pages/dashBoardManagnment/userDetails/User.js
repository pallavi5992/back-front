import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { Link } from "react-router-dom";
import { getToken } from "../../../../utils/util";
import { getAllUserAction } from "../../../../redux/slice/user/getAllUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../../../../redux/slice/user/deleteUserSlice";
import Pagination from "../../../common/UI/pagination/Pagination";
import { searchUserAction } from "../../../../redux/slice/user/searchUserSlice";

const User = () => {
  const [allUsersList, setAllUsersList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchItem,setSearchItem]=useState()
  const [dataLimit, setDataLimit] = useState(10);
  const dispatch = useDispatch();
  const token = getToken();
  const { users } = useSelector((state) => state.getAllUserSlice);

  const {deleteUserSlice,searchUserSlice, getAllUserSlice } = useSelector((state) => state);

  const {serachUser}=useSelector((state)=>state.searchUserSlice);

   // Update the list based on search or getAllOrag
   useEffect(() => {
    if (!searchItem) {
      setAllUsersList(users?.dataItems || []);
    } else if (searchUserSlice?.success) {
      setAllUsersList(serachUser || []);
    }
  }, [getAllUserSlice?.success, searchUserSlice?.success,searchItem]);

  // Deleting User
  const handleDelete = (id, name) => {
    window.confirm(`Are you sure? You want to delete '${name}'?`) &&
      dispatch(deleteUserAction({ token, id }));
  };

  // Getting All Users
  useEffect(() => {
    token && dispatch(getAllUserAction({token:token,pageNumber:pageNumber,dataLimit:dataLimit}));
  }, [token,pageNumber,dataLimit, deleteUserSlice?.success]);


   // api calling search organisation
   useEffect(() => {
    if (searchItem) {
      dispatch(searchUserAction({ token: token || "", key: searchItem }));
    }
  }, [searchItem]);


  const handleDataLimitChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setDataLimit(selectedValue);
  };

  const handleSearchItem=(e)=>{
    const serachValue = e.target.value;
    setSearchItem(serachValue);
  }

  useEffect(()=>{searchItem&&
    setAllUsersList(serachUser)
  },[searchUserSlice?.success])

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
              <i className="fa fa-inbox"></i>&nbsp;&nbsp; User Details
            </strong>
          </li>
        </ul>
      </div>

      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom text-center">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          ></a>
          {/* Add user Button */}

          <div className="col-md-3 text-end">
            <Link to="/admin/index/adduser" className="btn btn-info">
              <i className="fa fa-user-plus" aria-hidden="true"></i>Adduser{" "}
            </Link>
          </div>
        </header>
      </div>

      {/* Search  add navbar this line means  */}
      <div className="container mt-5">
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
        <br />

        {/* Table data this line start */}
        
          <div className="">
            <div className="table -responsive">
              <table className="table table-responsive table-striped table-bordered table-hover">
                <thead className="thead-dark">
                  <tr
                    className="bg-info justify-center "
                    style={{ textAlign: "center" }}
                  >
                    <th>UserName</th>
                    <th>Designation of User</th>
                    <th>Personal Number</th>
                    <th>Organisation</th>
                    <th>Email ID</th>
                    <th> Mobile Number</th>
                    <th>User Type</th>
                    <th>Module Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsersList?.map((data, index) => {
                    return (
                      <tr style={{ textAlign: "center" }} key={index}>
                        <td>{data.userName}</td>
                        <td>{data.designation}</td>
                        <td>{data.personalNumber}</td>
                        <td>{data.organisation}</td>
                        <td>{data.emailId}</td>
                        <td>{data.mobileNo}</td>
                        <td>{data.role}</td>
                        <td>
                        {data.moduleName&&data?.moduleName?.map((name,i)=>{
                          return (
                            <p key={i}>{name}</p>
                          )
                        })}
                        </td>
                        <td>
                          <Link
                            to={`/admin/index/update/${data.id}/user`}
                            className="btn btn-success"
                          >
                            Edit<i className="fas fa-edit"></i>
                          </Link>{" "}
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => handleDelete(data.id, data.userName)}
                          >
                            Delete{" "}
                            <i className="fa fa-trash" aria-hidden="true"></i>{" "}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
              {/* pagination line  */}
              <Pagination
              currentPage={pageNumber}
              setCurrentPage={setPageNumber}
                totalPages={users?.totalPage}
              />
          </div>
       
      </div>
    </div>
  );
};

export default User;
