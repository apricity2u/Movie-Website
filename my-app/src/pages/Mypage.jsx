import React from 'react'
import MovieSimpleDetail from '../Components/MovieSimpleDetail'

export default function Mypage() {
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
    </>
    
  )
}
