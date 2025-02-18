import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import {
  Block,
  Text,
  Title,
  WrapperBlock,
  WrapperHeader,
  Wrapper,
} from "../otherPages/familyTherapy/style";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/Family-Therapy01.jpg";
import IMGOne from "../public/Family-Therapy02.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { WEBSITE_TITLE } from "../services/constants";

const FamilyTherapy = () => {
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Family Therapy</title>
        <meta
          name="keywords"
          content="family therapy, family counseling, family relationship, family dynamics, family conflict resolution, family communication, family support, family well-being, family unity, family healing, family mental health, family therapy services, family therapy techniques, family therapy benefits, family therapy approach, family therapy sessions, family therapy process, family therapy interventions, family therapy strategies"
        />
        <meta name="description" content="STRESS MANAGEMENT" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>FAMILY THERAPY</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: 535,
                maxHeight: 338,
              }}
            >
              <Image
                id="image"
                src={IMGOne}
                alt="FAMILY THERAPY"
                title="FAMILY THERAPY"
              />
            </Box>
            <WrapperBlock>
              <Title>FAMILY THERAPY</Title>
              <Text>
                Family therapy, also referred to as couple and family therapy,
                marriage and family therapy, family systems therapy, and family
                counseling, is a branch of psychotherapy that works with
                families and couples in intimate relationships to nurture change
                and development. It tends to view change in terms of the systems
                of interaction between family members. It emphasizes family
                relationships as an important factor in psychological health.
              </Text>
              <Text>
                The different schools of family therapy have in common a belief
                that, regardless of the origin of the problem, and regardless of
                whether the clients consider it an “individual” or “family”
                issue, involving families in solutions often benefits clients.
                This involvement of families is commonly accomplished by their
                direct participation in the therapy session. The skills of the
                family therapist thus include the ability to influence
                conversations in a way that catalyses the strengths, wisdom, and
                support of the wider system.
              </Text>
            </WrapperBlock>
          </Block>
          <Box>
            <Text>
              In the field’s early years, many clinicians defined the family in
              a narrow, traditional manner usually including parents and
              children. As the field has evolved, the concept of the family is
              more commonly defined in terms of strongly supportive, long-term
              roles and relationships between people who may or may not be
              related by blood or marriage.
            </Text>
            <Text>
              The conceptual frameworks developed by family therapists,
              especially those of family systems theorists, have been applied to
              a wide range of human behaviour, including organisational dynamics
              and the study of greatness.
            </Text>
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default FamilyTherapy;
