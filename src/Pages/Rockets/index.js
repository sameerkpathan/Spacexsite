import "./index.css";
import image from "../assets/rocket.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Rockets = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try{

        const responsedata = await axios.get("https://api.spacexdata.com/v3/rockets");
        setData(responsedata.data);
      }catch(Error){
         if(Error.response){
          console.log("ServerError",Error.response.status)
         } else if(Error.request){
          console.log("Network Issue",Error.request)
         }else{
          console.log("Error",Error.message)
         }
      }
    };
    fetchData();
  }, []);

  const Navigate = useNavigate();

  const handleClick=()=>{
         Navigate("/")
  }

  return (
    <div>
      <header>
        <div className="headerlogo">
          <a href="/">
            Space<em>X</em>
          </a>
        </div>
        <div className="Rocketinfosec">
          <div className="Rocketdata">
            <h1>Rockets</h1>
            <p>
              Most current rockets are chemically powered rockets (usually
              internal combustion engines, but some employ a decomposing
              monopropellant) that emit a hot exhaust gas. A rocket engine can
              use gas propellants, solid propellant, liquid propellant, or a
              hybrid mixture of both solid and liquid.
            </p>
          </div>
          <div className="Rocketimg">
            <img src={image} alt="Failed to load" />
          </div>
        </div>
      </header>

      <section className="capsuledetails">
        <div>
          

          <div className="Rocketcards">
            {data?.map((element, index) => {
              return (
            <div key={index} className="RocketInfo">
              <div className="fcol">
                <h3>{element.company}</h3>
                <p>{element.country}</p>
                <p>${element.cost_per_launch}</p>
              </div>

              <div className="scol">
                <p>
                  <em className="subheading">Engine Type:</em> {element.engines.type}
                </p>
                <p>
                  <em className="subheading">Mission Flight:</em> {element.first_flight}
                </p>
                <p>
                  <em className="subheading">Mission Slot:</em> 2010-12-08
                </p>
              </div>

              <div className="tcol">
                
                <img className="RocketImage" alt="Failed to load" src={element.flickr_images}/>
              </div>
            </div>
          
              );
            })}
          </div>
        </div>
      </section>
      <div className="Navbtn">
        <button onClick={handleClick}>Back To Home</button>
      </div>
    </div>
  );
};

export default Rockets;
