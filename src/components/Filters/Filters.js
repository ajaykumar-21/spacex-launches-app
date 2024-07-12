import React from "react";

const Filters = ({ setYearFilter, setStatusFilter }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setYearFilter(e.target.value)}>
        <option value="">All Years</option>
        {[...Array(15).keys()].map((i) => (
          <option key={i} value={2006 + i}>
            {2006 + i}
          </option>
        ))}
      </select>

      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All Status</option>
        <option value="success">Success</option>
        <option value="failure">Failure</option>
      </select>
    </div>
  );
};

export default Filters;
