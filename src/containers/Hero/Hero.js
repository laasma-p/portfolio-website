import Button from "../../components/UI/Button/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  let initialText = "Hi. I am Lasma.";

  return (
    <div className={classes.Hero}>
      <div className={classes.HeroText}>
        <h1 className={classes.HeroHeading}>{initialText}</h1>
      </div>

      <div className={classes.Actions}>
        <Button>CV (English)</Button>
        <Button>CV (Danish)</Button>
      </div>
    </div>
  );
};

export default Hero;
