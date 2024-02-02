import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { getCurrentUserLT, getToken } from "../../../../utils/util";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../../redux/slice/auth/logoutSlice";
const Navbar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [redirectFlag, setRedirectFlag] = useState(false);
  const {success}= useSelector((state) => state.logoutSlice);


  useEffect(() => {
    redirectFlag && success && navigate("/admin/index/login");
  }, [success]);

  const handleLogout = () => {
    setRedirectFlag(true);
    dispatch(logoutAction(getToken()));
  };

  const userName = getCurrentUserLT();

  return (
    <div>
      <div className="col-sm-12  main-header">
        <nav className="navbar">
          <div className="top_section">
            <div className="bars">
              <i className="fa fa-bars" onClick={toggle}></i>
            </div>
          </div>
          <div className="dropdown" style={{}}>
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              style={{
                backgroundColor: "rgb(14 5 98)",
                padding: "7px",
                borderRadius: "1px solid white",
                color: "white",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {userName?.userName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/admin/index/update/user/self/data">
                  Upadte Profile
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
