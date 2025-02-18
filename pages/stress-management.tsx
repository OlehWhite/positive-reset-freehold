import {
  Block,
  Text,
  Title,
  WrapperBlock,
  WrapperHeader,
  Wrapper,
  Li,
} from "../otherPages/stressManagement/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/Child-and-Adolescent01.jpg";
import IMGThree from "../public/Stress-Management03.png";
import IMGFour from "../public/Stress-Management05.png";
import IMGTwo from "../public/Stress-Management04.jpg";
import IMGOne from "../public/Stress-Management02.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const StressManagement = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Child and Adolescent</title>
        <meta
          name="keywords"
          content="stress management, stress relief, stress reduction, stress coping techniques, stress therapy, stress counseling, stress-related issues, stress symptoms, stress management strategies, stress management techniques, stress awareness, stress prevention, stress recovery, stress resilience, stress-free living, stress reduction techniques, stress management tips, stress management programs, stress management services"
        />
        <meta name="description" content="STRESS MANAGEMENT" />
        <meta
          name="description2"
          content="HOW TO REDUCE, PREVENT, AND COPE WITH STRESS"
        />
        <meta
          name="description3"
          content="IDENTIFY THE SOURCES OF STRESS IN YOUR LIFE"
        />
        <meta name="description4" content="START A STRESS JOURNAL" />
        <meta
          name="description5"
          content="LOOK AT HOW YOU CURRENTLY COPE WITH STRESS"
        />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>STRESS MANAGEMENT</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 535,
              }}
            >
              <Image
                id="image"
                src={IMGOne}
                alt="STRESS MANAGEMENT"
                title="STRESS MANAGEMENT"
              />
            </Box>
            <WrapperBlock>
              <Title>HOW TO REDUCE, PREVENT, AND COPE WITH STRESS</Title>
              <Text>
                It may seem that there’s nothing you can do about stress. The
                bills won’t stop coming, there will never be more hours in the
                day, and your career and family responsibilities will always be
                demanding. But you have more control than you might think. In
                fact, the simple realization that you’re in control of your life
                is the foundation of stress management. Managing stress is all
                about taking charge: of your thoughts, emotions, schedule, and
                the way you deal with problems
              </Text>
            </WrapperBlock>
          </Block>
          <Title sx={{ justifyContent: "center" }}>
            IDENTIFY THE SOURCES OF STRESS IN YOUR LIFE
          </Title>
          <Block>
            <WrapperBlock>
              <Text>
                Stress management starts with identifying the sources of stress
                in your life. This isn’t as easy as it sounds. Your true sources
                of stress aren’t always obvious, and it’s all too easy to
                overlook your own stress-inducing thoughts, feelings, and
                behaviors. Sure, you may know that you’re constantly worried
                about work deadlines. But maybe it’s your procrastination,
                rather than the actual job demands, that leads to deadline
                stress.
              </Text>
              <Text>
                To identify your true sources of stress, look closely at your
                habits, attitude, and excuses:
              </Text>
              <ul style={{ paddingLeft: 20 }}>
                <Li>
                  Do you explain away stress as temporary (“I just have a
                  million things going on right now”) even though you can’t
                  remember the last time you took a breather?
                </Li>
                <Li>
                  Do you define stress as an integral part of your work or home
                  life (“Things are always crazy around here”) or as a part of
                  your personality (“I have a lot of nervous energy, that’s
                  all”).
                </Li>
                <Li>
                  Do you blame your stress on other people or outside events, or
                  view it as entirely normal and unexceptional?
                </Li>
              </ul>
              <Text>
                Until you accept responsibility for the role you play in
                creating or maintaining it, your stress level will remain
                outside your control.
              </Text>
            </WrapperBlock>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 321,
              }}
            >
              <Image
                id="image"
                src={IMGTwo}
                alt=" IDENTIFY THE SOURCES OF STRESS IN YOUR LIFE"
                title=" IDENTIFY THE SOURCES OF STRESS IN YOUR LIFE"
              />
            </Box>
          </Block>
          <Block>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 361,
              }}
            >
              <Image
                id="image"
                src={IMGThree}
                alt="START A STRESS JOURNAL"
                title="START A STRESS JOURNAL"
              />
            </Box>
            <WrapperBlock>
              <Title>START A STRESS JOURNAL</Title>
              <Text>
                A stress journal can help you identify the regular stressors in
                your life and the way you deal with them. Each time you feel
                stressed, keep track of it in your journal. As you keep a daily
                log, you will begin to see patterns and common themes. Write
                down:
              </Text>
              <ul style={{ paddingLeft: 20 }}>
                <Li>What caused your stress (make a guess if you’re unsure)</Li>
                <Li>How you felt, both physically and emotionally</Li>
                <Li>How you acted in response</Li>
                <Li>What you did to make yourself feel better</Li>
              </ul>
            </WrapperBlock>
          </Block>
          <Block>
            <WrapperBlock>
              <Title>LOOK AT HOW YOU CURRENTLY COPE WITH STRESS</Title>
              <Text>
                Think about the ways you currently manage and cope with stress
                in your life. Your stress journal can help you identify them.
                Are your coping strategies healthy or unhealthy, helpful or
                unproductive? Unfortunately, many people cope with stress in
                ways that compound the problem.
              </Text>
            </WrapperBlock>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 296,
              }}
            >
              <Image
                id="image"
                src={IMGFour}
                alt="LOOK AT HOW YOU CURRENTLY COPE WITH STRESS"
                title="LOOK AT HOW YOU CURRENTLY COPE WITH STRESS"
              />
            </Box>
          </Block>
          <Box>
            <Title>LEARNING HEALTHIER WAYS TO MANAGE STRESS</Title>
            <Text>
              If your methods of coping with stress aren’t contributing to your
              greater emotional and physical health, it’s time to find healthier
              ones. There are many healthy ways to manage and cope with stress,
              but they all require change. You can either change the situation
              or change your reaction. When deciding which option to choose,
              it’s helpful to think of the four As: avoid, alter, adapt, or
              accept.
            </Text>
            <Text>
              Since everyone has a unique response to stress, there is no “one
              size fits all” solution to managing it. No single method works for
              everyone or in every situation, so experiment with different
              techniques and strategies. Focus on what makes you feel calm and
              in control.
            </Text>
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default StressManagement;
