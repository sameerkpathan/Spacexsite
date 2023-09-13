import { Link } from "react-router-dom";
import capimage from "../assets/bg2.jpg"
import RocImage from '../assets/rocket.jpg'
import "./index.css";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Landingpage = () => {


  const linkstyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "rgb(19, 18, 18)",
  };
  return (
    <div className="MainLandingdiv">
      <header className="headerdiv">
        <div className="headerlogo">
          <a href="/">
            Space<em>X</em>
          </a>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <Link to="/capsule" style={linkstyle}>
                Capsule
              </Link>
            </li>
            <li>
              <Link to="/rocket" style={linkstyle}>
                Rockets
              </Link>
            </li>
            <li>
              <Link to="/about" style={linkstyle}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <Carousel />
      </div>

      <section>
      <div className="capsulesinfosec Capsuled">
          <div className="capsuledata">
            <h1>Capsules</h1>
            <p>
              Space capsules are the compartments designed to support humans
              during their journeys through space. In addition to keeping
              astronauts secure during launch or re-entry, capsules must protect
              them from the cold of space and space radiation.
            </p>
          </div>
           <div className="capimg">
            <img src={capimage} alt="Failed to load" />
           </div>
        </div>

        <div className="capsulesinfosec Capsuled">
        <div className="capimg rocketimg">
            <img src={RocImage} alt="Failed to load" />
          </div>
          <div className="capsuledata rocket">
            <h1>Rockets</h1>
            <p>
              Most current rockets are chemically powered rockets (usually
              internal combustion engines, but some employ a decomposing
              monopropellant) that emit a hot exhaust gas. A rocket engine can
              use gas propellants, solid propellant, liquid propellant, or a
              hybrid mixture of both solid and liquid.
            </p>
          </div>
          
        </div>
      </section>
      <div >

      <Footer/>
      </div>
    </div>
  );
};

export default Landingpage;
