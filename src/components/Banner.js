import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/gyanimage.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Android Developer." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };//eslint-disable-next-line
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Gyanendar`} <br /> {`I am a `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "" ]'><span className="wrap">{text}</span></span></h1>
                  <h3>Introduction</h3>
                  <p>Hello, I'm Gyanendar Tiwari, a passionate web developer Currently in my 3rd year Pursuing B.Tech with Computer Science and Engineering . As a fresher in the field, I am eager to kick-start my career and contribute to the exciting world of web development. Throughout my academic journey, I have gained a solid foundation in computer science and web development concepts. I have a strong grasp of programming languages such as HTML, CSS, and JavaScript, as well as frameworks like React, NextJS and Bootstrap. While I am still early in my professional journey, I am dedicated to continuously learning and keeping up with the latest trends and technologies in web development.</p>
                  <h3>Career Objective</h3>
                  <p> To leverage my expertise in front-end web development to create engaging, user-friendly interfaces that meet clients’ needs while staying up-to-date with the latest technologies and design trends. My goal is to contribute to the success of the company by delivering high-quality, well-structured code that exceeds user expectations and enhances the user experience.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
