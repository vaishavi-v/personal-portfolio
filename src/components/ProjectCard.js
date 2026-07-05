import { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, details, github, liveLink }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleShow} style={{ cursor: 'pointer' }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgUrl} alt={title} style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }} />
          <p>{details || description}</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <BoxArrowUpRight size={18} /> Live App
              </a>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </Col>
  )
}