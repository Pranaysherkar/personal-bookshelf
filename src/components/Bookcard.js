import React from 'react'

function Bookcard({book}) {
  return (
    <div className='w-1/6 h-[40vh] bg-gray-400 text-black rounded-md px-2 py-5'>
        <h1 className='text-2xl font-medium'>Title: {book.title}</h1>
        <p className='text-lg mt-2'>Author: {book.author_name && book.author_name.join(', ')}</p>
        <p className='text-lg mt-2'>Year: {book.publish_date[0]}</p>
        <p className='text-lg mt-2'>Publisher: {book.publisher[0]}</p>

    </div>
  )
}

export default Bookcard