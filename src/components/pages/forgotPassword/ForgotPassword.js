import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Loader from "../../common/UI/loader/Loader";
import Header from "../../header/Header";
import { forgotPasswordSchema } from "../../../utils/schema";
import { captchaAction } from "../../../redux/slice/captcha/captchaSlice";
import { forgotPasswordAction } from "../../../redux/slice/auth/forgotPasswordSlice";

const ForgotPassword = () => {
  const [isCaptchaRefresh, setIsCaptchaRefresh] = useState(false);
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

  const { loading } = useSelector((state) => state.forgotPasswordSlice);

  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        emailId: "",
        captcha: "",
        captchaHash: "",
      },
      validationSchema: forgotPasswordSchema,
      onSubmit: (values, action) => {
        if (captcha) {
          dispatch(
            forgotPasswordAction({
              emailId: values.emailId,
              captcha: values.captcha,
              captchaHash: captcha?.hash,
            })
          );
        }
        // setRedirectFlag(true);
      },
    });

  return (
    <>
      {<Header />}
      <div className="login">
        <div className="login-box ">
          <form
            className="row d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="login-box-body col-md-12">
              <p className="login-box-msg">Forgot Password</p>

              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className="form-group has-feedback">
                    <input
                      autoComplete="true"
                      className="form-control"
                      placeholder="Email Address"
                      type="email"
                      name="emailId"
                      id="email"
                      value={values.emailId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.emailId && touched.emailId ? (
                      <div className="error-msg">{errors.emailId}</div>
                    ) : null}
                  </div>

                  <div
                    className="form-group has-feedback"
                    style={{ marginTop: "8px" }}
                  >
                    <div className="captcha" id="LoginCaptcha">
                      {captcha && (
                        <img src={captcha?.image} title="Captcha"></img>
                      )}

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
                          autoComplete="true"
                          value={values.captcha}
                        ></input>
                        {errors.captcha && touched.captcha ? (
                          <div className="error-msg">{errors.captcha}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="text-center" style={{ marginTop: "8px" }}>
                <p>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block   btn-flat btnblue"
                  >
                    Send Link to E-mail
                  </button>
                </p>
                <p>
                  <Link
                    className="btn btn-primary btn-block btn-flat btnblue"
                    to="/admin/index/login"
                  >
                    Cancel
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
