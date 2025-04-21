import React from "react";
import { useTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import Home from "pages/Home";
import AntMedia from "pages/AntMedia";
import { isComponentMode } from "utils";
import { Joining } from "pages/Joining";
import { Navigate } from "react-router-dom";
import WaitingRoom from "pages/WaitingRoom";
import MeetingRoom from "pages/MeetingRoom";

function CustomRoutes(props) {
  const theme = useTheme();

  console.log("CustomRoutes");

  if (isComponentMode()) {
    return (
      <Grid container style={{ background: theme.palette.background }}>
        <Routes>
          <Route path="*" element={<AntMedia />} />
        </Routes>
      </Grid>
    );
  } else {
    return (
      <Grid container style={{ background: theme.palette.background }}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/join/:id" replace />} /> */}
          {/* <Route path="/join/:id" element={<Joining />} /> */}
          <Route path="meet/:id" element={<AntMedia />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/:id" element={<AntMedia />} />
        </Routes>
      </Grid>
    );
  }
}

export default CustomRoutes;
