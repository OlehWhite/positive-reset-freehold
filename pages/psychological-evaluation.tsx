import {
  Container,
  TitleHeader,
  WrapperHeader,
  Block,
  Text,
  Title,
  WrapperBlock,
  Poster,
  TitlePoster,
  Ul,
  Li,
  WrapperPoster,
} from "../otherPages/psychologicalEvaluation/style";
import PsychologicalBlockTwo from "../components/PsychologicalBlockTwo/PsychologicalBlockTwo";
import PsychologicalBlock from "../components/PsychologicalBlock/PsychologicalBlock";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "../public/Psychological-Evaluation05.jpg";
import IMGOne from "../public/Psychological-Evaluation02.jpg";
import IMGTwo from "../public/Psychological-Evaluation04.jpg";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const PsychologicalEvaluation = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Psychological Evaluation</title>
        <meta
          name="keywords"
          content="psychological evaluation, mental health assessment, diagnostic evaluation, psychological testing, mental health evaluation, psychological assessment, psychological services, psychological diagnosis, psychological testing services, psychological evaluation process, psychological evaluation benefits, mental health diagnosis, mental health screening, psychological evaluation for therapy, psychological evaluation for treatment, psychological evaluation for diagnosis, psychological evaluation for assessment, psychological evaluation for mental health, comprehensive psychological evaluation, professional psychological evaluation"
        />
        <meta name="description" content="PSYCHOLOGICAL EVALUATION" />
        <meta name="description2" content="PSYCHOLOGICAL EVALUATION" />
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <TitleHeader>PSYCHOLOGICAL EVALUATION</TitleHeader>
      </WrapperHeader>
      <Container>
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
              alt="PSYCHOLOGICAL EVALUATION"
              title="PSYCHOLOGICAL EVALUATION"
            />
          </Box>
          <WrapperBlock>
            <Title>PSYCHOLOGICAL EVALUATION</Title>
            <Text>
              For various reasons you might think about getting a psychological
              evaluation, meaning that you are considering being tested, and if
              needed, getting treated by a psychologist (or similar
              professional).
            </Text>
            <Text>
              Luckily for all of us, mental illness is no longer considered
              something that needs to be kept a secret at all costs, so if it
              helps, it should be done. Unfortunately, your possible illness
              (you don’t know yet that you actually are ill,) might be getting
              in the way of you making the right decision.
            </Text>
            <Text>
              Ideally, once you get tested you will generally be better off,
              because you’ll know that either you’re perfectly normal, or you’ll
              have a definite identification of your condition.
            </Text>
            <Text>
              If you have a positive attitude, you will probably decide to go
              ahead, because it is always better to know.
            </Text>
          </WrapperBlock>
        </Block>
        <Box>
          <PsychologicalBlock />
        </Box>
        <Box>
          <Text>
            This is important. Some of the biggest problems doctors have is with
            patients who stop taking their medication as soon as they start
            feeling better. This is especially true of people who suffer from
            manic depression (extreme alternating “highs” and “lows”). The drug
            prevents the really terrible lows, but they also moderate some of
            the excessive highs. You can’t have everything; you have to
            sacrifice some of the euphoria in order to avoid the deep
            depression; it’s a tradeoff.
          </Text>
        </Box>
        <Block sx={{ marginTop: "35px" }}>
          <PsychologicalBlockTwo />
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
              src={IMGTwo}
              alt="PSYCHOLOGICAL EVALUATION"
              title="PSYCHOLOGICAL EVALUATION"
            />
          </Box>
        </Block>
        <Poster>
          <WrapperPoster>
            <TitlePoster>TIPS</TitlePoster>
            <Ul>
              <Li>
                Medical insurance is a tough issue, but plenty of insurance
                providers are willing to cut the cost for you. Do some research
                to find out which companies will cover your specific conditions.
                In addition, many community health centers and large university
                mental health clinics will allow you to receive treatment on a
                sliding scale basis (that is, they charge amounts that are
                proportional to what you can afford).
              </Li>
              <Li>
                Be confident. You’re making a bold and positive step, and trying
                to do something to help yourself feel better about life. This is
                admirable, and by continuing, you have the potential to live
                more happily and fulfill more of your goals.
              </Li>
              <Li>
                Don’t expect an instant cure. If life offered us immediate
                relief for every disease, mental or otherwise, no one would have
                to suffer. As it is, recovery and progress take their own time.
                Compare it to cancer in this way – chemotherapy is an agonizing
                treatment which is almost never brief. You require some help,
                and you can receive that help readily, but you have to be
                patient.
              </Li>
              <Li>
                Be as open as possible, no one’s going to make fun of you or
                judge you. You can come to terms with many problems simply by
                giving them a voice, and it may not be long until you can talk
                openly about things that used to bother you.
              </Li>
              <Li>
                Check for warning signs. If you’re feeling every bit as bad as
                you were before medication and evaluation after the first month,
                tell that to your doctor. They can only help if you keep track
                of how you feel, and let the doctor know.
              </Li>
            </Ul>
          </WrapperPoster>
        </Poster>
      </Container>
      <Feedbacks />
    </>
  );
};

export default PsychologicalEvaluation;
