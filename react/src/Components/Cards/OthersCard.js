import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled, useTheme } from "@mui/material/styles";
import { t } from "i18next";

const CustomizedAvatar = styled(Avatar)(({ theme }) => ({
  border: `3px solid ${theme.palette.themeColor?.[85]} !important`,
  color: "#fff",
  width: 44,
  height: 44,
  [theme.breakpoints.down("md")]: {
    width: 34,
    height: 34,
    fontSize: 16,
  },
}));

const CustomizedAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  "& div:not(.regular-avatar)": {
    border: `3px solid ${theme.palette.themeColor?.[85]} !important`,
    backgroundColor: theme.palette.themeColor?.[80],
    color: "#fff",
    width: 44,
    height: 44,
    [theme.breakpoints.down("md")]: {
      width: 34,
      height: 34,
      fontSize: 14,
    },
  },
}));

function OthersCard({ allParticipants, publishStreamId, playingParticipants }) {
  const theme = useTheme();
  console.log("playingParticipants:", playingParticipants);
  
  // 1. Build a list of “extra” participants (streamId + name)
  const extraParticipants = Object.entries(allParticipants)
    .filter(
      ([streamId]) =>
        streamId !== publishStreamId &&
        !playingParticipants.some((p) => p.streamId === streamId)
    )
    .map(([streamId, participant]) => ({
      streamId,
      username: participant.name || "",
    }));

  // 2. How many extras are there?
  // const othersCount = extraParticipants.length;
    console.log("line 53", allParticipants, playingParticipants)
  const othersCount = allParticipants.length - playingParticipants.length
  return (
    <div
      className="others-tile-inner"
      style={{ background: "black"}}
    >
     
      {/* Display “X other(s)” */}
      <Typography sx={{ mt: 2, color: "#fff" }}>
        {othersCount} {othersCount > 1 ? t("Others") : t("Other")}
      </Typography>
    </div>
  );
}

export default OthersCard;