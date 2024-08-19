import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const UserStore = (set) => ({
  user: {},
  login: (data) => {
    set(() => ({
      user: { ...data },
    }));
  },
  logout: () => {
    set(() => ({
      user: "",
    }));
  },
});

const useUserStore = create(devtools(persist(UserStore, { name: "user" })));

export default useUserStore;
