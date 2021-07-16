import React from "react";
import Header from "../src/Components/Header/Header";
import { Provider } from "react-redux";
import store from "../src/Store/Store";
import ReactDOM from "react-dom";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "",
    search: "",
    hash: "",
    state: null,
    key: "5nvxpbdafa",
  }),
  useHistory: jest.fn(),
}));

describe("checked routs", () => {
  const handleClick = jest.fn;
  const baseLink = "http://localhost:3000";
  const history = jest.fn;
  let container: HTMLDivElement;
  // eslint-disable-next-line prefer-const
  container = document.createElement("div");
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  test("check id", () => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Provider store={store}>
        <Header />
      </Provider>,
      container
    );
    const links = container.querySelectorAll("li");
    console.log(links[0].click());
    expect(links[0].id).toBe("");
    expect(links[1].id).toBe("today");
    expect(links[2].id).toBe("tomorrow");
    expect(links[3].id).toBe("week");
  });
});
