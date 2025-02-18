import Head from "next/head";
import {
  TitleHeader,
  WrapperHeader,
  Block,
  Container,
  Text,
  Title,
  WrapperBlock,
  TextBlue,
} from "../otherPages/angerManagement/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import IMGThree from "../public/Anger-Management04.jpg";
import IMGTwo from "../public/Anger-Management02а.jpg";
import IMGHeader from "../public/Anger-Management.jpg";
import IMGFour from "../public/Anger-Management05.jpg";
import IMGOne from "../public/Anger-Management06.jpg";
import IMGIcon from "../public/icons8.png";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import { WEBSITE_TITLE } from "../services/constants";

const AngerManagement = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Anger Management</title>
        <meta
          name="keywords"
          content="anger management, anger management techniques, anger management therapy, anger management classes, anger management counseling, anger management strategies, anger management for adults, anger management for children, anger management for teens, anger management for parents, anger management tips, anger management exercises, anger management skills, anger management programs, anger management workshops, anger management resources, anger management support, anger management techniques for stress, anger management techniques for relationships, anger management techniques for workplace, anger management techniques for self-control"
        />
        <meta name="description" content="ANGER MANAGEMENT" />
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <TitleHeader>EXPRESSING ANGER</TitleHeader>
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
              alt="EXPRESSING ANGER"
              title="EXPRESSING ANGER"
            />
          </Box>
          <WrapperBlock>
            <Title>EXPRESSING ANGER</Title>
            <Text>
              Anger is a completely normal, usually healthy, human emotion. But
              when it gets out of control and expressed by violent behavior, it
              can be viewed by society as an immature or uncivilized emotional
              response. Constant angry feelings and anger acting outs canlead to
              the real problems: problems at work, in personal relationships,
              and in the overalllife’s quality. It even can affect physical
              well-being, causing sleep problems, nightmares, ulcers, headaches,
              high blood pressure etc. The latest happens due to physiological
              and biological changes, accompanied emotional responses, like
              releasing stress hormone – cortisol or “energy” nerve messengers,
              like adrenaline and norepinephrine.
            </Text>
            <Text>
              Anger can be caused by both external and internal events. It is
              possible to be angry at a specific person (such as a coworker,
              supervisor or significant other) or event (a traffic jam, a
              canceled flight), sometimes anger can be caused by excessive
              worrying about personal problems. Recollections of traumatic or
              enraging events can also trigger angry feelings.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Text>
              A certain amount of anger is necessary for our survival, because
              it allows us to fight and defend ourselves. So it can be viewed as
              an adaptive response. However, the level of our anger limited by
              social norms, laws, by common sense and a s a result we are not
              lashing out on every person or event. Instead, we usually use a
              variety of conscious and unconscious processes to deal with angry
              feelings. There are three main approaches to deal with anger.
            </Text>
          </WrapperBlock>
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
              alt="A certain amount of anger is necessary..."
              title="A certain amount of anger is necessary..."
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
              alt="Expressing angry feelings in an assertive manner..."
              title="Expressing angry feelings in an assertive manner..."
            />
          </Box>
          <WrapperBlock>
            <Text>
              Expressing angry feelings in an assertive manner is the healthiest
              way to address anger. To do this, it is very important to
              understand own needs and how to get them met, without hurting
              others. Being assertive doesn’t mean being pushy or demanding; it
              means being respectful of yourself and others. Suppressing anger,
              it is when it covered up or redirected. It happens when the anger
              is being hold in, anger thoughts stopped, and focus directed on
              something positive. The goal is to inhibit or suppress anger and
              change it into more constructive behavior. The danger in this type
              of response is that if it isn’t allowed outward expression, anger
              can turn inward. Anger turned inward may cause hypertension, high
              blood pressure, or depression.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Text>
              Unexpressed anger can create other problems. It can lead to
              pathological expressions of anger, such as passive-aggressive
              behavior (getting back at people indirectly, without telling them
              why, rather than confronting them head-on) or a personality that
              seems to be cynical and hostile.
            </Text>
            <Text>
              Such people are constantly putting others down, criticizing
              everything, and making cynical comments haven’t learned how to
              constructively express their anger. Not surprisingly, that they
              are less likely can build up successful relationships.
            </Text>
            <Text>
              Calming down inside. This means not only controlling own outward
              behavior, but also controlling internal responses, taking steps to
              lower heart rate, calm self down, and let the feelings subside.
            </Text>
          </WrapperBlock>
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
              src={IMGFour}
              alt="Expressing angry feelings in an assertive manner..."
              title="Expressing angry feelings in an assertive manner..."
            />
          </Box>
        </Block>
        <Block>
          <Box
            sx={{
              padding: "44px 20px 0 0",
              width: "100%",
              height: "100%",
              maxWidth: 40,
              maxHeight: 40,
            }}
          >
            <Image id="image" src={IMGIcon} alt="Icon" title="Icon" />
          </Box>
          <TextBlue>
            Psychologists dealing with anger management believe that when none
            of these three techniques work, that’s when someone or something
            going to get hurt.
          </TextBlue>
        </Block>
      </Container>
      <Feedbacks />
    </>
  );
};

export default AngerManagement;
