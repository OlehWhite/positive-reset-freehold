import { Box, styled } from "@mui/material";

export const Container = styled("main")(() => {
  return {
    width: "100%",
    maxWidth: 1300,
    margin: "35px auto 35px",
  };
});

export const Post = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",

    "@media (max-width: 1070px)": {
      flexDirection: "column",
      alignItems: "center",
    },
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

export const BoxText = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
    fontSize: 18,
    lineHeight: "26px",
    color: "#959595",
  };
});

export const FooterText = styled(BoxText)({
  padding: "35px 0",
});

export const Info = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 650,
  };
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

export const BlockWhiteText = styled(Box)({});

export const BlockDarkText = styled(Box)({
  background: "#f7f7f7",
  margin: "20px 0",
  padding: "20px 0",
});

export const WrapperBlock = styled(Box)(() => {
  return {
    marginTop: 70,
    width: "100%",
    maxWidth: 620,
    textAlign: "center",
  };
});
