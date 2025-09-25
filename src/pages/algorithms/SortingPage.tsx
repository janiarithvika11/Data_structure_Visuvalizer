import React from 'react'
import { Link } from 'react-router-dom'

const SortingPage: React.FC = () => {
  const sortingAlgorithms = [
    { name: "Selection Sort", route: "/algorithm/sorting/selection-sort" },
    { name: "Insertion Sort", route: "/algorithm/sorting/insertion-sort" },
    { name: "Merge Sort", route: "/algorithm/sorting/merge-sort" },
    { name: "Quick Sort", route: "/algorithm/sorting/quick-sort" },
    { name: "Counting Sort", route: "/algorithm/sorting/counting-sort" },
    { name: "Radix Sort", route: "/algorithm/sorting/radix-sort" },
    { name: "Bucket Sort", route: "/algorithm/sorting/bucket-sort" },
    { name: "Shell Sort", route: "/algorithm/sorting/shell-sort" }
  ]

  return (
    <div className="container margin-top">
      <h1 className="text-center">Sorting Algorithms</h1>
      
      <div className="mt-4">
        <p>
          A sorting algorithm is a method for reorganizing a large number of items into a specific order, 
          such as alphabetical, highest-to-lowest value or shortest-to-longest distance. Sorting algorithms 
          take lists of items as input data, perform specific operations on those lists and deliver ordered arrays as output.
        </p>
      </div>

      <div className="mt-4">
        <h4>Characteristics of Sorting Algorithms</h4>
        <ul>
          <li><b>Speed (Time Complexity):</b> The most important criterion when selecting a sorting method is its speed</li>
          <li><b>Space Complexity:</b> Not only time complexity is relevant for sorting methods, but also space complexity</li>
          <li><b>Stability:</b> In stable sorting methods, the relative sequence of elements that have the same sort key is maintained</li>
          <li><b>Comparison sorts / non-comparison sorts:</b> Most sorting methods are based on comparison of two elements</li>
          <li><b>Recursive / non-recursive:</b> A recursive sorting algorithm requires additional memory on the stack</li>
        </ul>
      </div>

      <div className="horizontal-scroll mt-4">
        {sortingAlgorithms.map((algorithm, index) => (
          <div key={index} className="box p-3">
            <p className="m-0">{algorithm.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h4>Classification of Sorting Algorithms</h4>
        <ul>
          <li><b>Based on Number of Swaps:</b> Selection Sort requires the minimum number of swaps</li>
          <li><b>Based on Number of Comparisons:</b> Most sorting algorithms require at least O(nlogn) comparisons</li>
          <li><b>Based on Recursion:</b> Some algorithms like Quick Sort use recursive techniques</li>
          <li><b>Based on Stability:</b> Insertion sort, Merge Sort, and Bubble Sort are stable</li>
          <li><b>Based on Extra Space:</b> Sorting algorithms are said to be in place if they require constant O(1) extra space</li>
        </ul>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/sorting.jpg" 
          alt="Sorting Complexity Comparison" 
          className="img-fluid"
          style={{ maxWidth: '600px' }}
        />
      </div>
    </div>
  )
}

export default SortingPage