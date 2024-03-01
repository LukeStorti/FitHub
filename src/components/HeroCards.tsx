import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroCardsData } from "@/constants";
const HeroCards = () => {
  return (
    <div>
      <Carousel
        className="w-full max-w-xs"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 7000 })]}
      >
        <CarouselContent>
          {heroCardsData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="cursor-grab bg-primary">
                  <CardContent className="flex flex-col text-center aspect-square items-center justify-center p-6 text-white font-poppins gap-4">
                    <span className="text-6xl font-semibold">{item.amount} </span>
                    <span className="text-xl font-semibold">{item.title}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCards;
