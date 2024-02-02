import React from "react";
// import "./style.css";
// const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
//   const buttonData = [1, 2, 3, 4, 5];
//   return totalPages >= 1 ? (
//     <div className="pagination ">
//       {/* Previous Button */}
//       <button
//         disabled={pageNumber <= 0}
//         type="button"
//         className="prev"
//         onClick={() => setPageNumber && setPageNumber(pageNumber - 1)}
//         hidden={pageNumber <= 0}
//       >
//         Prev
//       </button>
//       <button
//         disabled={pageNumber >= totalPages - 1}
//         type="button"
//         className="activeBtn"
//         onClick={() => setPageNumber && setPageNumber(pageNumber)}
//       >
//         {pageNumber + 1}
//       </button>
//       {/* Button 2 */}
//       <button
//         disabled={pageNumber >= totalPages - 1}
//         type="button"
//         className="pageBtn"
//         onClick={() => setPageNumber && setPageNumber(pageNumber + 1)}
//         hidden={pageNumber + 1 >= totalPages - 1}
//       >
//         {pageNumber + 2}
//       </button>{" "}
//       {/* Button  3 */}
//       <button
//         // disabled={pageNumber >= totalPages - 1}
//         type="button"
//         className="pageBtn"
//         onClick={() => setPageNumber && setPageNumber(pageNumber + 2)}
//         hidden={pageNumber + 2 >= totalPages - 1}
//       >
//         {pageNumber + 3}
//       </button>{" "}
//       {/* Button 4 */}
//       <button
//         disabled={pageNumber >= totalPages - 1}
//         type="button"
//         className="pageBtn"
//         onClick={() => setPageNumber && setPageNumber(pageNumber + 3)}
//         hidden={pageNumber + 3 >= totalPages - 1}
//       >
//         {pageNumber + 4}
//       </button>{" "}
//       {/* Button 5 */}
//       <button
//         disabled={pageNumber >= totalPages - 1}
//         type="button"
//         className="pageBtn"
//         onClick={() => setPageNumber && setPageNumber(pageNumber + 4)}
//         hidden={pageNumber + 4 >= totalPages - 1}
//       >
//         {pageNumber + 5}
//       </button>
//       <button
//         disabled={pageNumber >= totalPages - 1}
//         type="button"
//         className="next"
//         onClick={() =>
//           setPageNumber && setPageNumber && setPageNumber(pageNumber + 1)
//         }
//         hidden={pageNumber >= totalPages - 1}
//       >
//         Next
//       </button>
//     </div>
//   ) : (
//     ""
//   );
// };

// export default Pagination;

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
             
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {/* disabled={currentPage<=1}  */}
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-itemk ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
               type="submit"
                onClick={() => setCurrentPage(number)}
              >
                {number+1}
              </button>
            </li>
          ))}
          
          <li
            className={`page-item ${
              currentPage+1 === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              type="submit"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
              </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
