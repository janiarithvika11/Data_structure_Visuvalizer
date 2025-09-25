import React, { useState } from 'react'

const QueueVisualization: React.FC = () => {
  const [queue, setQueue] = useState<string[]>([])
  const [operation, setOperation] = useState<string>('')

  const enqueue = () => {
    const value = prompt('Enter value to enqueue:')
    if (value !== null) {
      setQueue([...queue, value])
      setOperation('enqueue')
    }
  }

  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1))
      setOperation('dequeue')
    }
  }

  const clearAll = () => {
    setQueue([])
    setOperation('clear')
  }

  return (
    <div className="mt-5">
      <h5>Queue Operations</h5>
      
      <div className="horizontal-scroll mt-3">
        <button 
          className={`box ${operation === 'enqueue' ? 'box-active' : ''}`}
          onClick={enqueue}
        >
          Enqueue
        </button>
        <button 
          className={`box ${operation === 'dequeue' ? 'box-active' : ''}`}
          onClick={dequeue}
        >
          Dequeue
        </button>
        <button 
          className={`box ${operation === 'clear' ? 'box-active' : ''}`}
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <div>
            <div className="queue-container">
              {queue.length === 0 ? (
                <div className="queue-item">Empty</div>
              ) : (
                queue.map((item, index) => (
                  <div 
                    key={index} 
                    className={`queue-item ${
                      index === 0 ? 'queue-front' : 
                      index === queue.length - 1 ? 'queue-rear' : ''
                    }`}
                  >
                    {item}
                  </div>
                ))
              )}
            </div>
            
            <div className="d-flex justify-content-between mt-3">
              <div className="text-center">
                <div>⬆️</div>
                <p className="m-0 mt-2">Front</p>
              </div>
              {queue.length > 1 && (
                <div className="text-center">
                  <div>⬆️</div>
                  <p className="m-0 mt-2">Rear</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .queue-front {
          background: var(--dsa-secondary) !important;
          color: var(--dsa-white) !important;
        }
        
        .queue-rear {
          background: var(--dsa-warning) !important;
          color: var(--dsa-black) !important;
        }
      `}</style>
    </div>
  )
}

export default QueueVisualization