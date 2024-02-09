export const getTime = (date: Date) => {
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const time = `${hours}:${minutes}`;

  return time;
}