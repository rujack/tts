import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <div className="m-auto text-center">
      <h1 className="text-white" style={{ fontSize: "3.7em" }}>
        We Are
      </h1>
      <h1 className="text-white" style={{ fontSize: "4em" }}>
        <Typical
          steps={["Task Slayer Team", 1000]}
          loop={1}
          wrapper="p"
        />
      </h1>
    </div>
  );
};

export default Home;
