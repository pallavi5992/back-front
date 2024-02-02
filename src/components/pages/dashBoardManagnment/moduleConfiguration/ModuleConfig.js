import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dateModify, getToken } from "../../../../utils/util";
import { getConfigByModuleIdAction } from "../../../../redux/slice/moduleConfig/getModuleConfigByModuleIdSlice";
import { getAllModuleAction } from "../../../../redux/slice/mudule/getAllModuleSlice";
import { useFormik } from "formik";
import { addModuleConfigSchema } from "../../../../utils/schema";

import { addModuleConfigAction } from "../../../../redux/slice/moduleConfig/addModuleConfigSlice";
import { getAllModuleConfigAction } from "../../../../redux/slice/moduleConfig/getAllModuleConfigSlice";

const ModuleConfig = () => {
  const [inputEle, setInputEle] = useState([{ Target: "" }]);

  const [isModuleId, setisModuleId] = useState(0);
  const handleAddClick = () => {
    setInputEle([...inputEle, { Target: "" }]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputEle];
    list[index][name] = value;
    setInputEle(list);

    // If the changed input is 'Target', update the corresponding value in 'values.Target'
    if (name === "Target") {
      setValues({ ...values, Target: list.map((ele) => ele.Target).join(",") });
    }
  };
  const handleRemoveClick = (index) => {
    const list = [...inputEle];
    list.splice(index, 1);
    setInputEle(list);
  };

  const handleIsSetModuleId = (e) => {
    const selectedValue = parseInt(e.target.value);
    setisModuleId(selectedValue);
    resetForm();
  };

  // for api work
  const dispatch = useDispatch();
  const token = getToken();

  // get api calling by moduleId
  const { getConfigByModuleId } = useSelector(
    (state) => state.getModuleConfigByModuleIdSlice
  );

  useEffect(() => {
    dispatch(getConfigByModuleIdAction({ token: token, moduleId: isModuleId }));
    // setInputEle([...inputEle,getConfigByModuleId?getConfigByModuleId.Target:""])
  }, [isModuleId]);

  // calling Module data api
  const { allModule } = useSelector((state) => state.getAllModuleSlice);

  // calling allModule config api
  const {success} = useSelector((state) => state.addModuleConfigSlice);

  useEffect(() => {
    dispatch(getAllModuleConfigAction(token));
  }, [token,success]);
  const { getAllModuleConfig } = useSelector(
    (state) => state.getAllModuleConfigSlice
  );

  useEffect(() => {
    dispatch(getAllModuleAction(token));
  }, []);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setValues,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: getConfigByModuleId || {
      ModuleID: "",
      DataYearID: "",
      Target: "",
      TargetYearID: "",
      DataRefershFrequency: "",
      As_On_Date: "",
      StartupEngaged: "",
      ContractsSigned: "",
      ConsolidatedMonth: "",
      TargetFor: "",
    },

    validationSchema: addModuleConfigSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      const newValue = {
        ModuleID: values.ModuleID || isModuleId,
        DataYearID: values.DataYearID,
        Target: values.Target,
        TargetYearID: values.TargetYearID,
        DataRefershFrequency: values.DataRefershFrequency,
        As_On_Date: values.As_On_Date,
        StartupEngaged: values.StartupEngaged,
        ContractsSigned: values.ContractsSigned,
        ConsolidatedMonth: values.ConsolidatedMonth,
        TargetFor: values.TargetFor,
      };
      dispatch(
        addModuleConfigAction({
          token: token || "",
          values: { ...newValue, Target: inputEle },
        })
      );
      
    },
  });

  return (
    <div className="configContainer">
      <div className="Configcontent">
        <div className="logoAccesss">
          <div style={{ display: "flex" }}>
            <b>
              <i className="fa fa-inbox" style={{ padding: "8px" }}></i>
            </b>
            <h4>Module Configuration</h4>
          </div>
        </div>
        <div className="accessline"></div>
        <div className="configForm">
          <div style={{ width: "92%" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-horizontal">
                <hr />
              </div>
              <div>
                <div className="row">
                  <div className="">
                    <div
                      className="boxModule"
                      style={{
                        background: "#0abae5",
                        marginBottom: "10px",
                        height: "88px",
                        boxShadow:
                          "-6px 1px 0px 0 #0dcaf0, 5px 8px 19px 0 rgba(0, 0, 0, 0.075)",
                      }}
                    >
                      <div className="callout callout-info">
                        <div className="form-group selus">
                          <label>
                            <b>Select Module Name</b>
                          </label>
                          <select
                            id="ModuleID"
                            name="ModuleID"
                            tabIndex="1"
                            className="form-control"
                            style={{ width: "50%" }}
                            value={isModuleId}
                            onChange={handleIsSetModuleId}
                            onBlur={handleBlur}
                          >
                            {errors.ModuleID && touched.ModuleID ? (
                              <div className="error-msg">{errors.ModuleID}</div>
                            ) : null}
                            <option value="0">--Select--</option>
                            {allModule &&
                              allModule.map((module, index) => {
                                return (
                                  <option value={module.ModuleID} key={index}>
                                    {module.ModuleName}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="box box-warning assdivw">
                      <div className="box-body">
                        <div className="form-group">
                          <label>Data Year (Current)</label>
                          <select
                            name="DataYearID"
                            className="form-control"
                            tabIndex="2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.DataYearID}
                          >
                            {errors.DataYearID && touched.DataYearID ? (
                              <div className="error-msg">
                                {errors.DataYearID}
                              </div>
                            ) : null}
                            <option>--Select Year--</option>
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
                          <span id="TxtDateYearID"></span>
                        </div>

                        <div className="row template" id="txtRow">
                          <div className="dynamic">
                            <div className="col-md-6">
                              <div className="form-group" id="divCont">
                                <label>Target Year</label>
                                <select
                                  name="TargetYearID"
                                  className="form-control"
                                  tabIndex="3"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.TargetYearID}
                                >
                                  <option>--Select Year--</option>
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
                                {errors.TargetYearID && touched.TargetYearID ? (
                                  <div className="error-msg">
                                    {errors.TargetYearID}
                                  </div>
                                ) : null}
                                <span id="TxtTargetYearId"></span>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <label>Target</label>

                              {inputEle?.map((targetValue, index) => (
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="clone_area"
                                    tabIndex="4"
                                    name="Target"
                                    placeholder="Target"
                                    onBlur={handleBlur}
                                    value={targetValue.Target}
                                    onChange={(e) =>
                                      handleInputChange(e, index)
                                    }
                                  />
                                  {errors.Target && touched.Target ? (
                                    <div className="error-msg">
                                      {errors.Target}
                                    </div>
                                  ) : null}

                                  {inputEle.length - 1 === index && (
                                    <button
                                      id="btnAdd"
                                      type="button"
                                      style={{ marginLeft: "0px" }}
                                      onClick={handleAddClick}
                                      className="button-add plus"
                                    >
                                      +
                                    </button>
                                  )}

                                  {inputEle.length - 1 === index && (
                                    <button
                                      className="delete_btn plus"
                                      style={{ width: "20px" }}
                                      type="button"
                                      onClick={() =>
                                        inputEle.length > 1
                                          ? handleRemoveClick(index)
                                          : ""
                                      }
                                    >
                                      -
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Data Refresh Frequency</label>
                              <select
                                type="text"
                                name="DataRefershFrequency"
                                id="DataRefershFrequency"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                tabIndex="5"
                                value={values.DataRefershFrequency}
                              >
                                <option>--Select--</option>
                                <option value="1">Monthly</option>
                                <option value="2">Quarterly</option>
                                <option value="3">Weekly</option>
                              </select>
                              {errors.DataRefershFrequency &&
                              touched.DataRefershFrequency ? (
                                <div className="error-msg">
                                  {errors.DataRefershFrequency}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label for="exampleInputEmail1">As on Date</label>
                              <input
                                name="As_On_Date"
                                type="date"
                                className="form-control"
                                placeholder="As on Date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.As_On_Date}
                              />
                              {errors.As_On_Date && touched.As_On_Date ? (
                                <div className="error-msg">
                                  {errors.As_On_Date}
                                </div>
                              ) : null}
                              <span
                                className="field-validation-valid text-danger"
                                data-valmsg-for="As_On_Date"
                                data-valmsg-replace="true"
                              ></span>
                              <span id="TxtIssueDate"></span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Startups/MSME/Individual Innovators Engaged
                              </label>
                              <input
                                type="text"
                                name="StartupEngaged"
                                value={values.StartupEngaged}
                                className="form-control"
                                placeholder="Startups Engaged"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <span id="StartupsEngagedspn"></span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Contracts Signed</label>
                              <input
                                type="text"
                                name="ContractsSigned"
                                value={values.ContractsSigned}
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Contracts Signed"
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                        </div>

                        <div></div>
                        <div
                          className="text-center"
                          style={{
                            marginTop: "20px",
                            display: "flex",
                            gap: "9px",
                            justifyContent: "center",
                          }}
                        >
                          <span className="text-danger"></span>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            // id="btnCreSub"
                          >
                            Save
                          </button>
                          <a>
                            <button
                              type="button"
                              className="btn btn-primary"
                              name="btnCancel"
                              id="btnCreSub"
                            >
                              Cancel
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="text-center"></div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />
      {/* user deatals table data */}
      <div className="accessContainer">
        <div class=" content">
          <div className="accessline">
            <div className="assUserData">
              <h5>History of Module Configuration</h5>
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
                      <tr
                        className="bg-info justify-center"
                        style={{ textAlign: "center" }}
                      >
                        <th>Module Name</th>
                        <th>Data Year</th>
                        <th>Target Year</th>
                        <th>Target</th>
                        <th>Data Refresh Frequency</th>
                        <th>Startups</th>
                        <th>Contracts Signed</th>
                        <th>As on Date</th>
                        <th>ModifiedBy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getAllModuleConfig.map((data, index) => {
                      
                        return (
                          <tr style={{ textAlign: "center" }}>
                            <td>{data.moduleName}</td>
                            <td>{data.DataYearID}</td>
                            <td>{data.TargetYearID}</td>
                            <td>
                              {data?.Target.map((target, i) => {
                                return <p key={i}>{target.Target}</p>;
                              })}
                            </td>
                            <td>{data.DataRefershFrequency}</td>
                            <td>{data.StartupEngaged}</td>
                            <td>{data.ContractsSigned}</td>
                            <td>{data.As_On_Date}</td>
                            <td>{data.ModifiedBy}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  {/* pagination line  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleConfig;
