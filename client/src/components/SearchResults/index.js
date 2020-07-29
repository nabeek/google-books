import React from "react";
import Book from "../Book";

function SearchResults(props) {
  return (
    <React.Fragment>
      {props.books.map(book => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          image={
            book.volumeInfo.imageLinks === undefined
              ? ""
              : book.volumeInfo.imageLinks.thumbnail
          }
          link={book.volumeInfo.canonicalVolumeLink}
          button={() => (
            <button
              onClick={() => props.handleBookSave(book.id)}
              className="btn btn-success text-white float-right"
            >
              Save
            </button>
          )}
        />
      ))}
    </React.Fragment>
  );
}

export default SearchResults;
