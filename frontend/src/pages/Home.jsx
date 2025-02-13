import { useEffect, useState } from "react";
import axios from "../api/axios";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const TaskWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
`;

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <TaskWrapper>
        <Title>My Tasks</Title>
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task._id}>
              <span>{task.title}</span>
              <span>{task.completed ? "✅" : "❌"}</span>
            </TaskItem>
          ))}
        </TaskList>
      </TaskWrapper>
    </Container>
  );
};

export default Home;
