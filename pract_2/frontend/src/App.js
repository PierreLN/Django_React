import React, { useEffect, useState } from "react";
import axios from 'axios';
import HomePage from "./components/HomePage.js";
import Counter from "./components/Counter";

function App() {
  const [details, setDetails] = useState([]);
  const [formData, setFormData] = useState({ employee: "", department: "" });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/')
      const data = await response.data 
      setDetails(data)
    }
    fetchData()
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/', formData);
      const newDetail = response.data;
      setDetails([...details, newDetail]);
      setFormData({ employee: "", department: "" });
    } catch (error) {
      console.error(error);
    }
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employee"
          value={formData.employee}
          onChange={handleInputChange}
          placeholder="Employee"
        />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          placeholder="Department"
        />
        <button type="submit">Submit</button>
      </form>
      <Counter />
    </div>
  );
}

export default App;
