import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__skills">
          <h3> Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Begginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Begginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git and Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__workexperience">
          <h3> Work Experience</h3>
          <div class="rb-container">
      <ul class="rb">
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
            May 2022 - july 2022
          </div>
          <div class="item-title">
            <h2>Front End Developer Intern</h2>
            <small className="text-light">Luniva Tech</small>
            <p className="rb-item-desc">Worked on API and Plugins as frontend developer with React, JS, Firebase, Ant Design, Bootstrap, CSS, HTML</p>
          </div>

        </li>
        <li class="rb-item" ng-repeat="itembx">
          <div class="timestamp">
          December 2021 - February 2022
          </div>
          <div class="item-title">
          <h2>Training of Trainers(TOT)</h2>
            <small className="text-light">SURF SMART 2.0</small>
            <p className="rb-item-desc">Trained more than 50+ Trainers about the Generation Digital -SURF SMART 2.0 Project initialized by WAGGGS  and in cooperation with Nepal Scout.</p>
          </div>

        </li>

      </ul>

    </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
