import axios from "axios";
import React, { useEffect, useState } from "react";

import CustomerList from "./CustomerList";

function CreateStudent() {
  const [userForm, setUserForm] = useState({
    id: "",
    name: "",
    mobile: "",
    address: "",
    bday: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/customers/create-customer", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
            id: "",
            name: "",
            mobile: "",
            address: "",
            bday: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <h1>Create Customer</h1>
        <br />
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Id</label>
            <input
              type="text"
              className="form-control"
              name="id"
              id="id"
              value={userForm.id}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              id="mobile"
              value={userForm.mobile}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              value={userForm.address}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Birthday</label>
            <input
              type="date"
              className="form-control"
              name="bday"
              id="bday"
              value={userForm.bday}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <br />
        <CustomerList />
      </div>
    </div>
  );
}

export default CreateStudent;
