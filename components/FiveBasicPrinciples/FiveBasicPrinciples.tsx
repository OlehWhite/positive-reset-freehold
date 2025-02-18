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
              1. CHANGES THE VIEWS OF THE RELATIONSHIP.
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Throughout the therapeutic process, the therapist attempts to help
              both partners see the relationship in a more objective manner.
              They learn to stop the “blame game” and instead look at what
              happens to them as a process involving each partner. They also can
              benefit from seeing that their relationship takes place in a
              certain context. For example, couples who struggle financially
              will be under different kinds of situational stresses than those
              who are not. Therapists begin this process by collecting “data” on
              the interaction between the partners by watching how they
              interact. Therapists then formulate “hypotheses” about what causal
              factors may be in play to lead to the way the couples interact.
              How they share this information with the couple varies by the
              therapist’s particular theoretical orientation. There’s empirical
              support for a variety of approaches from behavioral to
              insight-oriented. Different therapists will use different
              strategies, but as long as they focus on altering the way the
              relationship is understood, the couple can start to see each
              other, and their interactions, in more adaptive ways.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              2. MODIFIES DYSFUNCTIONAL BEHAVIOR.
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Effective couples therapists attempt to change the way that the
              partners actually behave with each other. This means that in
              addition to helping them improve their interactions, therapists
              also need to ensure that their clients are not engaging in actions
              that can cause physical, psychological, or economic harm. In order
              to do this, therapists must conduct a careful assessment to
              determine whether their clients are, in fact, at risk. If
              necessary, the therapist may recommend, for example, that one
              partner be referred to a domestic violence shelter, to specialized
              drug abuse treatment, or to anger management. It is also possible
              that if the risk is not sufficiently severe, the couple can
              benefit from “time-out” procedures to stop the escalation of
              conflict.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>
              3. DECREASES EMOTIONAL AVOIDANCE.
            </TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Couples who avoid expressing their private feelings put themselves
              at greater risk of becoming emotionally distant and hence grow
              apart. Effective couples therapists help their clients bring out
              the emotions and thoughts that they fear expressing to the other
              person. Attachment-based couples therapy allows the partners to
              feel less afraid of expressing their needs for closeness.
              According to this view, some partners who failed to develop
              “secure” emotional attachments in childhood have unmet needs that
              they carry over into their adult relationships. They fear showing
              their partners how much they need them because they are afraid
              that their partners will reject them. Behaviorally based
              therapists, assume that adults may fear expressing their true
              feelings because, in the past, they did not receive
              “reinforcement.” Either way, both theoretical approaches advocate
              helping their clients express their true feelings in a way that
              will eventually draw them closer together.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>4. IMPROVES COMMUNICATION.</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Being able to communicate is one of the “three C’s” of intimacy.
              All effective couples therapies focus on helping the partners to
              communicate more effectively. Building on principles #2 and #3,
              this communication should not be abusive, nor should partners
              ridicule each other when they do express their true feelings.
              Couples may, therefore, require “coaching” to learn how to speak
              to each other in more supportive and understanding ways. The
              therapist may also provide the couple with didactic instruction to
              give them the basis for knowing what types of communication are
              effective and what types will only cause more conflict. They can
              learn how to listen more actively and empathically, for example.
              However, exactly how to accomplish this step requires that
              therapists turn back to the assessments they performed early on in
              treatment. Couples with a long history of mutual criticism may
              require a different approach than those who try to avoid conflict
              at all costs.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<CustomExpandIcon />}>
            <TypographyQuestion>5. PROMOTES STRENGTHS.</TypographyQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyText paragraph>
              Effective couples therapists point out the strengths in the
              relationship and build resilience particularly as therapy nears a
              close. Because so much of couples therapy involves focusing on
              problem areas, it’s easy to lose sight of the other areas in which
              couples function effectively. The point of promoting strength is
              to help the couple derive more enjoyment out of their
              relationship. The behaviorally-oriented therapist may “prescribe”
              that one partner do something that pleases the other. Therapists
              from other orientations that focus more on emotions instead might
              help the couple develop a more positive “story” or narrative about
              their relationship. In either case, the therapist should avoid
              trying to put his or her own spin on what constitutes a strength
              and let this be defined by the couple.
            </TypographyText>
          </AccordionDetails>
        </Accordion>
      </BoxAccordion>
    </Container>
  );
};

export default Questions;
