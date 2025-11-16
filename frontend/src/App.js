import React, { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Management Tool</h1>

      <h2>Projects:</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid gray",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <h4>Tasks:</h4>
            {p.tasks.length === 0 ? (
              <p>No tasks yet.</p>
            ) : (
              p.tasks.map((t) => (
                <div
                  key={t.id}
                  style={{
                    marginLeft: "20px",
                    padding: "5px",
                    borderLeft: "3px solid black",
                  }}
                >
                  <p>
                    <strong>{t.title}</strong> — {t.status}
                  </p>
                </div>
              ))
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default App;

