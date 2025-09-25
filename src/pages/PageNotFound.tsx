import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound: React.FC = () => {
  return (
    <div className="container margin-top">
      <section className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="text-center">
          <div className="mb-4">
            <span style={{ fontSize: '8rem' }}>🔍</span>
          </div>
          <h2>Oops! Something went wrong</h2>
          <p className="text-muted">Try different routes to find destination</p>
          
          <div className="d-flex justify-content-center mt-5 gap-3">
            <Link to="/data-structure" className="box p-3 text-decoration-none">
              <p className="m-0">Data Structures</p>
            </Link>
            <Link to="/algorithm" className="box p-3 text-decoration-none">
              <p className="m-0">Algorithms</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound