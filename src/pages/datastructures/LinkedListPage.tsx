import React from 'react'

const LinkedListPage: React.FC = () => {
  return (
    <div className="container margin-top">
      <h1 className="text-center">Linked List</h1>
      
      <div className="mt-4">
        <p>
          A linked list is a linear data structure as well as a dynamic data structure. 
          A linked list consists of nodes where each node contains a data field and reference(address) 
          to the next node in the list.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/linked-list.jpg" 
          alt="Linked List Example" 
          className="img-fluid"
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Types of Linked Lists</h4>
        <ul>
          <li><b>Single Linked List:</b> A single linked list is the most common type of linked list. Each node has data and an address field that contains a reference to the next node.</li>
          <li><b>Double Linked List:</b> In the double linked list, there are three fields: the previous pointer, the data, and the next pointer.</li>
          <li><b>Circular Linked List:</b> The circular linked list is extremely similar to the single linked list. The only difference is that the last node is connected with the first node.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li>It can be visualized as a chain of nodes where each node contains a data field and reference to the next node</li>
          <li>The first node of the linked list is called <b className="text-warning">Head</b> of the linked list</li>
          <li>The last node of the linked list is pointing to NULL which indicates that it is the last node</li>
          <li>Unlike arrays, linked list elements are not stored at contiguous memory locations</li>
          <li>Linked lists are dynamic in nature</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li>Insertion</li>
          <li>Deletion</li>
          <li>Searching</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li>Implementation of stack and queue</li>
          <li>Implementation of graphs: adjacency list representation</li>
          <li>Dynamic memory allocation</li>
          <li>Maintaining directory of names</li>
          <li>Performing arithmetic operations on long integers</li>
          <li>Undo and redo functionality</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li><b>Dynamic data structure:</b> A linked list can grow and shrink at runtime</li>
          <li><b>No memory wastage:</b> Efficient memory utilization can be achieved</li>
          <li><b>Implementation:</b> Linear data structures like stack and queue are often easily implemented using linked list</li>
          <li><b>Insertion and deletion:</b> Operations are quite easier in the linked list</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li><b>Memory usage:</b> More memory is required compared to an array</li>
          <li><b>Traversal:</b> Traversal is more time consuming compared to an array</li>
          <li><b>Reverse traversing:</b> In a single linked list reverse traversal is not possible</li>
          <li><b>Random access:</b> Random access is not possible due to its dynamic memory allocation</li>
        </ul>
      </div>
    </div>
  )
}

export default LinkedListPage