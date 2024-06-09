import React from 'react';

function BookCard({ book, onAddToBookshelf,removeBook }) {
  const { title, author_name = [], publish_date = [], publisher = [] } = book;

  return (
    <div className='w-1/6 h-[40vh] bg-gray-400 text-black rounded-md px-2 py-5'>
      <h1 className='text-2xl font-medium h-10 overflow-hidden'>
        Title: {title}
      </h1>
      <div className='w-full h-1/2 overflow-hidden'>
        <p className='text-base mt-2'>Author: {author_name[0] || 'Unknown'}</p>
        <p className='text-base mt-2'>Year: {publish_date[0] || 'N/A'}</p>
        <p className='text-base mt-2'>
          Publisher: {publisher[0]?.slice(0, 24) || 'N/A'}
        </p>
      </div>
      {onAddToBookshelf && <button
        className='mt-5 bg-sky-600 px-2 py-1 text-white rounded-md'
        onClick={() =>{
          window.location.href="bookshelf"
          onAddToBookshelf(book)}
        } 
          
      >
        Add to bookshelf
      </button>}
      {removeBook && <button
        className='mt-5 bg-yellow-600 px-2 py-1 text-white rounded-md'
        onClick={() => removeBook(book.key)}
      >
        Remove from bookshelf
      </button>}
    </div>
  );
}

export default BookCard;
