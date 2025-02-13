import { useEffect, useState } from "react";
import API from "../api/axios";
import styled from "styled-components";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setError("Unauthorized. Please log in.");
      });
  }, []);

  return (
    <Container>
      <h1>ToDo Application</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  margin-bottom: 10px;
`;
