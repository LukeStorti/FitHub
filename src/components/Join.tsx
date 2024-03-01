import { useState } from "react";
import { Switch } from "./ui/switch";
import { membershipPricing } from "@/constants";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Check, Dumbbell } from "lucide-react";

const Join = () => {
  const [checked, setChecked] = useState(true);
  return (
    <section
      id="join"
      className="flex  flex-col justify-start items-center sm:py-16 px-6 sm:px-16 py-6"
    >
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="font-poppins font-bold text-4xl sm:text-6xl mx-2">
          Discover Your Perfect Membership Plan
        </h1>

        <p className="font-poppins text-lg sm:text-xl font-normal text-muted-foreground w-full sm:w-3/4 mt-6">
          Tailor your fitness journey with our diverse membership options. Whether you're looking
          for a budget-friendly entry, premium access with exclusive perks, or specialized plans, we
          have a membership designed just for you. Explore our pricing and join a community
          committed to your health and well-being.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center my-8">
        <div className="flex gap-4">
          <h3 className="font-poppins font-bold text-xl mx-2">Billed Monthly</h3>
          <Switch checked={checked} onCheckedChange={() => setChecked((prev) => !prev)} />
          <h3 className="font-poppins font-bold text-xl mx-2">
            Billed Yearly <span className="text-primary"> Save 15%</span>
          </h3>
        </div>
        <div className="flex md:flex-row flex-col w-full items-center gap-8 py-8 mt-5">
          {membershipPricing.map((item, index) => (
            <Card
              key={index}
              className={`w-full md:w-1/3 relative h-[600px] ${
                index % 2 !== 0 ? "shadow-2xl" : "shadow-md mt-[50px]"
              }`}
            >
              <CardHeader className="font-poppins text-xl font-bold text-center flex flex-row justify-center items-center gap-2">
                {item.title}
                <Dumbbell size={20} />
              </CardHeader>
              <CardContent>
                <h3 className="font-poppins font-semibold text-center">
                  ${checked ? (item.price * 12 * 0.85).toFixed(2) : item.price}{" "}
                  {checked ? "/ year" : "/ month"}
                  <span className="ml-2 line-through text-muted-foreground text-sm">
                    {checked ? `$${(item.price * 12).toFixed(2)} / year` : ""}
                  </span>
                </h3>
                <Separator className="my-4" />
                <p className="font-poppins font-normal  h-[140px]">{item.description}</p>

                <ul className="list-none font-poppins flex flex-col justify-end items-start mt-8">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className={`${
                        index === item.features.length - 1 ? "mb-0" : "mb-2"
                      } font-medium flex gap-2 text-sm`}
                    >
                      <Check color="green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="absolute w-full flex  bottom-2 mx-auto py-4">
                  <Button className="w-[85%]">LEARN MORE</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Join;
