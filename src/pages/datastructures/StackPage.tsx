import React from 'react'
import StackVisualization from '../../components/visualizations/StackVisualization'

const StackPage: React.FC = () => {
  return (
    <div className="container margin-top">
      <h1 className="text-center">Stack</h1>
      
      <div className="mt-4">
        <p>
          The stack data structure is a linear data structure that accompanies a principle known as 
          <b className="text-warning"> LIFO (Last In First Out)</b>.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/stack.jpg" 
          alt="Stack Example" 
          className="img-fluid"
          style={{ maxWidth: '400px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li>The insertion and deletion happens at the same end i.e from the top of the stack</li>
          <li>Stack is implemented through Array or Linked list</li>
          <li>If the allocated space for stack is full, and any attempt to add more elements will lead to stack overflow</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li><b>Push:</b> Add an element to the top of the stack</li>
          <li><b>Pop:</b> Remove the top element from the stack</li>
          <li><b>Peek:</b> View the top element without removing it</li>
        </ul>
      </div>

      <StackVisualization />

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li>Expression evaluation and conversion</li>
          <li>Backtracking</li>
          <li>Function call (call stack function)</li>
          <li>Parentheses checking</li>
          <li>String reversal</li>
          <li>Syntax parsing</li>
          <li>Memory management</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li><b>Efficient data management:</b> Stack helps you manage the data in a LIFO manner</li>
          <li><b>Efficient management of functions:</b> When a function is called, the local variables are stored in stack</li>
          <li>Control over memory</li>
          <li>Smart memory management</li>
          <li>Not easily corrupted</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>Limited memory size</li>
          <li>Chances of stack overflow</li>
          <li>Random access not possible</li>
          <li>Unreliable</li>
        </ul>
      </div>
    </div>
  )
}

export default StackPage