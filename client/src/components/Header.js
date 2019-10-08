import React, { Fragment, useContext } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

import { ReactComponent as Logo } from "../LOGO.svg";
import Navbar from "react-bootstrap/Navbar";
import HeadCarousel from "./HeadCarousel";
import Store from "./pages/Store";
import Projects from "./pages/projects";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";

import Register from "./auth/Register";
import Login from "./auth/Login";
// make it so only auth users can access ContentEdit
import ContentEdit from "./content/ContentEdit";
import Alerts from "../components/alerts/Alerts";
import { Nav } from "react-bootstrap";

import Cart from "./pages/Cart";
import CartLength from "../context/cart/CartLength";

const Header = () => {
  const authContext = useContext(AuthContext);

  //user returns null
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <p
        style={{
          marginTop: 8,
          color: "black",
          fontSize: 20
        }}
      >
        Welcome Back! {user && user.name}{" "}
      </p>
      <Nav.Link>
        <Link
          onClick={onLogout}
          to="/Homepage"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 20
          }}
        >
          Logout
        </Link>
      </Nav.Link>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Link>
        <Link
          to="/Register"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 20
          }}
        >
          Register
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link
          to="/Login"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 20
          }}
        >
          Login
        </Link>
      </Nav.Link>{" "}
    </Fragment>
  );

  return (
    <Router>
      <Fragment>
        <header>
          <Navbar collapseOnSelect expand="sm" bg="#9C9C9C" variant="light">
            <Navbar.Brand>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
              >
                <Logo height="100px" width="200px" fill="black" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/*Links*/}
                <Nav.Link>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 20
                    }}
                  >
                    Home
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="/Shop"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 20
                    }}
                  >
                    Shop
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="/Projects"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 20
                    }}
                  >
                    Projects
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="/FAQ"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 20
                    }}
                  >
                    FAQ
                  </Link>
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="https://twitter.com/illreflex" target="_blank">
                  <i className="fab fa-twitter" />
                </Nav.Link>
                <Nav.Link
                  href="https://instagram.com/illreflex"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link>
                  <Link
                    to="/Cart"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 20
                    }}
                  >
                    {/*counts number of items added */}
                    cart(
                    <CartLength />)
                  </Link>
                </Nav.Link>

                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>

        <HeadCarousel />
        <Alerts />
        <Route Path="/" exact={HomePage} />
        <Route path="/Shop" component={Store} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Projects" component={Projects} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/ContentEdit" component={ContentEdit} />
      </Fragment>
    </Router>
  );
};

export default Header;