import React from 'react'
import {Link} from "react-router-dom"
import MovieSimpleDetail from '../Components/MovieSimpleDetail'

export default function Home() {
  return (
    <ul>
      <li>
        <div style={{display: 'flex', gap: '1rem'}}>
          <h2>Now Playing</h2>
          <Link to='/now_playing'>
            <button>...more</button>
          </Link>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
        </div>
      </li>
      <li>
        <div style={{display: 'flex', gap: '1rem'}}>
          <h2>Popular</h2>
          <button>...more</button>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
        </div>
      </li>
      <li>
        <div style={{display: 'flex', gap: '1rem'}}>
          <h2>Top Rated</h2>
          <button>...more</button>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
          <MovieSimpleDetail></MovieSimpleDetail>
        </div>
      </li>
    </ul>
  )
}
