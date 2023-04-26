import React from 'react';
import './search-book.css';
function SearchBook() {
  function buttonHundler() {
    alert('button press');
  }

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="input book or author (suppose we enter ROBIN HOOD)"
          // onChange={(e) => setCurrentValue(e.target.value)}
          // onKeyDown={(e) => handleKeyDown(e)}
        />
        <button onClick={buttonHundler} type="button"></button>
      </form>
    </div>
  );
}
export default SearchBook;
