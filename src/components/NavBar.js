import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/gyanlogo.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github-mark-white.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else { 
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <section className="navbar" id="navbar">
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
              <Nav.Link href="#home"><img src={logo} alt="Logo" /></Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#skillsbrief"
                  className={
                    activeLink === "skillsbrief"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skillsbrief")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#experience"
                  className={
                    activeLink === "experience"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("experience")}
                >
                  Experience
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/gyanendra-tiwari-b65079252"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={navIcon1} alt="Icon" />
                  </a>
                  <a
                    href="https://instagram.com/_rithik_tiwari_?igshid=MzNlNGNkZWQ4Mg=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={navIcon3} alt="Icon" />
                  </a>
                  <a
                    href="https://github.com/rithik-tiwari"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={navIcon4} alt="Icon" />
                  </a>
                </div>
                <HashLink to="#connect">
                  <button className="vvd">
                    <span>Let’s Connect</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </section>
  );
};
