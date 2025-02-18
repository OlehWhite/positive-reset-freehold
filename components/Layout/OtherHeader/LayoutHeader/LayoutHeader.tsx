import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Follow,
  FollowInfo,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
  Address,
  LinkA,
} from "./styled";
import React, { FC, useState } from "react";
import IMGPhoneLogo from "../../../../public/silver-mobil.png";
import IMGFollowIcon from "../../../../public/silver-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";
import Image from "next/image";
import LogoImgDark from "../../../LogoImgDark/LogoImgDark";
import IMGLocation from "../../../../public/icons8-location-50-dark.png";
import Link from "next/link";
import { Box, Modal } from "@mui/material";
import { Iframe } from "../../../../otherPages/career/style";
import { useGetProjects } from "../../../../services/getInfo";

export const LayoutHeader: FC = () => {
  const { project } = useGetProjects();

  const facebookLink = project?.links.find(
    (link) => link.title === "Facebook",
  )?.link;
  const linkedInLink = project?.links.find(
    (link) => link.title === "LinkedIn",
  )?.link;

  const address = project?.address || "";
  const [line1, line2] = address.includes("Freehold")
    ? address.split("Freehold")
    : [address, ""];

  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  const handleOpen = () => setOpenModalWindow(true);
  const handleClose = () => setOpenModalWindow(false);

  return (
    <Wrapper>
      <LogoImgDark />
      <ContactAndFollow>
        <Contact>
          <WrapperImg>
            <Image
              src={IMGPhoneLogo}
              width={25}
              height={42}
              alt="Phone"
              title="Phone"
            />
          </WrapperImg>
          <ContactInfo>
            <Tel href={`tel:${project?.tel}`}>{project?.tel}</Tel>
            <Link
              id="link-email"
              href="/appointment-request"
            >
              {project?.email}
            </Link>
          </ContactInfo>
        </Contact>
        <Contact>
          <WrapperImg>
            <Image src={IMGLocation} width={45} alt="Phone" title="Phone" />
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
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={50}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>
            <WrapperFollow>
              <LinkA href={facebookLink} target="_blank">
                <Image
                  src={IMGFacebook}
                  width={12}
                  height={12}
                  alt="Facebook"
                  title="Facebook"
                />
              </LinkA>
              <LinkA href={linkedInLink} target="_blank">
                <Image
                  src={IMGLinkedin}
                  width={12}
                  height={12}
                  alt="Linkedin"
                  title="Linkedin"
                />
              </LinkA>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
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
      </ContactAndFollow>
    </Wrapper>
  );
};
