import {
  Container,
  Wrapper,
  Menu,
  Logo,
  WorkingHours,
  RecentPosts,
  Text,
  Ul,
  Li,
  WrapperPost,
  Post,
  Title,
  ImgPost,
  Contact,
  ContactInfo,
  Tel,
  WrapperImg,
  TextLogo,
  Day,
  WrapperAlarm,
  WrapperPosition,
  Days,
  Copyright,
  Links,
  Twitter,
  Linkedin,
  Facebook,
  TitleFooter,
  Address,
} from "./styled";
import React, { FC, useState } from "react";
import { Box, Modal } from "@mui/material";
import ModalServices from "../../ModalServices/ModalServices";
import IMGFacebook from "../../../public/facebook-footer.svg";
import IMGLinkedin from "../../../public/linkedin-footer.svg";
import IMGAlarmClock from "../../../public/alarm-clock.png";
import IMGPhoneLogo from "../../../public/silver-mobil.png";
import IMGTwitter from "../../../public/twitter-footer.svg";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../LogoImg/LogoImg";
import IMGLocation from "../../../public/icons8-location-50-dark.png";
import { Iframe } from "../../../otherPages/career/style";
import { useGetProjects } from "../../../services/getInfo";

const BASE_MENU = [
  { page: "Home", path: "/" },
  { page: "Services", path: "/services" },
  { page: "Тelehealth", path: "/telehealth" },
  { page: "Appointment request", path: "/appointment-request" },
  { page: "Billing and Insurances", path: "/billing-and-insurances" },
  { page: "Career Opportunities", path: "/career-opportunities" },
];

export const Footer: FC = () => {
  const { project } = useGetProjects();

  const facebookLink = project?.links.find(
    (link) => link.title === "Facebook",
  )?.link;
  const linkedInLink = project?.links.find(
    (link) => link.title === "LinkedIn",
  )?.link;
  const twitterLink = project?.links.find(
    (link) => link.title === "Twitter",
  )?.link;

  const address = project?.address || "";
  const [line1, line2] = address.includes("Freehold")
    ? address.split("Freehold")
    : [address, ""];

  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImg />
          <TextLogo>
            If you or someone you know is struggling with depression, PTSD,
            post-partum, chemical dependency, or any other mental health or
            addiction concern, please contact us today.
          </TextLogo>
          <Contact>
            <WrapperImg sx={{ marginRight: 3 }}>
              <Image
                src={IMGPhoneLogo}
                width={25}
                height={40}
                alt="Phone"
                title="Phone"
              />
            </WrapperImg>
            <ContactInfo sx={{ width: 208 }}>
              <Tel href={`tel:${project?.tel}`}>{project?.tel}</Tel>

              <Link
                id="white-link"
                href="/appointment-request"
              >
                {project?.email}
              </Link>
            </ContactInfo>
          </Contact>
          <Contact>
            <WrapperImg>
              <Image src={IMGLocation} width={40} alt="Phone" title="Phone" />
            </WrapperImg>
            <ContactInfo>
              <Address onClick={handleOpen}>
                {" "}
                {line1.trim()}
                <br />
                {`Freehold${line2}`}
              </Address>
            </ContactInfo>
          </Contact>
        </Logo>
        <Menu>
          <Title>MENU</Title>
          <Ul>
            {BASE_MENU.map((link, index) => (
              <Li key={index}>
                {link.page !== "Services" ? (
                  <Link href={link.path} passHref id="white-footer-link">
                    {link.page}
                  </Link>
                ) : (
                  <ModalServices />
                )}
              </Li>
            ))}
          </Ul>
        </Menu>
        {project?.blogs.length > 0 && (
          <RecentPosts>
            <Title>RECENT BLOG</Title>

            <WrapperPost>
              {project?.blogs
                ?.map((blog, index) => (
                  <Post key={index}>
                    <ImgPost
                      src={blog.image}
                      alt="First Post"
                      title="Second Post"
                    />

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Text>{blog?.title}</Text>
                    </Box>
                  </Post>
                ))
                .reverse()
                .slice(0, 3)}
            </WrapperPost>
          </RecentPosts>
        )}
        <WorkingHours>
          <WrapperPosition>
            <WrapperAlarm>
              <Image
                src={IMGAlarmClock}
                width={45}
                height={45}
                alt="Alar"
                title="Alarm"
              />
            </WrapperAlarm>
          </WrapperPosition>
          <Days>
            {project?.schedule.map((day, index) => (
              <Day key={index}>
                {day.day}: {day.open} - {day.close}
              </Day>
            ))}
          </Days>
        </WorkingHours>
      </Wrapper>
      <Copyright>
        <TitleFooter>
          Copyright © 2025 Vimax LLC. All rights reserved
        </TitleFooter>
        <Links>
          <Facebook href={facebookLink} target="_blank">
            <Image
              src={IMGFacebook}
              width={20}
              height={20}
              alt="Facebook"
              title="Facebook"
            />
          </Facebook>

{/*           <Twitter href={twitterLink} target="_blank">
            <Image
              src={IMGTwitter}
              width={20}
              height={20}
              alt="Twitter"
              title="Twitter"
            />
          </Twitter> */}

          <Linkedin href={linkedInLink} target="_blank">
            <Image
              src={IMGLinkedin}
              width={20}
              height={20}
              alt="Linkedin"
              title="Linkedin"
            />
          </Linkedin>
        </Links>
      </Copyright>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={openModalWindow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto 35px",
          }}
        >
          <Iframe src={project?.googleMaps}></Iframe>
        </Box>
      </Modal>
    </Container>
  );
};
