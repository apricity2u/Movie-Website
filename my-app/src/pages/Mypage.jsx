import React from 'react'
import MovieSimpleDetail from '../Components/MovieSimpleDetail'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Mypage() {

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleLogout() {
    dispatch(logout())

    console.log(isLoggedIn)
    navigate('/')
  }

  return (
    <>
      <h2>Mypage</h2>
      <div>내가 찜한 영화</div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
      </div>
      <button onClick={handleLogout}>로그아웃</button>
    </>
    
  )
}
