import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className={"text-decoration-none text-reset"}
      >
        <Container>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/aboutme"}>
            <Navbar.Brand>About Me</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/education"}>
            <Navbar.Brand>Education</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/skills"}>
            <Navbar.Brand>Skills</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/experience"}>
            <Navbar.Brand>Experience</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/hobbies"}>
            <Navbar.Brand>Hobby</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
