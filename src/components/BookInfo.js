/* eslint-disable no-alert */
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookInfo = (props) => {
  const { book } = props;
  const {
    title, author, genre,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <p className="book-genre">{genre}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button
        className="delete-book"
        type="button"
        onClick={() => {
          dispatch(removeBook(book));
        }}
      >
        {' '}
        Delete
      </button>
    </div>
  );
};

BookInfo.propTypes = {
  book: propTypes.instanceOf(Object).isRequired,
};

export default BookInfo;
