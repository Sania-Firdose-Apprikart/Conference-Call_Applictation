import React, { useMemo, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { urlify } from 'utils';
import { styled, useTheme } from '@mui/material/styles';

const HyperTypography = styled(Typography)(({ theme }) => ({
  '& a': {
    // color: "#000",
  },
}));

function MessageCard(props) {
  const theme = useTheme();
  const { m } = props;
    console.log("MessageCard", m);
    
  // Check if the message represents a file upload
  const isFileMessage = m?.eventType === "FILE_RECEIVED";

  // Compute a download URL for file messages from the Base64 content.
  // const downloadUrl = useMemo(() => {
  //   if (!isFileMessage) return null;
  //   try {
  //     // Decode the Base64 fileContent string.
  //     const byteCharacters = atob(m.fileContent);
  //     const byteNumbers = new Array(byteCharacters.length);
  //     for (let i = 0; i < byteCharacters.length; i++) {
  //       byteNumbers[i] = byteCharacters.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);
  //     // Create a Blob using the file type.
  //     const blob = new Blob([byteArray], { type: m.fileType });
  //     // Generate an object URL for the blob.
  //     return URL.createObjectURL(blob);
  //   } catch (error) {
  //     console.error('Error generating file blob:', error);
  //     return null;
  //   }
  // }, [isFileMessage, m.fileContent, m.fileType]);
  const downloadUrl = useMemo(() => {
    if (!isFileMessage) return null;
    try {
      // Construct the Data URL
      return `data:${m.fileType};base64,${m.fileContent}`;
    } catch (error) {
      console.error('Error generating file download URL:', error);
      return null;
    }
  }, [isFileMessage, m.fileContent, m.fileType]);

  // Cleanup: Revoke the object URL when the component unmounts.
  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  return (
    <Grid container sx={{ mb: 3 }} justifyContent={props?.isMe ? 'flex-end' : 'flex-start'}>
      <Grid container alignItems="center" justifyContent={props?.isMe ? 'flex-end' : 'flex-start'}>
        <Typography variant="body1" color={theme.palette.chatText} style={{ fontSize: 14 }}>
          {props?.name}{'  '}
        </Typography>
        <Typography variant="body2" color={theme.palette.grey} sx={{ ml: 1 }} style={{ fontSize: 12 }}>
          {props?.date}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        {isFileMessage ? (
          <HyperTypography
            variant="body1"
            fontSize={14}
            color={theme.palette.chatText}
            align={props?.isMe ? 'right' : 'left'}
            fontWeight={400}
            lineHeight={1.4}
          >
            {/* Render a download link for the file */}
            <a href={downloadUrl} download={m.fileName}
            style={{color: "red", textDecoration:'none'}}
            >
              {m.fileName}
            </a>
            <Typography variant="caption" display="block" color={theme.palette.grey}>
              {`Size: ${(m.fileSize / 1024).toFixed(2)} KB`}
            </Typography>
          </HyperTypography>
        ) : (
          <HyperTypography
            variant="body1"
            fontSize={14}
            style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
            color={theme.palette.chatText}
            align={props?.isMe ? 'right' : 'left'}
            fontWeight={400}
            lineHeight={1.4}
            id="message"
          >
            {urlify(props?.message)}
          </HyperTypography>
        )}
      </Grid>
    </Grid>
  );
}

export default MessageCard;