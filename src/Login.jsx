import React from "react";
import useUserStore from "./stores/UserStore";
import { Box, Button, Card } from "@mui/material";
import useSnackbarStore, { SnackbarType } from "./stores/SnackbarStore";

const Login = () => {
  const user = useUserStore((state) => state.login);
  const { createSnackbar } = useSnackbarStore((state) => state);

  const handleClick = () => {
    user({
      name: "Abdul-Basit",
      age: 12,
    });
    createSnackbar({
      message: "Login Successfull",
      type: SnackbarType.success,
    });
  };
  return (
    <Box className="flex justify-center items-center min-h-screen">
      <Card className="flex flex-col justify-center items-center p-5">
        <h1>Login using Zustand</h1>
        <Button
          onClick={handleClick}
          variant="contained"
          className="bg-sky-600 hover:bg-sky-700"
        >
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
