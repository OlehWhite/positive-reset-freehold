import {
  Block,
  Text,
  Title,
  Wrapper,
  WrapperBlock,
  WrapperHeader,
} from "../otherPages/childAndAdolescent/style";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/Child-and-Adolescent01.jpg";
import IMGOne from "../public/Child-and-Adolescent02.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const ChildAndAdolescent = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Child and Adolescent</title>
        <meta
          name="keywords"
          content="Child and adolescent services, Child therapy, Adolescent therapy, Child counseling, Adolescent counseling, Child mental health, Adolescent mental health, Child behavioral health, Adolescent behavioral health, Child development, Adolescent development"
        />
        <meta name="description" content="CHILD AND ADOLESCENT" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>CHILD AND ADOLESCENT</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                id="image"
                width={630}
                height={323}
                src={IMGOne}
                alt="CHILD AND ADOLESCENT"
                title="CHILD AND ADOLESCENT"
              />
            </Box>
            <WrapperBlock>
              <Text>
                Many treatments are available for child and adolescent mental
                health symptoms.
              </Text>
              <Text>
                Some are backed by science (i.e., “evidence-based treatments”),
                and some are not.
              </Text>
              <Text>
                We provide children and adolescents, ages 5 through 18, with
                support and coping skills to achieve emotional health and
                improved functioning through individual and family counseling.
                Play therapy allows younger children, who often are unable to
                communicate verbally, to express their feelings through art,
                activities, and toys.
              </Text>
            </WrapperBlock>
          </Block>
          <Box>
            <Text>
              We counsel children with challenges such as attention disorders,
              learning differences, and behavioral issues. Parents are
              incorporated into the treatment plan so that they can provide
              intervention and additional support at home.
            </Text>
            <Text>
              Our expert counselors are available to speak on a variety of
              topics, including body image, bullying, and building healthy
              relationships at area synagogues and schools.
            </Text>
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default ChildAndAdolescent;
