import React from 'react'

const TriePage: React.FC = () => {
  return (
    <div className="container margin-top">
      <h1 className="text-center">Trie</h1>
      
      <div className="mt-4">
        <p>
          Trie is a sorted tree-based data-structure that stores the set of strings. It has the number of pointers 
          equal to the number of characters of the alphabet in each node. It can search a word in the dictionary 
          with the help of the word's prefix. Trie is also known as the digital tree or prefix tree.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/trie.jpg" 
          alt="Trie Example" 
          className="img-fluid"
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Properties</h4>
        <ul>
          <li>The root node of the trie always represents the null node</li>
          <li>Each child of nodes is sorted alphabetically</li>
          <li>Each node can have a maximum of 26 children (A to Z)</li>
          <li>Each node (except the root) can store one letter of the alphabet</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li><b>Insertion of a Node:</b> Every letter of the input key (word) is inserted as an individual in the Trie node</li>
          <li><b>Searching a node in Trie:</b> The searching operation is similar to the insertion operation</li>
          <li><b>Deletion of a node in the Trie:</b> If the key is found in the trie, delete it from the trie</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li><b>Spell Checker:</b> Spell checking involves searching for words in a dictionary</li>
          <li><b>Auto-complete:</b> Auto-complete functionality is widely used on text editors and mobile applications</li>
          <li><b>Browser history:</b> It is used to complete the URL in the browser</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>It can insert faster and search the string than hash tables and binary search trees</li>
          <li>It provides an alphabetical filter of entries by the key of the node</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>It requires more memory to store the strings</li>
          <li>It is slower than the hash table</li>
        </ul>
      </div>
    </div>
  )
}

export default TriePage