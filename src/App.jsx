import { useState } from "react";
import { Button, Typography, Box, Link, Grid, Tooltip } from "@mui/joy";
import { Add } from "@mui/icons-material";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      container
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#060a0e",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </Box>
  );
}

export default App;
