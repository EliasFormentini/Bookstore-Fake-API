import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'; 
import { faListUl } from '@fortawesome/free-solid-svg-icons'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 


const App = () => {
  return (
    <Router>
      <nav>
        <ul><h1>Biblioteca IFRS <FontAwesomeIcon icon={faBookOpen} /></h1></ul>
        <ul>
          <li>
            <Link to="/">Lista de Livros  <FontAwesomeIcon icon={faListUl} /></Link>
          </li>
          <li>
            <Link to="/add">Adicionar Livro <FontAwesomeIcon icon={faPlus} /></Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;
