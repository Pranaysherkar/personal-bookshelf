import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import fetchBooks from '../services/fetchBooks';
import Bookcard from '../components/Bookcard';


function BooksearchPage() {
  const [Query, setQuery] = useState("");
  const [Results, setResults] = useState([])

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
  console.log(Query);
  return (
    <div className='w-full h-screen text-white bg-slate-600'>
      <nav className='fixed w-full h-[10%] bg-black flex items-center justify-between pl-10 pr-24'>
        <h1 className='text-3xl font-semibold'>Bookshelf</h1>
        <div className='w-[40%] h-12 flex items-center bg-white text-black rounded-lg'>
          <input className='w-[93%] h-full rounded-lg px-5 text-xl focus:outline-none' type='text' value={Query} onChange={handleChange} placeholder='serch here' />
          <IoSearch className='text-2xl hover:text-slate-500' />
        </div>
        
      </nav>
      <div className='min-h-[90%] w-full flex flex-wrap items-center gap-10 justify-center pt-24 pb-5 px-2'>
        {Results && Results.map((book) => (
          <Bookcard key={book.key} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BooksearchPage