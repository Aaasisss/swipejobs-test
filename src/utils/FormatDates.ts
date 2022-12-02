const moment = require("moment-timezone");

const timeFormat = {
  start: "MMM D, ddd h:mm A",
  end: "h:mmA z",
};

export const formatShiftStartDate = (date: string, zone: string) =>
  moment(new Date(date)).tz(zone).format(timeFormat.start).toUpperCase();

export const formatShiftEndDate = (date: string, zone: string) =>
  moment(new Date(date)).tz(zone).format(timeFormat.end);
