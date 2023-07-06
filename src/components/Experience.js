import React from 'react';
import { Container, Row, Col } from "react-bootstrap";


export const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <Container>
                <Row className="align-items-center">
                   <div />
                   <Col size={12} sm={6}>
                      <div className='experience_header'>
                        <h2>Experience</h2>
                      </div>
                      <div className="experience_fresher">
                         <h3 className='afre'>A Fresher</h3>
                         <h3 className='fif'>15+ </h3>
                      </div>
                      <div className="experience_fresher">
                        <p className='experience_p'>Currently.</p>
                        <p className='experience_p'>Projects.</p>
                      </div>
                   </Col>
                   <Col size={12} sm={6} className='experience_right'>
                      <div className="experience_right_p">
                         <p>/ Problem Solver</p>
                      </div>
                      <div className="experience_content">
                        <p className='experience_right_h3'>I enjoy solving problems with Clean scalable solutions. I have a genuine passion for <mark>Web Development</mark>.</p>
                      </div>
                      <div className="experience_right_p1">
                         <p>As a web developer, I am driven by my passion for creating visually appealing and functional websites that provide seamless user experiences. I thrive in challenging environments that require creativity and adaptability. I am eager to apply my skills and collaborate with experienced professionals to develop innovative and impactful web solutions.</p>
                      </div>
                      <div className="experience_btn" id='outer'>
                        <a href="https://drive.google.com/file/d/1UoqvQbpUkUMX8vv6oK_hxwy0EeGT-NYI/view?usp=sharing" target='_blank' rel='noreferrer'><div class="button_slide slide_diagonal">My Resume </div></a>
                      </div>
                   </Col>
                </Row>
            </Container>
        </section>
    )
}
