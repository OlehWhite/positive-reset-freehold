import {
  Container,
  Title,
  WrapperHeader,
  Info,
  Post,
  InfoWithWidth,
  TitleWithWidth,
  BoxText,
  TextWithWidth,
} from "../otherPages/rates/style";
import Head from "next/head";
import IMGHeader from "../public/Price02.jpg";
import IMGOne from "../public/NoSurprisesAAct2022.png";
import React from "react";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import { Box } from "@mui/material";
import Image from "next/image";
import { RatesSurprise } from "../otherPages/rates/RatesSurprise/RatesSurprise";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import {CURRENT_WEBSITE, WEBSITE_TITLE} from "../services/constants";
import {fetchProjects} from "../services/getInfo";
import {GetServerSideProps} from "next";
import {Website} from "../services/types";

export const getServerSideProps = (async () => {
  const websites = await fetchProjects();

  const project = websites[0]?.[CURRENT_WEBSITE.POSITIVE_RESET_FREEHOLD];
  return { props: { project } };
}) satisfies GetServerSideProps<{ project: Website }>;

const Rates = ({ project }: { project: Website }) => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Rates</title>
        <meta
          name="keywords"
          content="rates, pricing, fees, cost, payment, service charges, pricing structure, rate plans, pricing options, fee schedule, payment information, service costs, pricing details, affordable rates, competitive pricing, transparent pricing, budget-friendly rates, discounted rates, special offers"
        />
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>NO SURPRISE ACT/RATES</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Box sx={{ width: 252, height: 256 }}>
            <Image
              id="image"
              src={IMGOne}
              alt="ENDING SURPRISE MEDICAL BILLS"
              title="ENDING SURPRISE MEDICAL BILLS"
            />
          </Box>
          <InfoWithWidth>
            <Box>
              <TitleWithWidth>ENDING SURPRISE MEDICAL BILLS</TitleWithWidth>
              <TextWithWidth>
                SEE HOW NEW RULES HELP PROTECT PEOPLE FROM SURPRISE MEDICAL
                BILLS AND REMOVE CONSUMERS FROM PAYMENT DISPUTES BETWEEN A
                PROVIDER OR HEALTH CARE FACILITY AND THEIR HEALTH PLAN.
              </TextWithWidth>
            </Box>
            <RatesSurprise />
          </InfoWithWidth>
        </Post>
        {project?.rates?.map((rate, index) => (
          <Post key={rate.id} rowRevers={index % 2 !== 0}>
            {rate?.image && (
              <Box
                position="relative"
                maxWidth={500}
                width="100%"
                height="320px"
              >
                <Image
                  id="image"
                  fill
                  style={{ objectFit: "cover" }}
                  src={rate?.image}
                  alt={rate?.title}
                  title={rate?.title}
                />
              </Box>
            )}
            <Info>
              <Title>{rate.title}</Title>
              <BoxText>
                <div dangerouslySetInnerHTML={{ __html: rate?.text }} />
              </BoxText>
            </Info>
          </Post>
        ))}
      </Container>

      <Feedbacks />
    </>
  );
};

export default Rates;
