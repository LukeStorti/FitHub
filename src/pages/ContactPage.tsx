import { ProfileForm } from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col mt-16 text-center justify-center items-center">
        <h1 className="font-poppins font-bold text-4xl sm:text-6xl mx-2">Connect With Us</h1>

        <p className="font-poppins  text-lg sm:text-xl font-normal text-muted-foreground w-full sm:w-3/4 mt-6">
          Have questions, feedback, or just want to say hello? We're here to listen and assist you.
          Reach out to us through the contact form below or connect with our customer support team.
          Your journey to a healthier lifestyle starts with a conversation. Let's talk!
        </p>
      </div>
      <div className="py-16 flex justify-center items-center mx-auto w-[350px] sm:w-[500px] md:w-[500px] ">
        <ProfileForm />
      </div>
    </>
  );
};

export default ContactPage;
