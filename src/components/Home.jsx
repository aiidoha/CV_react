import React from "react";
import "../components/general.css";
const Home = () => {
  return (
    <header>
      <section class="hero container">
        <div class="hero__left">
          <h1>Hello,</h1>

          <h2>
            <strong>I am Aidai Nadyrbekova</strong>
          </h2>

          <br />
          <h4>
            <strong>
              {" "}
              Frontend <span>Developer</span>
            </strong>
          </h4>
          <br />
          <h4>
            <strong>
              {" "}
              UX/UI <span>Designer</span>
            </strong>
          </h4>
          <br />
          <h4>
            <strong>
              {" "}
              Graphic <span>Designer</span>
            </strong>
          </h4>
        </div>
      </section>
    </header>
  );
};

export default Home;
