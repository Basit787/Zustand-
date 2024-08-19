import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useDialogStore, { ActionType } from "../stores/DialogboxStore";

export default function ResponsiveDialog() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { dialogData, closeDialog } = useDialogStore((state) => state);

  const handleClose = () => {
    closeDialog();
  };

  const handlePositiveAction = () => {
    if (dialogData.action) {
      dialogData.action(ActionType.positive);
    }
    closeDialog();
  };

  const handleNegativeAction = () => {
    if (dialogData.action) {
      dialogData.action(ActionType.negative);
    }
    closeDialog();
  };
  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialogData?.open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {dialogData?.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogData?.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleNegativeAction}
          color="error"
          variant="contained"
        >
          Disagree
        </Button>
        <Button onClick={handlePositiveAction} autoFocus variant="contained">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
