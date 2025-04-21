import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CustomizedBtn } from "../../CustomizedBtn";
import { FaHandPaper } from "react-icons/fa";
import { FaRegHand } from "react-icons/fa6";

export const roundStyle = {
  width: { xs: 36, md: 46 },
  height: { xs: 36, md: 46 },
  minWidth: "unset",
  maxWidth: { xs: 36, md: 46 },
  maxHeight: { xs: 36, md: 46 },
  borderRadius: "50%",
  padding: "4px",
};

function RaiseHandButton(props) {
  const {
    rounded,
    footer,
    handRaised,
    onToggleRaiseHand,
    handleSendNotificationEvent,
    publishStreamId,
  } = props;

  const { t } = useTranslation();

  const handleClick = () => {
    const newState = !handRaised;
    onToggleRaiseHand(newState); // Toggle local state
    handleSendNotificationEvent?.("RAISE_HAND", publishStreamId, {
      isRaised: newState,
    }); // Notify others
  };

  return (
    <Tooltip title={t("Raise Hand")} placement="top">
      <CustomizedBtn
        className={footer ? "footer-icon-button" : ""}
        variant="contained"
        color={handRaised ? "primary" : "secondary"}
        sx={rounded ? roundStyle : {}}
        onClick={handleClick}
      >
        {handRaised ? (
          <FaHandPaper size={22} color="#000" />
        ) : (
          <FaRegHand size={22} color="#fff" />
        )}
      </CustomizedBtn>
    </Tooltip>
  );
}

export default RaiseHandButton;