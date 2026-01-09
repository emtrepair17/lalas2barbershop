import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

export const EmailTemp = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z5uguoj", "template_cpl4izi", form.current, {
        publicKey: "AyrqDRWina0UGC_QP",
      })
      .then(
        () => {
          setSuccess("Email sent successfully!");
        },
        (error) => {
          setSuccess(`Failed to send email: ${error.text}`);
        }
      );
  };

  return (
    <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
    <Typography variant="h5" gutterBottom>
      Contact Us
    </Typography>
    {success && <Alert severity={success.includes("Failed") ? "error" : "success"}>{success}</Alert>}
    <TextField fullWidth label="Name" name="user_name" margin="normal" required />
    <TextField fullWidth label="Email" name="user_email" type="email" margin="normal" required />
    <TextField fullWidth label="Message" name="message" multiline rows={4} margin="normal" required />
    <Button type="submit" variant="contained"  fullWidth sx={{ mt: 2, backgroundColor:"#000000" }}>
      Send
    </Button>
  </Box>
  );
};

export default EmailTemp;