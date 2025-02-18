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
            <TypographyQuestion variant="h3">
              ORGANIZE THE MEDICATIONS YOU TAKE SO THAT YOU CAN REMEMBER TO TAKE
              THEM.
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              (Many people use an organizer box that has a little compartment
              for the pills to be taken each day of the week, and each time of
              day. Once a week you have to spend half an hour filling the thing
              up carefully, but then taking the medication is easy.) If you
              notice any side-effects, notify your doctor promptly.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              IF, HOWEVER, BOTH YOU AND A TRUSTED FRIEND ARE AGREED THAT THE
              DOCTOR’S CHOICE OF MEDICATION IS MOST DEFINITELY NOT WORKING
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              If, however, both you and a trusted friend or other supporter are
              agreed that the doctor’s choice of medication is most definitely
              not working, then find another professional, and change drugs ONLY
              UNDER THE NEW DOCTOR’S SUPERVISION. If you’re suspicious of the
              motives of your old doctor, find a new one without ties to the old
              one. However, do not try to manage the drugs yourself.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              IT HAS BEEN RECENTLY DISCOVERED THAT SOME DOCTORS HAVE BEEN
              PRESCRIBING CERTAIN DRUGS
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Unfortunately, it has been recently discovered that some doctors
              have been prescribing certain drugs without a good reason, for
              instance the drugs for ADD (attention deficit disorder). Whatever
              decision you take, you should try to talk it over with your
              trusted supporter or family member, and agree on a path of action,
              especially if it involves giving up on one professional and going
              to another.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              IT IS GENERALLY BETTER TO GET A DOCTOR WHO PRESCRIBES LESS
              MEDICATION
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              It is generally better to get a doctor who prescribes less
              medication than one who prescribes tons of medication. Your
              condition might need heavy medication. But there certainly are
              doctors who prescribe too much, and it is hard to advise how to
              deal with them, and to know whether you’re being over-medicated.
              If in doubt, stay with the program. This is why, if at all
              possible you should get a friend or advisor on board. Choosing how
              to handle a feeling of being over-medicated should not be a matter
              of opinion, but a matter of judgment.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
