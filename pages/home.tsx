import { MotivationalQuotes } from "../otherPages/home/MotivationalQuotes/MotivationalQuotes";
import { FranchiseOptions } from "../otherPages/home/FranchiseOptions/FranchiseOptions";
import { AboutFranchising } from "../otherPages/home/AboutFranchising/AboutFranchising";
import { OurPartners } from "../otherPages/home/OurPartners/OurPartners";
import { HomeHeader } from "../components/Layout/HomeHeader/HomeHeader";
import { Services } from "../otherPages/home/Services/Services";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { Box } from "@mui/material";
import React, { FC } from "react";
import Head from "next/head";
import { WEBSITE_TITLE } from "../services/constants";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today</title>
        <meta
          name="description"
          content="Positive Reset Freehold Health Clinic offers psychotherapy; medication management, comprehensive assessment, diagnosis and treatment of a full range of behavioral disorders."
        />
        <meta
          name="description2"
          content="reset, positive reset, mental health, wellness, therapy, healing, personal growth, self-improvement, well-being, mind-body balance, positive mindset, emotional well-being, stress management, self-care"
        />
      </Head>
      <HomeHeader />
      <Box>
        <Services />
        <MotivationalQuotes />
        <Feedbacks color={"#fff"} />
        <FranchiseOptions />
        <AboutFranchising />
        <OurPartners />
      </Box>
    </>
  );
};

export default Home;
