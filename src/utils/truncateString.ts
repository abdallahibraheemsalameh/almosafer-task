const truncateString = (string: string, maxLength: number = 300): string => {
  if (string.length <= maxLength) return string;
  const truncated = string.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (
    (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "..."
  );
};
export { truncateString };
