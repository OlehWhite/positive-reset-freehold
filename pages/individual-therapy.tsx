import {
  Title,
  WrapperHeader,
  Block,
  Text,
  WrapperBlock,
  Wrapper,
  Li,
} from "../otherPages/individualTherapy/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/Individual-Therapy01.jpg";
import IMGOne from "../public/Individual-Therapy02.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const IndividualTherapy = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Individual Therapy</title>
        <meta
          name="keywords"
          content="individual therapy, one-on-one counseling, personal therapy, individual counseling, private therapy, psychotherapy, talk therapy, therapy sessions, therapeutic treatment, mental health therapy, emotional support, personal growth, self-discovery, coping skills, mental well-being, psychological support, self-care, mental health services, therapy for individuals, counseling services"
        />
        <meta name="description" content="INDIVIDUAL THERAPY" />
        <meta
          name="description2"
          content="Our therapists are: Licensed Social Workers (LSWs, LCSWs) and Licensed Counselors (LACs and LPCs). With expertise in the following areas:"
        />
        <meta name="description3" content="Services include:" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>INDIVIDUAL THERAPY</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 356,
              }}
            >
              <Image
                id="image"
                src={IMGOne}
                alt="INDIVIDUAL THERAPY"
                title="INDIVIDUAL THERAPY"
              />
            </Box>
            <WrapperBlock>
              <Title>INDIVIDUAL THERAPY</Title>
              <Text>
                Our Clinic recognizes the relationship between the physical,
                emotional and psychological aspects of a patient’s health. Our
                philosophy is to offer a holistic approach to care, attempting
                to address each of these factors. To that end, our mental health
                providers closely collaborate with our medical providers to
                offer a range of services that support patients’ emotional and
                psychological well-being. These services are affirmative,
                sex-positive, respectful and culturally sensitive.
              </Text>
            </WrapperBlock>
          </Block>
          <Box>
            <Title sx={{ textAlign: "center" }}>
              Our therapists are: Licensed Social Workers (LSWs, LCSWs) and
              Licensed Counselors (LACs and LPCs). With expertise in the
              following areas:
            </Title>
            <ul>
              <Li>
                Gender transition and trans identities Lesbian, gay, bisexual,
                queer and questioning identities
              </Li>
              <Li>Reduction of the harmful effects of substance use</Li>
              <Li>Eating disorders and other compulsive behaviors</Li>
              <Li>
                Depression, anxiety, and PTSD (Post-Traumatic Stress Disorder)
              </Li>
            </ul>
          </Box>
          <Box>
            <Title sx={{ justifyContent: "center" }}>Services include:</Title>
            <ul>
              <Li>Short-term psychotherapy (typically 12-20 sessions)</Li>
              <Li>
                Motivational counseling to encourage behavior change and reduce
                harm
              </Li>
              <Li>Therapy groups</Li>
              <Li>Psychiatric Evaluation (typically 1-3 sessions)</Li>
              <Li>Psychotropic medication management through primary care</Li>
            </ul>
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default IndividualTherapy;
