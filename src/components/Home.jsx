// src/components/Home.js
import React from "react";
import "../App.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay">
        <div className="welcome-note">
          <h1>
            WELCOME<span class="wave">👋</span>
          </h1>
          <p>
            I’m IGE TEMITOPE IBRAHIM, a passionate web designer. A
            Result-Oriented Web Developer building and managing Websites and Web
            Applications that leads to the success of the overall product
          </p>
        </div>
        <div className="profile-picture">
          <img src="../assets/images/prof2.jfif" alt="Temitope" />
        </div>
      </div>
    </section>
  );
}

export default Home;
