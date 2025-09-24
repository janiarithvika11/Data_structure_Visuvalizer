import React, { useState } from 'react'
import ArrayVisualization from '../../components/visualizations/ArrayVisualization'

const ArrayPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="container margin-top">
      <h1 className="text-center">Array</h1>
      
      <div className="mt-4">
        <p>
          An Array is a linear data structure that collects elements of the same data type and store them in 
          <b> Contiguous and Adjacent memory location</b>. Array works on an indexing system start from 0 to (n-1) 
          where n is the size of the array.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/array.jpg" 
          alt="Array Example" 
          className="img-fluid"
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li>It is a derived data type, composed of a collection of various primitive data types</li>
          <li>Elements of an array are stored in <b>contiguous blocks in prime memory</b></li>
          <li>The name of the array stores the base address of the array. It acts as a pointer to the memory block where the first element has been stored</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li>Insertion</li>
          <li>Deletion</li>
          <li>Updation</li>
          <li>Searching</li>
          <li>Sorting</li>
        </ul>
      </div>

      <div className="mt-4">
        <div className="row">
          <div className="col-6 pe-0">
            <div 
              className={`p-3 rounded-start tab ${activeTab === 0 ? 'box-active' : 'box'}`}
              onClick={() => setActiveTab(0)}
            >
              <p className="text-center m-0">1D-Array</p>
            </div>
          </div>
          <div className="col-6 ps-0">
            <div 
              className={`p-3 rounded-end tab ${activeTab === 1 ? 'box-active' : 'box'}`}
              onClick={() => setActiveTab(1)}
            >
              <p className="text-center m-0">2D-Array</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        {activeTab === 0 && <ArrayVisualization />}
        {activeTab === 1 && (
          <div className="text-center p-5">
            <h5>2D Array Visualization</h5>
            <p>Coming soon...</p>
          </div>
        )}
      </div>

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li>Arrays in data structures help to solve some high level problems like the <b>Longest consecutive subsequence</b> program or some easy task like arranging the same things in ascending order</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>Arrays store multiple elements of the same type with the same name</li>
          <li>You can randomly access elements in the array using an index number</li>
          <li>Array memory is predefined, so there is no extra memory loss</li>
          <li>Arrays avoid memory overflow</li>
          <li>2D arrays can efficiently represent the tabular data</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>The number of elements in the array should be predefined</li>
          <li>An array is static it cannot alter its size after declaration</li>
          <li><b>Insertion and deletion</b> operations in the array is quite tricky as the array stores elements in continuous form</li>
          <li>Allocating excess memory than required may lead to memory wastage</li>
        </ul>
      </div>
    </div>
  )
}

export default ArrayPage