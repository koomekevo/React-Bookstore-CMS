const AddBook = () => (
  <div>
    <form id="form-add">
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="author" placeholder="author" />
        <label htmlFor="genre">Genre:</label> {/*eslint-disable-line*/}
      <select id="genre" name="genre">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Horror">Horror</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default AddBook;
