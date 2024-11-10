/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="">{children}</div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default layout;
