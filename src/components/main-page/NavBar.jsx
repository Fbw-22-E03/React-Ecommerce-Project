import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Route, Link } from "react-router-dom";
import { dataContext } from "../../functions/Context";

function NavBar() {
  const { userState, dispatchUserState } = React.useContext(dataContext);
  const basketRef = React.useRef();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Home Button */}

        <Navbar.Brand>
          <Link className="nav-list-item" to="/">
            H & M
          </Link>
        </Navbar.Brand>
        <div className="d-flex">
          {/* Products Dropdown */}

          <DropdownButton
            className="drop-down-button"
            id="dropdown-basic-button"
            variant="light"
            size="md"
            title="Products"
          >
            <Dropdown.Item>
              <Link className="nav-list-item" to="/Product">
                Men's
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="nav-list-item" to="/Product">
                Women's
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="nav-list-item" to="/Product">
                Children's
              </Link>
            </Dropdown.Item>
          </DropdownButton>

          {/* User Account */}
          {userState.users[0].isLogin ? (
            <Button variant="light" size="lg">
              <Link className="nav-list-item" to="/userinfo">
                <i class="bi bi-person-check-fill"></i>
              </Link>
            </Button>
          ) : (
            <Button variant="light" size="lg">
              <Link className="nav-list-item" to="/registration">
                <i class="bi bi-person"></i>
              </Link>
            </Button>
          )}

          {/* Shopping Cart */}

          <Button variant="light">
            <Link className="nav-list-item" to="/ShoppingCart">
              <i className="bi bi-basket basket-icon-nav-bar"></i>
              <span
                ref={basketRef}
                className={
                  userState.cart.length !== 0
                    ? "amount_of_products_in_basket "
                    : ""
                }
              >
                {userState.cart.length === 0 ? null : userState.cart.length}
              </span>
            </Link>
          </Button>
        </div>

        {/* Search Bar */}

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
