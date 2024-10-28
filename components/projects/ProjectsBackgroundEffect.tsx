import * as React from "react";
import Particles from "../magicui/particles";
import Meteors from "../magicui/meteors";

const ProjectsBackGroundEffect = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0">
      <div className="w-full h-full bg-gradient-to-b from-transparent via-dark-100 from-30%  to-dark-100 absolute z-10" />
      <div className="inset-0 bg-gradient-to-r from-dark-100 via-transparent to-transparent absolute z-10" />
      <div className="inset-0 bg-gradient-to-l from-dark-100 via-transparent to-transparent absolute z-10" />

      <div className="absolute w-full h-full z-0 bg-primary-600 bg-opacity-15">
        <Meteors number={30} />
        <Particles className="absolute inset-0" quantity={1000} ease={80} />
      </div>
    </div>
  );
};

export default ProjectsBackGroundEffect;
