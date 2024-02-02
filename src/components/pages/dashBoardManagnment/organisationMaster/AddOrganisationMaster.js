import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { addOraganisationAction } from "../../../../redux/slice/organisationMaster/addOrganisationSlice";
import { useDispatch, useSelector } from "react-redux";
import { addOraganisationSchema } from "../../../../utils/schema";
import { useFormik } from "formik";
import { getToken } from "../../../../utils/util";

const AddOrganisationMaster = () => {
  const [redirectFlag, setRedirectFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token=getToken()

  const {addOraganisationSlice}=useSelector((state)=>state)
 
  useEffect(()=>{
    (redirectFlag&&addOraganisationSlice?.success)&&navigate("/admin/index/organisationmaster");
  },[addOraganisationSlice?.success])


  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        Code:"",
        Name:"",
        PublicSector:""
      },
      validationSchema: addOraganisationSchema,
      onSubmit: (values, action) => {
        const newValue={
          Code:values.Code,
          Name:values.Name,
          PublicSector:values.PublicSector
         }
          dispatch(
            addOraganisationAction({token:token||"",values:newValue})
          );
        setRedirectFlag(true);
      },
    });

  return (

    <div className="updateusermaster">
      <div className="contentUserAddmaster">
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ color: "#0dc5f1" }}>Create Organization</h4>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <div className="formAddUser" style={{ width: "90%" }}>
            <form  className="paddingmastertop" onSubmit={handleSubmit}>
            <div className="form-group row">
                <label for="staticEmail" className="col-form-label">
                  Organisation Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Name"
                    className="form-control"
                    name="Name"
                    id="Name"
                    tabIndex="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Name}
                  />
                   {errors.Name && touched.Name ? (
                    <div className="error-msg">{errors.Name}</div>
                  ) : null}
                </div>
              </div>
              <br/>
              <div className="form-group row">
                <label for="staticEmail" className="col-form-label"> Sector  </label>
                <div className="col-sm-10">
                <select 
                className="form-control" 
                name="PublicSector"
                id="PublicSector"
                tabIndex="2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.PublicSector}
                >
                  <option >--Select sectore--</option>
                  <option value="0">Private sector</option>
                  <option value="1">Public sector</option>
                </select>
                {errors.PublicSector && touched.PublicSector ? (
                    <div className="error-msg">{errors.PublicSector}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <label for="staticEmail" className=" col-form-label">
                  Organisation Short Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Enter the Action"
                    className="form-control "
                    name="Code"
                id="Code"
                tabIndex="2"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Code}
                  />
                  {errors.Code && touched.Code ? (
                    <div className="error-msg">{errors.Code}</div>
                  ) : null}
                </div>
              </div>
              <br/>

              <div className="d-flex justify-content-center"> 
               
               <button type="submit" className="btn btn-primary btn-spacingaddusermaster ">
                Submit
              </button>
              <Link to="/admin/index/organisationmaster" className="btn btn-primary  btn-spacingaddusermaster ">
                cancel
              </Link>
              </div>
            </form>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrganisationMaster;
