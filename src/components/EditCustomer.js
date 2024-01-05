import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

function EditCustomer() {
  const [userForm, setUserForm] = useState({
    id: "",
    name: "",
    mobile: "",
    address: "",
    bday: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/customers/update-customer/" + params.id, {
        id: userForm.id,
        name: userForm.name,
        mobile: userForm.mobile,
        address: userForm.address,
        bday: userForm.bday,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/create-customer");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/customers/get-customer/" + params.id)
      .then((res) => {
        setUserForm({
          id: res.data.data.id,
          name: res.data.data.name,
          mobile: res.data.data.mobile,
          address: res.data.data.address,
          bday: new Date(res.data.data.bday).toISOString().split("T")[0],
        });
      });
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        <h1 className="form-title">Edit Customer</h1>
        <br />
        <form onSubmit={onUpdate}>
            <dev className="mb-3">
            <label className="form-label">Id</label>
            <input
                type="text"
                className="form-control"
                name="id"
                id="id"
                value={userForm.id}
                onChange={inputsHandler}
            />
            </dev>
            <dev className="mb-3">
            <label className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={userForm.name}
                onChange={inputsHandler}
            />
            </dev>
            <dev className="mb-3">
            <label className="form-label">Mobile</label>
            <input
                type="text"
                className="form-control"
                name="mobile"
                id="mobile"
                value={userForm.mobile}
                onChange={inputsHandler}
            />
            </dev>
            <dev className="mb-3">
            <label className="form-label">Address</label>
            <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                value={userForm.address}
                onChange={inputsHandler}
            />
            </dev>
            <dev className="mb-3">
            <label className="form-label">Bday</label>
            <input
                type="date"
                className="form-control"
                name="bday"
                id="bday"
                value={userForm.bday}
                onChange={inputsHandler}
            />
            </dev>          
            <br />
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCustomer;
