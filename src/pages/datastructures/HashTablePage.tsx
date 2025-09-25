import React from 'react'

const HashTablePage: React.FC = () => {
  return (
    <div className="container margin-top">
      <h1 className="text-center">Hash Table</h1>
      
      <div className="mt-4">
        <p>
          A <b>hash table</b> is a type of data structure that stores key-value pairs. The key is sent to a hash function 
          that performs arithmetic operations on it. The result (commonly called the hash value or hash) is the index of 
          the key-value pair in the hash table. Hashing is a technique which uses less key comparisons and searches the 
          element in O(n) time in the worst case and in an average case it will be done in O(1) time.
        </p>
      </div>

      <div className="text-center mt-4">
        <img 
          src="https://raw.githubusercontent.com/raj-rathod/DSA-visualisation-in-angular/main/src/assets/ds-image/hash-table.jpg" 
          alt="Hash Table Example" 
          className="img-fluid"
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mt-4">
        <h4>Components of a Hash Table</h4>
        <ul>
          <li><b>Hash function:</b> The hash function determines the index of our key-value pair. Choosing an efficient hash function is crucial for creating a good hash table.</li>
          <li><b>Array:</b> The array holds all the key-value entries in the table. The size should be set according to the amount of data expected.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Hash Function Properties</h4>
        <ul>
          <li>The hash function is easy to understand and simple to compute</li>
          <li>The hash function should produce keys which will get distributed uniformly over an array</li>
          <li>A number of collisions should be less while placing the data in the hash table</li>
          <li>The hash function is a perfect hash function when it uses all the input data</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Hash Function Types</h4>
        <ul>
          <li><b>Division method:</b> The hash function is dependent upon the remainder of a division. h(key) = record % table size</li>
          <li><b>Mid square method:</b> The key is squared and then mid part of the result is taken as the index</li>
          <li><b>Digit folding method:</b> The key is divided into separate parts and combined using simple operations</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Operations</h4>
        <ul>
          <li><b>Search:</b> Searches an element in a hash table</li>
          <li><b>Insert:</b> Inserts an element in a hash table</li>
          <li><b>Delete:</b> Deletes an element from a hash table</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Collision Resolution Techniques</h4>
        <ul>
          <li><b>Chaining:</b> A method in which additional field with data is introduced. A chain is maintained at the home bucket.</li>
          <li><b>Linear probing:</b> When a collision occurs, the second record is placed linearly down, whenever an empty place is found.</li>
          <li><b>Quadratic probing:</b> A method to solve clustering problems using quadratic functions.</li>
          <li><b>Double hashing:</b> A technique in which two hash functions are used when there is an occurrence of collision.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Applications</h4>
        <ul>
          <li>Hash is used in databases for indexing</li>
          <li>Hash is used in disk based data structures</li>
          <li>In some programming languages like Python, JavaScript hash is used to implement objects</li>
          <li>Hash is used for cache mapping for fast access of the data</li>
          <li>Hash can be used for password verification</li>
          <li>Hash is used in cryptography as a message digest</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Advantages</h4>
        <ul>
          <li>Hash provides better synchronization than other data structures</li>
          <li>Hash tables are more efficient than search trees or other data structures</li>
          <li>Hash provides constant time for searching, insertion and deletion operations on average</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4>Disadvantages</h4>
        <ul>
          <li>Hash is inefficient when there are many collisions</li>
          <li>Hash collisions are practically not avoidable for large set of possible keys</li>
          <li>Hash does not allow null values</li>
        </ul>
      </div>
    </div>
  )
}

export default HashTablePage