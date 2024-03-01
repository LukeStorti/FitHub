import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clubCardInfo } from "@/constants";
import club from "../assets/club.png";
import { Button } from "./ui/button";

const Clubs = () => {
  return (
    <section
      id="clubs"
      className="flex  flex-col justify-start items-center sm:py-16 px-6 sm:px-16 py-6"
    >
      <div className="flex flex-col  text-center justify-center items-center">
        <h1 className="font-poppins font-bold text-4xl sm:text-6xl mx-2">
          Discover your perfect workout location
        </h1>

        <p className="font-poppins  text-lg sm:text-xl font-normal text-muted-foreground w-full sm:w-3/4 mt-6">
          Embark on a fitness journey like no other and discover your perfect workout location.
          Whether you crave the energy of our bustling urban gyms, the tranquility of coastal
          retreats, or the panoramic views from high-rise wellness hubs, your ideal fitness haven
          awaits. Unleash your potential and redefine your workout experience with us.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-20 my-16 w-full">
        <Accordion type="single" collapsible className="w-[350px] sm:w-[400px]">
          {clubCardInfo.map((item) => (
            <AccordionItem value={item.title} key={item.id}>
              <AccordionTrigger className="font-poppins font-semibold text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="font-poppins leading-8 text-lg text-muted-foreground">
                {item.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <img src={club} alt="man holding weights" className="w-[450px] object contain" />
      </div>
      <div className="my-4">
        <Button>FIND YOUR CLUB</Button>
      </div>
    </section>
  );
};

export default Clubs;
