import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #007bff;
  color: white;
`;

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Nav>
      <Link to="/">Home</Link>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Nav>
  );
};

export default Navbar;
