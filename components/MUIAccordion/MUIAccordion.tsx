import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { Menu } from "./styled";
import * as React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { DATA_LINKS } from "../Services/constants";

export const MUIAccordion = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Menu>MENU</Menu>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Link href="/" id="dark-link">
            HOME
          </Link>
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Menu>SERVICES</Menu>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              {DATA_LINKS.map(({ name, path }) => (
                <Link key={name} href={path} id="dark-link">
                  {name}
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
          <Link href="/telehealth" id="dark-link">
            TELEHEALTH
          </Link>
          <Link href="/appointment-request" id="dark-link">
            APPOINTMENT REQUEST
          </Link>
          <Link href="/billing-and-insurances" id="dark-link">
            BILLING AND INSURANCES
          </Link>
          <Link href="/rates" id="dark-link">
            RATES
          </Link>
          <Link href="/career-opportunities" id="dark-link">
            CARRER
          </Link>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
