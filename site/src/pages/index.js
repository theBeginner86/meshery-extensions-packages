import { Main } from '../sitecomponents/App.style';
import Footer from "../sitecomponents/Footer/index";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from '../sitecomponents/index.style.js';
import { useDarkMode } from "../sitecomponents/useDarkMode";
import Navigation from "../sitecomponents/Navigation/index";
import Faq from "../sitecomponents/Faq/index";
import React, { useState } from "react";
import BadgeGrid from "../sitecomponents/BadgeGrid/index";
import recognitionLogo from "../assets/images/recognition-program.png";
import recognitionBanner from "../assets/images/recognition-banner.png";
import githubGopi from "../assets/images/github-badges.png";
import githubKaran from "../assets/images/github-badges-karan.png";
import '../fonts.css'
const App = () => {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [showSignUpButton, setShowSignUpButton] = useState(true);

  // const handleSignUpFormSubmit = () => {
  //   setShowSignUpButton(false);
  // };

  return (
    <>
      <title>Layer5 Recognition Program</title>
      <meta name="description" content="Showcasing Your Achievements as a User and a Contributor" />
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} showSignUpButton={showSignUpButton} />
        <Main>
          <section className="hero">
            <img className="program-logo" src={recognitionLogo} alt="Recognition Program Logo"/>
            <h3 className="try-now-txt">Showcasing Your Achievements as a User and a Contributor</h3>
            <h1>
            Layer5 Recognition Program
            </h1>
            
            <p className="desc-text">
            Layer5 badges are one of the many ways that we recognize the efforts of our contributors and uplift our users. Layer5 badges represent milestones that you achieve both in using and in contributing to Layer5-supported open source projects. As a contributor, this is how you demonstrate your ownership, dedication, skills and loyalty to Layer5. As a user, this is how you demonstrate your prowess.
            </p>
            <div className="banner-main">
              <img src={recognitionBanner} alt="Recognition Program Banner"/>
            </div>
            <p>See the <a href="https://layer5.io/community/handbook/recognition">Recognition</a> section of the <a href="https://layer5.io/community/handbook/recognition">Layer5 Community Handbook</a> for details of when and how each badge is awarded.</p>
            <section className="faq">
              {/* <h1>Frequently Asked Questions</h1> */}
              <Faq category={["Layer5 Badges"]}   
                  display-category-title={"false"} />
            </section>
            <section className="badges">
              <BadgeGrid  />
            </section>
            <div className="banner-logos">
              <h3> Wear your badge pride proudly. Embed your Layer5 badges in your GitHub profile</h3>
              <h4>Follow these steps to display your badge:</h4>
              <ol>
                <li>Visit your Layer5 Cloud Profile to see the badges</li>
                <li>Click on the badge, which you wanted to display</li>
                <li>Copy the markdown code by clicking the Embed Code icon</li>
                <li>Paste the code in your GitHub profile README.</li>
              </ol>
              <div className="github-badges">
                <img src={githubGopi} alt="Recognition Program Banner"/>
                <img src={githubKaran} alt="Recognition Program Banner"/>
              </div>
            </div>
            {/* <ReactPlayer
              url="https://youtu.be/Do7htKrRzDA"
              playing
              controls
              light={mesheryPlayground}
              width="90%"
              style={{ margin: "auto" }}
              className="embedVideo"
            /> */}
            
            {/* <p className="caption">Launch and learn with Meshery</p>
            <p className="byline">The cloud native playground contains a set of learning paths that incorporate an application networking centric curriculum featuring training on 200+ integrations.</p> */}
          </section>
          {/* <section className="form" id="signup-form">
            <SignupForm onSubmit={handleSignUpFormSubmit}  />
          </section> */}

          <section className="join-community">
            <div>
              <h1>Join the community!</h1>
              <p>Engage in the Layer5 community by joining us on Slack</p>
              <a href="https://slack.layer5.io/" >Join Our Open Source Community</a>
            </div>
          </section>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
