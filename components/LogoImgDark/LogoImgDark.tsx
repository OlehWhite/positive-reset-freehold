import Link from "next/link";
import { Box } from "@mui/material";
import IMGLogo from "../../public/Illinois-BC-Name01e-(1).png";
import React from "react";
import Image from "next/image";

const LogoImgDark = () => {
  return (
    <Link href="/" id="logo">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Image src={IMGLogo} width={60} alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box
            sx={{
              color: "rgba(55,152,213,0.98)",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            POSITIVE RESET SHREWSBURY
          </Box>
          <Box
            sx={{
              color: "#7d7d7d",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Mental Health Clinic
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default LogoImgDark;
