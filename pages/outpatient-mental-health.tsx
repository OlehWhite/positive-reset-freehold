import {
  WrapperHeader,
  TitleHeader,
  Wrapper,
  Block,
  Text,
  Title,
  WrapperBlock,
  Container,
} from "../otherPages/outpatientMentalHealth/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "../public/Outpatient-Mental-Health01а.jpg";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGOne from "../public/Outpatient-Mental-Health02.jpg";
import IMGThree from "../public/OMH04a.jpg";
import IMGTwo from "../public/OMH02a.jpg";
import IMGFour from "../public/OMH03.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const OutpatientMentalHealth = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Outpatient Mental Health</title>
        <meta
          name="keywords"
          content="mental health, outpatient services, therapy, counseling, psychiatry, mental wellness, mental wellbeing, mental health clinic, mental health treatment, behavioral health, mental health support, mental health care, mental health services, mental health resources, mental health professionals, mental health programs, mental health solutions"
        />
        <meta name="description" content="OUTPATIENT MENTAL HEALTH" />
        <meta
          name="description2"
          content="WHAT IS OUTPATIENT TREATMENT FOR MENTAL HEALTH?"
        />
        <meta
          name="description3"
          content="TYPES OF OUTPATIENT MENTAL HEALTH PROGRAMS"
        />
        <meta
          name="description4"
          content="BENEFITS OF OUTPATIENT TREATMENT FOR MENTAL HEALTH"
        />
      </Head>
      <OtherHeader />
      <Container>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <TitleHeader>OUTPATIENT MENTAL HEALTH</TitleHeader>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 428,
              }}
            >
              <Image
                id="image"
                src={IMGOne}
                alt="OUTPATIENT MENTAL HEALTH"
                title="OUTPATIENT MENTAL HEALTH"
              />
            </Box>
            <WrapperBlock>
              <Title>OUTPATIENT MENTAL HEALTH</Title>
              <Text>
                If you or someone you know struggles with their mental health,
                it may be time to consider treatment options. For many people,
                the word “treatment” conjures up images of locked facilities
                where visiting hours are strictly regulated. While this type of
                treatment does exist and can be very helpful, a less-restrictive
                therapeutic environment can be helpful as well. Outpatient
                mental health programs offer the same quality of treatment as
                inpatient programs but with more freedom and flexibility.
              </Text>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <Title>WHAT IS OUTPATIENT TREATMENT FOR MENTAL HEALTH?</Title>
              <Text>
                Outpatient treatment refers to non-residential treatment, in
                which the patient spends structured time in treatment during the
                day or evening and returns home each night. People who choose to
                participate in outpatient mental health treatment do so for a
                variety of reasons. They may have small children at home or
                businesses to run and cannot take weeks or months out of their
                lives to live in a residential facility. Others may be
                transitioning out of an inpatient program but still require the
                support and structure that outpatient treatment provides.
                Outpatient treatment programs are beneficial for those with mild
                to moderate symptoms who have a strong support system at home.
              </Text>
            </WrapperBlock>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 536,
                maxHeight: 356,
              }}
            >
              <Image
                id="image"
                src={IMGTwo}
                alt="WHAT IS OUTPATIENT TREATMENT FOR MENTAL HEALTH?"
                title="WHAT IS OUTPATIENT TREATMENT FOR MENTAL HEALTH?"
              />
            </Box>
          </Block>
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
                src={IMGThree}
                alt="TYPES OF OUTPATIENT MENTAL HEALTH PROGRAMS"
                title="TYPES OF OUTPATIENT MENTAL HEALTH PROGRAMS"
              />
            </Box>
            <WrapperBlock>
              <Title>TYPES OF OUTPATIENT MENTAL HEALTH PROGRAMS</Title>
              <Text>
                Outpatient mental health treatment is not one-size-fits-all.
                Most mental health treatment programs do involve some
                combination of individual therapy, group therapy, family
                therapy, medication management, and after care, but treatment
                plans are customized to meet the specific needs of each
                individual. One of the first things to consider is which type of
                outpatient treatment program will be most beneficial to the
                patient. There are three main types of outpatient programs, each
                with varying levels of structure.
              </Text>
              <Text>
                Standard outpatient treatment involves regular visits to the
                outpatient clinic. Therapy sessions are scheduled around the
                patient’s work, school, and other responsibilities. Treatment
                may be weekly or more frequent. With a focus on managing
                symptoms, identifying triggers, overcoming fears, developing
                communication skills, and establishing healthy social norms,
                outpatient mental health treatment aims to help patients learn
                to thrive outside the therapeutic environment.
              </Text>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <Title>BENEFITS OF OUTPATIENT TREATMENT FOR MENTAL HEALTH</Title>
              <Text>
                For people with mild to moderate symptoms, strong support
                systems at home, and the ability to function independently,
                outpatient treatment is usually an ideal choice. Patients can:
                <br />– Stay connected with loved ones while still receiving the
                treatment they need
                <br />– Maintain commitments and responsibilities with work and
                school
                <br />– Apply the skills and strategies they learn in treatment
                to real life situations
                <br />– Stay connected with their treatment team and remain
                accountable to their personalized care plan
                <br />– Transition slowly back into everyday situations,
                equipped with tools to help optimize their independence and live
                a meaningful life
                <br />– Most outpatient treatment programs also have the added
                benefit of being less expensive than residential programs.
              </Text>
            </WrapperBlock>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 351,
              }}
            >
              <Image
                id="image"
                src={IMGFour}
                alt="BENEFITS OF OUTPATIENT TREATMENT FOR MENTAL HEALTH"
                title="BENEFITS OF OUTPATIENT TREATMENT FOR MENTAL HEALTH"
              />
            </Box>
          </Block>
          <Text>
            Your mental health is key to living a rich and meaningful life. If
            you’re struggling with symptoms of mental illness or addiction, we
            can help you manage your symptoms, develop coping skills, and
            optimize your mental health. In our clinic, we specialize in the
            treatment of depression, mood disorders, anxiety disorders,
            personality disorders, and more. For more information on our
            outpatient mental health services, please contact us at
            847-306-9406.
          </Text>
        </Wrapper>
        <Feedbacks />
      </Container>
    </>
  );
};

export default OutpatientMentalHealth;
