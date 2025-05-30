import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

function LeftTheRoom({
  withError: leaveRoomWithError,
  handleLeaveFromRoom,
  handleRejoin,
}) {
  const width = useWidth();
  const { t } = useTranslation();
  const layouts = { xl: 32, lg: 24, md: 24, sm: 16, xs: 12 };
  const { id } = useParams();

  React.useEffect(() => {
    handleLeaveFromRoom();
    // eslint-disable-next-line
  }, []);
  const message =
    leaveRoomWithError !== null
      ? t("Something Went Wrong")
      : t("You have left the meeting");

  return (
    <>
      <Grid container justifyContent={"center"} sx={{ mt: layouts[width] }}>
        <Box>
          <Typography variant="h5" align="center">
            {message}
          </Typography>
          <Box py={2}>
            <Typography variant="h7" align="center">
              {leaveRoomWithError !== null ? t(leaveRoomWithError) : ""}
            </Typography>
          </Box>
          <Box py={2}>
            <Typography variant="h6" align="center">
              {t("You can return to the home page.")}
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          justifyContent={"center"}
          spacing={2}
          sx={{ mt: 2 }}
          alignItems="center"
        >
          {/* <Grid item lg={1} md={3} sm={2} xs={3}>
            <Button fullWidth color="secondary" variant="outlined"
                   onClick={handleRejoin}>{t('Rejoin')}</Button>
          </Grid> */}
          <Grid item lg={3} md={5} sm={6} xs={8}>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              component={"a"}
              href={`${id}`}
            >
              {t("Return to home screen")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LeftTheRoom;
