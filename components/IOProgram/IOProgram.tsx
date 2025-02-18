import React from "react";
import {
  Accordion,
  BoxAccordion,
  Container,
  TypographyQuestion,
  TypographyText,
} from "./styled";
import { AccordionSummary, AccordionDetails } from "@mui/material";
import CustomExpandIcon from "./CustomExpandIcon/CustomExpandIcon";

const Questions = () => {
  return (
    <Container id="questions">
      <BoxAccordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion variant="h3">GROUP THERAPY</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Group therapy sessions are frequently the main treatment component
              used in Our Clinic’s intensive outpatient programs. The number and
              types of groups that meet will vary from program to program based
              on the needs of the participants. These sessions are led by
              professionals who facilitate topics of discussions that are
              relevant to the needs of the individuals who are taking part in
              the program. These sessions can serve as a time for individuals to
              not only receive education on the specific problems that they are
              learning to manage, but also as a time to give and receive support
              to and from peers who are also participating in the group. This
              peer interaction can serve to help individuals come to realize
              that they are not alone in the struggles that they are facing
              which can, in turn, promote acceptance and healing.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>INDIVIDUAL THERAPY</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Individual therapy sessions serve as a time for individuals to
              meet one-on-one with a therapist in a confidential setting. They
              can be a time for individuals to process through their experiences
              in treatment, address any concerns that arise, ask any questions
              they have, receive ongoing support, and celebrate successes as
              they happen. In intensive outpatient programs, these sessions are
              most commonly held on an as-needed basis.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>FAMILY THERAPY</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              In the vast majority of cases, including an individual’s family
              members into his or her treatment can be monumentally beneficial.
              In doing so, any damage that has been inflicted upon the family
              unit as a result of an individual’s mental, behavioral, or
              chemical dependency concerns can be confronted and processed
              through. Additionally, this can serve as a time for one’s family
              members to become educated on what their loved one is going
              through and learn ways in which they can best be of assistance to
              him or her. As with individual therapy, family therapy is
              typically held on an as-needed basis within intensive outpatient
              programs.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>CONTINUING CARE</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              At Our Clinic, we recognize that individuals must be provided with
              a full spectrum of care options in order to fully transition back
              into their everyday lives. For this reason, the staff members at
              our treatment centers begin working on discharge plans from the
              moment that an individual enters treatment. The purpose of these
              discharge plans is to ensure that an individual has guidance on
              ways that he or she can maintain his or her success in recovery
              once treatment has come to an end.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
