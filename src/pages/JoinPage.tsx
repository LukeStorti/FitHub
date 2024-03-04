import { Join } from "@/components";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { joinData } from "@/constants";
const JoinPage = () => {
  return (
    <>
      <Join />
      <h1 className="text-center font-poppins text-2xl font-bold">Your Questions Answered</h1>

      <Accordion type="single" collapsible className="w-full pt-16 pb-8 px-4">
        {joinData.map((item) => (
          <AccordionItem value={item.question} key={item.id}>
            <AccordionTrigger className="font-poppins font-semibold text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-poppins leading-8 text-lg text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default JoinPage;
