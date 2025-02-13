import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <h1>ToDo Application</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
`;
