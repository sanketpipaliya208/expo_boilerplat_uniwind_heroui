import { create } from "zustand";

type AuthProviderActions = {
  isLogin: boolean;
  signIn: () => void;
  signOut: () => void;
};

const useAuthManage = create<AuthProviderActions>((set) => ({
  isLogin: false,
  signIn: () => set({ isLogin: true }),
  signOut: () => set({ isLogin: false }),
}));

export default useAuthManage;
