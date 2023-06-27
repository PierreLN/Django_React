import React, { useEffect, useState } from "react";
import axios from 'axios';
import HomePage from "./components/HomePage";
import Counter from "./components/Counter";

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        // Handle error
      });
  }, []);

  return (
    <div className="App">
      <div>
        {details.map((output, id) => (
          <div key={id}>
            <div>{output.employee}</div>
            <div>{output.department}</div>
          </div>
        ))}
      </div>
      <HomePage />
      <Counter />
    </div>
  );
}

export default App;
