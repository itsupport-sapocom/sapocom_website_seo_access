export const convertTo12HourFormat = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  let formattedHours = parseInt(hours, 10);
  const ampm = formattedHours >= 12 ? "PM" : "AM";
  formattedHours = formattedHours % 12;
  formattedHours = formattedHours || 12;
  const formattedTime = `${formattedHours}:${minutes} ${ampm}`;
  return formattedTime;
};

export const convertTo24HourFormat = (timeString) => {
  const [time, period] = timeString.split(" ");
  const [hours, minutes] = time.split(":");
  let formattedHours = parseInt(hours, 10);
  if (period === "PM" && formattedHours < 12) {
    formattedHours += 12;
  } else if (period === "AM" && formattedHours === 12) {
    formattedHours = 0;
  }
  const formattedTime = `${formattedHours
    .toString()
    .padStart(2, "0")}:${minutes}`;

  return formattedTime;
};
