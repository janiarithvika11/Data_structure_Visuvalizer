import React, { useState } from 'react'

const StackVisualization: React.FC = () => {
  const [stack, setStack] = useState<string[]>([])
  const [operation, setOperation] = useState<string>('')

  const pushElement = () => {
    const value = prompt('Enter value to push:')
    if (value !== null) {
      setStack([value, ...stack])
      setOperation('push')
    }
  }

  const popElement = () => {
    if (stack.length > 0) {
      setStack(stack.slice(1))
      setOperation('pop')
    }
  }

  const clearAll = () => {
    setStack([])
    setOperation('clear')
  }

  return (
    <div className="mt-5">
      <h5>Stack Operations</h5>
      
      <div className="horizontal-scroll mt-3">
        <button 
          className={`box ${operation === 'push' ? 'box-active' : ''}`}
          onClick={pushElement}
        >
          Push
        </button>
        <button 
          className={`box ${operation === 'pop' ? 'box-active' : ''}`}
          onClick={popElement}
        >
          Pop
        </button>
        <button 
          className={`box ${operation === 'clear' ? 'box-active' : ''}`}
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex align-items-end">
          <div className="d-flex flex-column align-items-center me-3">
            <div className="mb-2">
              <p className="m-0">Top ➡️</p>
            </div>
            {stack.length > 1 && (
              <div className="mt-auto">
                <p className="m-0">Bottom ➡️</p>
              </div>
            )}
          </div>
          
          <div className="stack-container">
            {stack.length === 0 ? (
              <div className="stack-item">Empty</div>
            ) : (
              stack.map((item, index) => (
                <div 
                  key={index} 
                  className={`stack-item ${index === 0 ? 'stack-top' : ''}`}
                >
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stack-top {
          background: var(--dsa-secondary) !important;
          color: var(--dsa-white) !important;
        }
      `}</style>
    </div>
  )
}

export default StackVisualization