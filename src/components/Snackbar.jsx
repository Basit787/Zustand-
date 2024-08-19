import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import useSnackbarStore from "../stores/SnackbarStore";

export default function CustomizedSnackbar() {
  const { snackbarData, removeSnackbar } = useSnackbarStore((state) => state);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    removeSnackbar();
  };

  return (
    <Snackbar
      open={snackbarData?.open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarData?.type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbarData?.message}
      </Alert>
    </Snackbar>
  );
}
