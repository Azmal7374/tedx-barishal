/* eslint-disable prettier/prettier */

import AboutSection from "@/components/Home/AboutSection/AboutSection";
import AboutTEDSection from "@/components/Home/AboutTed/AboutTed";
import Banner from "@/components/Home/Banner/Banner";
import BrowseTalksSection from "@/components/Home/BrowseTalkSection/BrowseTalkSection";
import CountdownSection from "@/components/Home/CountDownSection/CountDownSection";
import EventAgenda from "@/components/Home/EventAgenda/EventAgenda";
import GuestsSection from "@/components/Home/GuestSection/GuestSection";
import HighlightsSection from "@/components/Home/HighlightSection/HighlightSection";
import JoinUsSection from "@/components/Home/JoinUsSection/JoinUsSection";
import SponsorBanner from "@/components/Home/Sponcer/Sponcer";
import SponsorshipSection from "@/components/Home/SponcerShipSection/SponcerShipSection";
import ThemeSection from "@/components/Home/ThemeScction/ThemeSection";


// h1: Typically around 32–48px
// h2: Typically around 24–32px
// h3: Typically around 20–24px
// h4: Typically around 16–20px

const HomePage = () => {
    return (
        <div className="pr-10 pl-10 w-[1440px]">
           <Banner/>
           <SponsorBanner/>
           <ThemeSection/>
           <AboutSection/>
           <JoinUsSection/>
           <AboutTEDSection/>
           <BrowseTalksSection/>
           <HighlightsSection/>
           <GuestsSection/>
           <SponsorshipSection/>
           <EventAgenda/>
           <CountdownSection/>
        </div>
    );
};

export default HomePage;