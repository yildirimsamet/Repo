import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./App";

const Card = () => {
  const context = useContext(BooksContext);
  const totalCardAmount=context.state.card.reduce((total,book)=> total+=(book.price*book.count),0).toFixed(2);
  const totalCardCount=context.state.card.reduce((total,book)=>total+=(book.count),0)
  return (
    <div>
      <h2 style={{display:"flex",justifyContent:"space-around"}}>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim ({totalCardCount})</span>
      </h2>
      <h3>Toplam Sepet Tutarı: &#8378;{totalCardAmount}</h3>
      {context.state.card.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <p>Toplam: &#8378;{(book.price * book.count).toFixed(2)}</p>
            <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
            <button onClick={()=>{context.decrease(book.id)}}>-</button>
            <button onClick={()=>{context.removeCard(book.id)}}>Sepetten Çıkar</button>
            <button onClick={()=>{context.increase(book.id)}}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
