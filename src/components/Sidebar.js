import React from 'react';

function Sidebar() {
    return (
        <div className="position-sticky pt-md-5">
  <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
            <i className="fas fa-home"></i>
            <span className="ml-2">Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <i className="fas fa-user"></i>
            <span className="ml-2">Users</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
            <i className="fas fa-users"></i>
            <span className="ml-2">Teams</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <i className="fas fa-chart-bar"></i>
          <span className="ml-2">Reports</span>
        </a>
      </li>
    </ul>
</div>
    )
}

export default Sidebar
