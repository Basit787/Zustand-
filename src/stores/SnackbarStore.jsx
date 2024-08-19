import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const SnackbarStore = (set) => ({
  snackbarData: {
    open: false,
    message: "",
    type: "",
  },
  createSnackbar: (data) => {
    set(() => ({
      snackbarData: { open: true, ...data },
    }));
  },
  removeSnackbar: () => {
    set(() => ({
      snackbarData: "",
    }));
  },
});

export const SnackbarType = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};

const useSnackbarStore = create(devtools(SnackbarStore, { name: "snackbar" }));

export default useSnackbarStore;
