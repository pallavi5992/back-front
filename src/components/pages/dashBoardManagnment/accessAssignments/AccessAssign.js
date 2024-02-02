import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getUserNameIdAction } from "../../../../redux/slice/user/getUserNameIdSlice";
import { getAllModuleAction } from "../../../../redux/slice/mudule/getAllModuleSlice";
import { getAccessAssessmentAction } from "../../../../redux/slice/accessAssessment/getAccessAssessmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../../utils/util";
import { addAccessAssessmentAction } from "../../../../redux/slice/accessAssessment/addAccessAssessmentSlice";
import { useFormik } from "formik";
import { addAccessAssessmentSchema } from "../../../../utils/schema";
import { getAllUserAction } from "../../../../redux/slice/user/getAllUserSlice";
import { deleteUserAction } from "../../../../redux/slice/user/deleteUserSlice";
import Pagination from "../../../common/UI/pagination/Pagination";

const AccessAssign = () => {
  const [isUserId, setIsUserId] = useState(0);
  const [moduleCheckboxes, setModuleCheckboxes] = useState({});
  const [isModuleId, setIsModuleId] = useState([]);
  const dispatch = useDispatch();
  const token = getToken();
  // get User Name and Id Api calling
  const { users } = useSelector((state) => state.getUserNameIdSlice);
  useEffect(() => {
    dispatch(getUserNameIdAction(token));
  }, []);

  // calling Module data api
  const { allModule } = useSelector((state) => state.getAllModuleSlice);

  useEffect(() => {
    dispatch(getAllModuleAction(token));
  }, []);

  // calling get access Accessment for user api
  const {} = useSelector((state) => state.getAccessAssessmentSlice);
  useEffect(() => {
    dispatch(getAccessAssessmentAction({ token: token, id: isUserId }));
  }, [isUserId]);

  // setUserId
  const handleUserId = (e) => {
    const selectedValue = parseInt(e.target.value);
    setIsUserId(selectedValue);
  };

  // handle checkBox
  const handleCheckboxClick = (moduleId) => {
    setModuleCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [moduleId]: !prevCheckboxes[moduleId],
    }));

    // Use the selected module ID to update the isModuleId array
    setIsModuleId((prevIds) => {
      if (prevIds.includes(moduleId)) {
        return prevIds.filter((id) => id !== moduleId);
      } else {
        return [...prevIds, moduleId];
      }
    });
  };

  const successAfterAssign = useSelector(
    (state) => state.addAccessAssessmentSlice
  );

  // for User
  const [pageNumber, setPageNumber] = useState(0);
  const [dataLimit, setDataLimit] = useState(10);

  const userData = useSelector((state) => state.getAllUserSlice);

  const { success } = useSelector((state) => state.deleteUserSlice);

  // Deleting User
  const handleDelete = (id, name) => {
    window.confirm(`Are you sure? You want to delete '${name}'?`) &&
      dispatch(deleteUserAction({ token, id }));
  };

  // Getting All Users
  useEffect(() => {
    token &&
      dispatch(
        getAllUserAction({
          token: token,
          pageNumber: pageNumber,
          dataLimit: dataLimit,
        })
      );
  }, [token, pageNumber, dataLimit, success, successAfterAssign?.success]);

  const handleDataLimitChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setDataLimit(selectedValue);
  };

  const { values, handleBlur, handleChange, touched, handleSubmit, errors,resetForm } =
    useFormik({
      initialValues: {
        UserID: "",
        ModuleID: "",
      },
      // validationSchema: addAccessAssessmentSchema,
      onSubmit: (values, action) => {
        const newValues = {
          UserID: isUserId.toString(),
          ModuleID: isModuleId,
        };
        dispatch(
          addAccessAssessmentAction({
            token: token ? token : "",
            values: newValues,
          })
        );
        // setRedirectFlag(true);
        resetForm()
      },
    });

  return (
    <div className="accessContainer">
      <div className="content">
        <div className="logoAccesss">
          <div style={{ display: "flex" }}>
            <i className="fa fa-inbox" style={{ padding: "8px" }}></i>
            <h4>Access Assignment</h4>
          </div>
        </div>
        <div className="accessline"></div>
        <div className="accessForm">
          <form action="" style={{ marginTop: "32px" }} onSubmit={handleSubmit}>
            <div className="form-group col">
              <label for="UserID">Select User</label>
              <br />
              <select
                className="form-control"
                id="UserID"
                onChange={handleUserId}
                name="UserType"
                tabIndex="1"
                onBlur={handleBlur}
                //  onClick={handleCheckbox}
                value={isUserId}
              >
                <option>--Select User--</option>
                {users &&
                  users.map((user, index) => {
                    return (
                      <option value={user.UserId} key={index}>
                        {user.User_Name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <br></br>
            <label htmlFor="exampleFormControlSelect1">Select Module</label>
            {allModule &&
              allModule?.map((module, index) => {
                const isChecked = moduleCheckboxes[module?.ModuleID];
                return (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={module.ModuleID}
                      value={module.ModuleID}
                      id={`flexCheckDefault_${module.ModuleID}`}
                      // onChange={handleChange}
                      onBlur={handleBlur}
                      onChange={() => handleCheckboxClick(module.ModuleID)}
                      resetForm={resetForm}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDefault_${module.ModuleID}`}
                      key={index}
                    >
                      {module.ModuleName}
                    </label>
                  </div>
                );
              })}
            <br />
            <div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/admin/index/user" className="btn btn-primary">
                  Cancel
                </Link>
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>
      <br />
      {/* user deatals table data */}
      <div className="accessContainer">
        <div className=" content">
          <div className="accessline">
            <div className="assUserData">
              <h5>User Details</h5>
              <a
                href="#demo"
                className="btn btn-primary"
                data-bs-toggle="collapse"
              >
                Click Here
              </a>
              <div id="demo" className="collapse">
                <div></div>
                <div className="table -responsive">
                  <table className="table table-responsive table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                      <tr className="bg-info" style={{ textAlign: "center" }}>
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
                      {userData &&
                        userData.users?.dataItems?.map((data, index) => {
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
                                {data?.moduleName&&data?.moduleName?.map((name, i) => {
                                  return <p key={i}>{name}</p>;
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
                                  onClick={() =>
                                    handleDelete(data.id, data.userName)
                                  }
                                >
                                  Delete{" "}
                                  <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                  ></i>{" "}
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
                  totalPages={userData?.users?.totalPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessAssign;
