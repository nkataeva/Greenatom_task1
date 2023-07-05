import React from "react";
import getData from "../data/getData";
import "./Quote.css"

const Quote = (props) => {

  const handler = async () => {
    props.setQuote(await getData());
  }

  return (
    <>
      <p>{props.quote?.quoteText}</p>
      <p>{props.quote?.quoteAuthor}</p>
      <button className="new" onClick={handler}>Изменить</button>
    </>
  );
};

export default Quote;