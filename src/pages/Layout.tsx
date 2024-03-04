import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Toaster } from "@/components/ui/toaster";
export default function Layout() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="flex flex-col justify-center items-center">
          <div className="xl:max-w-[1280px] w-full py-8">
            <Navbar />
            <Outlet />
            <Toaster />
          </div>
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
