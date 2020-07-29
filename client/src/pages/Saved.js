import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Book from "../components/Book";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="xl-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>

          <Row>
            <Col size="xl-12">
              <React.Fragment>
                {books.map(book => (
                  <Book
                    key={book._id}
                    title={book.title}
                    authors={book.authors}
                    link={book.link}
                    description={book.description}
                    image={book.image}
                    button={() => (
                      <button
                        onClick={() => deleteBook(book._id)}
                        className="btn btn-danger text-white float-right"
                      >
                        Delete
                      </button>
                    )}
                  />
                ))}
              </React.Fragment>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
