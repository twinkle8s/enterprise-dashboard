import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface DataState {
  totalOrders: number;
  unresolvedOrders: number;
  automationRate: number;
}

const initialState: DataState = {
  totalOrders: 421,
  unresolvedOrders: 3,
  automationRate: 94.2,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    simulateLiveUpdate: (state, action: PayloadAction<number>) => {
      // Increment total orders
      state.totalOrders += 1;
      // Random change between -0.05 and 0.05
      const change = (action.payload - 0.5) * 0.1;
      // Ensure the new rate stays within 93.5% to 95.5%
      const nextRate = state.automationRate + change;
      state.automationRate = Math.min(Math.max(nextRate, 93.5), 95.5);
    },
  },
});

export const { simulateLiveUpdate } = dataSlice.actions;

export default dataSlice.reducer;
