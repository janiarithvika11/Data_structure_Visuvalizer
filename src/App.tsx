import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import DataStructure from './pages/DataStructure'
import Algorithm from './pages/Algorithm'
import ArrayPage from './pages/datastructures/ArrayPage'
import StackPage from './pages/datastructures/StackPage'
import QueuePage from './pages/datastructures/QueuePage'
import LinkedListPage from './pages/datastructures/LinkedListPage'
import TreePage from './pages/datastructures/TreePage'
import GraphPage from './pages/datastructures/GraphPage'
import TriePage from './pages/datastructures/TriePage'
import HashTablePage from './pages/datastructures/HashTablePage'
import SortingPage from './pages/algorithms/SortingPage'
import SearchingPage from './pages/algorithms/SearchingPage'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-structure" element={<DataStructure />} />
        <Route path="/algorithm" element={<Algorithm />} />
        
        {/* Data Structures Routes */}
        <Route path="/non-primitive/linear/array" element={<ArrayPage />} />
        <Route path="/non-primitive/linear/stack" element={<StackPage />} />
        <Route path="/non-primitive/linear/queue" element={<QueuePage />} />
        <Route path="/non-primitive/linear/linked-list" element={<LinkedListPage />} />
        <Route path="/non-primitive/non-linear/tree" element={<TreePage />} />
        <Route path="/non-primitive/non-linear/graph" element={<GraphPage />} />
        <Route path="/non-primitive/non-linear/trie" element={<TriePage />} />
        <Route path="/non-primitive/non-linear/hash-table" element={<HashTablePage />} />
        
        {/* Algorithm Routes */}
        <Route path="/algorithm/sorting" element={<SortingPage />} />
        <Route path="/algorithm/searching" element={<SearchingPage />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App