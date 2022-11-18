import React from "react";
import { Link } from "react-router-dom";
import "./reports.scss";

const Reports = () => {
  return (
    <div className="reports">
      <Link to="/budak/reports/most-popular">
        <div> Most Popular Books</div>
      </Link>

      <Link to="/budak/reports/unreturned-books">
        <div> Unreturned Books</div>
      </Link>
      <Link to="/budak/reports/expired-books">
        <div> Expired Books</div>
      </Link>
      <Link to="/budak/reports/most-borrowers">
        <div> Users Who Borrowed The Most Books</div>
      </Link>
    </div>
  );
};

export default Reports;
