import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const DialogStore = (set) => ({
  dialogData: {},
  openDialog: (data) => {
    set(() => ({
      dialogData: { open: true, ...data },
    }));
  },
  closeDialog: (data) => {
    set(() => ({
      dialogData: "",
    }));
  },
});

export const ActionType = {
  positive: "positive",
  negative: "negative",
};

const useDialogStore = create(devtools(DialogStore, { name: "dialog" }));
export default useDialogStore;

// this is for initial testup commit