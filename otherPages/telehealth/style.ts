import { styled, Box } from "@mui/material";

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
    justifyContent: "space-between",
    margin: "40px 0",

    "@media (max-width: 1070px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const Title = styled("h2")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    color: "#3498db",
    margin: 0,
    fontSize: 26,
  };
});

export const Img = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: 625,
  };
});

export const Info = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 600,
  };
});

export const UnderText = styled(Box)(() => {
  return {
    "@media (max-width: 1070px)": {
      width: "100%",
      maxWidth: 600,
      margin: "0 auto",
    },
  };
});

export const Text = styled("p")(() => {
  return {
    marginTop: 0,
    fontSize: 16,
    lineHeight: "26px",
    color: "#959595",
  };
});
