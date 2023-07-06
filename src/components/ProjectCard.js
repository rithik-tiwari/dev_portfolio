import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img__Url"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={projlink} target="_blank" rel="noreferrer"><p>🔗 Project-Link</p></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
