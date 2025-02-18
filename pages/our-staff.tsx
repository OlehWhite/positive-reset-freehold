import React from "react";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import {
  Container,
  Title,
  WrapperHeader,
  WrapperCards,
  Prescribers,
} from "../otherPages/ourStaff/style";
import IMGHeader from "../public/Intensive-Outpatient-Program02b.jpg";
import Head from "next/head";
import PersonCardComponent from "../otherPages/ourStaff/PersonCardComponent";
import { useGetProjects } from "../services/getInfo";
import { WEBSITE_TITLE } from "../services/constants";

const OurStaff = () => {
  const { project } = useGetProjects();

  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE} - Call Today | Our Staff</title>
      </Head>
      <OtherHeader/>
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>OUR STAFF MEMBERS</Title>
      </WrapperHeader>
      {project?.providers.length === 0 ? (
        <Title sx={{ fontSize: "50px", margin: "40px 0" }}>
          Coming soon...
        </Title>
      ) : (
        <Container>
          <Prescribers>
            <Title sx={{ margin: "35px 0" }}>PROVIDERS</Title>
            <WrapperCards>
              {project?.providers.map((provider, index) => (
                <PersonCardComponent key={index} provider={provider} />
              ))}
            </WrapperCards>
          </Prescribers>
        </Container>
      )}
    </>
  );
};

export default OurStaff;


