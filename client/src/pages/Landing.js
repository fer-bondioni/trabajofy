import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> App
          </h1>
          <p>
            I'm baby forage yr activated charcoal, drinking vinegar meh taiyaki
            air plant bespoke deep v four loko man braid. Retro locavore bitters
            taxidermy, next level cray unicorn offal iceland street art PBR&B.
          </p>
          <Link path to="/register">
            <button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
