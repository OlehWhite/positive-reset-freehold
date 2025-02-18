import { Container, Title, Text, Wrapper, Rating, TextRating } from "./styled";
import { LinearProgressWithLabel } from "../../../components/LinearProgressWithLabel/LinearProgressWithLabel";
import { FC } from "react";
import { Box } from "@mui/material";
import IMGLogo from "../../../public/gLLTpCpk.png";

export const FranchiseOptions: FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${IMGLogo.src})` }}>
      <Wrapper>
        <Box style={{ width: "100%", maxWidth: 500 }}>
          <Title>WHAT WE INTEND TO ACCOMPLISH</Title>
          <Text>
            Like our Mission, our Vision is ambitious. It describes what we
            believe to be a future we can help create, one which has significant
            improvements in the state of mental well-being.
          </Text>
        </Box>

        <Rating>
          <TextRating>Child and Adolescent</TextRating>
          <LinearProgressWithLabel value={67} />

          <TextRating>Family Therapy</TextRating>
          <LinearProgressWithLabel value={77} />

          <TextRating>Stress Management</TextRating>
          <LinearProgressWithLabel value={82} />

          <TextRating>Individual Therapy</TextRating>
          <LinearProgressWithLabel value={96} />
        </Rating>
      </Wrapper>
    </Container>
  );
};
