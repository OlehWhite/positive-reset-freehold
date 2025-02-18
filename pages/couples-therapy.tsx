import {
  Title,
  WrapperHeader,
  Wrapper,
  Block,
  Text,
  WrapperBlock,
} from "../otherPages/couplesTherapy/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGHeader from "../public/Couple-Therapy01.jpg";
import IMGOne from "../public/Couple-Therapy02.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import FiveBasicPrinciples from "../components/FiveBasicPrinciples/FiveBasicPrinciples";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { WEBSITE_TITLE } from "../services/constants";

const CouplesTherapy = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Couples Therapy</title>
        <meta
          name="keywords"
          content="couples therapy, couples counseling, couples relationship, couples communication, couples conflict resolution, couples intimacy, couples support, couples well-being, couples healing, couples mental health, couples therapy services, couples therapy techniques, couples therapy benefits, couples therapy approach, couples therapy sessions, couples therapy process, couples therapy interventions, couples therapy strategies"
        />
        <meta name="description" content="COUPLES THERAPY" />
        <meta
          name="description2"
          content="MAKE YOUR RELATIONSHIP WORK BY FOLLOWING THESE 5 BASIC PRINCIPLES"
        />
        <meta
          name="description3"
          content="FIVE BASIC PRINCIPLES OF EFFECTIVE COUPLES THERAPY:"
        />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>COUPLES THERAPY</Title>
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
                If you’re part of a couple in distress, you may feel that
                there’s no way out of your troubled relationship. Myths about
                the low success rates of couples therapy and counseling only
                make your situation seem worse than it is. Recently, New York
                Times columnist Elizabeth Weil reinforced that unfortunate
                impression in her column “Does Couples Therapy Work?” She
                concludes that, even regarding the most effective methods: “Both
                types of therapy are structured, and the results of both are
                well documented, at least in follow-ups for a few years. Still,
                the entire field of couples therapy suffers from a systemic
                problem.” The problem she refers to is real enough- couples
                often wait until very late in the game to seek intervention and
                by then, one or both may have decided to call it quits. It’s
                also true that, as she observes, being an effective couples
                therapist requires different skills than the skills demanded by
                being an effective individual therapist. Nevertheless, the data
                largely refute Weil’s claims. When properly conducted, couples
                therapy can have demonstrably positive effects.
              </Text>
            </WrapperBlock>
          </Block>
          <Box>
            <Title sx={{ justifyContent: "center" }}>
              FIVE BASIC PRINCIPLES OF EFFECTIVE COUPLES THERAPY:
            </Title>
            <Box sx={{ margin: "35px 0" }}>
              <FiveBasicPrinciples />
            </Box>
          </Box>
          <Box>
            <Text>
              We can see, then, that people in troubled relationships need not
              give up in despair if their situation seems bleak. By the same
              token, people afraid of entering long-term relationships can be
              encouraged by learning that trouble relationships can be fixed.
            </Text>
            <Text>
              Looking at the flip side, these five principles of effective
              therapy suggest ways that couples can build and maintain positive
              close relationships. Take an objective look at your relationship,
              to get help to reduce dysfunctional behaviors, feel that you can
              share your emotions, communicate effectively, and emphasize what’s
              working. Most importantly, by remembering that each relationship
              has its unique challenges and strengths, you’ll be giving yours
              the best chances for survival.
            </Text>
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default CouplesTherapy;
