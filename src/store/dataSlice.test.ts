import dataReducer, { simulateLiveUpdate } from "./dataSlice";

describe("dataSlice reducer", () => {
  it("should increment totalOrders and apply random variance to automationRate", () => {
    // 1. Arrange: Set up the initial state
    const initialState = {
      totalOrders: 421,
      unresolvedOrders: 3,
      automationRate: 94.2,
      orderHistory: [421, 423, 419, 422, 420, 421],
      isExecuting: false,
      executionStatusMessage: null,
    };

    // 2. Act: Dispatch the simulateLiveUpdate action with a specific payload
    const action = simulateLiveUpdate(0.8);
    const nextState = dataReducer(initialState, action);

    // 3. Assert: Check that the state has been updated correctly
    // Check that totalOrders has been incremented by a random variance between -2 and +2
    expect(nextState.totalOrders).toBeGreaterThanOrEqual(
      initialState.totalOrders - 2,
    );
    expect(nextState.totalOrders).toBeLessThanOrEqual(
      initialState.totalOrders + 2,
    );

    // change = (0.8 - 0.5) * 0.1 = 0.03
    // nextRate = 94.2 + 0.03 = 94.23
    expect(nextState.automationRate).toBeCloseTo(94.23, 2);
    // Check that automationRate is within the expected range
    expect(nextState.automationRate).toBeGreaterThanOrEqual(93.5);
    expect(nextState.automationRate).toBeLessThanOrEqual(95.5);
  });
});
