import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
  state = {
    id: '',
    title: '',
    authors: '',
    coverImage: '',
    shelf: '',
    dragging: false
  };

  componentDidMount() {
    BooksAPI.get(this.props.id).then((book) => {
      const id = book.id;
      const title = book.title;
      const authors = book.authors;
      const coverImage = book.imageLinks
        ? book.imageLinks.thumbnail
        : '';
      const shelf = book.shelf;
      this.setState({
        id,
        title,
        authors,
        coverImage,
        shelf
      });
    });
  }

  handleMove = (e, newShelf) => {
    const onMove = this.props.onMove;
    e.preventDefault();
    if (this.state.id !== '') {
      BooksAPI.update(this.state, newShelf).then(() => {
        onMove && onMove(this.state.id, newShelf);
        this.setState({ shelf: newShelf });
      });
    }
  };

  handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.dropEffect = 'move';
    this.setState({ dragging: true });
  };

  handleDragEnd = () => {
    this.setState({ dragging: false });
  };

  render() {
    const { id, title, authors, coverImage, shelf } = this.state;
    let classNames = ['book'];
    this.state.dragging && classNames.push('dragging');
    classNames = classNames.join(' ');
    return (
      <div
        draggable={this.props.draggable}
        className={classNames}
        onDragStart={(e) => this.handleDragStart(e, id)}
        onDragEnd={this.handleDragEnd}
      >
        <div className="book-top">
          <img
            className="book-cover"
            src={coverImage}
            alt={title}
            draggable="false"
          />
          <div className="book-shelf-changer">
            <Selector
              categories={this.props.shelves}
              defaultCategory={shelf}
              bookId={id}
              onMove={this.handleMove}
            />
          </div>
        </div>
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">
          {authors &&
            authors.map((author) => (
              <span key={author}>
                {author}
                <br></br>
              </span>
            ))}
        </p>
      </div>
    );
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.string),
  onMove: PropTypes.func
};

export default Book;
