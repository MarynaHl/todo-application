import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Home = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await API.get("/tasks");
        setTasks(res.data);
      } catch {
        setTasks([]);
      }
    };
    fetchTasks();
  }, []);

  return (
    <Container>
      <h1>ToDo Application</h1>
      {user ? (
        tasks.map((task) => <p key={task._id}>{task.title}</p>)
      ) : (
        <p>Please log in to see your tasks.</p>
      )}
    </Container>
  );
};

export default Home;
