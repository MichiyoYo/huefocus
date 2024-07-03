export const timePad = (time: number) => {
  const timeString = time.toString();
  return timeString.length < 2 ? timeString.padStart(2, '0') : timeString;
};
