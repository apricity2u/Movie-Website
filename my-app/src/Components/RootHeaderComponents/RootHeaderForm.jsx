import React from 'react'

export default function RootHeaderForm() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "200px"}}>
    <label htmlFor="user">Username</label>
    <input type="text" name="user" id="user" />
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" />
    <button>로그인</button>
  </form>
  )
}
