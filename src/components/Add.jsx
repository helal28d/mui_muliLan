import {
  Avatar,
  Box,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { EmojiEmotions, Image, VideoCameraBack } from "@mui/icons-material";
function Add() {
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add new post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "Calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={500}
          p={3}
          height={300}
          borderRadius={5}
        >
          <Typography textAlign="center" variant="h6" color="gray">
            Create post
          </Typography>
          <UserBox>
            <Avatar alt="Batool ALi" src={require("../img/profile.jpg")} />
            <Typography variant="h6">Batool Ali</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Write your post"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
          </Stack>
          <Button sx={{ width: "100%" }} variant="contained" color="primary">
            post
          </Button>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
