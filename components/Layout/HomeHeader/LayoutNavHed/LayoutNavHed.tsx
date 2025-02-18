import { FC } from "react";
import { Box } from "@mui/material";
import { Container, Wrapper, WrapperMenu, WrapperSidebar } from "./styled";
import { MUIAccordion } from "../../../MUIAccordion/MUIAccordion";
import Link from "next/link";
import { Services } from "../../../Services/Services";
import { Sidebar } from "../../../../otherPages/home/Sidebar/Sidebar";
import { BASE_NAV } from "../../constants";
import { ShowBlock } from "../../styled";

export const LayoutNavHed: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WrapperMenu>
            <MUIAccordion />
          </WrapperMenu>
          <ShowBlock>
            {BASE_NAV.map((link, index) => (
              <Box sx={{ display: "inline-block" }} key={index}>
                {link.name === "SERVICES" ? (
                  <Services />
                ) : (
                  <Link
                    href={link.path}
                    passHref
                    style={{}}
                    id="white-link"
                  >
                    {link.name}
                  </Link>
                )}
              </Box>
            ))}
          </ShowBlock>
        </Box>
        <WrapperSidebar>
          <Sidebar />
        </WrapperSidebar>
      </Wrapper>
    </Container>
  );
};
