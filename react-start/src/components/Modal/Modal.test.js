import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Modal from "./Modal";

const mockStore = configureStore();

describe("<Modal/>", () => {
  it("should render <Modal/>", () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  it("should contains class modal-wrapper", () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    const element = screen.getByTestId("modal-wrapper");
    expect(element.classList).toContain("wrapper");
  });

  it("should render with some text", () => {
    const text = "Text for testing";
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <Modal />
        {text}
      </Provider>
    );
    getByText(text);
  });
});
