import { styled, Box } from "@mui/material";

export const Container = styled("main")(() => {
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

export const Post = styled(Box, {
  shouldForwardProp: (prop) => prop !== "rowRevers",
})<{ rowRevers?: boolean }>(({ rowRevers }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 35,
  flexDirection: rowRevers ? "row-reverse" : "row",

  "@media (max-width: 1070px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Title = styled("h2")(() => {
  return {
    display: "flex",
    justifyContent: "center",
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
    fontSize: 16,
    lineHeight: "26px",
    color: "#959595",
  };
});

export const Info = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 515,
  };
});

export const InfoWithWidth = styled(Info)(() => {
  return {
    maxWidth: 980,
  };
});

export const TextWithWidth = styled(Text)(() => {
  return {
    fontWeight: 600,
  };
});

export const TitleWithWidth = styled(Title)(() => {
  return {
    justifyContent: "flex-start",
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
