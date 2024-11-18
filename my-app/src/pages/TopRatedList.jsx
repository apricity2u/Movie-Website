import React from 'react'
import MovieSimpleDetail from '../Components/MovieSimpleDetail'

export default function TopRatedList() {
  return (
    <>
    <h2>TopRatedList</h2>
    <div style={{ display: "flex", gap: "1rem" }}>
      <MovieSimpleDetail></MovieSimpleDetail>
      <MovieSimpleDetail></MovieSimpleDetail>
      <MovieSimpleDetail></MovieSimpleDetail>
      <MovieSimpleDetail></MovieSimpleDetail>
    </div>
  </>
  )
}
