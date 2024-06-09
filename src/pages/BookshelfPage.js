import React, { useState } from 'react'
import { loadBookshelf, removeBookFromBookshelf } from '../utils/localStorage'
import Bookcard from '../components/Bookcard';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function BookshelfPage() {
  const [Bookshelf, setBookshelf] = useState(loadBookshelf())
  const removeBook = (bookKey) => {
    removeBookFromBookshelf(bookKey);
    setBookshelf(loadBookshelf())
  }
  const navigate = useNavigate();
  const goBack = ()=>{
   navigate(-1)
  }
  return (
    <div className='w-full h-screen'>
      <button onClick={goBack} className='bg-sky-500 text-white text-xl flex m-2 items-center gap-2 px-2 rounded-md' ><FaArrowLeftLong />Go Back </button>
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