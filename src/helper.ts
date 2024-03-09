/**
 * The function getCurrentDateTime returns the current date and time in a formatted string.
 * @returns The function getCurrentDateTime() returns the current date and time in the format of
 * "MM/DD/YYYY HH:MM:SS AM/PM".
 */
export function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleDateString() + " " + now.toLocaleTimeString();
}
