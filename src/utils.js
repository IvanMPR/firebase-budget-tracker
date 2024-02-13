export function convertToMilliseconds(dateString) {
  // Split the date and time parts
  const [datePart, timePart] = dateString.split(", ");

  // Split the date into month, day, and year
  const [month, day, year] = datePart.split("/");

  // Convert the year to 4 digits
  const fullYear = "20" + year;

  // Combine the date and time parts into a new date string
  const newDateString = `${month}/${day}/${fullYear}, ${timePart}`;

  // Parse the new date string and return the result
  return Date.parse(newDateString);
}

export function roundNumber(num) {
  return Number.isInteger(num) ? num : Number(num.toFixed(2));
}
