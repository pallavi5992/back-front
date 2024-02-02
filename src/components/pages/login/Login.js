import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import "./style.css";
import Header from "../../header/Header";
import { loginAction } from "../../../redux/slice/auth/loginSlice";
import { loginSchema } from "../../../utils/schema";
import { captchaAction } from "../../../redux/slice/captcha/captchaSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [isCaptchaRefresh, setIsCaptchaRefresh] = useState(false);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();

  const { success } = useSelector((state) => state.loginSlice);

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

  useEffect(() => {
    if (success && redirectFlag && captcha) {
      navigate("/");
    }
  }, [success]);

  // Handling form
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        emailId: "",
        password: "",
        captcha: "",
        captchaHash: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        if (captcha) {
          dispatch(
            loginAction({
              emailId: values.emailId,
              password: values.password,
              captcha: values.captcha,
              captchaHash: captcha?.hash,
            })
          );
        }
        setRedirectFlag(true);
      },
    });

  return (
    <>
      {<Header />}
      <div className="login">
        <div className="login-box ">
          <form
            onSubmit={handleSubmit}
            className="row d-flex justify-content-center"
          >
            <div className="login-box-body col-md-12">
              <p className="login-box-msg">Sign in</p>
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
                <input
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  onPaste={(e) => e.preventDefault()}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="true"
                ></input>
                {errors.password && touched.password ? (
                  <div className="error-msg">{errors.password}</div>
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
                      autoComplete="true"
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
                  id="LoginBtn"
                >
                  Sign In
                </button>
              </div>
              <div className="forgotPass">
                <Link to="/admin/index/forgot/password" style={{textDecoration:"none"}}>Forgot Password</Link>
              </div>
            </div>
          </form>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Login;
