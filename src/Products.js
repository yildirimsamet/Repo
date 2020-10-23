import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./App";

const Products = (props) => {
  const context = useContext(BooksContext);
  const totalCardCount=context.state.card.reduce((total,book)=>total+=(book.count),0)

  return (
    <>
      <h2 style={{display:"flex",justifyContent:"space-around"}}>
        <span>Kitap Listesi</span>
        <Link to="/card">Sepetim ({totalCardCount})</Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div key={book.id}>
          <div className="book">
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: {book.price}</p>
              <button onClick={()=>{context.addToCard(book)}}>Sepete Ekle</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
