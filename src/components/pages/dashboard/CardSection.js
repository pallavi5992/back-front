import React from "react";
import "./cardsection.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const CardSection = () => {
  const cardData = [
    {
      heading: "DEFENCE EXPORT",
      price: "7,382.46",
      dateWise: "M",
    },
  ];

  return (
    <div className="container mt-5 ">
      <div className="row d-flex justify-content-">
        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading">DEFENCE EXPORT</h5>
                <p className="  me-4 mb-0 text-center text-primary fw-bold ">
                  2023-24
                </p>
                <p className="text-center text-success">
                  Rs<span className="number_cr_prod text-info">7,382.46</span>{" "}
                  Cr
                </p>
                <p className="text-center text-success">
                  <span className="fw-bold">2023-24</span> Target : Rs{" "}
                  <span className="fw-bold">20,000</span>Cr
                </p>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div className="d-flex">
                    <p className="logo_icon text-center">M</p>
                    <p className="text-primary">As on :10/11/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading">DEFENCE OFFSET</h5>
                <div className="ms-4 mt-3 ">
                  {/* <div className="d-flex justify-content-center mb-0"> */}
                  <ul className="list-unstyled d-flex   mb-0">
                    <li className="text_size pt-1">Claims Submitted -</li>
                    <li className=" text-info number_claim">
                      7207.99 <span className="mnUSD">Mn(USD)</span>
                    </li>
                  </ul>

                  <ul className="list-unstyled d-flex   ">
                    <li className="text_size pt-1">Claims Disposed - </li>
                    <li className=" text-info number_claim">
                      {" "}
                      6055.00 <span className="mnUSD">Mn(USD)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-center">
                  <span className="fw-bold text_off_obligaation">
                    Offset Obligation : 13215.29
                  </span>
                  <span className="text_mnUSD"> Mn(USD)</span>
                </p>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div className="d-flex">
                    <p className="logo_icon text-center">W</p>
                    <p className="text-primary">As on :10/11/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading">DEFENCE PRODUCTION</h5>
                <p className="text-center text-primary me-4 mb-0  fw-bold">
                  2023-24
                </p>
                <p className="text-center text-success mt-0 ">
                  Rs<span className="number_cr_prod text-info">20,111</span> Cr
                </p>
                <p className="text-center text-success">
                  <span className="fw-bold">2023-24</span> Target : Rs{" "}
                  <span className="fw-bold">135,000</span>Cr
                </p>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div className="d-flex">
                    <p className="logo_icon text-center">M</p>
                    <p className="text-primary">As on :30/06/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow ">
              <div className="card_content_div">
                <h5 className="text-center card-heading mx-2">
                  MISSION RAKSHA GYAN SHAKTI
                </h5>
                <div className="ms-5  ">
                  <ul className="list-unstyled d-flex  mb-0 ">
                    <li className="text_size pt-1">IPR Filed -</li>
                    <li className=" text-info number_claim">
                      5510 <span className="mnUSD">Mn(USD)</span>
                    </li>
                  </ul>

                  <ul className="list-unstyled d-flex   mb-0">
                    <li className="text_size pt-1">IPR Granted - </li>
                    <li className=" text-info number_claim">
                      {" "}
                      1927 <span className="mnUSD">Mn(USD)</span>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="ms-4 font_size_upto list-unstyled ms-5 ">
                    <li className="fw-bold text_off_obligaation">
                      Upto March 2022 Target :{" "}
                      <span className="text-info">4180</span>
                    </li>
                    <li className="fw-bold text_off_obligaation">
                      Upto March 2022 Target :{" "}
                      <span className="text-info">3883 </span> Mn $
                    </li>
                  </ul>
                </div>
                <div className="d-flex  pt-0 flex-column align-items-center">
                  <div className="d-flex ">
                    <p className="logo_icon text-center">W</p>
                    <p className="text-primary">As on :10/11/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading mb-0">MAKE PROJECTS</h5>
                <div className="ms-5 ">
                  <ul className="list-unstyled d-flex  mb-0 ">
                    <li className="text_size pt-3">As per SHQs -</li>
                    <li className=" ">
                      <ul className="make_li list-unstyled">
                        <li>
                          <IoMdArrowDropright />
                          Make-I: 44
                        </li>
                        <li>
                          <IoMdArrowDropright />
                          Make-II: 102
                        </li>
                        <li>
                          <IoMdArrowDropright />
                          Make-III: 3
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul className="list-unstyled d-flex   mb-0">
                    <li className="text_size pt-1">By DPSUs - </li>
                    <li className=" text-info number_claim"> 1975 </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="ms-4 font_size_upto list-unstyled ms-5">
                    <li className="fw-bold text_off_obligaation">
                      Upto 2024 Make I Target :{" "}
                      <span className="text-info">125 SHQs </span>
                    </li>
                    <li className="fw-bold text_off_obligaation">
                      Upto 2024 Make II Target :{" "}
                      <span className="text-info">4,000 DPSU </span>
                    </li>
                  </ul>
                </div>
                <div className="d-flex pt-0 flex-column align-items-center">
                  <div className="d-flex ms-4">
                    <p className="logo_icon text-center ms-3">M</p>
                    <p className=" ms-1 text-primary">As on :30/09/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading mx-4">
                  INNOVATIONS FOR DEFENCE EXCELLENCE
                </h5>
                <div className="ms-4">
                  <ul className="list-unstyled d-flex mx-3 mb-0 ">
                    <li className="text_size pt-1 mx-1  w-75">
                      Startups/MSME/Individual Innovators Engaged -
                    </li>
                    <li className=" text-info number_claim ">424 </li>
                  </ul>

                  <ul className="list-unstyled d-flex ms-4  mb-0">
                    <li className="text_size pt-1">Contracts Signed - </li>
                    <li className=" text-info number_claim"> 296 </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="ms-4 font_size_upto list-unstyled ms-5 ">
                    <li className="fw-bold text_off_obligaation">
                      Upto 2024 Target :{" "}
                      <span className="text-info">Startups 200</span>
                    </li>
                  </ul>
                </div>
                <div className="d-flex  pt-0 justify-content-center flex-column align-items-center">
                  <div className="d-flex ms-4">
                    <p className="logo_icon text-center">M</p>
                    <p className=" ms-1 text-primary">As on :02/11/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading mx-5">
                  UTTAR PRADESH DEFENCE CORRIDOR
                </h5>
                <div className="ms-3 mt-3 ">
                  <ul className="list-unstyled d-flex  mb-0">
                    <li className="text_size pt-1">
                      Investment Target Till 2024 -
                    </li>
                    <li className=" text-info number_claim">
                      <span className="mnUSD">Rs</span>10,000{" "}
                      <span className="mnUSD">Cr</span>
                    </li>
                  </ul>

                  <ul className="list-unstyled d-flex   ">
                    <li className="text_size pt-1">
                      Amount Invested so far -{" "}
                    </li>
                    <li className=" text-info number_claim">
                      <span className="mnUSD">Rs</span> 2,656{" "}
                      <span className="mnUSD">Cr </span>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div className="d-flex">
                    <p className="logo_icon text-center">M</p>
                    <p className=" ms-1 text-primary">As on :02/11/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading mx-5">
                  TAMILNADU DEFENCE CORRIDOR
                </h5>
                <div className="ms-3 mt-3 ">
                  <ul className="list-unstyled d-flex  mb-0">
                    <li className="text_size pt-1">
                      Investment Target Till 2024 -
                    </li>
                    <li className=" text-info number_claim">
                      <span className="mnUSD">Rs</span>10,000{" "}
                      <span className="mnUSD">Cr</span>
                    </li>
                  </ul>

                  <ul className="list-unstyled d-flex   ">
                    <li className="text_size pt-1">
                      Amount Invested so far -{" "}
                    </li>
                    <li className=" text-info number_claim">
                      <span className="mnUSD" >Rs</span> 4,021{" "}
                      <span className="mnUSD">Cr </span>
                    </li>
                  </ul>
                </div>

                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div className="d-flex">
                    <p className="logo_icon text-center">M</p>
                    <p className=" ms-1 text-primary">As on :02/11/2023</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-12 mb-4">
          <div className="border-div ">
            <div className="content-div  bg-white shadow">
              <div className="card_content_div">
                <h5 className="text-center card-heading">AI IN DEFENCE</h5>
                <div className="ms-5 mt-3 ">
                  <ul className="list-unstyled d-flex   mb-0">
                    <li className="text_size pt-1">Planned upto Mar 2024 -</li>
                    <li className=" text-info number_claim">106 </li>
                  </ul>

                  <ul className="list-unstyled d-flex   ">
                    <li className="text_size pt-1">Projects Completed - </li>
                    <li className=" text-info number_claim">44 </li>
                  </ul>
                </div>
                <p className="text-center">
                  <span className="fw-bold text_off_obligaation">
                    2022-23Target : 25 AI Projects
                  </span>
                </p>
                <div className="d-flex flex-column align-items-center justify-content-center ">
                  <div className="d-flex">
                    <p className="logo_icon text-center">Q</p>
                    <p className=" ms-1 text-primary">As on :12/01/2024</p>
                  </div>
                  <p className="btn_div text-center shadow py-1 pt-0 rounded">
                    more <FaArrowCircleRight className="arrow_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-2">
        <span class="update-dates">Q</span>
        <b>Quarterly</b>
        <span class="update-dates mt-1 ml-1">M</span>
        <b>Monthly</b>
        <span class="update-dates mt-1 ml-1">W</span>
        <b>Weekly</b>
      </div>
    </div>
  );
};

export default CardSection;
