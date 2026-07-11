import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type UserRole = "admin" | "user" | "guest";

export interface AuthState {
  currentRole: UserRole;
}

const initialState: AuthState = {
  currentRole: "user",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.currentRole = action.payload;
    },
  },
});

export const { setRole } = authSlice.actions;

export default authSlice.reducer;
