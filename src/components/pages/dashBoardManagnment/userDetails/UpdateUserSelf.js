import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../../../utils/util";
import { captchaAction } from "../../../../redux/slice/captcha/captchaSlice";
import { getUserByTokenAction } from "../../../../redux/slice/user/getUserByTokenSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { UpdateUserSchemaSelf } from "../../../../utils/schema";
import { updateUserByTokenAction } from "../../../../redux/slice/user/updateUserByTokenSlice";

const UpdateUserSelf = () => {
  const [isCaptchaRefresh, setIsCaptchaRefresh] = useState(false);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();
  const token = getToken();
  const dispatch = useDispatch();

  // for captch Calling
  useEffect(() => {
    dispatch(captchaAction());
  }, []);

  useEffect(() => {
    if (isCaptchaRefresh) {
      dispatch(captchaAction());
      setIsCaptchaRefresh(false);
    }
  }, [isCaptchaRefresh]);

  const { captcha } = useSelector((state) => state.captchaSlice);

  // calling getUser data 
  useEffect(()=>{
    dispatch(getUserByTokenAction(token))
  },[])

  const {users} = useSelector((state) => state.getUserByTokenSlice);
  const {success}=useSelector((state)=>state.upadateUserByTokenSlice)
  useEffect(() => {
    redirectFlag && navigate("/admin/index/user");
  }, [success]);

  const {values,handleBlur,handleChange,touched,handleSubmit,errors}=useFormik({
    initialValues:{
      role:users?.role,
      userName:users?.userName,
      emailAddress:users?.email,
      Mobile_No:users?.mobileNo,
      personalNumber:users?.personalNumber,
      Organisation:users?.organisation,
      Designation:users?.designation,
      captcha:"",
      captchaHash:"",
      oldPassword:"",
      newPassword:"",
      confirmPassword:""
    },
    enableReinitialize: true,
    validationSchema:UpdateUserSchemaSelf,
    onSubmit:(values,action)=>{
      const newValues={
        role:values.role,
        userName:values.userName,
        emailAddress:values.emailAddress,
        Mobile_No:values.Mobile_No,
        Designation:values.Designation,
        Organisation:values.Organisation,
        captcha:values.captcha,
        captchaHash:captcha?.hash,
        oldPassword:values.oldPassword,
        newPassword:values.newPassword,
        confirmPassword:values.confirmPassword,
      }
      dispatch(updateUserByTokenAction({ token:token?token:"", values: newValues }));
      setRedirectFlag(true);
    }

  })


  return (
    <div className="updateUser">
      <div className="contentUserAdd">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>
            <h3 style={{ color: "#0dc5f1" }}>Update user</h3>
          </strong>
        </div>

        <div
          className="addUserContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="formAddUser" style={{ width: "90%" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Role:-</b>{" "}
                </label>
                <div className="col-sm-10">
                <input
                 className="form-control"
                  type="text"
                  name="role"
                  id="role"
                  tabIndex="1"
                  placeholder="User Type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.role}
                  disabled
                />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>User Name:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Name of user"
                    className="form-control"                   
                    name="userName"
                    id="userName"
                    tabIndex="2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName ? (
                    <div className="error-msg">{errors.userName}</div>
                  ) : null}
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Email Address:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter the email ID"
                    tabIndex="3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emailAddress}
                    disabled
                  />
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  <b>Mobile Number:- </b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="Mobile_No"
                    id="Mobile_No"
                    placeholder="Enter the Mobile Number"
                    tabIndex="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Mobile_No}
                  />
                   {errors.Mobile_No && touched.Mobile_No ? (
                    <div className="error-msg">{errors.Mobile_No}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Designation:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="Designation"
                    id="Designation"
                    placeholder="Designation of user"
                    tabIndex="5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Designation}
                  />
                   {errors.Designation && touched.Designation ? (
                    <div className="error-msg">{errors.Designation}</div>
                  ) : null}
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Personal Number:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="personalNum"
                    placeholder=" Enter the Personal Number"
                    tabIndex="6"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.personalNumber}
                  />
                   {errors.personalNumber && touched.personalNumber ? (
                    <div className="error-msg">{errors.personalNumber}</div>
                  ) : null}
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Organisation:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="Organisation"
                    placeholder=" Organisation"
                    tabIndex="7"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Organisation}
                    disabled
                  />
                   {errors.Organisation && touched.Organisation ? (
                    <div className="error-msg">{errors.Organisation}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  <b>Old Password:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    placeholder="Enter old Password"
                    tabIndex="8"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.oldPassword}
                  />
                   {errors.oldPassword && touched.oldPassword ? (
                    <div className="error-msg">{errors.oldPassword}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  <b>New Password:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="Enter the new Password"
                    tabIndex="9"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newPassword}
                  />
                   {errors.newPassword && touched.newPassword ? (
                    <div className="error-msg">{errors.newPassword}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  <b>Confirm Password:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Enter the confirm Password"
                    tabIndex="10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                   {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error-msg">{errors.confirmPassword}</div>
                  ) : null}
                </div>
              </div>
              <br />

              <div
                className="form-group has-feedback"
                style={{ marginTop: "8px" }}
              >
                <div className="captcha text-center" id="LoginCaptcha">
                  <img src={captcha?.image} title="Captcha"></img>
                  <br />
                  <div>
                    <div className="CaptchImage">
                      <p
                        type="submit"
                        style={{
                          color: "deepskyblue",
                          textDecoration: "none",
                          width: "60px",
                        }}
                        onClick={() => setIsCaptchaRefresh(true)}
                      >
                        Refresh
                      </p>
                    </div>
                    <input
                      style={{ paddingLeft: "10px" }}
                      type="text"
                      required
                      placeholder="The Answer is: "
                      tabIndex="11"
                      id="captcha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.captcha}
                    ></input>
                     {errors.captcha && touched.captcha ? (
                    <div className="error-msg">{errors.captcha}</div>
                  ) : null}
                    <br />
                  </div>
                </div>
              </div>
              <br />

              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-spacingadduser"
                >
                  Submit
                </button>
                <Link
                  to="/admin/index/user"
                  className="btn btn-primary  btn-spacingadduser"
                >
                  cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default UpdateUserSelf;
