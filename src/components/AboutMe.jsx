import React from "react";
import "../components/general.css";
import img from "../components/images/aboutMe.jpg";
const AboutMe = () => {
  return (
    <section className="container main">
      <div className="main__left">
        <img src={img} alt="React Image" />
      </div>
      <div className="main__right">
        <h2>Aidai Nadyrbekova</h2>

        <h4>
          A Lead <span>Product Designer</span> based in <span>Kyrgyzstan</span>
        </h4>
        <p>
          An independent and self-motivated volunteer looking for ongoing
          professional development where I can utilize the extensive knowledge.
          Well-versed in problem-solving capabilities and I am confident that I
          have the skills, qualities, and qualifications needed to excel in the
          role.
        </p>
        <div className="main__list">
          <div className="col-md">
            <div className="media">
              <h3>Birthday</h3>
              <p>10/09/2003</p>
            </div>
            <div className="media">
              <h3>Age</h3>
              <p>19</p>
            </div>
            <div className="media">
              <h3>Residence</h3>
              <p>Kyrgyzstan</p>
            </div>
            <div className="media">
              <h3>Adress</h3>
              <p>Alamudun 5</p>
            </div>
          </div>
          <div className="main__list">
            <div className="col-md">
              <div className="media">
                <h3>E-mail</h3>
                <p>aidai.nadyr@gmail.com</p>
              </div>
              <div className="media">
                <h3>Phone</h3>
                <p>+996705728209</p>
              </div>
              <div className="media">
                <h3>TikTok</h3>
                <p>@_aidohaa_</p>
              </div>
              <div className="media">
                <h3>Instagram</h3>
                <p>@_aidoha_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
