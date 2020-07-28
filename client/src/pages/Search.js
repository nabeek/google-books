import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
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
        <Col size="md-12">
          <SearchResults books={books} />
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
