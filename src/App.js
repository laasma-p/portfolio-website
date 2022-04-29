import "./App.css";
import Particles from "react-tsparticles";
import Hero from "./containers/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";

const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 700,
      },
      value: 90,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

const App = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        className="particles"
        params={particlesOptions}
      />
      <Hero />
      <Navigation />
      <About />
    </div>
  );
};

export default App;
