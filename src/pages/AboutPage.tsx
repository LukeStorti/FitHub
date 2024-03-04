import Trainers from "@/components/Trainers";
import about from "../assets/about.png";
import about2 from "../assets/about2.png";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center  px-4">
        <div className="flex flex-col text-center justify-center items-center mt-16">
          <h1 className="font-poppins font-bold text-4xl sm:text-6xl mx-2">Discover Our Story</h1>

          <p className="font-poppins text-lg sm:text-xl font-normal text-muted-foreground w-full sm:w-3/4 mt-6">
            At FitHub, we are more than just a fitness center; we are a community committed to your
            well-being. Learn about our journey, values, and the passion that drives us to provide
            an exceptional fitness experience. Join us in shaping a healthier and happier future
            together.
          </p>
        </div>
        <div className="my-16">
          <img src={about} alt="man holding weights" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-start justify-center px-4">
        <div className="my-16 w-full flex items-center justify-center">
          <img src={about2} alt="man holding weights" className="" />
        </div>
        <div className="flex flex-col text-center justify-center items-center mt-16 px-2">
          <h1 className="font-poppins font-bold text-4xl sm:text-6xl mx-2">
            Meet Our Awesome Trainers
          </h1>

          <p className="font-poppins text-lg sm:text-xl font-normal text-muted-foreground w-full sm:w-3/4 mt-6">
            Packed with expertise and passion, our team of exceptional trainers is here to guide you
            on your fitness journey. Each trainer brings a unique blend of skills, motivation, and
            personalized attention to ensure you achieve your goals. Get ready to be inspired and
            empowered by our awesome trainers who are dedicated to helping you unlock your full
            fitness potential. Meet the faces behind your success and embark on a transformative
            experience with our fitness experts.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-16 ">
        <Trainers />
      </div>
    </>
  );
};

export default AboutPage;
