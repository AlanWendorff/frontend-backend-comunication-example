import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [inputValue, setInputValue] = useState(null);

  const handleInput = (e) => {
    setInputValue(e.target.value === "" ? null : e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/getStudents/${inputValue}`)
      .then(({ data }) => {
        setStudents(data);
      });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Frontend demo</h1>
      </header>
      <body>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="studentId"
              type="number"
              onChange={handleInput}
              min="0"
            />
            <button className="btn">Obtener datos</button>
          </form>
        </div>

        <div className="content-of-chart">
          <span>Alumnos</span>
          <span>ID</span>
        </div>
        <div className="data-content">
          {students.map(({ alumno, id }) => (
            <div className="student" key={id}>
              <span>{alumno}</span>
              <span>{id}</span>
            </div>
          ))}
        </div>
      </body>
    </div>
  );
};

export default App;
