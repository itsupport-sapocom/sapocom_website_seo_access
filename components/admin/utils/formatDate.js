export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export const parseDate = (formattedDateString) => {
  // Convert the formatted string to a Date object
  const dateObject = new Date(formattedDateString);

  // Extract the year, month, and day
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Months are zero-based
  const day = dateObject.getDate();

  // Format the date components as a string
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
};
