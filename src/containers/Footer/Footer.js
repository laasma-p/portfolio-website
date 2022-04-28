import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date();

  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContainer}>
        <div className={classes.CopyrightContainer}>
          <p className={classes.Copyright}>
            &copy; {year.getFullYear()} Lasma Poksane
          </p>
        </div>

        <div className={classes.IconsContainer}>
          <ul className={classes.IconsList}>
            <li className={classes.IconsItem}>
              <a
                href="https://www.linkedin.com/in/lasma-p-410753156/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className={classes.IconsItem}>
              <a
                href="https://www.facebook.com/laaasminja"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li className={classes.IconsItem}>
              <a
                href="https://github.com/laasma-p"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
