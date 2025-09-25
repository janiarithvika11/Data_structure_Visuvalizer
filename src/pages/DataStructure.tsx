import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DataStructure: React.FC = () => {
  const [primitiveTypeShow, setPrimitiveTypeShow] = useState(false)
  const [nonprimitiveTypeShow, setNonprimitiveTypeShow] = useState(false)
  const [linearData, setLinearData] = useState(false)
  const [nonLinearData, setNonLinearData] = useState(false)

  const primitiveDataTypeShow = () => {
    setPrimitiveTypeShow(true)
    setNonprimitiveTypeShow(false)
  }

  const nonprimitiveDataTypeShow = () => {
    setPrimitiveTypeShow(false)
    setNonprimitiveTypeShow(true)
  }

  const linearDataShow = () => {
    setNonLinearData(false)
    setLinearData(true)
  }

  const nonlinearDataShow = () => {
    setNonLinearData(true)
    setLinearData(false)
  }

  return (
    <div className="container margin-top">
      <h1 className="text-center">Data Structure</h1>
      
      <div className="mt-4">
        <p>
          <b>Data Structure:</b> A data structure is a specialized format for organizing, processing, 
          retrieving and storing data. Data structures make it easy for users to access and work with 
          data they need in appropriate ways. Most importantly, data structure frame the organization 
          of information so that machines and humans can better understand it.
        </p>
      </div>

      <div className="mt-4">
        <h4>Why are data structures important</h4>
        <ul>
          <li>Data structures are the building blocks for more sophisticated applications.</li>
          <li>It is not only important to use data structures, but it is also important to choose the proper type of data structure for each task.</li>
        </ul>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="box-data p-3">
          <p className="m-0 text-black">Types of data structure</p>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div style={{ width: '1px', height: '50px', backgroundColor: '#6c757d' }}></div>
      </div>

      <div className="d-flex justify-content-center">
        <div style={{ width: '80%', height: '2px', backgroundColor: '#6c757d' }}></div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <div 
          className="box-data p-3 tab" 
          onClick={primitiveDataTypeShow}
        >
          <p className="m-0">Primitive Data</p>
        </div>
        <div 
          className="box-data p-3 tab" 
          onClick={nonprimitiveDataTypeShow}
        >
          <p className="m-0">Non-primitive Data</p>
        </div>
      </div>

      {primitiveTypeShow && (
        <div className="mt-4">
          <div className="d-flex justify-content-center">
            <div style={{ width: '1px', height: '50px', backgroundColor: '#6c757d' }}></div>
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ width: '60%', height: '2px', backgroundColor: '#6c757d' }}></div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="box-data p-3 tab">
              <p className="m-0">Integer</p>
            </div>
            <div className="box-data p-3 tab">
              <p className="m-0">Float</p>
            </div>
            <div className="box-data p-3 tab">
              <p className="m-0">Character</p>
            </div>
            <div className="box-data p-3 tab">
              <p className="m-0">Boolean</p>
            </div>
          </div>
        </div>
      )}

      {nonprimitiveTypeShow && (
        <div className="mt-4">
          <div className="d-flex justify-content-center">
            <div style={{ width: '1px', height: '50px', backgroundColor: '#6c757d' }}></div>
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ width: '60%', height: '2px', backgroundColor: '#6c757d' }}></div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div 
              className="box-data p-3 tab" 
              onClick={linearDataShow}
            >
              <p className="m-0">Linear Data</p>
            </div>
            <div 
              className="box-data p-3 tab" 
              onClick={nonlinearDataShow}
            >
              <p className="m-0">Non-linear Data</p>
            </div>
          </div>

          {linearData && (
            <div className="mt-4">
              <div className="d-flex justify-content-center">
                <div style={{ width: '1px', height: '50px', backgroundColor: '#6c757d' }}></div>
              </div>
              <div className="d-flex justify-content-center">
                <div style={{ width: '80%', height: '2px', backgroundColor: '#6c757d' }}></div>
              </div>
              <div className="d-flex justify-content-between mt-3 flex-wrap">
                <Link to="/non-primitive/linear/array" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Array</p>
                </Link>
                <Link to="/non-primitive/linear/stack" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Stack</p>
                </Link>
                <Link to="/non-primitive/linear/queue" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Queue</p>
                </Link>
                <Link to="/non-primitive/linear/linked-list" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Linked List</p>
                </Link>
              </div>
            </div>
          )}

          {nonLinearData && (
            <div className="mt-4">
              <div className="d-flex justify-content-center">
                <div style={{ width: '1px', height: '50px', backgroundColor: '#6c757d' }}></div>
              </div>
              <div className="d-flex justify-content-center">
                <div style={{ width: '80%', height: '2px', backgroundColor: '#6c757d' }}></div>
              </div>
              <div className="d-flex justify-content-between mt-3 flex-wrap">
                <Link to="/non-primitive/non-linear/tree" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Tree</p>
                </Link>
                <Link to="/non-primitive/non-linear/graph" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Graph</p>
                </Link>
                <Link to="/non-primitive/non-linear/trie" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Trie</p>
                </Link>
                <Link to="/non-primitive/non-linear/hash-table" className="box-data p-3 tab text-decoration-none">
                  <p className="m-0">Hash Table</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default DataStructure