import React from "react";
import { List, ListItem } from "../List";

function SearchResults(props) {
  return (
    <>
      {props.books.map(book => (
        <ListItem key={book.id}>
          <div className="card">
            <div className="row no-gutters">
              <div>
                <img
                  className="card-img"
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt={book.volumeInfo.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <h6 className="card-title">{book.volumeInfo.authors}</h6>
                  <p className="card-text">{book.volumeInfo.description}</p>
                  <a
                    href={book.volumeInfo.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ListItem>
      ))}
    </>
  );
}

export default SearchResults;
