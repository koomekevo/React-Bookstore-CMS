import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import store from '../redux/store';

// eslint-disable-next-line no-unused-vars
const BookModal = (props) => {
  const book = useSelector((store) => store.reducerModal[1]);
  const {
    title, author, genre, progress,
  } = book;
  return (
    <div id="modal">
      <p>
        {' '}
        { title }
        <br />
        { author }
        <br />
        { genre }
        <br />
        { progress }
        {' '}
      </p>
    </div>
  );
};

export default BookModal;
