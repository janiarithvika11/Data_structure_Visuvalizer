import React from 'react'
import { Link } from 'react-router-dom'

const TreePage: React.FC = () => {
  const treeTypes = [
    { type: "Binary Tree", url: "/non-primitive/non-linear/binary-tree" },
    { type: "Binary Search Tree", url: "/non-primitive/non-linear/binary-search-tree" },
    { type: "AVL Tree", url: "/non-primitive/non-linear/avl-tree" },
    { type: "Heap Tree", url: "/non-primitive/non-linear/heap-tree" }
  ]

  return (
    <div className="container margin-top">
      <h1 className="text-center">Tree</h1>
      
      <div className="mt-4">
        <p>
          A tree is a non-linear type of data structure that organizes data hierarchically. 
          It consists of nodes connected by edges. Each node contains a value and may or may not have a child node.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/tree.jpg" 
          alt="Tree Example" 
          className="img-fluid"
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Terminologies</h4>
        <ul>
          <li><b>Node:</b> Node is the main component of a tree that stores the data along with the links to other nodes</li>
          <li><b>Edge:</b> Edge (also called branch) connects two nodes of a tree</li>
          <li><b>Parent:</b> Parent node is a predecessor to any other node</li>
          <li><b>Child:</b> The node which is connected below to another node is called a child of that node</li>
          <li><b>Root:</b> The first node of the tree which originates it is called the root of the tree</li>
          <li><b>Leaf node:</b> Nodes with no child are called leaf nodes or external nodes</li>
          <li><b>Internal node:</b> Nodes with at least one child is called an internal node</li>
          <li><b>Siblings:</b> Nodes having the same parent are called siblings</li>
          <li><b>Degree:</b> Degree of a node is defined as the number of children of that node</li>
          <li><b>Path:</b> The nodes in the tree have to be reachable from other nodes through a unique sequence of edges</li>
          <li><b>Level of a node:</b> The level of a node is defined as the number of edges in the unique path between the root and the node</li>
          <li><b>Height of the tree:</b> The height of a tree is the length of the longest path from the root to a leaf node</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Types of Tree</h4>
        <div className="horizontal-scroll">
          {treeTypes.map((treeType, index) => (
            <div key={index} className="box p-3">
              <p className="m-0">{treeType.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li><b>Number of edges:</b> If a tree has N nodes then it will have (N-1) edges</li>
          <li><b>Depth of a node:</b> The depth of a node is defined as the length of the path from the root to that node</li>
          <li><b>Height of a node:</b> The height of a node can be defined as the length of the longest path from the node to a leaf node</li>
          <li><b>Degree of a Node:</b> The total count of subtrees attached to that node is called the degree of the node</li>
          <li>Traversing in a tree is done by depth first search and breadth first search algorithm</li>
          <li>It has no loop and no circuit</li>
          <li>It has no self-loop</li>
          <li>It's a hierarchical model</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li>Trees can be used to store data which are in hierarchical form</li>
          <li>Different types of trees are used in various fields like databases, computer graphics, computer networks</li>
          <li>Tree data structures are used by operating systems to manage file directories</li>
          <li>Databases use tree data structure for indexing</li>
          <li>DNS uses tree data structure</li>
          <li>Trees are used in several games like moves in chess</li>
          <li>Decision based algorithms in machine learning use tree algorithms</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>Trees provide hierarchical representation for the data</li>
          <li>Trees are dynamic in nature so the number of nodes are not limited</li>
          <li>Insertion and deletion in a tree can be done in moderate time</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>Some trees can only be stored using sequential or chained storage</li>
        </ul>
      </div>
    </div>
  )
}

export default TreePage