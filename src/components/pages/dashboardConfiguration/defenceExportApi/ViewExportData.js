import React from 'react'
import "./style.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ViewExportData = () => {



    const [searchTerm, setSearchItem] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerpage = 5;
    console.log(itemsPerpage);
  
    /* Row data */
    const tableData = [
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
  
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
      {
        columns1: "As on 31 March 2013",
        columns2: "2875.71",
        columns3: "789.73",
        columns4: "2085.98",
        columns5: "0.00",
        columns6: "1458.701",
        columns7: "1470.96",
        columns9: "156.32",
        columns8: "0.00",
      },
      {
        columns1: "As on 31 March 2014",
        columns2: "100",
        columns3: "public",
        columns4: "defence",
        columns5: "cpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2015",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 1 Dec 2016",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2017",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2018",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2019",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2020",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2021",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2022",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2023",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
      {
        columns1: "As on 31 March 2024",
        columns2: "500",
        columns3: "private",
        columns4: "defence",
        columns5: "Dpl",
        columns6: "11",
        columns7: "ministry",
        columns9: "defence",
        columns8: "CGPA",
      },
    ];
  
    /* search data logic */
    const filteredTableData = tableData.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  
    //filter and paginate the data
  
    const reversedTableData = filteredTableData.slice().reverse();
    // calculate the indicaes For pagination
    const indexOfLastItem = currentPage * itemsPerpage;
    const indexOfFirstItem = indexOfLastItem - itemsPerpage;
    const currentItems = reversedTableData.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
  
    const pageNumbers = [];
  
    for (
      let i = 1;
      i <= Math.ceil(reversedTableData.length / itemsPerpage);
      i++
    ) {
      pageNumbers.push(i);
    }
  
    const renderPageNumbers = pageNumbers.map((number) => (
      <li
        key={number}
        className={`page-itemk ${currentPage === number ? "active" : ""}`}
      >
        <a className="page-link" href="#" onClick={() => setCurrentPage(number)}>
          {number}
        </a>
      </li>
    ));


  return (
    <div className="form-group row ViewExportBody">
            
      <div className="ViewExportFormContainer">
      <br/>
        {/*  tabel 1*/}
        {/* Headding Line */}
        <div>
        <div className="">
          <ul
            className="nav nav-tabs pull-right ui-sortable-handle"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <li className="pull-left header">
              <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>

              <h3>
                <i className="fa fa-inbox"></i>DEFENCE EXPORT DATA
              </h3>
            </li>
          </ul>
         
        </div>
        <br/>
            <div style={{marginTop:"85px"}}>
          {/* Search  bar and show entry */}
          <div className="ViewExportContent">
            <form>
              <div className="row">
                <div className="col">
                  <label className="div.relative" style={{ display: "flex" }}>
                    Show
                    <select
                      className="form-select form-control input-sm"
                      aria-label="Default select example"
                      style={{ width: "98px", marginTop: "-6px" }}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    entries
                  </label>
                </div>
                <div
                  className="col"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <div className="" style={{ width: "210px" }}>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchItem(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <br />

          <div className="ViewExport_boxdata">
            <div className="table -responsive">
              <table className="table table-responsive table-striped table-bordered table-hover">
                <thead className="thead-dark red_background">
                  <tr className="justify-center">
                    <th id="wilder-row">
                      <span className="custom-checkbox" />
                      Year
                      <input type="checkbox" id="selectorAll" />
                      <label for="selectAll"></label>
                    </th>
                    <th id="wilder-row">
                    Export Authorizations to Private Companies (Rs Cr)
                    </th>
                    <th id="wilder-row">
                    Export by DPSU/7 New OF Companies* (Rs Cr)
                    </th>
                    <th id="wilder-row">
                    SCOMET Issued by DGFT (Rs Cr)
                    </th>
                    <th id="wilder-row">
                    Contract Value (Rs Cr)
                    </th>
                    <th id="wilder-row">
                    Total Export (Rs Cr)
                    </th>
                   

                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((rowData, index) => (
                    <tr key={index}>
                      <td>{rowData.columns1}</td>
                      <td>{rowData.columns2}</td>
                      <td>{rowData.columns3}</td>
                      <td>{rowData.columns4}</td>
                      <td>{rowData.columns5}</td>
                      <td>{rowData.columns6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* pagination line  */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      {/* disabled={currentPage<=1}  */}
                      Previous
                    </button>
                  </li>
                  {renderPageNumbers}
                  <li
                    className={`page-item ${
                      currentPage ===
                      Math.ceil(reversedTableData.length / itemsPerpage)
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <br />
          </div>
   

        </div>

        <br />
      </div>
    </div>
  )
}

export default ViewExportData