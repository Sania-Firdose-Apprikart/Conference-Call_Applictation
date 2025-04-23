import React, { useState } from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmojiPicker, { Emoji, EmojiStyle } from "emoji-picker-react";
import { useSSR, useTranslation } from "react-i18next";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClearIcon from "@mui/icons-material/Clear";
import { useParams } from "react-router-dom";

const MessageInputContainer = styled(Grid)(({ theme }) => ({
  padding: "16px 16px 8px 16px",
  background: theme.palette.themeColor?.[70],
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "16px 0px 8px 0px",
  },
}));

const MessageTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 30,
    backgroundColor: theme.palette.themeColor?.[60],
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: theme.palette.themeColor?.[10],
    fontWeight: 400,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: 30,
  },
}));

const FilePreviewContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const MessageInput = React.memo(
  ({ streamName, handleSendMessage, handleSetMessages, handleFileUpload }) => {
    const { id } = useParams();
    const { t } = useTranslation();
    const [text, setText] = useState("");
    const inputRef = React.useRef(null);
    const [files, setFiles] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fileEndPoint, setFileEndPoint] = useState([]);

    const uploadFileToAPI = async (event) => {
      const uploadedFile = event.target.files[0];
      console.log("File :", uploadedFile);
      if (!uploadedFile) return;
      const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB in bytes
      if (uploadedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds 25MB limit.");
        return;
      }
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("vc_room", id); // replace dynamically if needed
        formData.append("who", streamName); // replace dynamically if needed
        formData.append("user_type", "customer"); // replace dynamically if needed
        formData.append("file", uploadedFile);
        const response = await fetch(
          "https://kia.apprikart.com/kandid_api/v1/upload_vc_file/",
          {
            method: "POST",
            body: formData,
          }
        );
        // setFileEndPoint("http://kia.apprikart.com" + response.file);
        // sendMessage(fileEndPoint);
        const data = await response.json(); // Parse JSON response
        const endpoint = "https://kia.apprikart.com" + data.file;
        setFileEndPoint(endpoint);
        // Adjust based on actual response structure
        if (typeof endpoint !== "string") {
          console.error("Invalid file endpoint:", endpoint);
          return;
        }
        // sendMessage(endpoint);
      } catch (error) {
        console.error("🚨 Upload failed:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    //   console.log("sendMessage");
    //   const currentDate = new Date().toISOString();
    //   if (text || fileURL) {
    //     handleSendMessage(text);
    //     handleSetMessages({
    //       name: "You",
    //       message: text || fileURL,
    //       date: new Date().toLocaleString(),
    //       type: "text_message",
    //     });
    //     setShowEmojiPicker(false);
    //     setText("");
    //   } else if (files.length > 0) {
    //     console.log("file triggered");

    //     const MAX_FILE_SIZE = 25 * 1024 * 1024;
    //     console.log("Actual file size (bytes):", files[0].size);
    //     if (files[0].size > MAX_FILE_SIZE) {
    //       alert("File size exceeds 25MB limit.");
    //       return;
    //     }
    //     handleFileUpload(files);
    //     // handleSetMessages({
    //     //   name: "You",
    //     //   message: text || fileURL,
    //     //   file_content: files[0],
    //     //   date: new Date().toLocaleString(),
    //     //   type: "file_message",
    //     // });
    //     handleSetMessages({
    //       name: "You",
    //       message: fileURL ? fileURL : text,
    //       date: new Date().toLocaleString(),
    //       type: fileURL ? "file_message" : "text_message",
    //       ...(fileURL && {
    //         fileName: files[0]?.name,
    //         fileSize: files[0]?.size,
    //         fileType: files[0]?.type,
    //       }),
    //     });
    //     // Clear file selection after sending
    //     setFiles([]);
    //     // Reset file input value in case the same file is chosen again
    //     if (inputRef.current) inputRef.current.value = "";
    //   }
    // };

    // const sendMessage = (fileURL = null) => {
    //   if (text || fileURL || files.length > 0) {
    //     const messageData = {
    //       name: "You",
    //       message: fileURL || text,
    //       date: new Date().toLocaleString(),
    //       type: fileURL ? "file_message" : "text_message",
    //     };

    //     if (fileURL) {
    //       messageData.fileName = files[0]?.name;
    //       messageData.fileSize = files[0]?.size;
    //       messageData.fileType = files[0]?.type;
    //     }

    //     handleSendMessage(messageData.message);
    //     handleSetMessages(messageData);

    //     setShowEmojiPicker(false);
    //     setText("");
    //     setFiles([]);
    //     if (inputRef.current) inputRef.current.value = "";
    //   }
    // };
    const sendMessage = (fileURL = null) => {
      if (text || fileEndPoint || fileEndPoint.length > 0) {
        const message = fileEndPoint || text;
        // Ensure message is a string
        if (typeof message !== "string") {
          console.error("Invalid message type:", message);
          return;
        }

        const messageData = {
          name: "You",
          message,
          date: new Date().toLocaleString(),
          type: fileURL ? "file_message" : "text_message",
        };

        if (fileURL) {
          messageData.fileName = files[0]?.name;
          messageData.fileSize = files[0]?.size;
          messageData.fileType = files[0]?.type;
        }

        handleSendMessage(messageData.message);
        handleSetMessages(messageData);
        setFileEndPoint("");
        setShowEmojiPicker(false);
        setText("");
        setFiles([]);
        if (inputRef.current) inputRef.current.value = "";
      }
    };

    // const addEmojiIntoTextBox = (emojiData, event) => {
    //   setText(text + " " + emojiData.emoji);
    // };

    // const handleEmojiPickerDrawer = () => {
    //   setShowEmojiPicker(!showEmojiPicker);
    // };

    const removeSelectedFile = () => {
      setFiles([]);
      if (inputRef.current) inputRef.current.value = "";
    };

    return (
      <MessageInputContainer container>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        >
          {showEmojiPicker ? (
            <EmojiPicker
              onEmojiClick={addEmojiIntoTextBox}
              width="100%"
              height="70vh"
            />
          ) : null}

          {/* File Preview UI */}
          {fileEndPoint.length > 0 && (
            <FilePreviewContainer>
              <Typography variant="body2">{fileEndPoint}</Typography>
              <IconButton size="small" onClick={removeSelectedFile}>
                <ClearIcon fontSize="small" color="black" />
              </IconButton>
            </FilePreviewContainer>
          )}

          <MessageTextField
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {/* Hidden file input for file selection */}
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={inputRef}
                    onChange={uploadFileToAPI}
                    accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  />
                  <IconButton onClick={() => inputRef.current.click()}>
                    {isLoading ? (
                      <CircularProgress size={24} sx={{ color: "#000" }} />
                    ) : (
                      <AttachFileIcon
                        sx={{ color: "#000", cursor: "pointer" }}
                      />
                    )}
                  </IconButton>
                  <IconButton
                    // onClick={sendMessage}
                    onClick={() => sendMessage()}
                    size="medium"
                    edge="end"
                    id="message-send-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                    >
                      <path
                        d="M0 16.177V0.823047C0 0.525274 0.126405 0.297291 0.379214 0.1391C0.632023 -0.0190921 0.898877 -0.0423556 1.17978 0.0693092L19.4944 7.71835C19.8315 7.86723 20 8.12778 20 8.5C20 8.87222 19.8315 9.13277 19.4944 9.28165L1.17978 16.9307C0.898877 17.0424 0.632023 17.0191 0.379214 16.8609C0.126405 16.7027 0 16.4747 0 16.177ZM1.68539 14.837L16.9663 8.5L1.68539 2.07928V6.7692L8.48315 8.5L1.68539 10.175V14.837ZM1.68539 8.5V2.07928V6.7692V10.175V14.837V8.5Z"
                        fill="#000"
                      />
                    </svg>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            placeholder={t("Send a message")}
            variant="outlined"
            id="message-input"
            color="#000"
          />
        </form>
      </MessageInputContainer>
    );
  }
);

export default MessageInput;
