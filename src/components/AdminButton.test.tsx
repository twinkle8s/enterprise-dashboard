import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer, { type UserRole } from "../store/authSlice";
import dataReducer from "../store/dataSlice";
import MyDashboard from "../MyDashboard";

describe("Force Execute Button Role Control", () => {
  it("should be ENABLED when the state role is Admin", () => {
    // Arrange: Set up a Redux store with the current role as Admin
    const store = configureStore({
      reducer: {
        auth: authReducer,
        data: dataReducer,
      },
      preloadedState: {
        auth: {
          currentRole: "admin" as UserRole,
        },
        data: {
          totalOrders: 421,
          unresolvedOrders: 3,
          automationRate: 94.2,
        },
      },
    });
    render(
      <Provider store={store}>
        <MyDashboard />
      </Provider>,
    );

    // Act: Find the "Force Execute Auto Confirmation" button
    const adminButton = screen.getByRole("button", {
      name: /Force Execute Auto Confirmation/i,
    });

    // Assert: The button should be enabled for Admin role
    expect(adminButton).toBeInTheDocument();
    expect(adminButton).not.toBeDisabled();
  });

  it("should be DISABLED when the state role is User", () => {
    // Arrange: Set up a Redux store with the current role as User
    const store = configureStore({
      reducer: {
        auth: authReducer,
        data: dataReducer,
      },
      preloadedState: {
        auth: {
          currentRole: "user" as UserRole,
        },
        data: {
          totalOrders: 421,
          unresolvedOrders: 3,
          automationRate: 94.2,
        },
      },
    });
    render(
      <Provider store={store}>
        <MyDashboard />
      </Provider>,
    );

    // Act: Find the "Action Locked" button
    const adminButton = screen.getByRole("button", {
      name: /Action Locked/i,
    });

    // Assert: The button should be disabled for User role
    expect(adminButton).toBeInTheDocument();
    expect(adminButton).toBeDisabled();
  });
});
