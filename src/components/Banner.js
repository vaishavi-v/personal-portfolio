import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import Tilt from 'react-parallax-tilt';
import { Download } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Hi! I'm Vaishavi" ];
  const period = 2000;

  useEffect(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta);

  return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(isDeleting ? 30 : 100);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                  <p>I'm a Data Science undergraduate passionate about turning raw data into clear insights. I build end-to-end projects using Python, Power BI, and machine learning — and I'm currently looking for a data analyst/data science internship.</p>
                  <div className="banner-btn-group">
  <a href="#projects">
    <button className="btn-primary-cta">View My Work</button>
  </a>
  <a href="/resume.pdf" download="Vaishavi_Indreshan_CV.pdf">
    <button className="btn-outline-cta">Download CV <Download size={18} /></button>
  </a>
  <a href="#connect">
    <button className="btn-outline-cta">Get In Touch</button>
  </a>
</div>
              </div>}
            </TrackVisibility>
          </Col>
       <Col xs={12} md={6} xl={5}>
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
        <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} perspective={1000} scale={1.03} transitionSpeed={1500}>
          <img src={headerImg} alt="Header Img" style={{ width: '100%', borderRadius: '30px' }}/>
        </Tilt>
      </div>}
  </TrackVisibility>
</Col>
        </Row>
      </Container>
    </section>
  )
}