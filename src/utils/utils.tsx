function getWeekDay(date: any) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}
function getMonthYear(date: any) {
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return Month[date.getMonth()];
}
// функция для получения времени, месяца, числа, дня && расширяет обьект
const getDate = (data: object[], dayDate: any, day: string = "") => {
  // eslint-disable-next-line array-callback-return
  return data.filter((item: any) => {
    const dateItem = new Date(item.dt * 1000);
    if (dayDate.getDate() === dateItem.getDate()) {
      item.myTime = String(dateItem).substr(16, 5);
      item.myMonth = getMonthYear(dateItem);
      item.myNumber = dateItem.getDate();
      item.myDay = day;
      return item;
    }
  });
};
export { getWeekDay, getMonthYear, getDate };
