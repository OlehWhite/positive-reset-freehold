import React, { FC } from "react";
import { Wrapper, Title, Text, Link, Tel } from "./styled";
import { Box } from "@mui/material";
import IMGFacebook from "../../../../public/icons8-facebook-50.png";
import IMGInstagram from "../../../../public/instagram.png";
import Image from "next/image";
import { useGetProjects } from "../../../../services/getInfo";

export const Covid19: FC = () => {
  const { project } = useGetProjects();

  const facebookLink = project?.links.find(
    (link) => link.title === "Facebook",
  )?.link;
  const instagramLink = project?.links.find(
    (link) => link.title === "Instagram",
  )?.link;

  return (
    <>
      <Wrapper>
        <Box>
          <Title>STATEMENT TO EMPLOYEES AND PATIENTS REGARDING COVID-19</Title>
          <Text>
            Our number one priority is the health and safety of our employees,
            partners and patients. Our clinic is 100 percent operational and we
            have prepared an operational plan to ensure we can maintain our
            service level, while ensuring the health and safety of all that
            interact with our clinic.
          </Text>
          <Text>
            We closely monitor any developments regarding COVID-19 safety
            measures and will implement updates as needed.
          </Text>
          <Text>
            - Hand Hygiene: Proper and frequent hand-washing is vital to help
            combat the spread of viruses. <br />
            - Ongoing Training: In addition to our regular training, we are
            completing enhanced COVID-19 awareness training as a team. <br />-
            Potential Exposure: Employees who exhibit COVID-19 symptoms, those
            who live with someone exhibiting symptoms, or anyone who has been
            exposed to the virus are mandated to not come to work.
          </Text>
          <Text>
            In response to the COVID-19 outbreak we would like to extend our
            counseling and medication management services. We are currently
            offering TeleBehavioral Health Therapy services and Medication
            Management to anyone who is experiencing mental health challenges
            such as anxiety, depression, stress, or otherwise including those
            caused as a result of recent events. If you or someone you know
            resides in any area of the State of Illinois and is in need of our
            services please reach out to our office at {project?.tel} and get
            access to the help you need.
          </Text>
          <Tel>{project?.tel}</Tel>
          <Box sx={{ display: "flex" }}>
            <Link href={facebookLink} target="_blank">
              <Image
                src={IMGFacebook}
                alt="Facebook"
                title="Facebook"
                width={22}
                height={22}
              />
            </Link>

            <Link href={instagramLink} target="_blank">
              <Image
                src={IMGInstagram}
                alt="Linkedin"
                title="Linkedin"
                width={22}
                height={22}
              />
            </Link>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};
