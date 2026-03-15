import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Quote {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {

  useEffect( () => {
    const fetchQuote = async () => {
      const response = await axios.get<Quote>("https://api.adviceslip.com/advice");
      const data = response.data;
      setQuote(data);
    };

    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get<Quote>("https://api.adviceslip.com/advice");
    const data = response.data;
    setQuote(data);
  };

  const [quote, setQuote] = useState<null | Quote>();

  return (
    <>
      <main>
        <div className="card">
          <h1>ADVICE #{quote?.slip.id}</h1>
          <p>"{quote?.slip.advice}"</p>
          <picture>
            <source srcSet="assets/images/pattern-divider-mobile.svg" media="(max-width: 550px)"/>
            <img src="assets/images/pattern-divider-desktop.svg" alt="" />
          </picture>
          <button onClick={fetchQuote}>
            <img src="assets/images/icon-dice.svg" alt="Shuffle Buttton" />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
