export const saveBookshelf = (bookshelf) => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };
  
  export const loadBookshelf = () => {
    const savedBookshelf = localStorage.getItem('bookshelf');
    return savedBookshelf ? JSON.parse(savedBookshelf) : [];
  };
  
  export const removeBookFromBookshelf = (bookKey) =>{
    const bookShelf = loadBookshelf ();
    const updatedShelf = bookShelf.filter((elem)=> elem.key !== bookKey );
    saveBookshelf(updatedShelf);
  }