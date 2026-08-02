import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface DataState {
  totalOrders: number;
  unresolvedOrders: number;
  automationRate: number;
  orderHistory: number[];

  isExecuting: boolean;
  executionStatusMessage: string | null;
}

const initialState: DataState = {
  totalOrders: 421,
  unresolvedOrders: 3,
  automationRate: 94.2,
  orderHistory: [421, 423, 419, 422, 420, 421],
  isExecuting: false,
  executionStatusMessage: null,
};

export const forceExecuteOrder = createAsyncThunk(
  "data/forceExecuteOrder",
  async () => {
    // Simulate a delay to mimic an API call or some processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return "Auto confirmation executed successfully!";
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    simulateLiveUpdate: (state, action: PayloadAction<number>) => {
      // action.payload is a random number between 0 and 1

      // Simulate total orders with some random variance
      const variance = Math.floor(action.payload * 5) - 2; // Random variance between -2 and +2
      state.totalOrders += variance;
      state.orderHistory.push(state.totalOrders);
      if (state.orderHistory.length > 6) {
        state.orderHistory.shift();
      }

      // Simulate automation rate with a small random change
      const change = (action.payload - 0.5) * 0.1; // Random change between -0.05 and 0.05
      const nextRate = state.automationRate + change;
      state.automationRate = Math.min(Math.max(nextRate, 93.5), 95.5); // Ensure the new rate stays within 93.5% to 95.5%
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forceExecuteOrder.pending, (state) => {
        state.isExecuting = true;
        state.executionStatusMessage = null;
      })
      .addCase(forceExecuteOrder.fulfilled, (state, action) => {
        // action.payload contains the success message from the async thunk
        state.isExecuting = false;
        state.executionStatusMessage = action.payload;
        state.unresolvedOrders -= 1;
        state.totalOrders += 1;
      });
  },
});

export const { simulateLiveUpdate } = dataSlice.actions;

export default dataSlice.reducer;
