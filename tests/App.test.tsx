import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

configure({ adapter: new Adapter() });

describe(">>>APP --- Snapshot", () => {
  test(" Snapshot of App", () => {
    const wrap = shallow(
        <Provider store={store}>
          <App />
        </Provider>
    );
    console.log("wdadwa", wrap);
    expect(wrap.find(".root-wrap")).toHaveLength(0);
  });
});