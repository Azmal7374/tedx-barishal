/* eslint-disable prettier/prettier */

import AboutSection from "@/components/Home/AboutSection/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import SponsorBanner from "@/components/Home/Sponcer/Sponcer";
import ThemeSection from "@/components/Home/ThemeScction/ThemeSection";


// h1: Typically around 32–48px
// h2: Typically around 24–32px
// h3: Typically around 20–24px
// h4: Typically around 16–20px

const HomePage = () => {
    return (
        <div className="pr-10 pl-10">
           <Banner/>
           <SponsorBanner/>
           <ThemeSection/>
           <AboutSection/>
        </div>
    );
};

export default HomePage;