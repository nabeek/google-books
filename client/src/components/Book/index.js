import React from "react";
import "./style.css";

function Book(props) {
  return (
    <div>
      <a
        key={"" + index + book.id}
        href={book.volumeInfo.infoLink}
        target={this.state.target}
      >
        {book.volumeInfo.title}
      </a>
      <p>Written By {book.volumeInfo.authors[0]}</p>
      <p>
        <img
          align="left"
          style={{ paddingRight: 10 }}
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt="new"
        />
        {book.volumeInfo.description}
      </p>
    </div>
  );
}

export default Book;
