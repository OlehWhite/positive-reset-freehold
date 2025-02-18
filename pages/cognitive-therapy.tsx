import {
  Info,
  Post,
  Text,
  Title,
  WrapperHeader,
  Container,
} from "../otherPages/intensiveOutpatientProgram/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/Cognitive-Therapy01.jpg";
import IMGOne from "../public/Cognitive-Therapy02.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const CognitiveTherapy = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Cognitive Therapy</title>
        <meta
          name="keywords"
          content="cognitive therapy, cognitive behavioral therapy, CBT, cognitive therapy techniques, cognitive therapy benefits, cognitive therapy process, cognitive therapy approaches, cognitive therapy for anxiety, cognitive therapy for depression, cognitive therapy for stress, cognitive therapy for trauma, cognitive therapy for addiction, cognitive therapy for phobias, cognitive therapy for OCD, cognitive therapy for PTSD, cognitive therapy for insomnia, cognitive therapy for eating disorders, cognitive therapy for self-esteem, cognitive therapy for anger management"
        />
        <meta name="description" content="COGNITIVE THERAPY" />
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>COGNITIVE THERAPY</Title>
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
              alt="COGNITIVE THERAPY"
              title="COGNITIVE THERAPY"
            />
          </Box>
          <Info>
            <Title>COGNITIVE THERAPY</Title>
            <Text>
              Cognitive behavioral therapy is a common type of mental health
              counseling (psychotherapy). With cognitive behavioral therapy, you
              work with a mental health counselor (psychotherapist or therapist)
              in a structured way, attending a limited number of sessions.
              Cognitive behavioral therapy helps you become aware of inaccurate
              or negative thinking, so you can view challenging situations more
              clearly and respond to them in a more effective way.
            </Text>
            <Text>
              Cognitive behavioral therapy can be a very helpful tool in
              treating mental disorders or illnesses, such as anxiety or
              depression. But not everyone who benefits from cognitive
              behavioral therapy has a mental health condition. It can be an
              effective tool to help anyone learn how to better manage stressful
              life situations.
            </Text>
          </Info>
        </Post>
      </Container>
      <Feedbacks />
    </>
  );
};

export default CognitiveTherapy;
