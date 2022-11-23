import { Backdrop, CircularProgress, Fade, Typography } from "@mui/material";

import * as React from "react";

import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface IModalProps {
  handleClick: () => void;
  open: { isOpen: boolean; id: number };
}

export function ModalBasic({ handleClick, open }: IModalProps) {
  console.log(open.id, "im in the modal");
  // const { data } = useFetchDataByID(open.id);
  // const { data, status } = useQuery(["store"], () => fetchDataById(open.id));
  // console.log(data);
  if (status === "success") {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open.isOpen}
        onClose={handleClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open.isOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {"data.title"}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {"data.description"}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
  } else {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open.isOpen}
        onClose={handleClick}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ cursor: "wait" }}
      >
        <Fade in={open.isOpen}>
          <CircularProgress
            sx={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              fontSize: "2rem",
            }}
          />
        </Fade>
      </Modal>
    );
  }
}
