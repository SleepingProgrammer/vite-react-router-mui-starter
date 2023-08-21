import { Menu } from "@mui/icons-material";
import { Box, IconButton, Link } from "@mui/joy";
import React from "react";

import reactLogo from "../assets/react.svg";

function Header(props) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default function Navbar() {
  return (
    <Header>
      {/**
       * Logo Display
       */}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        
        <Box
          component="img"
          src={reactLogo}
          sx={{
            width: 100,
            cursor: "pointer",
            "&:hover": {
              //move up when hovered
              transform: "translateY(-3px)",
              textDecoration: "none",
            },
            pl: 5
          }}
        />
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            ml: 3,
          }}
        >
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                target={link.newTab ? "_blank" : "_self"}
                sx={{
                  mx: 1,
                  "&:hover": {
                    color: "primary.main",
                    //move up when hovered
                    transform: "translateY(-3px)",
                    textDecoration: "none",
                  },
                  fontSize: 14,
                  fontWeight: 900,
                  py: 2.5,
                  px: 1,
                  lineHeight: "20px",
                  textDecoration: "none",
                  fontFamily: "Open Sans,Arial,sans-serif",
                }}
              >
                {link.title}
              </Link>
            );
          })}
        </Box>
      </Box>

      <IconButton
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
          ml: 2,
        }}
        onClick={() => setOpen(open == null ? "left" : null)}
      >
        <Menu />
      </IconButton>
    </Header>
  );
}
