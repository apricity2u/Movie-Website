import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { replace, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function LoginForm() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ user: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1) ;
    }
  },[isLoggedIn]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login());
  }

  function handleFormInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    !isLoggedIn && (
      <div>
        <form onSubmit={handleSubmit} className="form-style">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="user"
            id="user"
            onChange={handleFormInput}
            placeholder="username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleFormInput}
            placeholder="password"
            required
          />
          <Button>Login</Button>
        </form>
      </div>
    )
  );
}
