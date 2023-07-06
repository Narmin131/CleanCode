import React from 'react'

const Categories = ({ menuCategories, filterCategories }) => {
  return (
    <>
      {
        menuCategories.map((category, index) => (
          <button onClick={() => filterCategories(category)} className='btn btn-primary m-2'>{category}</button>
        ))
      }
    </>
  )
}

export default Categories