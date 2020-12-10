import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light p-3">
                <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
                    <a className="navbar-brand" href="#">
                        React Bootstrap Dashboard
                    </a>
                    <button className="navbar-toggler d-md-none collapsed mb-3" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-12 col-md-4 col-lg-2">
                    <input className="form-control form-control-dark" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                </div>
                <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                            Hello, Jane Doe!
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
