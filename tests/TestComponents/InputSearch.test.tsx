import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputSearch from "../../src/Components/InputSearch/InputSearch";
import { Provider } from "react-redux";
import store from "../../src/Store/Store";
import { actionSearchOfferVariant } from "../../src/Store/Action";

describe("tests input", () => {
  test("tests 1 change input ", () => {
    render(
      <Provider store={store}>
        <InputSearch />
      </Provider>
    );
    fireEvent.change(screen.getByPlaceholderText(/find/i), {
      target: { value: "tests 1" },
    });
    expect(screen.queryByDisplayValue(/tests 1/i)).toBeInTheDocument();
  });
  test("tests 2 click element variants", () => {
    store.dispatch(
      actionSearchOfferVariant([{ place_name: "london", center: ["23", "32"] }])
    );
    render(
      <Provider store={store}>
        <InputSearch />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("block-tests"));
  });
});
