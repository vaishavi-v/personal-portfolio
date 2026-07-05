import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaDatabase, FaChartBar, FaBrain } from "react-icons/fa";
import { SiPandas, SiScikitlearn } from "react-icons/si";

const SkillCircle = ({ icon, name, percent }) => {
  const circleStyle = {
    background: `conic-gradient(#c850c0 ${percent * 3.6}deg, #2a2a3d 0deg)`
  };
  return (
    <div className="item">
      <div className="skill-circle-wrapper">
        <div className="skill-circle" style={circleStyle}>
          <div className="skill-circle-inner">
            <div className="skill-icon">{icon}</div>
            <span>{percent}%</span>
          </div>
        </div>
      </div>
      <h5>{name}</h5>
    </div>
  );
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const skills = [
  { name: "Python", percent: 85, icon: <FaPython size={30} /> },
  { name: "Power BI", percent: 85, icon: <FaChartBar size={30} /> },
  { name: "SQL", percent: 80, icon: <FaDatabase size={30} /> },
  { name: "Java", percent: 75, icon: <FaJava size={30} /> },
  { name: "HTML", percent: 85, icon: <FaHtml5 size={30} /> },
  { name: "CSS", percent: 80, icon: <FaCss3Alt size={30} /> },
  { name: "GitHub", percent: 85, icon: <FaGithub size={30} /> },
  { name: "JavaScript", percent: 70, icon: <FaJs size={30} /> },
  { name: "Machine Learning", percent: 70, icon: <FaBrain size={30} /> },
  { name: "Pandas", percent: 70, icon: <SiPandas size={30} /> },
  { name: "Scikit-learn", percent: 70, icon: <SiScikitlearn size={30} /> },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>From messy data to meaningful insight..<br />The tools and technologies I use to clean data, uncover insights, and build models that turn numbers into decisions..</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, i) => (
                  <SkillCircle key={i} icon={skill.icon} name={skill.name} percent={skill.percent} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="ab" />
    </section>
  )
}