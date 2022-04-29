import { useEffect } from "react";
import classes from "./About.module.css";
import profile from "../../assets/images/lasma.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const dateOfBirth = new Date("02/21/1996");
  const monthDifference = Date.now() - dateOfBirth.getTime();

  let ageDifference = new Date(monthDifference);

  const year = ageDifference.getUTCFullYear();

  const age = Math.abs(year - 1970);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={classes.About}>
      <div className={classes.AboutInfo}>
        <h2
          className={classes.AboutHeading}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          My story is different that someone else's.
        </h2>
        <div className={classes.AboutText}>
          <p data-aos="zoom-in" data-aos-duration="2000">
            I have always been curious about newest technology and how the
            software has been developed, but I was never introduced to
            programming until an accidental event that changed my planned career
            path radically.
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            As I was scrolling through Google Play Store looking for an
            application that I had missed on my phone, I noticed an app called
            Mimo that teaches you basics of different programming languages.
            After installing it and doing several exercises, I had an{" "}
            <a
              className={classes.AboutLink}
              href="https://en.wikipedia.org/wiki/Eureka_(word)"
            >
              Eureka!
            </a>{" "}
            moment which has taken me where I am now... "This is what I like.
            This is what I actually want to do with my future!"
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            This is how my interest about software was leveled up to the point
            where I had decided to take a big step to do a study switch,
            starting to study business and software engineering, and on my free
            time - learn more about web development and programming in general.
          </p>
          <p data-aos="zoom-in" data-aos-duration="2000">
            Being 70% self-taught, I am interested to build my career within
            either web development, either software engineering on its own.
          </p>
        </div>
      </div>

      <div className={classes.Info}>
        <img
          className={classes.InfoImage}
          src={profile}
          alt="developer"
          style={{ width: "350px", height: "auto" }}
          data-aos="zoom-in"
          data-aos-duration="2000"
        />
        <p
          className={classes.InfoText}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          I am Lasma, {age}-years-old future front-end web developer that is
          enthusiastic about tech and programming.
        </p>
      </div>
    </div>
  );
};

export default About;
