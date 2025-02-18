import React from "react";
import {
  Accordion,
  BoxAccordion,
  Container,
  TypographyQuestion,
  TypographyText,
  Bold,
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
              1. BEFORE YOU ACTUALLY GET STARTED
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              If you can, you should try to get support from someone you trust,
              such as a social worker, a family member, your doctor, a teacher,
              or a priest or minister or nun. Let them help you decide.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              2. IF WHOEVER IS SUPPORTING YOU SUGGESTS THAT YOU SHOULD GET
              TESTED
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              You have to decide whether to follow that advice, and that’s a
              very personal decision. Just deciding to get tested is a big point
              in your favor.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              3. LEARN JUST A LITTLE BIT ABOUT MENTAL PROBLEMS
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              <Bold>
                There are several basic kinds of mental health problems:
              </Bold>
              <br />
              <Bold>Emotional</Bold> – This is fairly clear; it describes people
              who respond to situations in such extreme ways that they make
              things worse.
              <br />
              <Bold>Behavioral</Bold> – This is a complicated sort of problem
              that has to do with habits of behavior.
              <br />
              <Bold>Developmental</Bold> – This describes problems arising out
              of handicaps that prevent normal mental growth. Often even a
              person who is mentally handicapped can tell that he or she is
              different from other folks of the same age as himself. A minor
              degree of difference is not abnormal, but only a specialist can
              tell.
              <br />
              <Bold>Physiological</Bold> – This appears as a problem with the
              brain or the mind but is actually caused by physical problems with
              the nerves or muscles.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              4. STOP MAKING MATTERS WORSE BY FEELING ALIENATED.
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              This is a word for that feeling of being all alone. You start
              thinking that you’re the only one who has this sickness, and you
              will be considered strange and different. This is certainly not
              true. Most common problems, such as depression, are made worse by
              the feeling of being alone. Realize that many problems like this
              are very common, and that should help you fight the problem. But
              often, intervention is needed; that is, the problem won’t go away
              until it is treated. But that’s nothing to feel upset about.
              People who have suffered the same problem can help you understand
              it, and cope with it. Ask around for the best doctor or treatment
              center to go to. They are NOT all the same, and you need to be
              able to trust the people who are treating you, such as your
              counselor or treatment center. If you’re not comfortable with one
              professional or one treatment center, it’s perfectly okay to find
              another one. This is important treatment, and you really have to
              feel comfortable.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              5. KNOW WHAT TO EXPECT. WHAT HAPPENS DURING A PSYCHOLOGICAL
              EVALUATION?
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              <Bold>a. </Bold> It usually begins with the professional just
              sitting with you and asking you to explain various things. This
              usually lasts about an hour. If it is decided that you should be
              given “psychotherapy,” it is very similar: a talk session, where
              they try to give you various ideas and attitudes to help you deal
              with one aspect of your problem or another. They may talk about
              physical problems, genetic problems (did your parents or
              grandparents have …?) environmental (When you were growing up, was
              there a lot of violence, or noise, or hostility, or traveling
              around, or changing schools…?) educational (did you have difficult
              in school with …?) <br />
              <Bold>b. </Bold> They could talk about your feelings or reactions
              about various things that might have happened to you. For this
              purpose, it might help you to write down beforehand some of what
              you’re upset or concerned about, and take it with you for your
              session.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              6. DON’T HOLD BACK; BRING EVERYTHING OUT TO THE THERAPIST (THE
              DOCTOR OR PROFESSIONAL)
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Don’t be embarrassed. It is completely confidential; there are
              laws preventing them from discussing your information with anyone
              outside your session. Nothing you say is going to surprise them;
              they’ve probably heard very similar things from other patients. It
              may surprise you to find how easy it is to open up after you’ve
              made the first leap and told them something in confidence.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              7. TAKE ALL YOUR MEDICATIONS FAITHFULLY.
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              This is important. Some of the biggest problems doctors have is
              with patients who stop taking their medication as soon as they
              start feeling better. This is especially true of people who suffer
              from manic depression (extreme alternating “highs” and “lows”).
              The drug prevents the really terrible lows, but they also moderate
              some of the excessive highs. You can’t have everything; you have
              to sacrifice some of the euphoria in order to avoid the deep
              depression; it’s a tradeoff.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
