import React from 'react'

const TotalMembers = ({ unique }) => {
  return (
      <div className='flex min-w-[100px]'>{
          <h2>{unique}</h2>
      }</div>
  )
}

export default TotalMembers