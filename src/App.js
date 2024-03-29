import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";


import CreateCustomer from "./components/CreateCustomer";
import CustomerList from "./components/CustomerList";
import EditCustomer from "./components/EditCustomer";


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-customer"} className="nav-link">
            React MERN Stack App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/create-customer"} className="nav-link">
                  Create Customer
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/customer-list"} className="nav-link">
                  Customer List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            {/* <Route exact path="/create-student" element={<CreateStudent />} />
            <Route exact path="/edit-student/:id" element={<EditStudent />} />
            <Route exact path="/student-list" element={<StudentList />} /> */}
            <Route exact path="/create-customer" element={<CreateCustomer />} />
            <Route exact path="/edit-customer/:id" element={<EditCustomer />} />
            <Route exact path="/customer-list" element={<CustomerList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
