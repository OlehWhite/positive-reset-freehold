import {
  Container,
  Post,
  Info,
  Text,
  Title,
  WrapperHeader,
  BlockWhiteText,
  BlockDarkText,
  BoxText,
  FooterText,
  WrapperBlock,
} from "../otherPages/intensiveOutpatientProgram/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "../public/Intensive-Outpatient-Program02b.jpg";
import IMGOne from "../public/Intensive-Outpatient-Program03.jpg";
import IMGTwo from "../public/Intensive-Outpatient-Program06.jpg";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IOProgram from "../components/IOProgram/IOProgram";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const IntensiveOutpatientProgram = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Outpatient Mental Health</title>
        <meta
          name="keywords"
          content="intensive outpatient program, mental health treatment, therapy, counseling, mental wellness, mental wellbeing, behavioral health, mental health support, mental health care, mental health services, mental health programs, mental health resources, mental health professionals, mental health recovery, mental health therapy, mental health rehabilitation, intensive therapy program, mental health support program, outpatient mental health program"
        />
        <meta name="description" content="INTENSIVE OUTPATIENT PROGRAM" />
        <meta
          name="description2"
          content="INTENSIVE OUTPATIENT TREATMENT PROGRAMS (IOP)"
        />
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>INTENSIVE OUTPATIENT PROGRAM</Title>
      </WrapperHeader>
      <Container>
        <Post>
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
              alt="INTENSIVE OUTPATIENT TREATMENT PROGRAMS (IOP)"
              title="INTENSIVE OUTPATIENT TREATMENT PROGRAMS (IOP)"
            />
          </Box>
          <Info>
            <Title>INTENSIVE OUTPATIENT TREATMENT PROGRAMS (IOP)</Title>
            <Text>
              When individuals are in need of a structured setting in which to
              work towards overcoming symptoms of mental health, behavioral
              health, and/or substance abuse concerns, they may find benefits
              from engaging in an intensive outpatient program (IOP). This
              treatment option allows individuals to receive thorough treatment
              that fully addresses their needs in a less restrictive environment
              than that which is offered in partial hospitalization programming
              (PHP), inpatient treatment, or residential care. Yet, it provides
              a more structured therapeutic setting than that which is typically
              offered in a traditional outpatient setting.
            </Text>
          </Info>
        </Post>
      </Container>

      <BlockWhiteText>
        <BoxText>
          Our Clinic is comprised of an intercontinental network of specialty
          treatment providers that offer comprehensive care for individuals of
          all ages who are in need of care to address mental health disorders,
          behavioral health concerns, and chemical dependency issues. Through
          the evidence-based, innovative programming that is offered at these
          top-notch treatment centers, individuals can receive the life-changing
          care that guides them in successfully achieving a life free from the
          symptoms that once plagued them.
        </BoxText>
      </BlockWhiteText>
      <BlockDarkText>
        <BoxText>
          Prior to engaging in any form on treatment, individuals must first
          partake in a thorough psychosocial assessment. During these
          assessments, an individual’s history is reviewed, including presenting
          symptoms and the way in which those symptoms have impacted his or her
          ability to function on a daily basis. Additionally, one’s physical and
          psychological background will be reviewed in order to obtain further
          pertinent information. Once this assessment is complete, it will be
          reviewed by clinical staff who will then determine what the most
          appropriate level of care will be in order for the individual’s needs
          to be met. If it is determined that an intensive outpatient program
          (IOP) will be of the most benefit to the individual in need of care,
          the admissions process will commence.
        </BoxText>
      </BlockDarkText>
      <BlockWhiteText>
        <BoxText>
          The structure of outpatient programs can vary from one treatment
          center to the next in regards of how many days per week the sessions
          are offered, the amount of hours per day that the program takes place,
          and the length of time during which the program lasts. When
          individuals enter into IOP, they will be made aware of the specific
          times that the program meets so that they can determine which
          schedules work best for them without hindering their ability to adhere
          to other daily responsibilities.
        </BoxText>
      </BlockWhiteText>
      <BlockDarkText>
        <BoxText>
          All individuals who engage in IOP receive individualized treatment
          plans that are tailored to meet their unique needs so that their
          treatment goals can be most appropriately met. These individualized
          treatment plans will include a variety of therapeutic interventions,
          which may include the following: Medication management:In some
          instances, the implementation of psychotropic medications can benefit
          certain individuals as a complement to therapeutic interventions, as
          they can work to alleviate the physical and psychological distress
          that certain symptoms elicit. All medications are prescribed by a
          licensed psychiatrist, and follow-up meetings with the psychiatrist
          will be held on an as-needed basis.
        </BoxText>
      </BlockDarkText>
      <Container>
        <Post>
          <WrapperBlock>
            <IOProgram />
          </WrapperBlock>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 535,
              maxHeight: 356,
            }}
          >
            <Image id="image" src={IMGTwo} alt="Logo" title="Logo" />
          </Box>
        </Post>
      </Container>
      <BlockWhiteText>
        <FooterText>
          If you or a loved one is in need of all-encompassing care in order to
          address mental health concerns, behavioral health problems, or
          chemical dependency issues, please do not hesitate to contact us at
          847-729-6001. Knowledgeable and compassionate staff members are
          available to assist you or your loved one in choosing the right
          program for meeting all of your or your loved one’s needs. By
          receiving treatment at one of Acadia’s highly respected treatment
          centers, healing and lasting recovery can be within your or your loved
          one’s reach.
        </FooterText>
      </BlockWhiteText>
      <Feedbacks />
    </>
  );
};

export default IntensiveOutpatientProgram;
