import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const allProjects = [
    {
      title: "Sri Lanka Tourism Analysis Dashboard",
      description: "Python, SQL, Power BI",
      imgUrl: projImg1,
      details: "Analyzed 23 years of Sri Lanka's tourism trends (2000-2023) using Python, SQL, and Power BI. Found that revenue per tourist hit a record $2,257 in 2021 despite an 83% COVID-driven drop in arrivals, and that India remained the top source market with 4.67M arrivals. Built an interactive Power BI dashboard and deployed a live Streamlit app.",
      github: "https://github.com/vaishavi-v/Sri-Lanka-Tourism-Analysis",
      liveLink: "https://sri-lanka-tourism-analysis-ryhicedfiupymyy5nvlqn8.streamlit.app/",
    },
    {
      title: "Global Rice Yield Prediction",
      description: "Python, Scikit-learn, Pandas",
      imgUrl: projImg2,
      details: "Analyzed rice yield data across 70+ countries (1990-2013) with a focus on Sri Lanka. Built and compared Random Forest and Linear Regression models, achieving 94% prediction accuracy (R² = 0.94) compared to just 18% with Linear Regression. Identified optimal growing conditions for Sri Lanka (~1800mm rainfall, ~27°C).",
      github: "https://github.com/vaishavi-v/rice-yield-prediction",
    },
    {
      title: "Electricity Consumption Forecasting",
      description: "Python, LightGBM, ML",
      imgUrl: projImg3,
      details: "Developed a LightGBM regression model to forecast Sri Lankan household electricity consumption using smart meter data. Built an end-to-end ML pipeline, eliminated data leakage, and achieved R² = 0.8448 and MAE = 2231.32 kWh through feature engineering and hyperparameter tuning.",
      github: "https://github.com/mahdyhassan-07/Sri-Lankan-Electricity-Consumption-Forecasting-ML-Model",
    },
    {
      title: "Student Concern Management System",
      description: "Spring Boot, Java",
      imgUrl: projImg4,
      details: "Built the Concern & Evidence Manager module for an AI-powered student complaint platform developed for a real client (Academy of Knowledge Bridge). Implemented full CRUD operations, input validation, evidence upload, and concern history tracking using Spring Boot and Java.",
      github: "https://github.com/vaishavi-v/SCMS-University-Project",
    },
    {
      title: "SCMS Mobile App",
      description: "React Native, Node.js, MongoDB",
      imgUrl: projImg5,
      details: "Developed the mobile companion app for the Student Concern Management System using React Native, Expo, Node.js/Express, and MongoDB. Implemented student-facing features including concern submission, real-time status tracking, and secure authentication.",
      github: "https://github.com/vaishavi-v/SCMS-Mobile-App",
    },
    {
      title: "Medicine Ordering System",
      description: "Spring Boot 3, MS SQL Server",
      imgUrl: projImg6,
      details: "Full-stack platform built with Spring Boot 3 and MS SQL Server, featuring 7-role RBAC, prescription verification, and inventory tracking. Designed the IT Administrator module for user and medicine catalog management.",
      github: "https://github.com/vaishavi-v/Medicine-Ordering-System",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of my data analytics, web development, and independent projects — built to solve real problems and sharpen my skills.</p>
                <Row>
                  {
                    allProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
<img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}