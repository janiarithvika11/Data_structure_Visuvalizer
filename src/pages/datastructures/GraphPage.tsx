import React from 'react'

const GraphPage: React.FC = () => {
  return (
    <div className="container margin-top">
      <h1 className="text-center">Graph</h1>
      
      <div className="mt-4">
        <p>
          A graph is a non-linear kind of data structure made up of nodes or vertices and edges. 
          The edges connect any two nodes in the graph, and the nodes are also known as vertices.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/graph.jpg" 
          alt="Graph Example" 
          className="img-fluid"
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Components of a Graph</h4>
        <ul>
          <li><b>Vertices (Nodes):</b> The fundamental units of a graph</li>
          <li><b>Edges:</b> The connections between vertices</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Types of Graph</h4>
        <ul>
          <li><b>Directed Graph:</b> A directed graph is a set of nodes connected by edges, each with a direction</li>
          <li><b>Undirected Graph:</b> An undirected graph comprises a set of nodes and links connecting them without direction</li>
          <li><b>Weighted Graph:</b> A graph where each edge has a value or weight representing the cost of traversing that edge</li>
          <li><b>Connected Graph:</b> If there is a path between one vertex and any other vertex, the graph is connected</li>
          <li><b>Cyclic Graph:</b> If a graph contains at least one graph cycle, it is considered to be cyclic</li>
          <li><b>Acyclic Graph:</b> When there are no cycles in a graph, it is called an acyclic graph</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li>Creating graphs</li>
          <li>Insert vertex</li>
          <li>Delete vertex</li>
          <li>Insert edge</li>
          <li>Delete edge</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li><b>Adjacency Matrix:</b> A matrix with rows and columns labeled by graph vertices</li>
          <li><b>Adjacency List:</b> A collection of unordered lists describing the set of neighbors of vertices</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li>Graphs are used to represent flow of control in computers</li>
          <li>Graphs are used in social networking sites where users act as nodes</li>
          <li>In an operating system, graphs are used as resource allocation graphs</li>
          <li>Graphs are used in Google maps to find the shortest route</li>
          <li>Graphs are also used in airline systems for effective route optimization</li>
          <li>In transportation, graphs are used to find the shortest path</li>
          <li>Graphs are used in solving puzzles with only one solution, such as mazes</li>
          <li>Graphs are used in computer networks for Peer to peer (P2P) applications</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>By using graphs we can easily find the shortest path, neighbors of the nodes, and many more</li>
          <li>Graphs are used to implement algorithms like DFS and BFS</li>
          <li>It is used to find minimum spanning tree which has many practical applications</li>
          <li>It helps in organizing data</li>
          <li>Because of its non-linear structure, helps in understanding complex problems and their visualization</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>Graphs use lots of pointers which can be complex to handle</li>
          <li>It can have large memory complexity</li>
          <li>If the graph is represented with an adjacency matrix then it does not allow parallel edges</li>
        </ul>
      </div>
    </div>
  )
}

export default GraphPage