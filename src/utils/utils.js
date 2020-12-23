export const timeConvert = (n) => {
  const num = Math.round(n * 60);
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours > 0 ? `${rhours}h` : ''} ${rminutes} m`;
};

export default timeConvert;
