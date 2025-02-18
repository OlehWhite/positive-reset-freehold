import {
  Title,
  WrapperHeader,
  Wrapper,
  Block,
  Text,
  WrapperBlock,
  Button,
} from "../otherPages/career/style";
import { PersonalForm } from "../otherPages/career/PersonalForm/PersonalForm";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "../public/couple-with-problems02а.jpg";
import IMGTwo from "../public/pexels-lukas-653429-scaled.jpg";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGOne from "../public/career.jpg";
import React, { useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import { WEBSITE_TITLE } from "../services/constants";

const CareerOpportunities = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Career Opportunities</title>
        <meta
          name="keywords"
          content="Career opportunities, Job openings, Employment opportunities, Careers, Hiring, Job vacancies, Work with us, Join our team, Job positions, Job application."
        />
        <meta name="description" content="CAREER OPPORTUNITIES" />
        <meta
          name="description2"
          content="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
        />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>CAREER OPPORTUNITIES</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                width={635}
                height={470}
                src={IMGOne}
                id="img"
                alt="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
                title="GROW WITH THE TEAM THAT PUTS PATIENTS FIRST"
              />
            </Box>
            <WrapperBlock>
              <Title>GROW WITH THE TEAM THAT PUTS PATIENTS FIRST</Title>
              <Text>
                As an employer, our clinic offers professional opportunities
                that will challenge your abilities, expand your skills, and
                reward your contributions. Ours is a positive work environment
                that encourages both personal and professional growth for every
                employee. A philosophy of mutual respect is fostered; as a
                result, many of our team members have been with us for years.
              </Text>
              <Text>
                Ensuring the safety and well-being of our patients, visitors,
                staff, and communities is our deepest commitment at our clinic.
                As a condition of employment, in our clinic requires all new
                hires to be fully vaccinated for COVID-19, unless there is an
                approved exemption. New hires will be required to have at least
                one dose of the vaccine prior to starting employment, with a
                second dose scheduled, or submit proof of previous vaccination.
              </Text>
              <Text sx={{ fontSize: 20 }}>
                To apply for a position click on the link below:
              </Text>
              <Button onClick={scrollToForm}>APPLY HERE</Button>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <Title>WHO WE ARE:</Title>
              <Text>
                Our Clinic is founded on the mission of improving mental
                well-being for all individuals through education support and
                advocacy while building safe communities and the mind-body
                connection between mental and physical health. Our ambitious
                team focuses on returning each individual to their families,
                work places, communities, and the activities that they enjoy. We
                are committed to our employees by providing competitive pay,
                compensation packages, and comprehensive employee benefits
                programs.
              </Text>
              <Title> CAREER OPPORTUNITIES IN OUR CLINIC</Title>
              <Text>
                Whether you are a behavioral healthcare professional or have a
                background in a healthcare administrative staff role, we have
                multiple open positions within various departments in our
                clinic. With our clinic you will have an opportunity to develop
                your behavioral health career while working closely with
                talented professionals who are passionate about our work. We
                have a variety of full-time, part-time, and fee-for-service
                clinical, medical, and administrative employment opportunities
                open and we would love to hear from you!
              </Text>
            </WrapperBlock>
            <Box
              sx={{
                width: "100%",
                maxWidth: 630,
                height: "100%",
                maxHeight: 417,
              }}
            >
              <Image
                id="image"
                src={IMGTwo}
                alt="WHO WE ARE"
                title="WHO WE ARE"
              />
            </Box>
          </Block>
          <Box sx={{ marginBottom: "65px" }} ref={formRef}>
            <PersonalForm />
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default CareerOpportunities;
