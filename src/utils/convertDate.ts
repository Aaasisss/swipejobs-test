import dayjs from "dayjs";

export const convert_shift_start_date = (date: string) => {
  const convertedDate = dayjs(date).format("MMM D, ddd, h:mm a").toUpperCase();
  return convertedDate;
};

export const convert_shift_end_date = (date: string) => {
  const convertedDate = dayjs(date).format("h:mm A Z");
  return convertedDate;
};
