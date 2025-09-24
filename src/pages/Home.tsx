import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const projects = [
    {
      name: "DSA methods npm package",
      url: "https://www.npmjs.com/package/@raj-rathod/dsa-methods",
      description: "This package is developed for functionality of data structures and algorithms, some standard examples of algorithms are implemented"
    },
    {
      name: "PATH FINDING WITH DIJKSTRA",
      url: "https://dsa-visualization.github.io/shortest-path-finding/",
      description: "Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph"
    },
    {
      name: "Calendar without api",
      url: "https://raj-rathod.github.io/Calendar_without_Third_Party_api/",
      description: "This project is a Custom Calendar, it is build without any third party libraries and API's"
    }
  ]

  return (
    <div className="container margin-top">
      <h1 className="text-center mt-5 pt-5">Data Structures and Algorithms</h1>
      
      <div className="row mt-5 pt-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 col-6">
          <div className="d-flex justify-content-center">
            <Link to="/data-structure" className="text-decoration-none">
              <div className="circle d-flex align-items-center justify-content-center">
                <span style={{ fontSize: '3rem' }}>📊</span>
              </div>
            </Link>
          </div>
          <h4 className="text-center mt-3">Data Structure</h4>
        </div>
        <div className="col-lg-4 col-6">
          <div className="d-flex justify-content-center">
            <Link to="/algorithm" className="text-decoration-none">
              <div className="circle d-flex align-items-center justify-content-center">
                <span style={{ fontSize: '3rem' }}>⚙️</span>
              </div>
            </Link>
          </div>
          <h4 className="text-center mt-3">Algorithms</h4>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <div className="mt-5">
        <h4 className="text-center">Related Projects</h4>
        <div className="horizontal-scroll mt-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card p-4 rounded shadow-sm"
              onClick={() => window.open(project.url, '_blank')}
              style={{ 
                minWidth: '300px',
                backgroundColor: '#ebeeef',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(16, 203, 236, 0.76)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ebeeef'
              }}
            >
              <h5 className="text-uppercase">{project.name}</h5>
              <p className="m-0">
                {project.description.length > 80 
                  ? project.description.substring(0, 80) + '...' 
                  : project.description
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .circle {
          cursor: pointer;
          border-radius: 50%;
          width: 140px;
          height: 140px;
          background-color: rgb(13, 212, 238);
          box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
          transition: transform 0.3s ease;
        }
        
        .circle:hover {
          transform: scale(1.05);
        }
        
        .project-card {
          animation: float 2s infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default Home