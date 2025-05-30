import {
  Box,
  Button,
  Typography,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import React from "react";
import { Joininglogo } from "assets/Joininglogo";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { Termsandconditions } from "../Components/TearmsAndPrivacy/Termsandconditions";
import { PrivacyandPolicy } from "../Components/TearmsAndPrivacy/PrivacyandPolicy";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { useParams } from "react-router-dom";
import { isComponentMode, getRootAttribute } from "../utils";
import { useNavigate } from "react-router-dom";
//added
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Joining = ({ setIsAuthenticated }) => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  //added
  const [showPasscode, setShowPasscode] = useState(false);
  const handleToggleShowPasscode = () => {
    setShowPasscode((prev) => !prev);
  };
  const { id } = useParams();
  // const id = "V04P4CTFU4";
  console.log("id from route in joining:", id);

  const navigate = useNavigate();

  // Add useEffect to handle clicks outside the links
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Check if the clicked element is not one of the links
      const isTermsLink = event.target.closest('[data-link="terms"]');
      const isPrivacyLink = event.target.closest('[data-link="privacy"]');
      
      if (!isTermsLink && !isPrivacyLink) {
        setActiveLink("");
      }
    };

    document.addEventListener('click', handleDocumentClick);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleOpenTerms = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveLink("terms");
    setOpenTerms(true);
  };

  const handleCloseTerms = () => {
    setOpenTerms(false);
    // Don't clear activeLink here - let it persist until user clicks elsewhere
  };

  const handleOpenPrivacy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveLink("privacy");
    setOpenPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setOpenPrivacy(false);
    // Don't clear activeLink here - let it persist until user clicks elsewhere
  };

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      width: "100%",
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#ffffff",
      border: "1px solid #000000",
      fontSize: 16,
      color: "#000000",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      "&:focus": {
        boxShadow: `rgba(0, 0, 0, 0.08) 0 0 0 0.2rem`, // 👈 black shadow
        borderColor: "#000000", // optional: change border color too
      },
    },
  }));

  const handleAuthenticate = async () => {
    setError("");
    setSuccess("");

    console.log("Authenticating...");

    if (!passcode.trim()) {
      setError("missing auth_passcode");
      console.log("Error: Missing passcode");
      return;
    }

    const apiUrl =
      "https://videoserver.apprikart.com/kia_vc_api/v1/validate_vc/";
    const params = new URLSearchParams({
      user_type: "customer",
      room: id,
      // room: "V04P4CTFU4",
      auth_passcode: passcode,
    });

    console.log("Making API request with params:", params.toString());

    try {
      const res = await fetch(`${apiUrl}?${params.toString()}`, {
        method: "GET",
      });

      console.log("API response status:", res.status);

      const data = await res.json();

      console.log("API response data:", data);

      if (data?.status === "success") {
        setSuccess("Authenticated successfully!");
        toast.success("Authenticated successfully!");
        console.log("Authentication successful");

        // Navigate to WaitingRoom if authentication is successful
        // navigate(`/meet/${id}`);
        setIsAuthenticated(true);
      } else {
        const errorMsg = data?.error;
        setError(errorMsg);
        console.log("Authentication failed", data);
      }
    } catch (err) {
      setError("Authentication failed");
      console.log("Error during authentication:", err);
    }
  };

  return (
    <div className="joiningRoomContainer">
      <style>
        {`
      .custom-close-icon {
        font-size: 35px;
        font-weight: 100;
        color: rgb(128, 128, 128);
        padding: 0 4px;
        line-height: 1;
        cursor: pointer;
        background: transparent;
        border: none;
      }

      .custom-close-icon:hover {
        color: #000000;
        opacity: 0.7;
      }
    `}
      </style>

      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(/your-background-image.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Card
          sx={{
            width: {
              xs: "90%", // for small devices
              sm: 400, // for tablets
              md: 450, // for desktops
            },
            height: error ? { xs: 450, sm: 430 } : { xs: 420, sm: 380 },
            p: 1.8,
            backgroundColor: "rgba(255, 255, 255, 0.65)", // translucent white
            backdropFilter: "blur(2px)", // blur for glass effect
            WebkitBackdropFilter: "blur(5px)", // Safari support
            borderRadius: 0,
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="center" mb={3} mt={2}>
              <Joininglogo style={{ width: 120, height: "auto" }} />
            </Box>
            <Typography
              variant="h6"
              textAlign="center"
              mb={2}
              style={{
                color: "black",
                fontWeight: 800,
                fontSize: 15,
                marginBottom: 30,
              }}
            >
              Enter Meeting Passcode
            </Typography>

            <FormControl variant="standard" fullWidth sx={{ mb: 1 }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent page reload
                  handleAuthenticate();
                }}
              >
                <OutlinedInput
                  placeholder="Passcode"
                  id="Passcode"
                  fullWidth
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  autoFocus
                  type={showPasscode ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle passcode visibility"
                        onClick={handleToggleShowPasscode}
                        edge="end"
                        sx={{ padding: "6px", mr: "2px" }}
                      >
                        {showPasscode ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    paddingRight: 0,
                    "& input": {
                      padding: "10px 12px",
                      color: "#000000",
                    },
                    // Default border
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid grey", // Default border color (light gray)
                    },
                    // Hover state
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid grey", // Same border on hover unless focused
                    },
                    // Focused border
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid black", // Thicker gray border on focus
                      boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    bgcolor: "#04141f",
                    color: "#ffffff",
                    height: "40px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    mt: 3, // optional spacing
                  }}
                >
                  Authenticate
                </Button>
              </form>
            </FormControl>

            {error && (
              <Box
                sx={{
                  mt: 0,
                  px: 2,
                  py: 1,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f8d7da", // light red background
                  border: "1px solid #f5c2c7",
                  borderRadius: "4px",
                  color: "#842029", // dark red text
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                <Box sx={{ flex: 1, textAlign: "center" }}>{error}</Box>
                <AiOutlineClose
                  onClick={() => setError("")}
                  className="custom-close-icon"
                />
              </Box>
            )}

            <Typography
              variant="body2"
              textAlign="center"
              mt={2.0}
              fontSize={15}
            >
              <span
                style={{
                  color: "#000000",
                }}
              >
                Read our
              </span>{" "}
              <Link
                href="#"
                data-link="terms"
                sx={{
                  padding: "2px 0px 1px 0px",
                  color: "#0D6EFD",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                  borderRadius: "4px",
                  border: activeLink === "terms" ? "4px solid #A9D1FF" : "none",
                  "&:hover": {
                    color: "#003d99",
                  },
                }}
                onClick={handleOpenTerms}
              >
                Terms & conditions
              </Link>{" "}
              <span
                style={{
                  color: "#000000",
                }}
              >
                and
              </span>{" "}
              <Link
                href="#"
                data-link="privacy"
                sx={{
                  padding: "2px 0px 1px 0px",
                  color: "#0D6EFD",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                  borderRadius: "4px",
                  border:
                    activeLink === "privacy" ? "4px solid #A9D1FF" : "none",
                  "&:hover": {
                    color: "#003d99",
                  },
                }}
                onClick={handleOpenPrivacy}
              >
                Privacy Policy
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Termsandconditions open={openTerms} onClose={handleCloseTerms} />
      <PrivacyandPolicy open={openPrivacy} onClose={handleClosePrivacy} />
      <ToastContainer />
    </div>
  );
};