import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Ali Hassnain",
  avatarImage: "/images/displayPicture.jpg",
  content:
    "I am Ali Hassnain, a web developer by profession. I have rich experience in developing websites using React.js. I have a sound experience of implementing fuctionality, integrating APIs and using Redux. I also have the working knowledge of Node.js, Express, MongoDB and mongoose.",
};

const progressData = [
  {
    id: 1,
    title: "React.js Development",
    percantage: 75,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "UI/UX Development",
    percantage: 85,
    progressColor: "#FF4C60",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} style={{borderRadius: '50%', height: '60%', width: '60%'}} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/images/Ali_Hassnain's_Resume.pdf" className="btn btn-default" download>
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
