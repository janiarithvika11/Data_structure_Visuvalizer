import React from 'react'

const SearchingPage: React.FC = () => {
  const searchingAlgorithms = [
    { name: "Linear Search", route: "/algorithm/searching/linear-search" },
    { name: "Binary Search", route: "/algorithm/searching/binary-search" },
    { name: "Jump Search", route: "/algorithm/searching/jump-search" },
    { name: "Interpolation Search", route: "/algorithm/searching/interpolation-search" },
    { name: "Exponential Search", route: "/algorithm/searching/exponential-search" }
  ]

  return (
    <div className="container margin-top">
      <h1 className="text-center">Searching Algorithms</h1>
      
      <div className="mt-4">
        <p>
          The searching algorithms are used to search or find one or more than one element from a dataset. 
          These types of algorithms are used to find elements from a specific data structure. Searching may be 
          sequential or not. If the data in the dataset are random, then we need to use sequential searching.
        </p>
      </div>

      <div className="mt-4">
        <h4>Types of Searches</h4>
        <ul>
          <li><b>Sequential Search:</b> In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search</li>
          <li><b>Interval Search:</b> These algorithms are specifically designed for searching in sorted data-structures. These are much more efficient than Linear Search. For example: Binary Search</li>
        </ul>
      </div>

      <div className="horizontal-scroll mt-4">
        {searchingAlgorithms.map((algorithm, index) => (
          <div key={index} className="box p-3">
            <p className="m-0">{algorithm.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h4>Linear Search</h4>
        <p>
          Linear Search is defined as a sequential search algorithm that starts at one end and goes through each 
          element of a list until the desired element is found, otherwise the search continues till the end of the data set.
        </p>
        <ul>
          <li><b>Time Complexity:</b> O(n)</li>
          <li><b>Space Complexity:</b> O(1)</li>
          <li><b>Best Case:</b> O(1) - when element is at first position</li>
          <li><b>Worst Case:</b> O(n) - when element is at last position or not present</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Binary Search</h4>
        <p>
          Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
          The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).
        </p>
        <ul>
          <li><b>Time Complexity:</b> O(log n)</li>
          <li><b>Space Complexity:</b> O(1) for iterative, O(log n) for recursive</li>
          <li><b>Prerequisite:</b> Array must be sorted</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Applications of Searching Algorithms</h4>
        <ul>
          <li>Database queries</li>
          <li>Information retrieval systems</li>
          <li>Finding elements in data structures</li>
          <li>Pattern matching in strings</li>
          <li>Web search engines</li>
          <li>File systems</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchingPage