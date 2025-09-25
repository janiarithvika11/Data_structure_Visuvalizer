import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [searchKey, setSearchKey] = useState('')
  const location = useLocation()

  const dataStructureLinks = [
    { name: "Data Structure", route: "/data-structure" },
    { name: "Arrays", route: "/non-primitive/linear/array" },
    { name: "Stack", route: "/non-primitive/linear/stack" },
    { name: "Queue", route: "/non-primitive/linear/queue" },
    { name: "Linked List", route: "/non-primitive/linear/linked-list" },
    { name: "Tree", route: "/non-primitive/non-linear/tree" },
    { name: "Graph", route: "/non-primitive/non-linear/graph" },
    { name: "Trie", route: "/non-primitive/non-linear/trie" },
    { name: "Hash table", route: "/non-primitive/non-linear/hash-table" }
  ]

  const algorithmLinks = [
    { name: "Algorithms", route: "/algorithm" },
    { name: "Searching", route: "/algorithm/searching" },
    { name: "Sorting", route: "/algorithm/sorting" }
  ]

  const allLinks = [...dataStructureLinks, ...algorithmLinks]
  const filteredLinks = allLinks.filter(link => 
    link.name.toLowerCase().includes(searchKey.toLowerCase())
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          DSA Visualization
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Data Structures
              </a>
              <ul className="dropdown-menu">
                {dataStructureLinks.map((link, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" to={link.route}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Algorithms
              </a>
              <ul className="dropdown-menu">
                {algorithmLinks.map((link, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" to={link.route}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          
          <div className="col-xl-3 col-lg-4 col-md-8 dropdown">
            <input 
              className="form-control" 
              type="search" 
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search..." 
              data-bs-toggle="dropdown"
            />
            {searchKey && (
              <ul className="dropdown-menu show w-100">
                {filteredLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      className="dropdown-item" 
                      to={link.route}
                      onClick={() => setSearchKey('')}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {filteredLinks.length === 0 && (
                  <li className="dropdown-item text-center">No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar