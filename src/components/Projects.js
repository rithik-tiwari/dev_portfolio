import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gpt3__blog.png";
import projImg2 from "../assets/img/gericht__food.png";
import projImg3 from "../assets/img/GR___Bank.png";
import projImg4 from "../assets/img/todolist.png";
import projImg5 from "../assets/img/snake_mania.png";
import projImg6 from "../assets/img/drum_beats.png";
import projImg7 from "../assets/img/javaScript_tutorial.png";
import projImg8 from "../assets/img/memory_game.png";
import projImg9 from "../assets/img/Dice_game.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: "GPT3_Blog",
      description: "A GPT3 Blog website's Landing page.",
      imgUrl: projImg1,
      projlink: "https://rithik-tiwari.github.io/gpt3__blog",
    },
    {
      title: "Gericht Foods",
      description: "A Gericht restaurant website's Landing page.",
      imgUrl: projImg2,
      projlink: "https://rithik-tiwari.github.io/gericht__foods",
    },
    {
      title: "GR-Hoo Bank",
      description: "A GR-Hoo Bank website's Landing page.",
      imgUrl: projImg3,
      projlink: "https://rithik-tiwari.github.io/GR___Bank",
    },
    {
      title: "To-Do-List APP",
      description: "A To-Do List application to manage your daily activities.",
      imgUrl: projImg4,
      projlink: "https://rithik-tiwari.github.io/To-Do-List",
    },
    {
      title: "Snake-Mania",
      description: "A Snake Mania Game to take you back to the old classic days.",
      imgUrl: projImg5,
      projlink: "https://rithik-tiwari.github.io/Snake-Mania",
    },
    {
      title: "Drum-Beats",
      description: "A Drum-Beats website to awake the musician inside you.",
      imgUrl: projImg6,
      projlink: "https://rithik-tiwari.github.io/Drum-Beats",
    },
  ];

  const projects1 = [
    {
      title: "JavaScript - Tutorials",
      description: "A Detailed JavaScript tutorial with Code is been added on my github, please make use of it.",
      imgUrl: projImg7,
      projlink: "https://github.com/rithik-tiwari/JavaScript-Tutorial ",
    },
    {
      title: "Memory-Game",
      description: "A Simon Memory Game to test how strong is your Memory.",
      imgUrl: projImg8,
      projlink: "https://rithik-tiwari.github.io/Memory-Game",
    },
    {
      title: "Dice-Game",
      description: "A Classic Dice Game in which the player who gets the highest number on die will win.",
      imgUrl: projImg9,
      projlink: "https://rithik-tiwari.github.io/Dice__Game",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn": ""}>
                <h2>Some Creative Additions to my Portfolio.</h2>
                <p>During my coursework, I have had the opportunity to work on various projects, including creating responsive websites, developing interactive web applications, and implementing user-friendly interfaces. These experiences have sharpened my problem-solving skills, attention to detail, and ability to work within a team.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
