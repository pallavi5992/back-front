import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import Header from "../../header/Header";

import { resetPasswordSchema } from "../../../utils/schema";
import { captchaAction } from "../../../redux/slice/captcha/captchaSlice";
import { resetPasswordAction } from "../../../redux/slice/auth/resetPasswordSlice";
// import {forget}

const ResetPassword = () => {
  const [isCaptchaRefresh, setIsCaptchaRefresh] = useState(false);
  const {token} = useParams();

  const dispatch = useDispatch();
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

  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        Password: "",
        confirmPassword: "",
        captcha: "",
        captchaHash: "",
      },
      validationSchema: resetPasswordSchema,
      onSubmit: (values, action) => {
        if (captcha) {
          const newValue = {
            Password: values.Password,
            confirmPassword: values.confirmPassword,
            captcha: values.captcha,
            captchaHash: captcha?.hash,
          };
          dispatch(resetPasswordAction({ values: newValue, token: token }));
        }
        // setRedirectFlag(true);
      },
    });

  return (
    <>
      {<Header />}
      <div className="login">
        <div className="login-box ">
          <form className="row d-flex justify-content-center" onSubmit={handleSubmit}>
            <div className="login-box-body col-md-12">
              <p className="login-box-msg">Reset Password</p>
              <div className="form-group has-feedback">
                <input
                  autoComplete="true"
                  className="form-control"
                  placeholder="Enter new password"
                  type="password"
                  name="Password"
                  id="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Password}
                ></input>
                {errors.Password && touched.Password ? (
                  <div className="error-msg">{errors.Password}</div>
                ) : null}
              </div>

              <div className="form-group has-feedback">
                <input
                  autoComplete="true"
                  className="form-control"
                  placeholder="Enter confirm password"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                ></input>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="error-msg">{errors.confirmPassword}</div>
                ) : null}
              </div>

              <div
                className="form-group has-feedback"
                style={{ marginTop: "8px" }}
              >
                <div className="captcha" id="LoginCaptcha">
                  {captcha && <img src={captcha?.image} title="Captcha"></img>}

                  <br />
                  <div>
                    <p
                      type="submit"
                      href=""
                      style={{
                        color: "deepskyblue",
                        textDecoration: "none",
                        width: "60px",
                      }}
                      onClick={() => setIsCaptchaRefresh(true)}
                    >
                      Refresh
                    </p>
                    <input
                      style={{ paddingLeft: "10px" }}
                      type="text"
                      placeholder="Enter Captcha"
                      name="captcha"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.captcha}
                    ></input>
                    {errors.captcha && touched.captcha ? (
                      <div className="error-msg">{errors.captcha}</div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="text-center" style={{ marginTop: "8px" }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-block   btn-flat btnblue"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
