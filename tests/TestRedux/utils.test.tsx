import React from "react";
import { getDate, getMonthYear, getWeekDay } from "../../src/utils/utils";

const date = new Date();
describe("test utils", () => {
  test("test write date day ", () => {
    const checkDate = getWeekDay(date);
    expect(checkDate).toBe("Wednesday");
  });
  test("test write month", () => {
    const checkDate = getMonthYear(date);
    expect(checkDate).toBe("July");
  });
  test("test myDate", () => {
    const itemDate = [{ dt: 1626879600 }];
    const checkDate = getDate(itemDate, date);
    expect(checkDate).toEqual([
      {
        dt: 1626879600,
        myTime: "18:00",
        myMonth: "July",
        myNumber: 21,
        myDay: "",
      },
    ]);
  });
});
