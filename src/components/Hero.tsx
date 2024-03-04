import { Button } from "@/components/ui/button";

import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex sm:flex-row flex-col justify-center items-start sm:py-16 px-6 sm:px-16 py-6 mb-4"
    >
      <div className="flex flex-col  w-full sm:w-1/2 sm:my-16 my-6 gap-8">
        <h2 className="font-poppins font-bold text-6xl mx-2">Unleash Your Potential</h2>
        <p className="font-poppins text-xl font-normal text-muted-foreground">
          Where Sweat Becomes Strength and Every Challenge Ignites a Transformation!
        </p>
        <div className="flex flex-row items-center justify-start gap-8 w-full">
          <Link to="/join">
            <Button variant="default">JOIN NOW</Button>
          </Link>
          <Link to="/clubs">
            <Button variant="outline">FIND YOUR CLUB</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-1/2 ">
        <img src={hero} alt="woman holding weights" className="w-[450px] object contain" />
      </div>
    </section>
  );
};

export default Hero;
