import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navigation(props) {
  const state = useSelector((state) => state.checkSessionReducer.isAuthorized);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = async () => {
    const responce = await fetch('http://localhost:4000/logout', {
      credentials: 'include',
    });

    const data = await responce.json();

    dispatch({ type: 'CHECK_SESSION', payload: data.logout });

    navigate('/');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Своя Игра</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Главная</Nav.Link>
            { state && (
              <Nav.Link as={Link} to="#" onClick={logout}> Выйти</Nav.Link>
            )}
            { !state && (
              <>
               <Nav.Link as={Link} to="register">Регистрация</Nav.Link>
               <Nav.Link as={Link} to="login">Войти</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Outlet />
    </>
  );
}

export default Navigation;
