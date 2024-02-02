import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getToken } from '../../../../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { captchaAction } from '../../../../redux/slice/captcha/captchaSlice';
import { getUserByIdAction } from '../../../../redux/slice/user/getUserByIdSlice';
import { updateUserByIdAction } from '../../../../redux/slice/user/updateUserByIdSlice';
import { UpdateUserSchemaSelf } from '../../../../utils/schema';
import { useFormik } from 'formik';

const UpdateUser = () => {
  const [isCaptchaRefresh, setIsCaptchaRefresh] = useState(false);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();
  const token = getToken();
  const dispatch = useDispatch();
  const { id } = useParams();

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


  //calling get user by id
  useEffect(() => {
    dispatch(getUserByIdAction({ token, id }));
  }, []);
  const {users}= useSelector((state) => state.getUserByIdSlice);
  
 
  // calling update api
  const {success}=useSelector((state)=>state.updateUserByIdSlice);
;
  useEffect(() => {
    redirectFlag&&success && navigate("/admin/index/user");
  }, [success]);

  const {values,handleBlur,handleChange,touched,handleSubmit,errors,resetForm}=useFormik({
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
      
    },
    enableReinitialize: true,
    validationSchema:UpdateUserSchemaSelf,
    onSubmit:(values,action)=>{
      const newValues={
        role:values.role,
        userName:values.userName,
        emailAddress:values.emailAddress,
        Mobile_No:values.Mobile_No,
        personalNumber:values?.personalNumber,
        Designation:values.Designation,
        Organisation:values.Organisation,
        captcha:values.captcha,
        captchaHash:captcha?.hash,
       
      }
      dispatch(updateUserByIdAction({ token:token?token:"", values: newValues,id:id }));
      setRedirectFlag(true);
      resetForm()
    }

  })

    return (
        <div className="updateUser">
        <div className="contentUserAdd">
          <div style={{ display: "flex", justifyContent: "center" }}>
          <strong>
                <h3 style={{color:"#0dc5f1"}}>Update user</h3>
              </strong>
          </div>
  
          <div
            className="addUserContainer"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="formAddUser" style={{ width: "90%" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label"><b>Role:-</b>  </label>
                  <div className="col-sm-10">
                  <select 
                  className="form-control"
                  id="role"
                   name="role"
                   tabIndex="1"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.role}
                   >
                    <option>--Select User Role--</option>
                    <option value="SuperAdmin">Super Admin</option>
                    <option value="Admin">Module Admin</option>
                    <option value="Unit">Restricted User-AI</option>
                    <option value="Organization">Restricted User-offset & AI</option>
                    <option value="Factory">Restricted User-offset & AI</option>
                  </select>
                  </div>
                </div>
                <br/>
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label" >
                    <b>User Name:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                     type="text"
                       placeholder="Name of user"
                        className="form-control"
                         id="userName"
                         tabIndex="2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                         />
                  </div>
                </div>
                 <br />
  
                 <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label" >
                    <b>Email Address:-</b>
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name='emailAddress'
                      placeholder="Enter the email ID"
                      id="emailAddress"
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
                      id="Mobile_No"
                      name='Mobile_No'
                      placeholder="Enter the Mobile Number"
                      tabIndex="4"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Mobile_No}
                      
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label" >
                    <b>Organisation:-</b>
                  </label>
                  <div className="col-sm-10">
                    
                    <input
                      type="text"
                      className="form-control"
                      id="Organisation"
                      placeholder=" Organisation"
                      name='Organisation'
                      tabIndex="7"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Organisation}
                      disabled
                    />
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
                      id="Designation"  
                      name='Designation'
                      placeholder="Designation of user"
                      tabIndex="5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Designation}
                       />
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
                      name='personalNumber'
                       placeholder=" Enter the Personal Number"
                       tabIndex="6"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.personalNumber}
                       />
                  </div>
                </div>
               
                <br /> 
                <div className="form-group has-feedback" style={{ marginTop: "8px" }}>
                  <div className="captcha text-center" id="LoginCaptcha">
                    <img
                      src={captcha?.image}
                      title="Captcha"
                    ></img>
                    <br />
                    <div>
                    <div className='CaptchImage'>
                    <p
                        type="submit"
                        style={{ color: "deepskyblue", textDecoration: "none" , width: "60px",}}
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
                        tabIndex="8"
                        name='captcha'
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
                 
                 <button type="submit" className="btn btn-primary btn-spacingadduser">
                  Submit
                </button>
                <Link to="/admin/index/user" className="btn btn-primary  btn-spacingadduser">
                  cancel
                </Link></div>
            
  
              </form>
            </div>
          </div>
          <br />
        </div>
  
  
      </div>
    )
}

export default UpdateUser