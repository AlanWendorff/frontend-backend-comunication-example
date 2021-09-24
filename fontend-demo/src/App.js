import { useState } from "react";
import "./App.css";

const App = () => {
  const [alumnos, setAlumnos] = useState([]);

  const CallBackend = () => {
    setAlumnos([
      { alumno: "willy", id: 13 },
      { alumno: "alan", id: 12 },
      { alumno: "santiago", id: 26 },
      { alumno: "gabriel", id: 0 },
      { alumno: "pablo", id: 88 },
      { alumno: "raul", id: 56 },
    ]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Frontend demo</h1>
      </header>
      <body>
        <button onClick={CallBackend} className="btn">
          Obtener datos
        </button>
        <div className="content-of-chart">
          <span>Alumnos</span>
          <span>ID</span>
        </div>
        <div className="data-content">
          {alumnos.map(({ alumno, id }) => (
            <div className="student">
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
