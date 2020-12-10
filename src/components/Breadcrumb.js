import React from "react";

function Breadcrumb() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Overview
          </li>
        </ol>
      </nav>
      <h1 className="h2">Dashboard</h1>
      <p>This is the homepage of a simple React Bootstrap Dashboard.</p>
    </div>
  );
}

export default Breadcrumb;
