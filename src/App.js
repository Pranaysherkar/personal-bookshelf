import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksearchPage from './pages/BooksearchPage';
import BookshelfPage from './pages/BookshelfPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BooksearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage/>} />
    </Routes>
  </Router>
);

export default App;
