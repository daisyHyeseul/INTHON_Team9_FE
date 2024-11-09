export const formatDate = (date: Date | string) => {
  const fullDate = new Date(date);
  const now = new Date();
  const isSameYear = fullDate.getFullYear() === now.getFullYear();
  const isSameMonth = fullDate.getMonth() === now.getMonth();
  const isSameDay = fullDate.getDate() === now.getDate();
  const timeDiff = now.getTime() - fullDate.getTime();
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

  if (minutesDiff < 60) {
    return `${minutesDiff}분 전`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff}시간 전`;
  } else if (isSameYear) {
    return fullDate.toLocaleDateString("ko-KR", {
      month: "short",
      day: "numeric",
    });
  } else {
    return fullDate.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};
