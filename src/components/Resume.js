export const Resume = () => {
  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      desc: "Began BSc (Hons) in Information Technology, specialized in Data Science. Built a foundation in programming, databases, and computer systems.",
    },
    {
      year: "2025",
      title: "Building the Toolkit",
      desc: "Completed several professional certifications and built independent data science projects, improving skills in Python, SQL, and machine learning through coursework and hands-on practice.",
    },
    {
      year: "2026",
      title: "Ready for the Real World",
      desc: "Currently a third-year undergraduate with a GPA of 3.83, actively seeking a Data Analyst, Data Engineer, or Data Science internship to gain hands-on industry experience.",
    },
    {
      year: "Future",
      title: "What's Next",
      desc: "Aiming to transition into a full-time data analytics or data science role, deepening expertise in machine learning, data engineering, and real-world problem solving.",
    },
  ];

  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2 className="resume-title">
          My <span className="highlight">Journey So Far</span>
        </h2>
        <div className="timeline-wrapper">
          {timeline.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker">{i + 1}</div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <h5>{item.title}</h5>
                </div>
                <p className="timeline-year">{item.year}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};