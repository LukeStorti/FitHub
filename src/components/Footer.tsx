import { footerLinks } from "@/constants";
import { Dumbbell, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary flex sm:flex-row flex-col px-16 py-16">
      <div className="flex flex-col flex-[1.5]">
        <h1 className="flex flex-row items-center gap-2 font-poppins font-semibold text-4xl cursor-pointer">
          <a href="home">FitHub</a>
          <Dumbbell />
        </h1>
        <div className="mt-4 gap-2 flex flex-col">
          <p className="flex flex-row gap-2 font-poppins font-light text-muted-foreground my-2 cursor-pointer">
            <Phone />
            +44 285 4751
          </p>
          <p className="flex flex-row gap-2 font-poppins font-light text-muted-foreground my-2 cursor-pointer">
            <Mail />
            info@fithub.com
          </p>
        </div>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[140px]">
            <h4 className="font-poppins font-semibold text-lg">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((item, index) => (
                <li
                  key={item}
                  className={`font-poppins font-normal text-md cursor-pointer text-muted-foreground hover:text-primary ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
