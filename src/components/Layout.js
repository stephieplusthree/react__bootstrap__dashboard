import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <Sidebar />
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default Layout;
