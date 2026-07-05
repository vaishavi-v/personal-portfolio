import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>VI</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/share/1BnwRAU9Y2/" target="_blank" rel="noopener noreferrer">
                <Facebook color="#fff" size={20} />
              </a>
              <a href="https://www.instagram.com/vaishavi_i?igsh=MWpqd3FjbXI5Z3IxZQ==" target="_blank" rel="noopener noreferrer">
                <Instagram color="#fff" size={20} />
              </a>
            </div>
            <p>© 2026 Vaishavi Indreshan — Built with passion for data.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}