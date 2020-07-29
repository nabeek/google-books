# Employee Directory

## Motivation

This application is a simple, React-based book search. The application calls the Google Books API to return search results based on user input and allows the user to save books to a database to view/access later.

## Usage

Google Books Search is live [here](https://nabeek.github.io/employee-directory/).

## Screenshot

![google-books](https://user-images.githubusercontent.com/4752937/88856472-cb648300-d1b1-11ea-90ed-c9195af21e8b.gif)

## Tech Used

[Bootstrap](https://getbootstrap.com/)\
[Google Books API](https://developers.google.com/books)\
[React](https://reactjs.org/)

## Example Code

I ran into quite the issue/edge case when searching for random strings or using terribly misspelled words. The problem is that the object returned would sometimes not include the imageLink reference utilized below, instead returning `undefined`. To combat this error I included a ternary operator in the Book component, and now my wonky book searches return odd results (but without breaking the application).

```js
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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [nabeek](https://github.com/nabeek)
