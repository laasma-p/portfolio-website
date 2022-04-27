import { useState, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  let initialText = "Hi. I am Lasma.";
  const [heroHeading, setHeroHeading] = useState(initialText);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={classes.Hero}>
      <div className={classes.HeroText}>
        <h1
          data-aos="zoom-in"
          data-aos-duration="2000"
          className={classes.HeroHeading}
          onMouseOver={() => setHeroHeading("A front-end web developer.")}
          onMouseLeave={() => setHeroHeading(initialText)}
        >
          {heroHeading}
        </h1>
      </div>

      <div className={classes.Actions}>
        <Button>CV (English)</Button>
        <Button>CV (Danish)</Button>
      </div>
    </div>
  );
};

export default Hero;
