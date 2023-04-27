import React from "react";
import "../components/general.css";
const Skills = () => {
  return (
    <section className="skills">
      <div className="row">
        <div className="col">
          <div className="col-1">
            <h4>SoftSkills</h4>
          </div>
          <ul>
            <li>
              <span>Teamwork</span>
              <p>
                Achieve common goals while supporting and complementing the
                strengths of others.
              </p>
            </li>
            <li>
              <span>Communication</span>
              <p>
                Strong communicators know their audience, stick to the point and
                concise language.
              </p>
            </li>
            <li>
              <span>Adaptability</span>

              <p>
                If you’re adaptable, you’ll make sure to completely understand
                an impending change and keep an open mind.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col coll">
          <div className="col-1">
            <h4>HardSkills</h4>
          </div>
          <ul>
            <li>
              <span>HTML/CSS</span>
              <h6>Visual Studio</h6>
              <p>All my works you can see in my GitHub page.</p>
            </li>
            <li>
              <span>JavaScript</span>
              <h6>React.js</h6>
              <p>All my works you can see in my GitHub page.</p>
            </li>
            <li>
              <span>Figma</span>
              <h6>UX/UI Design</h6>
              <p>All my works are in Behance. </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col colll">
          <div className="col-1">
            <h4>Languages</h4>
          </div>
          <div className="third">
            <div className="skill-it">
              <h6>Kyrgyz</h6>
              <div className="skill-bar">
                <div className="skill-bar-in">
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="skill-it">
              <h6>English</h6>
              <div className="skill-bar1">
                <div className="skill-bar-in">
                  <span>80%</span>
                </div>
              </div>
            </div>

            <div className="skill-it">
              <h6>Russian</h6>
              <div className="skill-bar2">
                <div className="skill-bar-in">
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="skill-it">
              <h6>Turkish</h6>
              <div className="skill-bar3">
                <div className="skill-bar-in">
                  <span>70%</span>
                </div>
              </div>
            </div>

            <div className="skill-it">
              <h6>German</h6>
              <div className="skill-bar4">
                <div className="skill-bar-in">
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
