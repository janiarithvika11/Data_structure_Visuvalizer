import React from 'react'
import { Link } from 'react-router-dom'

const Algorithm: React.FC = () => {
  const algorithmTypes = [
    { name: "Searching", route: "/algorithm/searching" },
    { name: "Sorting", route: "/algorithm/sorting" }
  ]

  return (
    <div className="container margin-top">
      <h1 className="text-center">Algorithms</h1>
      
      <div className="mt-4">
        <p>
          An algorithm is a procedure used for solving a problem or performing a computation. 
          Algorithms act as an exact list of instructions that conduct specified actions step by step 
          in either hardware- or software-based routines.
        </p>
      </div>

      <div className="mt-4">
        <h4>What are the Characteristics of an Algorithm</h4>
        <ul>
          <li><b>Clear and Unambiguous:</b> The algorithm should be clear and unambiguous. Each of its steps should be clear in all aspects and must lead to only one meaning.</li>
          <li><b>Well-Defined Inputs:</b> If an algorithm says to take inputs, it should be well-defined inputs.</li>
          <li><b>Well-Defined Outputs:</b> The algorithm must clearly define what output will be yielded and it should be well-defined as well.</li>
          <li><b>Finite-ness:</b> The algorithm must be finite, i.e. it should terminate after a finite time.</li>
          <li><b>Feasible:</b> The algorithm must be simple, generic, and practical, such that it can be executed with the available resources.</li>
          <li><b>Language Independent:</b> The Algorithm designed must be language-independent, i.e. it must be just plain instructions that can be implemented in any language.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Types of Algorithm</h4>
        <ul>
          <li><b>Brute Force Algorithm:</b> It is the simplest approach for a problem. A brute force algorithm is the first approach that comes to finding when we see a problem.</li>
          <li><b>Recursive Algorithm:</b> A recursive algorithm is based on recursion. In this case, a problem is broken into several sub-parts and called the same function again and again.</li>
          <li><b>Sorting Algorithm:</b> Sorting is arranging a group of data in a particular manner according to the requirement.</li>
          <li><b>Searching Algorithm:</b> Searching algorithms are the ones that are used for searching elements or groups of elements from a particular data structure.</li>
          <li><b>Divide and Conquer Algorithm:</b> This algorithm breaks a problem into sub-problems, solves a single sub-problem and merges the solutions together.</li>
          <li><b>Dynamic Programming Algorithm:</b> This algorithm uses the concept of using the already found solution to avoid repetitive calculation.</li>
          <li><b>Greedy Algorithm:</b> In this type of algorithm the solution is built part by part.</li>
          <li><b>Backtracking Algorithm:</b> The backtracking algorithm basically builds the solution by searching among all possible solutions.</li>
        </ul>
      </div>

      <div className="horizontal-scroll mt-4">
        {algorithmTypes.map((algorithm, index) => (
          <Link 
            key={index}
            to={algorithm.route} 
            className="box p-3 text-decoration-none"
          >
            <p className="m-0">{algorithm.name}</p>
          </Link>
        ))}
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>It is easy to understand</li>
          <li>An algorithm is a step-wise representation of a solution to a given problem</li>
          <li>In Algorithm the problem is broken down into smaller pieces or steps hence, it is easier for the programmer to convert it into an actual program</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>Writing an algorithm takes a long time so it is time-consuming</li>
          <li>Understanding complex logic through algorithms can be very difficult</li>
          <li>Branching and Looping statements are difficult to show in Algorithms</li>
        </ul>
      </div>
    </div>
  )
}

export default Algorithm