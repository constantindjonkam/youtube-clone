export default function formatNumber(number) {
  if (number >= 1000000000)
    return (number / 1000000000).toFixed(2).toString() + "B";
  if (number >= 1000000) return (number / 1000000).toFixed(2).toString() + "M";
  if (number >= 1000) return Math.floor(number / 1000).toString() + "K";
  return number;
}
