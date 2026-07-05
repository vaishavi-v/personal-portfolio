import { BarChartLine, Database, GraphUp, Grid } from 'react-bootstrap-icons';

export const Services = () => {
  const services = [
    {
  icon: <BarChartLine size={32} />,
  title: "Data Analysis & Visualization",
  desc: "Turning raw data into clear, actionable insights using Power BI, Tableau, and Excel.",
},
    {
      icon: <Database size={32} />,
      title: "Data Cleaning & Preprocessing",
      desc: "Preparing messy, real-world datasets for analysis using Python and SQL.",
    },
    {
      icon: <GraphUp size={32} />,
      title: "Predictive Modeling",
      desc: "Building machine learning models to forecast outcomes using Scikit-learn and Python.",
    },
{
  icon: <Grid size={32} />,
  title: "Dashboard Development",
  desc: "Building interactive, decision-ready dashboards using Power BI and Streamlit.",
},
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>What I Can Help With</h2>
        <div className="row">
          {services.map((service, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h5>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};