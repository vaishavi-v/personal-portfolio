export const AboutStats = () => {
  const stats = [
    { number: "7+", label: "Projects Completed" },
    { number: "7+", label: "Certifications" },
    { number: "20+", label: "Tools & Technologies" },
  ];

  return (
    <section className="about-stats" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2>About Me</h2>
            <p>
              I'm a Data Science undergraduate at SLIIT with a strong interest in Data Engineering
              and Data Analytics. I enjoy turning raw data into insights that support real decisions —
              from cleaning messy datasets to building interactive dashboards and predictive models.
              I'm currently seeking an internship where I can apply what I've learned and grow as a
              collaborative, results-driven professional.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div className="stat-box" key={i}>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};