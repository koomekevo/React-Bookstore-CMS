import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import error from './error';

const BookInfo = (props) => {
  const { book } = props;
  const {
    id, title, category,
  } = book[0];
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <p className="book-genre">{category}</p>
      <p className="book-title">{title}</p>
      <button
        className="delete-book"
        type="button"
        onClick={() => {
          dispatch(removeBook(id));
          error('Book removed', 'green');
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
