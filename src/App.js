import React, { createContext, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Products from "./Products";
import Card from "./Card";
import { data } from "./data";

export const BooksContext = createContext();
function App() {
  const [state, setState] = useState({
    bookList: data,
    card: [],
  });

  const addToCard = (book) =>
    setState({
      ...state,
      card: state.card.find((cardItem) => cardItem.id === book.id)
        ? state.card.map((cardItem) =>
            cardItem.id === book.id
              ? { ...cardItem, count: cardItem.count + 1 }
              : cardItem
          )
        : [...state.card, { ...book, count: 1 }],
    });
  const increase = (id) => {
    setState({
      ...state,
      card: state.card.map((cardItem) =>
        cardItem.id === id
          ? { ...cardItem, count: cardItem.count + 1 }
          : cardItem
      ),
    });
  };
  const decrease = (id) => {
    setState({
      ...state,
      card: state.card.map((cardItem) =>
        cardItem.id === id
          ? { ...cardItem, count: cardItem.count > 1 ? cardItem.count - 1 : 1 }
          : cardItem
      ),
    });
  };
  const removeCard = id =>{
    setState({
      ...state,
      card:state.card.filter(cardItem=>cardItem.id!==id)
    })
  }

  return (
    <BooksContext.Provider
      value={{ state: state, addToCard, increase, decrease,removeCard }}
    >
      <div>
        <h1 style={{ marginLeft: "100px", color: "red" }}>
          Alışveriş Sepeti
        </h1>
        <Route exact path="/" component={Products} />
        <Route path="/card" component={Card} />
      </div>
    </BooksContext.Provider>
  );
}

export default App;
