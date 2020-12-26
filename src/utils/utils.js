export const timeConvert = (n) => {
  const num = Math.round(n * 60);
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours > 0 ? `${rhours}h` : ''} ${rminutes} m`;
};
export const youTubeGetID = (url) => {
  const match = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return match[2] !== undefined ? match[2].split(/[^0-9a-z_-]/i)[0] : match[0];
};

export const checkTypeVideo = (url) => {
  if (url === null) return 0;
  if (url.includes('youtube')) return 0;
  return 1;
};

export default timeConvert;
