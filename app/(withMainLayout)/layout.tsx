/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="">{children}</div>
      </div>
      <div className="pl-[30px] w-[1440px]">
        <Footer/>
      </div>
    </>
  );
};

export default layout;
