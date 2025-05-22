import React, { useState } from "react";
import { Grid, IconButton, InputAdornment, TextField, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmojiPicker, { Emoji, EmojiStyle } from 'emoji-picker-react';
import { useTranslation } from "react-i18next";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ClearIcon from '@mui/icons-material/Clear';

const MessageInputContainer = styled(Grid)(({ theme }) => ({
  padding: "16px 16px 8px 16px",
  background: theme.palette.themeColor?.[70],
  [theme.breakpoints.down('sm')]: {
    width: '100%',
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const MessageInput = React.memo(({ handleSendMessage, handleSetMessages, handleFileUpload }) => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const inputRef = React.useRef(null);
  const [files, setFiles] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const sendMessage = () => {
    console.log("sendMessage");
    if (text) {
      handleSendMessage(text);
      handleSetMessages({
        name: "You",
        message: text,
        date: new Date().toString(),
        type: "text_message"
      });
      setShowEmojiPicker(false);
      setText("");
    } else if (files.length > 0) {
      console.log("file triggered");
      handleFileUpload(files);
      handleSetMessages({
        name: "You",
        message: files[0].name,
        file_content: files[0],
        date: new Date().toString(),
        type: "file_message"
      });
      // Clear file selection after sending
      setFiles([]);
      // Reset file input value in case the same file is chosen again
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const addEmojiIntoTextBox = (emojiData, event) => {
    setText(text + " " + emojiData.emoji);
  };

  const handleEmojiPickerDrawer = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

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
          <EmojiPicker onEmojiClick={addEmojiIntoTextBox} width="100%" height="70vh" />
        ) : null}

        {/* File Preview UI */}
        {files.length > 0 && (
          <FilePreviewContainer>
            <Typography variant="body2">
              {files[0].name}
            </Typography>
            <IconButton size="small" onClick={removeSelectedFile}>
              <ClearIcon fontSize="small" />
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
                  onChange={(e) => setFiles(e.target.files)}
                  accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                />
                <IconButton onClick={() => inputRef.current.click()}>
                  <AttachFileIcon sx={{ color: "#000", cursor: "pointer" }} />
                </IconButton>
                <IconButton onClick={sendMessage} size="medium" edge="end" id="message-send-button">
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
});

export default MessageInput;