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

export const Title = styled("h2")(() => {
  return {
    display: "flex",
    color: "#3498db",
    margin: "35px 0 0 0",
    fontSize: 26,
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto 35px",
    boxSizing: "border-box",

    "@media (max-width: 992px)": {
      padding: "0 16px",
    },
  };
});

export const Block = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "35px 0 30px",

    "@media (max-width: 1090px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 650,
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
  color: "#959595",
  fontSize: 18,
  lineHeight: "26px",
});
