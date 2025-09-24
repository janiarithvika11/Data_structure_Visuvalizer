import React from 'react'
import QueueVisualization from '../../components/visualizations/QueueVisualization'

const QueuePage: React.FC = () => {
  return (
    <div className="container margin-top">
      <h1 className="text-center">Queue</h1>
      
      <div className="mt-4">
        <p>
          A Queue is a linear data structure which follows the particular order in which the operations are performed. 
          The order is <b className="text-warning">FIFO (First In First Out)</b>.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/queue.jpg" 
          alt="Queue Example" 
          className="img-fluid"
          style={{ maxWidth: '400px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li>Elements are added at the rear and removed from the front</li>
          <li>Queue follows FIFO (First In First Out) principle</li>
          <li>Queue can be implemented using arrays or linked lists</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li><b>Enqueue:</b> Add an element to the rear of the queue</li>
          <li><b>Dequeue:</b> Remove an element from the front of the queue</li>
          <li><b>Peek:</b> View the front element without removing it</li>
        </ul>
      </div>

      <QueueVisualization />

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li><b>Multi programming:</b> Multiple programs running in main memory are organized as queues</li>
          <li><b>Network:</b> In a network, a queue is used in devices such as a router or a switch</li>
          <li><b>Job Scheduling:</b> Jobs are scheduled to be executed one after another</li>
          <li><b>Shared resources:</b> Queues are used as waiting lists for a single resource</li>
          <li>Breadth first traversal or BFS</li>
          <li>Level order tree traversal</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>A large amount of data can be managed efficiently with ease</li>
          <li>Operations such as insertion and deletion can be performed with ease</li>
          <li>Queues are useful when a particular service is used by multiple customers</li>
          <li>Queues are fast in speed for data inter process communication</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>The operations such as insertion and deletion of elements from the middle are time consuming</li>
          <li>Limited space</li>
          <li>Searching an element takes O(N) time</li>
          <li>Maximum size of a queue must be defined prior</li>
        </ul>
      </div>
    </div>
  )
}

export default QueuePage