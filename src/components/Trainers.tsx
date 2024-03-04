import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trainerData } from "@/constants";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
const Trainers = () => {
  return (
    <Carousel className="w-full max-w-md" opts={{ loop: true }}>
      <CarouselContent>
        {trainerData.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6 cursor-grab">
                  <Avatar className="w-[200px] h-[200px]">
                    <AvatarImage src={item.img} className="object-fill" />
                  </Avatar>
                  <div className="flex flex-col p-2 items-center justify-center">
                    <h1 className="font-poppins font-medium text-lg">{item.name}</h1>
                    <p className="font-poppins text-center py-2 text-muted-foreground">
                      <span className="font-bold text-foreground mr-2">{item.experience}</span>
                      Years Experience
                    </p>
                    <p className="font-poppins text-center py-2 text-muted-foreground">
                      {item.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Trainers;
