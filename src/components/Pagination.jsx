import React from 'react';

const Pagination = (props) => (
    <nav aria-label="...">
  <ul className="pagination justify-content-center mt-5">
    <li className={"page-item " + (props.page === 0 ? "disabled" : "")}>
      <span className="page-link" onClick={props.goToPrevious}>Previous</span>
    </li>
    <li className="page-item active">
      <span className="page-link">
        {props.page + 1}
        <span className="sr-only">(current)</span>
      </span>
    </li>
    
    <li className={"page-item " + (props.page === props.totalpages ? "disabled" : "")}>
      <span className="page-link" onClick={props.goToNext}>Next</span>
    </li>
  </ul>
</nav>
)

export default Pagination;