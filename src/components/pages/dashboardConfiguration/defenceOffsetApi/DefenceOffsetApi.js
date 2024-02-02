import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const DefenceOffsetApi = () => {
  const [searchTerm, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerpage = 6;
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
      columns1: "As on 31 March 2012",
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
    <div className="form-group row offsetBody">
      <div className="offsetContainer">
        <div className="">
          <ul
            className="nav nav-tabs pull-right ui-sortable-handle"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <li className="pull-left header">
              <i style={{ fontSize: "20px", fontWeight: "bold" }}></i>

              <h3>
                <i className="fa fa-inbox"></i>Deffence Export API
              </h3>
            </li>
          </ul>
          <div>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-top text-center">
              <a
                href="/"
                className="d-flex align-items-center col-md-3 mb-4  text-dark text-decoration-none"
              ></a>
              <ul className="nav col-12   ">
                <li>
                  <Link  className="btn btn-primary btn-lg btn-block">
                    <i className="fa-solid fa-user-plus" aria-hidden="true"></i>
                    Defence Offset DOMW API
                  </Link>
                </li>
              </ul>
            </header>
          </div>
        </div>

        {/* Headding Line */}
      </div>

      <div className="offsetFormContainer">
        {/*  tabel 1*/}
        {/* Headding Line */}
        <div>
          <div className="offsetContent">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-3 ">
              <h3> Defence Offset Yearly Data</h3>
            </footer>
          </div>

          {/* Search  bar and show entry */}
          <div className="offsetContent">
            <form>
              <div className="row">
                <div className="col">
                  <label className="div.relative" style={{ display: "flex" }}>
                    Show
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      className="form-control input-sm"
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

          <div className="offset_boxdata">
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
                      Total Claims Submitted to CGDA (in Mn $)
                    </th>
                    <th id="wilder-row">
                      Incomplete Applications / Clarifcation Sought From OEMs
                      (in Mn $)
                    </th>
                    <th id="wilder-row">
                      Complete Claims Submitted to CGDA (in Mn $) (in Mn $)
                    </th>
                    <th id="wilder-row">
                      tableData Claims Under Examindation By DOMW(in Mn $)
                    </th>
                    <th id="wilder-row">
                      Claims Under Examindation By CGDA(in Mn $)
                    </th>
                    <th id="wilder-row">Claims Verified (in Mn $)</th>
                    <th id="wilder-row">Claims Rejected (in Mn $)</th>
                    <th id="wilder-row">Claims Rejected By DOMW(in Mn $)</th>
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
                      <td>{rowData.columns7}</td>
                      <td>{rowData.columns9}</td>
                      <td>{rowData.columns8}</td>
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
          {/* tbale of defence Offset api 2  */}
          {/* Headding Line */}
          <div className="offsetContent">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-3 ">
              <h3> Defence Offset Offline Data</h3>
            </footer>
          </div>
           {/* Search  bar and show entry */}
          <div className="offsetContent">
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

          <div className="offset_boxdata">
            <div className="table -responsive">
              <table className="table table-responsive table-striped table-bordered table-hover">
                <thead className="thead-dark red_background">
                  <tr className="justify-center">
                    <th id="wilder-row">
                      <span className="custom-checkbox" />
                      Name
                      <input type="checkbox" id="selectorAll" />
                      <label for="selectAll"></label>
                    </th>
                    <th id="wilder-row">Code</th>
                    <th id="wilder-row">Sector</th>
                    <th id="wilder-row">Production</th>
                    <th id="wilder-row">Defence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ajay yadav</td>
                    <td>ajay@gmail.com</td>
                    <td>developer</td>
                    <td>BPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>Pankaj </td>
                    <td> Kumar@gmail.com</td>
                    <td>developer mode</td>
                    <td>BPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>Dinesh </td>
                    <td> Dinesh@gmail.com</td>
                    <td>email</td>
                    <td>CDIBPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>shyam </td>
                    <td> dinesh@gmail.com</td>
                    <td>email</td>
                    <td>Deper</td>
                    <td>Saler</td>
                  </tr>

                  <tr>
                    <td>DIksha </td>
                    <td> yadav@gmail.com</td>
                    <td>edit</td>
                    <td>BPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>rakha </td>
                    <td> Pal@gmail.com</td>
                    <td>email</td>
                    <td>CPL</td>
                    <td>Vactor</td>
                  </tr>
                </tbody>
              </table>

              {/* pagination line  */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <br />

          {/* tbale of defence Offset api 3 */}
          {/* Headding Line */}
          <div className="offsetContent">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-3 ">
              <h3> Defence Offset Offline Data</h3>
            </footer>
          </div>
           {/* Search  bar and show entry */}
          <div className="offsetContent">
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

          <div className="offset_boxdata">
            <div className="table -responsive">
              <table className="table table-responsive table-striped table-bordered table-hover">
                <thead className="thead-dark red_background">
                  <tr className="justify-center">
                    <th id="wilder-row">
                      <span className="custom-checkbox" />
                      Name
                      <input type="checkbox" id="selectorAll" />
                      <label for="selectAll"></label>
                    </th>
                    <th id="wilder-row">Code</th>
                    <th id="wilder-row">Sector</th>
                    <th id="wilder-row">Production</th>
                    <th id="wilder-row">Defence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ajay yadav</td>
                    <td>ajay@gmail.com</td>
                    <td>developer</td>
                    <td>BPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>Pankaj </td>
                    <td> Kumar@gmail.com</td>
                    <td>developer mode</td>
                    <td>BPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>Dinesh </td>
                    <td> Dinesh@gmail.com</td>
                    <td>email</td>
                    <td>CDIBPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>shyam </td>
                    <td> dinesh@gmail.com</td>
                    <td>email</td>
                    <td>Deper</td>
                    <td>Saler</td>
                  </tr>

                  <tr>
                    <td>DIksha </td>
                    <td> yadav@gmail.com</td>
                    <td>edit</td>
                    <td>BPL</td>
                    <td>NIC</td>
                  </tr>

                  <tr>
                    <td>rakha </td>
                    <td> Pal@gmail.com</td>
                    <td>email</td>
                    <td>CPL</td>
                    <td>Vactor</td>
                  </tr>
                </tbody>
              </table>

              {/* pagination line  */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>

    /* ajay yadav */

    // <div className="updateusermasteroffset">
  );
};

export default DefenceOffsetApi;
