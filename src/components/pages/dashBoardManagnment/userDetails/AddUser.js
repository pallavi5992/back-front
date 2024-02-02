import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../../../redux/slice/user/addUserSlice";
import { getToken,getCurrentUserLT } from "../../../../utils/util";
import { userSchema } from "../../../../utils/schema";
import { captchaAction } from "../../../../redux/slice/captcha/captchaSlice";

const AddUser = () => {
  const [redirectFlag, setRedirectFlag] = useState(false);
  const [isCaptchaRefresh, setIsCaptchaRefresh] = useState(false);
  const navigate = useNavigate();
  const token = getToken();
  const dispatch = useDispatch();
  const { success,message } = useSelector((state) => state.addUserSlice);

  useEffect(() => {
    dispatch(captchaAction());
  }, []);

// useEffect(()=>{
//   if(message=="No token provided"){
//     navigate("/");
//   }
// },[message])

 

  useEffect(() => {
    if (isCaptchaRefresh) {
      dispatch(captchaAction());
      setIsCaptchaRefresh(false);
    }
  }, [isCaptchaRefresh]);

  const { captcha } = useSelector((state) => state.captchaSlice);
  // Redirecting after successfulf add

  useEffect(() => {
    redirectFlag && success && navigate("/admin/index/user");
  }, [success]);

  const { values, handleBlur, handleChange, touched, handleSubmit, errors } =
    useFormik({
      initialValues: {
        User_Name: "",
        Email_Id: "",
        Password: "",
        confirmPassword: "",
        Organisation: "",
        Designation: "",
        Mobile_No: "",
        ModifiedBy: "",
        personalNumber: "",
        UserType: "",
        captcha: "",
        captchaHash: "",
      },
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        const newValues = {
          User_Name: values.User_Name,
          Email_Id: values.Email_Id,
          Password: values.Password,
          confirmPassword: values.confirmPassword,
          Organisation: values.Organisation,
          Designation: values.Designation,
          Mobile_No: values.Mobile_No,
          ModifiedBy: getCurrentUserLT.id,
          personalNumber: values.personalNumber,
          UserType: values.UserType,
          captcha: values.captcha,
          captchaHash: captcha?.hash,
        };
        dispatch(addUserAction({ token:token?token:"", values: newValues }));
        setRedirectFlag(true);
      },
    });

  return (
    <div className="updateUser">
      <div className="contentUserAdd">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>
            <h5 style={{ color: "#0dc5f1", marginTop: "20px" }}>Add User</h5>
          </strong>
        </div>

        <div
          className="addUserContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="formAddUser" style={{ width: "90%" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label for="UserType" className="col-sm-2 col-form-label">
                  <b>User Type:-</b>{" "}
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-control "
                    name="UserType"
                    id="UserType"
                    tabIndex="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.UserType}
                  >
                    <option>--Select User Role--</option>
                    <option value="SuperAdmin">Super Admin</option>
                    <option value="Admin">Module Admin</option>
                    <option value="Unit">Restricted User-AI</option>
                    <option value="Organization">
                      Restricted User-offset & AI
                    </option>
                    <option value="Factory">Restricted User-offset & AI</option>
                  </select>{" "}
                  {errors.UserType && touched.UserType ? (
                    <div className="error-msg">{errors.UserType}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Name of User:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Name of user"
                    className="form-control"
                    name="User_Name"
                    id="User_Name"
                    tabIndex="2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.User_Name}
                  />
                  {errors.User_Name && touched.User_Name ? (
                    <div className="error-msg">{errors.User_Name}</div>
                  ) : null}
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  <b>Designation of User:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="Designation"
                    placeholder="Designation of user"
                    name="Designation"
                    tabIndex="3"
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
                    id="personalNumber"
                    placeholder="Enter the Personal Number"
                    name="personalNumber"
                    tabIndex="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.personalNumber}
                  />
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
                    name="Organisation"
                    placeholder=" Organisation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    tabIndex="5"
                    value={values.Organisation}
                  />
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
                    className="form-control "
                    id="Email_Id"
                    name="Email_Id"
                    placeholder="Enter the email ID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    tabIndex="6"
                    value={values.Email_Id}
                  />
                  {errors.Email_Id && touched.Email_Id ? (
                    <div className="error-msg">{errors.Email_Id}</div>
                  ) : null}
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
                    id="Mobile_No"
                    name="Mobile_No"
                    placeholder="Enter the Mobile Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    tabIndex="7"
                    value={values.Mobile_No}
                  />
                  {errors.Mobile_No && touched.Mobile_No ? (
                    <div className="error-msg">{errors.Mobile_No}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  <b>Password:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    name="Password"
                    placeholder="Enter the Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    tabIndex="8"
                    value={values.Password}
                  />
                  {errors.Password && touched.Password ? (
                    <div className="error-msg">{errors.Password}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  <b>Conform Password:-</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter the conform Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    tabIndex="9"
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
                style={{ marginTop: "8px", }}
              >
                <div className="captcha text-center" id="LoginCaptcha">
                  <img src={captcha?.image} title="Captcha"></img>
                  <br />
                  <div>
                    <div className="CaptchImage">
                    <p
                      type="submit"
                      style={{ color: "deepskyblue", textDecoration: "none",width:"60px" }}
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
                      name="captcha"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="true"
                    />
                    {errors.captcha && touched.captcha ? (
                      <div className="error-msg">{errors.captcha}</div>
                    ) : null}
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
                  className="btn btn-primary btn-spacingadduser"
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

export default AddUser;
