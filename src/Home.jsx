import React from "react";
import useUserStore from "./stores/UserStore";
import { Box, Button, Card } from "@mui/material";
import useSnackbarStore, { SnackbarType } from "./stores/SnackbarStore";
import useDialogStore, { ActionType } from "./stores/DialogboxStore";

const Home = () => {
  const user = useUserStore((state) => state);
  const { openDialog } = useDialogStore((state) => state);
  const { createSnackbar } = useSnackbarStore((state) => state);

  const { name, age } = user?.user;

  const handleClick = () => {
    openDialog({
      title: "Confirm Logout",
      message: "Do you really want to logout",
      action: (actionType) => {
        if (actionType === ActionType.positive) {
          user.logout();
          createSnackbar({
            message: "Logout Successfull !!!",
            type: SnackbarType.success,
          });
        }
        if (actionType === ActionType.negative) {
          createSnackbar({
            message: "Failed to logout !!!",
            type: SnackbarType.error,
          });
        }
      },
    });
  };

  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Card className="flex flex-col justify-center items-center p-14">
        <h3>{name}</h3>
        <h3>{age}</h3>
        <Button
          variant="contained"
          onClick={handleClick}
          className="bg-red-600 hover:bg-red-700"
        >
          Logout
        </Button>
      </Card>
    </Box>
  );
};

export default Home;
