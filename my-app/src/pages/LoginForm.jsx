import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({ user: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  })

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login());
  }

  function handleFormInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    !isLoggedIn && (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
        <label htmlFor="user">Username</label>
        <input type="text" name="user" id="user" onChange={handleFormInput} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleFormInput}
        />
        <button>로그인</button>
      </form>
    )
  );
}
