import React, { useCallback, useState } from 'react'
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

  const handleChange = async (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 0) {
      let response = await fetchBooks(query);
      setResults(response)
    } else {
      setResults([])
    }
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
    if (Query.length > 0){
      setQuery("");
      setResults([]);
    }
  }, [Query])
  return (
    <div className='w-full h-screen text-white bg-slate-600'>
      <nav className='fixed w-full h-[10%] bg-black flex items-center justify-between pl-10 pr-20'>
        <h1 className='text-3xl font-semibold'>Bookshelf</h1>
        <div className='w-[40%] h-12 flex items-center bg-white text-black rounded-lg'>
          <input className='w-[93%] h-full rounded-lg px-5 text-xl focus:outline-none' type='text' value={Query} onChange={handleChange} placeholder='serch here' />
          {Query.length > 0 && <RxCross1 className='text-2xl hover:text-slate-500 cursor-pointer' onClick={clearField} />}
        </div>
        <Link to={'/bookshelf'} className='flex gap-2 border px-2 py-1 rounded-md'>Your books
          <ImBooks className='text-2xl' />
        </Link>
      </nav>
      <div className='min-h-[90%] w-full flex flex-wrap items-center gap-10 justify-center pt-24 pb-5 px-2 shrink-0'>
        {Results && Results.map((book) => (
          <Bookcard key={book.key} book={book} onAddToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  )
}

export default BooksearchPage