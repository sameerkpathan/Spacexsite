import React from "react";
import "./index.css";
import image from "../assets/bg2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Capsules = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/capsules"
        );
        // console.log(response.data);
        setData(response.data);
      } catch (Error) {
        console.log("Error fetching data:", Error);
      }
    };
    fetchData();
  }, []);

  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/");
  };

  const handleProductdetails = (index)=>{
  // console.log(index)
  window.location.assign(`./CapsuleDetails${index}`)
  }


  return (
    <div>
      <header>
        <div className="headerlogo">
          <a href="/">
            Space<em>X</em>
          </a>
        </div>
        <div className="capsulesinfosec">
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
            <img src={image} alt="Failed to load" />
          </div>
        </div>
      </header>

      <section className="capsuledetails">
        <div>
          <div className="searchcapsule">
            <p>Search Capsules Here:</p>
            <input placeholder="search by status,original launch or type" />
            <button>Search</button>
          </div>

          <div className="Capsulecards">
            {data?.map((element, index) => {
              return (
                <div key={index} className="capsuleInfo" onClick={()=>handleProductdetails(element.capsule_serial)}>
                  <div className="fcol">
                    <h3>{element.capsule_serial}</h3>
                    <p>{element.details}</p>
                  </div>

                  <div className="scol">
                    {element.missions?.map((elements, index) => {
                      return (
                        <div key={index}>
                          <p>
                            <em className="subheading">Mission Name:</em>{" "}
                            {elements.name}
                          </p>
                        </div>
                      );
                    })}
                    <p>
                      <em className="subheading">Mission Slot:</em>{" "}
                      {element.status}
                    </p>
                  </div>

                  <div className="tcol">
                    <p>
                      <em className="subheading">type:</em> {element.type}
                    </p>
                    <p>
                      <em className="subheading">Landing:</em>{" "}
                      {element.landings}
                    </p>
                    <p>
                      <em className="subheading">Mission Time:</em>{" "}
                      {element.original_launch}
                    </p>
                  </div>
                </div>
              );
            })}
            
              <div className="capsuleInfo">
              <div className="fcol">
                <h3>C101</h3>
                <p>Reentered after three weeks in orbit</p>
              </div>

              <div className="scol">
                <p>
                  <em className="subheading">Mission Name:</em> COTS1
                </p>
                <p>
                  <em className="subheading">Mission Flight:</em> Flight 8
                </p>
                <p>
                  <em className="subheading">Mission Slot:</em> 2010-12-08
                </p>
              </div>

              <div className="tcol">
                <p>
                  <em className="subheading">type:</em> Dreagon1.0
                </p>
                <p>
                  <em className="subheading">Landing:</em> 1{" "}
                </p>
                <p>
                  <em className="subheading">Mission Time:</em> T15:43:00.000Z
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="Navbtn">
        <button onClick={handleClick}>Back To Home</button>
      </div>
    </div>
  );
};

export default Capsules;
