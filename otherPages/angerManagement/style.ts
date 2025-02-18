import { styled, Box } from "@mui/material";

export const Container = styled(Box)({
  width: "100%",
  maxWidth: 1300,
  margin: "35px auto 35px",
});

export const WrapperHeader = styled(Box)(() => {
  return {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
  };
});

export const TitleHeader = styled("h2")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    color: "#3498db",
    margin: 0,
    fontSize: 26,
  };
});

export const Block = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "35px 0",

    "@media (max-width: 1090px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 620,
  };
});

export const Title = styled("h2")(() => {
  return {
    display: "flex",
    color: "#3498db",
    margin: 0,
    fontSize: 26,
  };
});

export const Text = styled("p")(() => {
  return {
    fontSize: 16,
    lineHeight: "26px",
    color: "#959595",
  };
});

export const Li = styled("li")({
  fontSize: 16,
  lineHeight: "26px",
  color: "#959595",
  paddingTop: 10,
});

export const TextBlue = styled("p")({
  fontSize: 25,
  lineHeight: "34px",
  color: "#3498db",
  paddingTop: 10,
});
