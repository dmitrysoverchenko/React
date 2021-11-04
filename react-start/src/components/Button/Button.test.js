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

//   it("should be clicked", () => {
//     const handleClick = jest.fn();
//     const store = mockStore({});
//     render(
//       <Provider store={store}>
//         <Button type="button" onClick={handleClick} />
//       </Provider>
//     );
//     const element = screen.getByRole("button");
//     fireEvent.click(element);
//     expect(handleClick).toHaveBeenCalled();
//   });
});
