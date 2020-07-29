import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting initial state
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  }

  // When the form is submitted, use the API.searchGoogle to search for books
  function handleFormSubmit(event) {
    event.preventDefault();

    API.searchGoogle(query.search)
      .then(res => {
        setBooks(res.data.items);
      })
      .catch(err => console.log(err));
  }

  // When the save button is clicked, use the API.saveBook to save a search result
  // to the user's saved books database
  function handleBookSave(id) {
    const book = books.find(book => book.id === id);

    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.canonicalVolumeLink,
    }).catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="xl-12">
          <Jumbotron>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="search"
              placeholder="Search"
            />
            <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="xl-12">
          <SearchResults books={books} handleBookSave={handleBookSave} />
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
