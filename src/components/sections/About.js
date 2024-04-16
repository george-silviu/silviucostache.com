import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/avatar-2.svg",
  content:
    "I am George-Silviu, a Full Stack Developer and a ZTM Academy student from Bucharest. I have a passion for web development and I love to create websites and web applications that are both functional and visually appealing. I am constantly learning new technologies and I am always looking for new challenges. I am a hard-working and dedicated person, and I always strive to deliver high-quality work. I am a team player and I enjoy working with others to achieve common goals. I am looking for opportunities to work on interesting projects and to further develop my skills.",
};

const progressData = [
  {
    id: 1,
    title: "Frontend (ReactJS)",
    percantage: 85,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Backend (NodeJS, ExpressJS)",
    percantage: 95,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Databases (MongoDB, PostgreSQL, Firebase)",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
  {
    id: 3,
    title: "Problem Solving (LeetCode, HackerRank)",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
  {
    id: 3,
    title: "Test",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
  {
    id: 3,
    title: "Test1",
    percantage: 70,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          {/* <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div> 
          
            col-md-9
          */}

          <div className=" triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3 d-flex justify-content-center">
                    <a href="!#" className="btn btn-default">
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
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
