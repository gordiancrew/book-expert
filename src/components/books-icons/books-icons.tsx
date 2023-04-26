import React from 'react';
import './books-icons.css';
interface IBook {
  name: string;
  img: string;
}
const booksArr: IBook[] = [
  {
    name: 'Robin Hood',
    img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781646900077/robin-hood-the-shadows-of-sherwood-forest-9781646900077_hr.jpg',
  },
  {
    name: 'Robin Hood Adventure',
    img: 'https://img1.od-cdn.com/ImageType-400/6852-1/%7B1B2E1F59-01D4-4DFB-8F88-D8F9805B07C7%7DIMG400.JPG',
  },
  {
    name: 'Story of Robin Hood',
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1484664997l/31293994.jpg',
  },
];
function BooksIcons() {
  return (
    <div className="cards">
      {/* <div style={{ display: modalActive ? 'flex' : 'none' }} className="modal">
        <div className="fone" onClick={() => setModalActive(false)}></div>
        <MortiInfo value={modalObject} setModalActive={setModalActive} />
      </div> */}
      {booksArr.map((item) => (
        <div key={item.name} className="preview-frame">
          <img
            // onClick={() => requestModal(item)}
            className="preview-photo"
            src={item.img}
          ></img>
        </div>
      ))}
    </div>
  );
}
export default BooksIcons;
