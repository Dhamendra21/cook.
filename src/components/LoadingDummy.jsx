import React from 'react'

const LoadingDummy = () => {
  return (
    <div className="flex flex-col space-y-4 p-4 animate-pulse">
      <div className="h-10 w-3/4 bg-gray-300 rounded-md"></div>
      <div className="h-64 bg-gray-300 rounded-md"></div>

      <div className="space-y-2">
        <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
      </div>

      <div className="space-y-2">
        <div className="h-6 w-1/2 bg-gray-300 rounded-md"></div>
        <ul className="space-y-2">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="h-4 bg-gray-300 rounded-md"></li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <div className="h-6 w-1/2 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>

  )
}

export default LoadingDummy