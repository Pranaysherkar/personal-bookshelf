import React, { useState } from 'react'
import { loadBookshelf, removeBookFromBookshelf } from '../utils/localStorage'
import Bookcard from '../components/Bookcard';

function BookshelfPage() {
  const [Bookshelf, setBookshelf] = useState(loadBookshelf())
  const removeBook = (bookKey) => {
    removeBookFromBookshelf(bookKey);
setBookshelf(loadBookshelf())
  }
  return (
    <div className='w-full h-screen'>
      <h1 className='text-center text-4xl text-white font-semibold'>My Bookshelf</h1>
      <div className='min-h-[90%] w-full flex flex-wrap items-center gap-10 justify-center pt-24 pb-5 px-2 shrink-0'>
        {Bookshelf.map((book) => (
          <Bookcard key={book.key} book={book} removeBook={removeBook} />
        ))}
      </div>
    </div>
  )
}

export default BookshelfPage