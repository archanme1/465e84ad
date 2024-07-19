//  Converts and return an apiDate to a formatted time string.
export const dateConverter = (apiDate) => {
  const date = new Date(apiDate);

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return time;
};
