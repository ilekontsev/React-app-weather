import React from "react";
import Header from "../../src/Components/Header/Header";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import store from "../../src/Store/Store";
import { BrowserRouter } from "react-router-dom";

describe("tests header", () => {
  test("tests route", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText(/Today/i));
    expect(screen.getByText(/Today/i)).toHaveClass("borderItem");
    fireEvent.click(screen.getByText(/Tomorrow/i));
    expect(screen.getByText(/Tomorrow/i)).toHaveClass("borderItem");
    fireEvent.click(screen.getByText(/week/i));
    expect(screen.getByText(/week/i)).toHaveClass("borderItem");
  });
});
