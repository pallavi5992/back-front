import React from 'react'
import { Link} from "react-router-dom"
import "./style.css"
const DefenceChallenge = () => {
  return (
    <div className="updateUser">
      <div className="contentChallenges">
 <div className='moduleHeading'>
     <strong>  <p>Defence Challenge</p> </strong>

 </div>

        <div className="formUpdate">
          <form>
        
            <div className="form-group resizable-btn">

              <select className="form-control" id="exampleFormControlSelect1">
                <option>--Sector--</option>
                <option>Public sector</option>
                <option>Private sector</option>
              </select>
            </div>
            <br />
            <div className="form-group resizable-btn">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Organisatio Short Name"
              />
              <br />
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block resizable-btn custom-padding1 btn-spacing1">
              Submit
            </button>

            <button to="/privatesector" className="btn btn-primary btn-lg btn-block resizable-btn custom-padding1 btn-spacing1">
              Cancel
            </button>
          </form>
        </div>
        <br />
      </div>
    </div>
  )
}

export default DefenceChallenge