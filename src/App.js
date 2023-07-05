import React from 'react';
import Quote from './components/Quote';
import getData from './data/getData';
import './App.css'

function App() {
  const [quote, setQuote] = React.useState({});

  React.useEffect(() => {
    async function get() {
      setQuote(await getData());
    }

    get();
  }, []);

  return (
    <div className="main-content">
      <h3>Цитата дня!</h3>
        <Quote quote={quote} setQuote={setQuote}/>
    </div>
  );
}

export default App;