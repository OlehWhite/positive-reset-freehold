import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import React from "react";

import {
  Container,
  Title,
  WrapperHeader,
  Post,
  Info,
  Text,
  UnderText,
} from "../otherPages/telehealth/style";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGTwo from "../public/Telehealth02-1024x626.jpg";
import IMGThree from "../public/Telehealth-1536x910.jpg";
import IMGOne from "../public/Telehealth01.jpg";
import IMGHeader from "../public/4Z8WMNtQ.jpeg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import { DATA_LINKS } from "../components/Services/constants";
import Link from "next/link";
import { WEBSITE_TITLE } from "../services/constants";

const Telehealth = () => {
  return (
    <Box>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Telehealth</title>
        <meta
          name="keywords"
          content="Telehealth services, Online therapy, Virtual counseling, Remote mental health support, Telemedicine solutions, Telepsychiatry, Teletherapy sessions, Telehealth benefits, Accessible healthcare, Remote treatment options"
        />
      </Head>
      <OtherHeader />
      <WrapperHeader style={{ backgroundImage: `url(${IMGHeader.src})` }}>
        <Title>TELEHEALTH</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 625,
              maxHeight: 355,
            }}
          >
            <Image
              src={IMGOne}
              id="image"
              alt=" Behavioral health"
              title=" Behavioral health"
            />
          </Box>
          <Info>
            <Text>
              Behavioral health — like other areas of health care — has changed
              significantly due to the COVID-19 public health emergency.
            </Text>
            <Text>
              Behavioral telehealth also benefits patients who can access care
              from their homes with more options for safety, privacy, and
              convenience.
            </Text>
            <Text>
              Behavioral telehealth may also be referred to as telebehavioral
              health, telemental health, telepsychiatry, or telepsychology.
            </Text>
            <Text>
              Virtual, telebehavioral health care can be part of an integrated
              approach to treating substance use disorders.
            </Text>
          </Info>
        </Post>
        <Post>
          <Info>
            <Text>
              Our Telehealth means the delivery of health care services through
              the use of interactive audio and video technology, permitting
              real-time communication between the patient at the originating
              site and the provider, for the purpose of diagnosis, consultation,
              or treatment.
            </Text>
            <Text>
              Our platform is all compliant, in order to protect your privacy
              and confidentiality. Our technology is at no cost to our patients.
            </Text>
            <Text>
              Patients can participate in sessions from home or any location
              determined appropriate by the patient and their clinician.
            </Text>
            <Text>
              All franchisees have access to a proprietary telemedicine software
              system. Telemedicine immediately resonated with existing and
              potential franchisees, which they proclaim as an innovative
              business model that will be attractive to future investors trying
              to see what business opportunities will be viable in our current
              economic climate.
            </Text>
          </Info>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 625,
              maxHeight: 355,
            }}
          >
            <Image
              src={IMGTwo}
              id="image"
              alt="All franchisees have access to a ..."
              title=" All franchisees have access to a ..."
            />
          </Box>
        </Post>
        <UnderText>
          <Text>
            This allows an investor with no experience in the behavioral field
            to scale their business in the industry. If you combine the fact
            that mental health care is recession resistant with our advanced
            telemedicine software, you have a recipe for success with or without
            a pandemic, of course.
          </Text>
        </UnderText>
        <Post>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 625,
              maxHeight: 355,
            }}
          >
            <Image
              src={IMGThree}
              id="image"
              alt="CLINICAL SERVICES USING TELEHEALTH PLATFORM:"
              title="CLINICAL SERVICES USING TELEHEALTH PLATFORM:"
            />
          </Box>
          <Info>
            <Title>CLINICAL SERVICES USING TELEHEALTH PLATFORM: </Title>
            <ul style={{ paddingLeft: "20px" }}>
              {DATA_LINKS.map(({ name, path }) => (
                <li key={name} style={{ color: "#555" }}>
                  <Link id="telehealth_link" href={path}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </Info>
        </Post>
      </Container>
      <Feedbacks />
    </Box>
  );
};

export default Telehealth;
