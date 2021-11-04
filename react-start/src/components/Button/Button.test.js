import React from "react";
import Button from "./Button";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("<Button/>", () => {
  it("should render", () => {
    const store = mockStore({});
    const { getByRole } = render(
      <Provider store={store}>
        <Button />
      </Provider>
    );
    getByRole("button");
  });

  it("should made snapshot", () => {
    const store = mockStore({});
    const { getByRole } = render(
      <Provider store={store}>
        <Button />
      </Provider>
    );
    getByRole("button");
    const element = getByRole("button");
    expect(element).toMatchSnapshot();
  });
});
