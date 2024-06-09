import React, { useCallback, useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import fetchBooks from '../services/fetchBooks';
import Bookcard from '../components/Bookcard';
import { Link } from 'react-router-dom';
import { ImBooks } from "react-icons/im";
import { loadBookshelf, saveBookshelf } from '../utils/localStorage';

function BooksearchPage() {
  const [Query, setQuery] = useState("");
  const [Results, setResults] = useState([])
  const [Bookshelf, setBookshelf] = useState(loadBookshelf())

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (Query.length > 0) {
        let response = await fetchBooks(Query);
        setResults(response)
      } else {
        setResults([])
      }
    }, 300);

    return ()=>clearTimeout(timer);
  }, [Query])

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query);
  }
  const addToBookshelf = (book) => {
    const existingBook = Bookshelf.find((elem) => elem.key === book.key);
    if (!existingBook) {
      const newBooks = [...Bookshelf, book];
      setBookshelf(newBooks)
      saveBookshelf(newBooks)
    }
  }
  const clearField = useCallback(() => {
    if (Query.length > 0) {
      setQuery("");
      setResults([]);
    }
  }, [Query])
  console.log(Query);
  return (
    <div className='w-full h-screen text-white bg-slate-600'>
      <nav className='fixed w-full md:h-[10%] h-auto flex flex-col bg-black/50 md:flex-row sm:flex-row md:items-center gap-2 justify-between px-2 py-1 sm:py-2 md:pl-10 md:pr-20'>
        <h1 className='text-3xl font-semibold'>Bookshelf</h1>
        <div className='sm:w-[40%] sm:h-12  flex items-center bg-white text-black rounded-lg'>
          <input className='sm:w-[93%] w-[90%] sm:h-full h-10 rounded-lg px-5 text-xl focus:outline-none' type='text' value={Query} onChange={handleChange} placeholder='serch here' />
          {Query.length > 0 && <RxCross1 className='text-2xl hover:text-slate-500 cursor-pointer' onClick={clearField} />}
        </div>
        <Link to={'/bookshelf'} className='flex items-center justify-center w-1/2 sm:w-auto gap-2 border px-2 py-1 rounded-md'>Your books
          <ImBooks className='text-2xl' />
        </Link>
      </nav>
      <div className='min-h-[90%] w-full flex flex-wrap flex-col sm:flex-row items-center gap-10 justify-center pt-36 pb-5 sm:pt-24 sm:pb-5 sm:px-2'>
        {Results && Results.map((book) => (
          <Bookcard key={book.key} book={book} onAddToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  )
}

export default BooksearchPage