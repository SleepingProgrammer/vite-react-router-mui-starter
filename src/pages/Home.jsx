import { Box, Typography } from "@mui/joy";
import React from "react";

import viteLogo from "/vite.svg";
import muiLogo from "/mui.svg";
export default function Home() {
  return (
    <>
      <Box>
        <Box
          component="img"
          src={viteLogo}
          sx={{
            width: 100,
            cursor: "pointer",
            "&:hover": {
              //move up when hovered
              transform: "translateY(-3px)",
              textDecoration: "none",
            },
            pl: 5,
          }}
        />
        <Box
          component="img"
          src={muiLogo}
          sx={{
            width: 100,
            cursor: "pointer",
            "&:hover": {
              //move up when hovered
              transform: "translateY(-3px)",
              textDecoration: "none",
            },
            pl: 5,
          }}
        />
      </Box>

      <Typography level="h1" color="primary">
        Home
      </Typography>
      <Typography level="h4" color="warning">
        Had to add the logos cause why not
      </Typography>
    </>
  );
}
