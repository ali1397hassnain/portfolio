import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Software Engineering - Mehran UET",
    years: "2016 - 2019",
    content:
      "Completed my Bachelor's Degree in Software Engineering in 2019 from Mehran University of Engineering and Technology.",
  },
  {
    id: 2,
    title: "Intermediate - Rangers College",
    years: "2014 - 2015",
    content:
      "Completed my Intermediate in Pre-Engineering in 2015 from Rangers College",
  },
  {
    id: 3,
    title: "Matriculation - Bahria Foundation",
    years: "2013",
    content:
      "Completed my matriculation in pre-medical in 2013 from Bahria Foundation",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Front-End Developer - TeleCard Pvt Limited",
    years: "Jan 2022 - Present",
    content:
      "Working as Front-End Developer using React.js, working on creating CRMs, implementing fuctionalities, integrating APIs.",
  },
  {
    id: 2,
    title: "Web Developer Intern - Engage N Reactive",
    years: "December 2021 - Jan 2022",
    content:
      "Worked as a Web Developer Intern, mainly focusing on converting Adobe XD and PSD files into pixel perfect HTML", 
  },
  {
    id: 3,
    title: "Customer Support Executive - IBEX",
    years: "Sep 2020 - Aug 2021",
    content:
      "Worked as a Customer Support Executive for Walmart.com",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Education & Experience" />
        <div className="row">
          <div className="col-md-6">
            <h3> Education </h3>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="ml-3"> Experience </h3>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
