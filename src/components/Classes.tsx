import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { classCardData } from "@/constants";

import { Button } from "./ui/button";

const Classes = () => {
  return (
    <section
      id="classes"
      className="flex  flex-col justify-start items-center sm:py-16 px-6 sm:px-16 py-6"
    >
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="font-poppins font-bold text-4xl sm:text-6xl mx-2">
          Elevate Your Fitness with Diverse Classes
        </h1>

        <p className="font-poppins text-lg sm:text-xl font-normal text-muted-foreground w-full sm:w-3/4 mt-6">
          Experience a dynamic fitness journey with our diverse range of classes tailored to suit
          every fitness level and interest. From high-intensity workouts like HIIT and Spin Fusion
          to calming practices like Yoga Flow and Mindful Meditation, our classes cater to your
          unique fitness goals. Join us and discover a world of possibilities for a healthier and
          more energized you.
        </p>
      </div>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="flex justify-center items-center my-16 h-[460px] w-[350px] sm:w-[500px]  md:w-[1000px] px-8 "
      >
        <CarouselContent>
          {classCardData.map((item) => (
            <CarouselItem key={item.id} className=" md:basis-1/3">
              <div className="p-1">
                <Card className="cursor-grab">
                  <CardContent className="flex gap-8 flex-col  items-center justify-start h-[400px] p-6">
                    <h1 className="font-poppins font-bold text-xl mx-2">{item.title}</h1>
                    <p className="font-poppins font-normal text-center text-muted-foreground h-[200px]">
                      {item.description}
                    </p>
                    <item.Icon size={50} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button>LEARN MORE</Button>
    </section>
  );
};

export default Classes;
