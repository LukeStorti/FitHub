import { Button } from "@/components/ui/button";
import error from "../assets/404.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex gap-8 flex-col justify-center items-center py-16 px-16">
      <img src={error} alt="error message" className="w-[400px] h-[400px]" />
      <h1 className="font-poppins font-semibold text-2xl">Page not found</h1>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
