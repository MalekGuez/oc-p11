import { useState, useEffect } from "react";

import Banner from "../components/Banner";

import HomeBanner from "../assets/Home-banner.png";
import Card from "../components/Card";

const Home = () => {
  const [loc, setLoc] = useState([]);

  const getLocs = () => {
    fetch("./logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        setLoc(json);
    });
  };

  useEffect(() => {
    getLocs();
  }, []);

  return (
    <div className="kasa-home">
        <Banner text="Chez vous, partout et ailleurs" img={HomeBanner} />
        <div className="kasa-home__cards">
            {
                loc && loc.length > 0 && 
                loc.map((item, index) => <Card key={index} data={item} />)
            }
        </div>
        
    </div>
  );
};

export default Home;
