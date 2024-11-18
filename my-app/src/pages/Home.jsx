import React from 'react'
import {Link} from "react-router-dom"

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
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
        </div>
      </li>
      <li>
        <div style={{display: 'flex', gap: '1rem'}}>
          <h2>Popular</h2>
          <button>...more</button>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
        </div>
      </li>
      <li>
        <div style={{display: 'flex', gap: '1rem'}}>
          <h2>Top Rated</h2>
          <button>...more</button>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
          <div>
            <img src="" alt="영화포스터" />
            <h3>영화제목</h3>
          </div>
        </div>
      </li>
    </ul>
  )
}
