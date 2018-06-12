export function addLeadingZero(number) {
  return number >= 10 ? String(number) : `0${number}`;
}

export function formatDuration(duration) {
  const hours = Math.floor(duration / 3600);
  const hoursToSeconds = hours * 3600;
  const formattedHours = addLeadingZero(hours);

  const minutes = Math.floor((duration - hoursToSeconds) / 60);
  const minutesToSeconds = minutes * 60;
  const formattedMinutes = addLeadingZero(minutes);

  const seconds = duration - hoursToSeconds - minutesToSeconds;
  const formattedSeconds = addLeadingZero(seconds);

  if (hours) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  return `${formattedMinutes}:${formattedSeconds}`;
}
