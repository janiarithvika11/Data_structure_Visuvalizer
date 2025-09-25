import React, { useState } from 'react'

const ArrayVisualization: React.FC = () => {
  const [array, setArray] = useState<number[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [operation, setOperation] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [indexValue, setIndexValue] = useState<string>('')

  const createArray = () => {
    const input = prompt('Enter array elements (space separated):')
    if (input) {
      const newArray = input.split(' ').map(num => parseInt(num) || 0)
      setArray(newArray)
      setOperation('creation')
      setActiveIndex(-1)
    }
  }

  const insertAtEnd = () => {
    const value = prompt('Enter value to insert:')
    if (value !== null) {
      const newArray = [...array, parseInt(value) || 0]
      setArray(newArray)
      setActiveIndex(newArray.length - 1)
      setOperation('insert-end')
    }
  }

  const insertAtStart = () => {
    const value = prompt('Enter value to insert:')
    if (value !== null) {
      const newArray = [parseInt(value) || 0, ...array]
      setArray(newArray)
      setActiveIndex(0)
      setOperation('insert-start')
    }
  }

  const insertAtIndex = () => {
    const index = prompt('Enter index:')
    const value = prompt('Enter value:')
    if (index !== null && value !== null) {
      const idx = parseInt(index)
      const val = parseInt(value) || 0
      if (idx >= 0 && idx <= array.length) {
        const newArray = [...array]
        newArray.splice(idx, 0, val)
        setArray(newArray)
        setActiveIndex(idx)
        setOperation('insert-index')
      }
    }
  }

  const deleteAtEnd = () => {
    if (array.length > 0) {
      const newArray = array.slice(0, -1)
      setArray(newArray)
      setOperation('delete-end')
      setActiveIndex(-1)
    }
  }

  const deleteAtStart = () => {
    if (array.length > 0) {
      const newArray = array.slice(1)
      setArray(newArray)
      setOperation('delete-start')
      setActiveIndex(-1)
    }
  }

  const deleteAtIndex = () => {
    const index = prompt('Enter index to delete:')
    if (index !== null) {
      const idx = parseInt(index)
      if (idx >= 0 && idx < array.length) {
        const newArray = [...array]
        newArray.splice(idx, 1)
        setArray(newArray)
        setOperation('delete-index')
        setActiveIndex(-1)
      }
    }
  }

  return (
    <div>
      <h4>One Dimension Array Operations</h4>
      
      <div className="horizontal-scroll mt-3">
        <button 
          className={`box ${operation === 'creation' ? 'box-active' : ''}`}
          onClick={createArray}
        >
          Create a new array
        </button>
        
        {array.length > 0 && (
          <>
            <button 
              className={`box ${operation.includes('insert') ? 'box-active' : ''}`}
              onClick={insertAtEnd}
            >
              Insert at End
            </button>
            <button 
              className={`box ${operation.includes('insert') ? 'box-active' : ''}`}
              onClick={insertAtStart}
            >
              Insert at Start
            </button>
            <button 
              className={`box ${operation.includes('insert') ? 'box-active' : ''}`}
              onClick={insertAtIndex}
            >
              Insert at Index
            </button>
            <button 
              className={`box ${operation.includes('delete') ? 'box-active' : ''}`}
              onClick={deleteAtEnd}
            >
              Delete at End
            </button>
            <button 
              className={`box ${operation.includes('delete') ? 'box-active' : ''}`}
              onClick={deleteAtStart}
            >
              Delete at Start
            </button>
            <button 
              className={`box ${operation.includes('delete') ? 'box-active' : ''}`}
              onClick={deleteAtIndex}
            >
              Delete at Index
            </button>
          </>
        )}
      </div>

      {array.length > 0 && (
        <div className="mt-5">
          <h4>Generated Array</h4>
          <div className="array-container mt-3">
            <div className="array-cell array-index">
              <div className="text-center">Index</div>
              <div className="text-center">Data</div>
            </div>
            {array.map((value, index) => (
              <div 
                key={index} 
                className={`array-cell ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="array-index text-center">{index}</div>
                <div className="text-center">{value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArrayVisualization