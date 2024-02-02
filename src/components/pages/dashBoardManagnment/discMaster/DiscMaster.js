import React from "react";
import "./style.css";
const DiscMaster = () => {
  return (
    <div className="updateUser">
      <div className="contentMaster">
        <div className="moduleHeading">
          <strong>
            {" "}
            <p>DicsMaster</p>{" "}
          </strong>
        </div>

        <div className="formUpdate">
          <form>
            <div className="form-group resizable-btn">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Disc master"
              />
              <br />
            </div>

            <button
              type="submit"
              className="btn btn-info btn-lg btn-block resizable-btn custom-padding1 btn-spacing1"
            >
              Save
            </button>

            <button
              to="/privatesector"
              className="btn btn-danger btn-lg btn-block resizable-btn custom-padding1 btn-spacing1"
            >
              Close
            </button>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
};

export default DiscMaster;
